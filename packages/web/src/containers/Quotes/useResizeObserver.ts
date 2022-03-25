import { RefObject, useEffect, useState } from "react";
import ResizeObserver from "resize-observer-polyfill";

// https://github.com/muratkemaldar/using-react-hooks-with-d3/blob/16-zoomable-line-chart/src/useResizeObserver.js
export default function useResizeObserver(ref: RefObject<Element>) {
  const [dimensions, setDimensions] = useState<DOMRect | null>(null);
  useEffect(() => {
    const observeTarget = ref.current;
    if (observeTarget) {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => {
          setDimensions(entry.contentRect);
        });
      });
      resizeObserver.observe(observeTarget);
      return () => {
        resizeObserver.unobserve(observeTarget);
      };
    }
  }, [ref]);
  return dimensions;
}
