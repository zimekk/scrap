import React, { useEffect, useMemo, useRef, useState } from "react";
// import { format } from "date-fns";
// import { axisBottom, axisLeft, select, scaleLinear, timeFormat } from "d3";
// import * as d3 from "d3";
import {
  ZoomTransform,
  extent,
  group,
  select,
  scaleLinear,
  scaleOrdinal,
  scaleTime,
  line,
  max,
  curveCardinal,
  axisBottom,
  axisLeft,
  zoom,
} from "d3";

import { Subject, of } from "rxjs";
import { delay, switchMap } from "rxjs/operators";
import useResizeObserver from "./useResizeObserver";
import cx from "classnames";
import styles from "./Chart.module.scss";

// https://github.com/muratkemaldar/using-react-hooks-with-d3/tree/16-zoomable-line-chart
export default function Chart({
  list,
}: {
  list: { investment_id: number; date: Date; value: number }[];
}) {
  const id = useMemo(() => "myZoomableLineChart", []);
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dimensions = useResizeObserver(wrapperRef);
  const [currentZoomState, setCurrentZoomState] = useState<ZoomTransform>();
  const [selected, setSelected] = useState<object | null>(null);

  const tooltip$ = useMemo(
    () => new Subject<{ x: number; y: number; data: object } | null>(),
    []
  );

  useEffect(() => {
    const tooltip = select(tooltipRef.current)
      .style("opacity", 0)
      .style("pointer-events", "none");

    const subscription = tooltip$
      .pipe(
        switchMap((selected) => of(selected).pipe(delay(selected ? 0 : 400)))
      )
      .subscribe((selected) => {
        // console.log({selected})
        if (selected) {
          const { x, y, data } = selected;
          const transform = `translate(${x + 30}px,${y - 30}px)`;

          if (tooltip.style("opacity") === "0") {
            tooltip.style("transform", transform);
          }

          tooltip
            .transition()
            .duration(300)
            .style("opacity", 0.9)
            .style("transform", transform);

          setSelected(data);
        } else {
          tooltip.transition().duration(300).style("opacity", 0);
        }
      });
    return () => subscription.unsubscribe();
  }, [tooltip$]);

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

  useEffect(() => {
    if (!wrapperRef.current || !svgRef.current) {
      return;
    }
    const svg = select<Element, unknown>(svgRef.current);
    const svgContent = svg.select(".content");
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    const data = group(list, (item) => item.investment_id);
    console.log({ data });

    // scales + line generator
    const xScale = scaleTime()
      .domain(extent(list, (d) => d.date))
      .range([10, width - 10]);

    if (currentZoomState) {
      const newXScale = currentZoomState.rescaleX(xScale);
      xScale.domain(newXScale.domain());
    }

    const yScale = scaleLinear()
      .domain([0, max(list, (d) => d.value)])
      .range([height - 10, 10]);

    const lineGenerator = line()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.value))
      .curve(curveCardinal);

    const color = scaleOrdinal()
      .domain(data.keys())
      .range([
        "#e41a1c",
        "#377eb8",
        "#4daf4a",
        "#984ea3",
        "#ff7f00",
        "#ffff33",
        "#a65628",
        "#f781bf",
        "#999999",
      ]);

    // render the line
    svgContent
      .selectAll(".myLine")
      .data(data)
      .join("path")
      .attr("class", "myLine")
      .attr("stroke", (d) => color(d[0]))
      .attr("fill", "none")
      .attr("d", (d) => lineGenerator(d[1]));

    svgContent
      .selectAll(".myDot")
      .data(list)
      .join("circle")
      .attr("class", "myDot")
      .attr("stroke", "black")
      .attr("r", 3)
      .attr("fill", (d) => color(d.investment_id))
      .attr("cx", (d) => xScale(d.date))
      .attr("cy", (d) => yScale(d.value))
      .on("mouseenter", (_, data) => {
        const x = xScale(data.date);
        const y = yScale(data.value);
        tooltip$.next({ x, y, data });
      })
      .on("mouseleave", () => {
        tooltip$.next(null);
      });

    // axes
    const xAxis = axisBottom(xScale);
    svg
      .select<SVGGElement>(".x-axis")
      .attr("transform", `translate(0, ${height})`)
      .call(xAxis);

    const yAxis = axisLeft(yScale);
    svg.select<SVGGElement>(".y-axis").call(yAxis);

    // zoom
    const zoomBehavior = zoom()
      .scaleExtent([1, 15])
      .translateExtent([
        [0, 0],
        [width, height],
      ])
      .on("zoom", (event) => {
        console.log({ event });
        const zoomState = event.transform;
        setCurrentZoomState(zoomState);
      });

    svg.call(zoomBehavior);
  }, [currentZoomState, list, dimensions]);

  return (
    <div className={cx(styles.Chart)} ref={wrapperRef}>
      <div ref={tooltipRef} className={styles.Tooltip}>
        {selected && <pre>{JSON.stringify(selected, null, 2)}</pre>}
      </div>
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
    </div>
  );
}
