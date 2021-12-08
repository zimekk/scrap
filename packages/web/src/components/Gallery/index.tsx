import React, { Suspense, useEffect, useRef, useState } from "react";
import { createAsset } from "use-asset";
import { Spinner } from "../Spinner";
import cx from "classnames";
import styles from "./styles.module.scss";

const image = createAsset(async (src) => {
  return new Promise((onload) => {
    const img = new Image();
    Object.assign(img, {
      onload,
      src,
    });
  });
});

function Img({ src, ...props }: { src: string }) {
  image.read(src);

  return <img src={src} {...props} referrerPolicy="no-referrer" />;
}

function Loader() {
  return (
    <div className={styles.Loader}>
      <Spinner />
    </div>
  );
}

function ImgWrapper({ ...props }: { src: string }) {
  return (
    <div className={styles.ImgWrapper}>
      <Suspense fallback={<Loader />}>
        <Img {...props} />
      </Suspense>
    </div>
  );
}

export function Gallery({ className, images }: any) {
  const [inView, setInView] = useState(false);
  const [isMore, setIsMore] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleObserve = ([{ isIntersecting }]) => {
      if (isIntersecting) {
        setInView(true);
      }
    };
    const handleScroll = ({
      target: { scrollLeft, scrollWidth, offsetWidth },
    }) => {
      if (scrollLeft === scrollWidth - offsetWidth) {
        setIsMore(true);
      }
    };
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
    <div ref={ref} className={cx(className, styles.Gallery)}>
      {inView &&
        images
          .slice(0, isMore ? images.length : 3)
          .map((image, index) => (
            <ImgWrapper key={index} src={image} alt={`Image #${index + 1}`} />
          ))}
    </div>
  ) : null;
}
