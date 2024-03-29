import React, {
  type ReactNode,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { BehaviorSubject, Subject } from "rxjs";
import { map, mergeMap, throttleTime } from "rxjs/operators";
import { Img } from "../Gallery";
import { Spinner } from "../Spinner";
import cx from "classnames";
import styles from "./styles.module.scss";

function Loader() {
  return (
    <div className={styles.Loader}>
      <Spinner />
    </div>
  );
}

export function Perspective({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const bounding$ = useMemo(() => new BehaviorSubject(false), []);
  const position$ = useMemo(() => new Subject<[number, number]>(), []);

  // https://css-tricks.com/animate-a-container-on-mouse-over-using-perspective-and-transform/
  // https://armandocanals.com/posts/CSS-transform-rotating-a-3D-object-perspective-based-on-mouse-position.html
  useEffect(() => {
    const constrain = 40;

    function transforms(x: number, y: number, el: HTMLElement) {
      const inner = el.getBoundingClientRect();
      const calcX = -(y - inner.y - inner.height / 2) / constrain;
      const calcY = (x - inner.x - inner.width / 2) / constrain;

      return `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
    }

    const subscription = position$
      .pipe(
        throttleTime(200, undefined, { leading: true, trailing: true }),
        mergeMap(([clientX, clientY]) =>
          bounding$.pipe(map((over) => [clientX, clientY, over]))
        )
      )
      .subscribe(([clientX, clientY, over]) => {
        console.log(["subscribe"], { clientX, clientY, over });
        if (innerRef.current) {
          innerRef.current.style.transform = over
            ? transforms.apply(null, [
                clientX as number,
                clientY as number,
                innerRef.current,
              ])
            : "";
        }
      });

    return () => subscription.unsubscribe();
  }, [position$]);

  useEffect(() => {
    const handleMouseEnter = () => bounding$.next(true);

    const handleMouseLeave = () => bounding$.next(false);

    const handleMouseMove = ({ clientX, clientY }: MouseEvent) =>
      window.requestAnimationFrame(() => position$.next([clientX, clientY]));

    if (containerRef.current) {
      containerRef.current.addEventListener("mouseenter", handleMouseEnter);
      containerRef.current.addEventListener("mouseleave", handleMouseLeave);
      containerRef.current.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener(
          "mouseenter",
          handleMouseEnter
        );
        containerRef.current.removeEventListener(
          "mouseleave",
          handleMouseLeave
        );
        containerRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [containerRef, innerRef]);

  return (
    <div ref={containerRef} className={cx(styles.Perspective, className)}>
      <div ref={innerRef} className={styles.Inner}>
        {children}
      </div>
    </div>
  );
}

export function Image({ className, src }: { className?: string; src: string }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleObserve: IntersectionObserverCallback = ([
      { isIntersecting },
    ]) => {
      if (isIntersecting) {
        setInView(true);
      }
    };
    if (ref.current instanceof HTMLElement) {
      const observer = new IntersectionObserver(handleObserve, {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      });
      observer.observe(ref.current);
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [ref]);

  return (
    <div ref={ref} className={cx(className, styles.Image)}>
      {inView && (
        <Suspense fallback={<Loader />}>
          <Img src={src} />
        </Suspense>
      )}
    </div>
  );
}
