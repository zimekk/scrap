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

const color = scaleLinear().domain([0, 10]).range(["red", "blue"]);

const { width, height, left, right, top, bottom } = {
  width: 250,
  height: 250,
  left: 40,
  right: 40,
  top: 40,
  bottom: 40,
};

const margin = {
  left: 40,
  right: 20,
  top: 20,
  bottom: 60,
};

const XAxis = ({ xDomain, tickCount }) => {
  const xAxisRef = useRef(null);

  useLayoutEffect(() => {
    const x = scaleLinear()
      .domain(xDomain)
      .range([left, width - right]);
    const axis = axisBottom;
    const xAxis = axis(x).ticks(tickCount).tickSizeOuter(0);

    select(xAxisRef.current).call(xAxis);
  }, [left, right, tickCount, width, xDomain]);

  return <g transform={`translate(0, ${height - bottom})`} ref={xAxisRef} />;
};

const YAxis = ({ yDomain, tickCount }) => {
  const yAxisRef = useRef(null);

  useLayoutEffect(() => {
    const y = scaleLinear()
      .domain(yDomain)
      .range([height - bottom, top]);
    const axis = axisLeft;
    const yAxis = axis(y).ticks(tickCount).tickSizeOuter(0);

    select(yAxisRef.current).call(yAxis);
  }, [bottom, height, tickCount, top, yDomain]);

  return <g transform={`translate(${left}, 0)`} ref={yAxisRef} />;
};

const Legend = ({ keys, xDomain }) => {
  const legendRef = useRef(null);

  useLayoutEffect(() => {
    const x = scaleLinear()
      .domain(xDomain)
      .range([left, width - right]);

    select(legendRef.current)
      .selectAll("text")
      .data(keys)
      .join("text")
      .attr("x", (_, i) => x(i + 1))
      .attr("fill", (_, i) => color(i))
      .text((d) => d);
  }, [keys, left, right, width, xDomain]);

  return <g transform={`translate(0, ${height - 20})`} ref={legendRef} />;
};

// https://betterprogramming.pub/construct-d3-charts-in-react-cfecc2848ae2
export default function Chart({ list }) {
  const containerRef = useRef(null);

  const data = [
    ["data1", 30, 200, 100, 400, 150, 250],
    ["data2", 50, 20, 10, 40, 15, 25],
  ];

  const tickCount = Math.max(data[0].length, data[1].length, 0);
  const xDomain = [0, tickCount];
  const yDomain = [0, 500];

  const keys = [data[0][0], data[1][0]];

  useLayoutEffect(() => {
    select(containerRef.current).selectAll("*").remove();

    const x = scaleLinear()
      .domain(xDomain)
      .range([left, width - right]);
    const y = scaleLinear()
      .domain(yDomain)
      .range([height - bottom, top]);

    const lineFn = line()
      .x((_, i) => x(i))
      .y((d) => y(d));

    const reveal = (path) =>
      path
        .transition()
        .duration(1000)
        .ease(easeLinear)
        .attrTween("stroke-dasharray", function () {
          const length = this.getTotalLength();
          console.log(interpolate(`0, ${length}`, `${length}, ${length}`));
          return interpolate(`0, ${length}`, `${length}, ${length}`);
        });

    data.forEach(([_, ...values], index) => {
      select(containerRef.current)
        .append("path")
        .datum(values)
        .attr("fill", "none")
        .attr("stroke", () => color(index))
        .attr("stroke-width", 1.5)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("d", lineFn)
        .call(reveal);
    });
  }, [bottom, data, height, left, right, top, width, xDomain, yDomain]);

  return (
    <div className={cx(styles.Chart)}>
      <svg width={width} height={height} viewBox={`0, 0, ${width}, ${height}`}>
        <g ref={containerRef} />
        <XAxis margin={margin} xDomain={xDomain} tickCount={tickCount} />
        <YAxis margin={margin} yDomain={yDomain} tickCount={5} />
        <Legend keys={keys} xDomain={[0, data.length + 1]} />
      </svg>
    </div>
  );
}
