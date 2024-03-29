import React, { useEffect, useMemo, useRef } from "react";
import {
  axisBottom,
  axisLeft,
  extent,
  group,
  scaleLinear,
  scaleOrdinal,
  scaleTime,
  select,
  timeDay,
  timeMonth,
} from "d3";
import cx from "classnames";
import { COLORS } from "./Chart";
import styles from "./styles.module.scss";

export default function Chart({
  list,
  balance,
}: {
  list: { number: string; date: string; amount: number }[];
  balance: { date: string }[];
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
    [list],
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

    const grouped = group(data, ({ group }) => group);

    const groups = Array.from(grouped.keys());

    const { width, height } = svgRef.current.getBoundingClientRect();

    // scales + line generator
    const xScale = scaleTime()
      .domain(
        extent(
          balance.concat({
            date: new Date(Date.now() + 5 * 24 * 3600 * 1000).toISOString(),
          }),
          ({ date }) => new Date(date),
        ) as [Date, Date],
      )
      .range([margin.left, width - margin.right]);

    const yScale = scaleLinear()
      .domain(extent(data, ({ value }) => value) as [number, number])
      .range([height - margin.bottom, margin.top]);

    const color = scaleOrdinal<string, string>()
      .domain(grouped.keys())
      .range(COLORS);

    // Object.assign(window, { svg });

    // chart
    svg.select(".chart").remove();
    svg
      .append("g")
      .attr("class", "chart")
      .selectAll("g")
      .data(data)
      .join("rect")
      // .attr("opacity", () => 0.8)
      .attr("fill", ({ group }) => color(group))
      .attr(
        "x",
        ({ value, date, group }) =>
          xScale(date) + 5 * groups.indexOf(group) + (value > 0 ? -1 : 1),
      )
      .attr("y", ({ value }) => (value > 0 ? yScale(value) : yScale(0)))
      .attr("width", 2)
      .attr("height", ({ value }) =>
        value > 0 ? yScale(0) - yScale(value) : yScale(value) - yScale(0),
      );

    // billing periods
    svg.select(".ticks").remove();
    svg
      .append("g")
      .attr("class", "ticks")
      .selectAll("g")
      .data(
        xScale
          .ticks(timeMonth)
          .map((date) => groups.map((group) => ({ date, group })))
          .flat(),
      )
      .join("g")
      .attr(
        "transform",
        ({ date, group }) =>
          `translate(${xScale(
            timeDay.offset(date, [25, 19, 15, 1, 1][groups.indexOf(group)]),
          )},${0})`,
      )
      .append("line")
      .attr("stroke", ({ group }) => color(group))
      .attr("y1", () => margin.bottom)
      .attr("y2", height - margin.bottom)
      .attr("stroke-opacity", 0.5)
      .attr("stroke-dasharray", "2,2");

    // axes
    const xAxis = axisBottom(xScale);
    // .tickSizeInner(
    //   margin.top + margin.bottom - height
    // );
    svg.select(".xaxis").remove();
    svg
      .append("g")
      .attr("class", "xaxis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);
    // .call((g) =>
    //   g
    //     .selectAll(".tick line")
    //     .attr("transform", `translate(0,${-margin.bottom})`)
    //     .attr("stroke-opacity", 0.5)
    //     .attr("stroke-dasharray", "2,2")
    // );

    const yAxis = axisLeft(yScale).tickSizeInner(
      margin.left + margin.right - width,
    );
    svg.select(".yaxis").remove();
    svg
      .append("g")
      .attr("class", "yaxis")
      .call(yAxis)
      .call((g) =>
        g
          .selectAll(".tick line")
          .attr("transform", `translate(${margin.left},0)`)
          .attr("stroke-opacity", 0.5)
          .attr("stroke-dasharray", "2,2"),
      );
  }, [data, balance]);

  return (
    <div className={cx(styles.Chart)} ref={wrapperRef}>
      <svg ref={svgRef} />
    </div>
  );
}
