import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  axisBottom,
  axisLeft,
  interpolate,
  line,
  select,
  easeLinear,
  scaleLinear,
} from "d3";
import cx from "classnames";
import styles from "./Chart.module.scss";

const { width, height, left, right, top, bottom } = {
  width: 320,
  height: 200,
  left: 10,
  right: 10,
  top: 20,
  bottom: 20,
};

// https://betterprogramming.pub/construct-d3-charts-in-react-cfecc2848ae2
// https://wattenberger.com/blog/react-and-d3
export default function Chart({ list }) {
  const xAxisRef = useRef(null);
  const yAxisRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const dataset = list
      .slice(0, 500)
      .map(({ item }) => [item.mileage, item.transactionalPrice]);

    const xx = dataset.map(([x = 0]) => x);
    const yy = dataset.map(([, y = 0]) => y);

    const xDomain = [Math.min(...xx), Math.max(...xx)];
    const yDomain = [Math.min(...yy), Math.max(...yy)];

    const xScale = scaleLinear()
      .domain(xDomain)
      .range([left, width - right]);

    const yScale = scaleLinear()
      .domain(yDomain)
      .range([top, height - bottom]);

    const color = scaleLinear().domain(xDomain).range(["red", "blue"]);

    select(containerRef.current)
      .selectAll("circle")
      .data(dataset)
      .join(
        (enter) =>
          enter
            .append("circle")
            .attr("cx", ([x = 0]) => xScale(x))
            .attr("cy", ([, y = 0]) => yScale(y))
            .attr("r", 0)
            .attr("fill", ([x = 0]) => color(x))
            .call((enter) =>
              enter.transition().duration(200).attr("r", 2).style("opacity", 1)
            ),
        (update) => update.attr("fill", "lightgrey"),
        (exit) =>
          exit
            .attr("fill", "tomato")
            .call((exit) =>
              exit
                .transition()
                .duration(200)
                .attr("r", 0)
                .style("opacity", 0)
                .remove()
            )
      );

    const xAxis = axisBottom(xScale).ticks(5).tickSizeOuter(0);
    select(xAxisRef.current).call(xAxis);

    const yAxis = axisLeft(yScale).ticks(5).tickSizeOuter(0);
    select(yAxisRef.current).call(yAxis);
  }, [list]);

  return (
    <div className={cx(styles.Chart)}>
      <svg
        ref={containerRef}
        width={width}
        height={height}
        viewBox={`0, 0, ${width}, ${height}`}
      >
        <g transform={`translate(0, ${height - bottom})`} ref={xAxisRef} />
        <g transform={`translate(${left}, 0)`} ref={yAxisRef} />
      </svg>
    </div>
  );
}
