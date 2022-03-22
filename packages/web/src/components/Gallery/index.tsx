import React, {
  ReactChild,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Subject } from "rxjs";
import { debounceTime, distinctUntilChanged, map } from "rxjs/operators";
import { createAsset } from "use-asset";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { Spinner } from "../Spinner";
import cx from "classnames";
import styles from "./styles.module.scss";

const imgSrcFallback = () =>
  (({ icon: [w, h, , , d] }) =>
    `data:image/svg+xml;utf8,<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="crosshairs" class="svg-inline--fa fa-crosshairs fa-w-16 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"><path fill="currentColor" d="${d}"></path></svg>`)(
    faImage
  );

const image = createAsset(
  async (src): Promise<string> =>
    new Promise((resolve) => {
      const img = new Image();
      Object.assign(img, {
        onload: () => resolve(src),
        onerror: () => resolve(imgSrcFallback()),
        src,
      });
    })
);

function Img({ src, ...props }: { src: string }) {
  const img = image.read(src);
  return <img src={img} {...props} referrerPolicy="no-referrer" />;
}

function Loader() {
  return (
    <div className={styles.Loader}>
      <Spinner />
    </div>
  );
}

function ImgWrapper({ ...props }: { src: string; alt?: string }) {
  return (
    <div className={styles.ImgWrapper}>
      <Suspense fallback={<Loader />}>
        <Img {...props} />
      </Suspense>
    </div>
  );
}

export function Gallery({
  className,
  images,
}: {
  className: string;
  images: string[];
}) {
  const [inView, setInView] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<{
    scale: number;
    translateX?: number;
    translateY?: number;
  }>({
    scale: 0,
  });

  const scroll$ = useMemo(() => new Subject<any>(), []);

  useEffect(() => {
    const subscription = scroll$
      .pipe(debounceTime(400))
      .subscribe(({ scrollLeft, scrollWidth, offsetWidth }) => {
        if (scrollLeft >= scrollWidth - offsetWidth) {
          setIsMore(true);
        }
      });
    return () => subscription.unsubscribe();
  }, [scroll$]);

  const toggleZoom = useCallback(
    (e) => (
      e.stopPropagation(),
      setState((state) => {
        if (ref.current) {
          const { x, y, width, height } = ref.current.getBoundingClientRect();
          const { innerWidth, innerHeight } = window;
          const scale = (innerWidth / width) * 1.0;

          return state.scale
            ? {
                scale: 0,
              }
            : {
                scale,
                translateX: ((innerWidth - width) / 2 - x) / scale,
                translateY: ((innerHeight - height) / 2 - y) / scale,
              };
        }
        return state;
      })
    ),
    [ref]
  );

  useEffect(() => {
    const handleObserve: IntersectionObserverCallback = ([
      { isIntersecting },
    ]) => {
      if (isIntersecting) {
        setInView(true);
      }
    };
    const handleScroll = ({ target }: any) => scroll$.next(target);

    if (ref.current instanceof HTMLElement) {
      const observer = new IntersectionObserver(handleObserve, {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
      });
      observer.observe(ref.current);
      ref.current.addEventListener("scroll", handleScroll);
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
          ref.current.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, [ref]);

  return images.length ? (
    <div
      ref={ref}
      className={cx(className, styles.Gallery)}
      style={
        state.scale
          ? {
              cursor: "zoom-out",
              transform: `scale(${state.scale}) translate(${state.translateX}px, ${state.translateY}px)`,
              zIndex: 1,
            }
          : {
              cursor: "zoom-in",
            }
      }
      onClick={toggleZoom}
    >
      {inView &&
        images
          .slice(0, isMore ? images.length : 3)
          .map((image, index) => (
            <ImgWrapper key={index} src={image} alt={`Image #${index + 1}`} />
          ))}
    </div>
  ) : null;
}
