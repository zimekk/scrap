import React, { ReactNode, Suspense, useEffect, useRef, useState } from "react";
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
  const activeRef = useRef<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let constrain = 20;

    function transforms(x: number, y: number, el: HTMLElement) {
      let inner = el.getBoundingClientRect();
      let calcX = -(y - inner.y - inner.height / 2) / constrain;
      let calcY = (x - inner.x - inner.width / 2) / constrain;

      return `perspective(100px) rotateX(${calcX}deg) rotateY(${calcY}deg)`;
    }

    const handleMouseEnter = () => {
      activeRef.current = true;
      if (innerRef.current) {
        innerRef.current.style.transform = "";
      }
    };

    const handleMouseLeave = () => {
      activeRef.current = false;
      if (innerRef.current) {
        innerRef.current.style.transform = "";
      }
    };

    const handleMouseMove = ({ clientX, clientY }: MouseEvent) =>
      window.requestAnimationFrame(() => {
        if (activeRef.current && innerRef.current) {
          innerRef.current.style.transform = transforms.apply(null, [
            clientX,
            clientY,
            innerRef.current,
          ]);
        }
      });

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
  }, [activeRef, containerRef, innerRef]);

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
