import React, { type ComponentProps, useEffect, useRef, useState } from "react";
import cx from "classnames";
import styles from "./styles.module.scss";

// https://designcode.io/react-hooks-handbook-usescrollposition-hook
function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return scrollPosition;
}

function Shape({ className, ...props }: ComponentProps<"div">) {
  return <div className={cx(styles["shape-block"], className)} {...props} />;
}

export function Shapes() {
  const ref = useRef<HTMLDivElement>(null);
  const scrollPosition = useScrollPosition();

  return (
    <div ref={ref} className={styles["shapes-container"]}>
      {[...Array(30)].map((_, index) => (
        <Shape
          key={index}
          id={`index-${index}`}
          className={styles[`_${index + 1}`]}
          style={{
            willChange: "transform",
            transform: `translate3d(0px, ${
              100 - scrollPosition * 0.01 * (20 + index) + index * 300
            }px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(${
              20 + scrollPosition * 0.02 * (1 + index)
            }deg) skew(0deg, 0deg)`,
            transformStyle: "preserve-3d",
          }}
        />
      ))}
    </div>
  );
}
