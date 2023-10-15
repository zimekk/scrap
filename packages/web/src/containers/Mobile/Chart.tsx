import React, { useEffect, useMemo, useRef } from "react";
import {
  extent,
  group,
  select,
  scaleLinear,
  scaleOrdinal,
  scaleTime,
  line,
  axisBottom,
  axisLeft,
} from "d3";
import cx from "classnames";
import styles from "./styles.module.scss";

export const COLORS = [
  "#e41a1c",
  "#377eb8",
  "#4daf4a",
  "#984ea3",
  "#ff7f00",
  "#ffff33",
  "#a65628",
  "#f781bf",
  "#999999",
];

export default function Chart({
  list,
}: {
  list: { number: string; date: string; amount: number }[];
}) {
  const svgRef = useRef<SVGSVGElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const data = useMemo(
    () =>
      list.map(({ date, number, amount }) => ({
        date: new Date(date),
        group: number,
        value: amount,
      })),
    [list]
  );

  useEffect(() => {
    if (!wrapperRef.current || !svgRef.current) {
      return;
    }
    const margin = {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
    };
    const svg = select<Element, unknown>(svgRef.current);
    const svgContent = svg.select(".content");

    const grouped = group(data, ({ group }) => group);

    const { width, height } = svgRef.current.getBoundingClientRect();

    // scales + line generator
    const xScale = scaleTime()
      .domain(
        extent(
          data.concat({
            date: new Date(Date.now() + 5 * 24 * 3600 * 1000),
            group: "",
            value: 0,
          }),
          ({ date }) => date
        ) as [Date, Date]
      )
      .range([margin.left, width - margin.right]);

    const yScale = scaleLinear()
      .domain(extent(data, ({ value }) => value) as [number, number])
      .range([height - margin.bottom, margin.top]);

    const color = scaleOrdinal<string, string>()
      .domain(grouped.keys())
      .range(COLORS);

    // render the line
    svgContent
      .selectAll(".line")
      .data(grouped)
      .join("path")
      .attr("class", "line")
      .attr("stroke", ([group]) => color(group))
      .attr("fill-opacity", "0.5")
      .attr("fill", "none")
      .attr("d", ([_, dots]) =>
        line()(dots.map(({ date, value }) => [xScale(date), yScale(value)]))
      );

    svgContent
      .selectAll(".dot")
      .data(data)
      .join("circle")
      .attr("class", "dot")
      .attr("stroke", "black")
      .attr("r", 3)
      .attr("fill", ({ group }) => color(group))
      .attr("cx", (dot) => xScale(dot.date))
      .attr("cy", (dot) => yScale(dot.value));

    // axes
    const xAxis = axisBottom(xScale).tickSizeInner(
      margin.top + margin.bottom - height
    );
    svg
      .select<SVGGElement>(".x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis)
      .call((g) =>
        g
          .selectAll(".tick line")
          .attr("transform", `translate(0,${-margin.bottom})`)
          .attr("stroke-opacity", 0.5)
          .attr("stroke-dasharray", "2,2")
      );

    const yAxis = axisLeft(yScale).tickSizeInner(
      margin.left + margin.right - width
    );
    svg
      .select<SVGGElement>(".y-axis")
      .call(yAxis)
      .call((g) =>
        g
          .selectAll(".tick line")
          .attr("transform", `translate(${margin.left},0)`)
          .attr("stroke-opacity", 0.5)
          .attr("stroke-dasharray", "2,2")
      );
  }, [data]);

  return (
    <div className={cx(styles.Chart)} ref={wrapperRef}>
      <svg ref={svgRef}>
        <g className="content" />
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
    </div>
  );
}
