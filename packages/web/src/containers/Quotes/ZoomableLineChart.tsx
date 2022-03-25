import React, { useEffect, useMemo, useRef, useState } from "react";
// import { format } from "date-fns";
// import { axisBottom, axisLeft, select, scaleLinear, timeFormat } from "d3";
// import * as d3 from "d3";
import {
  extent,
  select,
  scaleLinear,
  scaleTime,
  line,
  max,
  curveCardinal,
  axisBottom,
  axisLeft,
  zoom,
} from "d3";

// import { Subject, of } from "rxjs";
// import { delay, switchMap } from "rxjs/operators";
import useResizeObserver from "./useResizeObserver";
import cx from "classnames";
import styles from "./Chart.module.scss";

// const { width, height, left, right, top, bottom } = {
//   width: 640,
//   height: 200,
//   left: 5,
//   right: 5,
//   top: 5,
//   bottom: 20,
// };

// { list: Record<string,{
//   date: string;
//   value: number;
// }> }

// https://github.com/muratkemaldar/using-react-hooks-with-d3/tree/16-zoomable-line-chart
export default function Chart({
  list,
}: {
  list: { date: Date; value: number }[];
}) {
  const id = useMemo(() => "myZoomableLineChart", []);
  const svgRef = useRef(null);
  const wrapperRef = useRef(null);
  const dimensions = useResizeObserver(wrapperRef);
  const [currentZoomState, setCurrentZoomState] = useState();

  // const selected$ = useMemo(
  //   () => new Subject<{ left: number; top: number; label: string }>(),
  //   []
  // );
  // useEffect(() => {
  //   const subscription = selected$
  //     .pipe(
  //       switchMap((selected) => of(selected).pipe(delay(selected ? 0 : 800)))
  //     )
  //     .subscribe((selected) => setSelected(selected));

  //   return () => subscription.unsubscribe();
  // }, [selected$]);

  // const { width, height, margin } = {
  //   width: 600,
  //   height: 300,
  //   margin: { top: 30, right: 30, bottom: 30, left: 60 },
  // };

  // useEffect(() => {
  //   const el = d3.select(svgRef.current);
  //   el.selectAll("*").remove();

  //   const data = list.map(({ date, value }) => ({
  //     date: new Date(date),
  //     value,
  //   }));

  //   console.log({ data });

  //   const xScale = d3
  //     .scaleTime()
  //     .domain(d3.extent(data, (d) => d.date))
  //     .range([0, width]);
  //   const yScale = d3
  //     .scaleLinear()
  //     .domain([
  //       0,
  //       // d3.min(data, (d) => d.value),
  //       d3.max(data, (d) => d.value),
  //     ])
  //     .range([height, 0]);

  //   const svg = el
  //     .append("g")
  //     .attr("transform", `translate(${margin.left},${margin.top})`)
  //     .on("touchstart", (event) => event.preventDefault())
  //     .on("pointermove", pointermoved);

  //   const formatDate = (date) => format(date, "yyyy-MM-dd");

  //   function update(date) {
  //     // date = Xs[d3.bisectCenter(Xs, date)];
  //     rule.attr("transform", `translate(${xScale(date)},0)`);
  //     ruleLabel.text(formatDate(date));
  //     // serie.attr("transform", ([, I]) => {
  //     //   const i = I[d3.bisector(i => X[i]).center(I, date)];
  //     //   return `translate(0,${yScale(1) - yScale(Y[i] / Y[I[0]])})`;
  //     // });
  //     // svg.property("value", date).dispatch("input", {bubbles: true}); // for viewof
  //   }

  //   function pointermoved(event) {
  //     update(xScale.invert(d3.pointer(event)[0]));
  //   }

  //   const rule = svg.append("g");

  //   rule
  //     .append("line")
  //     .attr("y1", margin.top)
  //     .attr("y2", height - margin.bottom - 15)
  //     .attr("stroke", "currentColor");

  //   const ruleLabel = rule
  //     .append("text")
  //     .attr("y", height - margin.bottom - 15)
  //     .attr("fill", "currentColor")
  //     .attr("text-anchor", "middle")
  //     .attr("dy", "1em");

  //   const xAxis = d3
  //     .axisBottom(xScale)
  //     .ticks(5)
  //     .tickSize(-height + margin.bottom);
  //   const xAxisGroup = svg
  //     .append("g")
  //     .attr("transform", `translate(0, ${height - margin.bottom})`)
  //     .call(xAxis);
  //   xAxisGroup.select(".domain").remove();
  //   xAxisGroup.selectAll("line").attr("stroke", "rgba(0, 0, 0, 0.2)");
  //   xAxisGroup
  //     .selectAll("text")
  //     .attr("opacity", 0.5)
  //     .attr("color", "blue")
  //     .attr("font-size", "0.75rem");

  //   const yAxis = d3
  //     .axisLeft(yScale)
  //     .ticks(5)
  //     .tickSize(-width)
  //     .tickFormat((val) => `${val}%`);
  //   const yAxisGroup = svg.append("g").call(yAxis);
  //   yAxisGroup.select(".domain").remove();
  //   yAxisGroup.selectAll("line").attr("stroke", "rgba(0, 0, 0, 0.2)");
  //   yAxisGroup
  //     .selectAll("text")
  //     .attr("opacity", 0.5)
  //     .attr("color", "blue")
  //     .attr("font-size", "0.75rem");

  //   const line = d3
  //     .line()
  //     .x((d) => xScale(d.date))
  //     .y((d) => yScale(d.value));

  //   svg
  //     .selectAll(".line")
  //     .data(data)
  //     .enter()
  //     .append("circle")
  //     .attr("cx", (d) => xScale(d.date))
  //     .attr("cy", (d) => yScale(d.value))
  //     .attr("r", 2)
  //     .attr("fill", (d) => "currentColor");

  //     // .append("path")
  //   // .attr("fill", "#ccc")
  //   // .attr("stroke", (d) => '#ddd')
  //   // .attr("stroke-width", 3)
  //   // .attr("d", (d) => line(d));

  //   // const dataset = list.map((item) => [
  //   //   new Date(item.date),
  //   //   item.value,
  //   //   `${item.date}, ${item.value}`,
  //   // ]);

  //   // const xx = dataset.map(([x = 0]) => x);
  //   // const yy = dataset.map(([, y = 0]) => y);

  //   // // const xDomain = [Math.min(...xx), Math.max(...xx)];
  //   // const xDomain = [new Date('2020-01-01'), Math.max(...xx)];
  //   // const yDomain = [0, Math.max(...yy)];

  //   // const xScale = scaleLinear()
  //   //   .domain(xDomain)
  //   //   .range([left, width - right]);

  //   // const yScale = scaleLinear()
  //   //   .domain(yDomain)
  //   //   .range([height - bottom, top]);

  //   // const color = scaleLinear().domain(yDomain).range(["red", "blue"]);

  //   // select(containerRef.current).selectAll("circle").remove();
  //   // select(containerRef.current)
  //   //   .selectAll("circle")
  //   //   .data(dataset)
  //   //   .join(
  //   //     (enter) =>
  //   //       enter
  //   //         .append("circle")
  //   //         .attr("cx", ([x = 0]) => xScale(x))
  //   //         .attr("cy", ([, y = 0]) => yScale(y))
  //   //         .attr("r", 0)
  //   //         .attr("fill", ([x = 0]) => color(x))
  //   //         .on("mouseover", (e, [, , label]) =>
  //   //           selected$.next({ left: e.layerX, top: e.layerY, label })
  //   //         )
  //   //         .on("mouseout", () => selected$.next(null))
  //   //         .call((enter) =>
  //   //           enter.transition().duration(200).attr("r", 2).style("opacity", 1)
  //   //         ),
  //   //     (update) => update.attr("fill", "lightgrey"),
  //   //     (exit) =>
  //   //       exit
  //   //         .attr("fill", "tomato")
  //   //         .call((exit) =>
  //   //           exit
  //   //             .transition()
  //   //             .duration(200)
  //   //             .attr("r", 0)
  //   //             .style("opacity", 0)
  //   //             .remove()
  //   //         )
  //   //   );

  //   // const xAxis = axisBottom(xScale)
  //   //   .ticks(5)
  //   //   .tickSizeOuter(0)
  //   //   .tickFormat(timeFormat("%Y-%m-%d, %H:%M:%S"));
  //   // select(xAxisRef.current).call(xAxis).style("font-size", "8px");

  //   // const yAxis = axisLeft(yScale).ticks(5).tickSizeOuter(0);
  //   // select(yAxisRef.current).call(yAxis).style("font-size", "8px");
  // }, [list]);

  // const data = useMemo(() => list.map(({value}) => value), [list]);
  const data = useMemo(
    () =>
      list
        .map(({ date, value }) => ({
          date: new Date(date),
          value,
        }))
        .sort((a, b) => a.date - b.date),
    [list]
  );

  useEffect(() => {
    if (!wrapperRef.current) {
      return;
    }
    const svg = select(svgRef.current);
    const svgContent = svg.select(".content");
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // scales + line generator
    // const xScale = scaleLinear()
    const xScale = scaleTime()
      // .domain([0, data.length - 1])
      .domain(extent(data, (d) => d.date))
      .range([10, width - 10]);

    if (currentZoomState) {
      const newXScale = currentZoomState.rescaleX(xScale);
      xScale.domain(newXScale.domain());
    }

    const yScale = scaleLinear()
      // .domain([0, max(data)])
      .domain([0, max(data, (d) => d.value)])
      // .domain(extent(data, (d) => d.value))
      .range([height - 10, 10]);

    const lineGenerator = line()
      // .x((d, index) => xScale(index))
      .x((d) => xScale(d.date))
      // .y((d) => yScale(d))
      .y((d) => yScale(d.value))
      .curve(curveCardinal);

    // render the line
    svgContent
      .selectAll(".myLine")
      .data([data])
      .join("path")
      .attr("class", "myLine")
      .attr("stroke", "black")
      .attr("fill", "none")
      .attr("d", lineGenerator);

    svgContent
      .selectAll(".myDot")
      .data(data)
      .join("circle")
      .attr("class", "myDot")
      .attr("stroke", "black")
      .attr("r", 4)
      .attr("fill", "orange")
      // .attr("cx", (value, index) => xScale(index))
      .attr("cx", (d) => xScale(d.date))
      .attr("cy", (d) => yScale(d.value));
    // .attr("cy", yScale);

    // axes
    const xAxis = axisBottom(xScale);
    svg
      .select(".x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);

    const yAxis = axisLeft(yScale);
    svg.select(".y-axis").call(yAxis);

    // zoom
    const zoomBehavior = zoom()
      .scaleExtent([1, 15])
      .translateExtent([
        [0, 0],
        [width, height],
      ])
      .on("zoom", (event) => {
        const zoomState = event.transform;
        setCurrentZoomState(zoomState);
      });

    svg.call(zoomBehavior);
  }, [currentZoomState, data, dimensions]);

  return (
    <div className={cx(styles.Chart)} ref={wrapperRef}>
      <svg ref={svgRef}>
        <defs>
          <clipPath id={id}>
            <rect x="0" y="0" width="100%" height="100%" />
          </clipPath>
        </defs>
        <g className="content" clipPath={`url(#${id})`}></g>
        <g className="x-axis" />
        <g className="y-axis" />
      </svg>
      {/* {selected && (
        <div
          className={styles.Tooltip}
          style={{ top: selected.top, left: selected.left }}
        >
          {selected.label}
        </div>
      )} */}
    </div>
  );
}
