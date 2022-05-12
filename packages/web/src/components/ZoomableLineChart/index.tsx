import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ZoomTransform,
  area,
  bisector,
  brushX,
  extent,
  group,
  pointer,
  select,
  selectAll,
  scaleLinear,
  scaleOrdinal,
  scaleTime,
  line,
  curveCardinal,
  axisBottom,
  axisLeft,
  zoom,
  zoomIdentity,
  brushSelection,
  timeMonth,
} from "d3";
import { Subject, of } from "rxjs";
import { delay, switchMap } from "rxjs/operators";
import useResizeObserver from "../../hooks/useResizeObserver";
import cx from "classnames";
import styles from "./styles.module.scss";

const ZoomContext = createContext<any>(undefined);

export function SyncZoomProvider({ children }: { children: ReactNode }) {
  const events$ = useMemo(() => new Subject<any>(), []);
  return (
    <ZoomContext.Provider value={events$}>{children}</ZoomContext.Provider>
  );
}

// https://github.com/muratkemaldar/using-react-hooks-with-d3/tree/16-zoomable-line-chart
export default function Chart({
  list,
  move,
  type = "line",
  rule = false,
}: {
  list: { group: string; date: Date; value: number; value2?: number }[];
  move?: boolean;
  type?: "line" | "area";
  rule?: boolean;
}) {
  const stream$ = useMemo(() => new Subject<any>(), []);
  const events$ = useContext(ZoomContext) || stream$;
  const id = useId();
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
          const margin = { x: 30, y: 30 };
          const { x, y, data } = selected;

          const wrapperRect = wrapperRef.current.getBoundingClientRect();
          const tooltipRect = tooltipRef.current.getBoundingClientRect();

          const transform = `translate(${
            x +
            (x < wrapperRect.width - tooltipRect.width - margin.x
              ? margin.x
              : -margin.x - tooltipRect.width)
          }px,${
            y +
            (y < wrapperRect.height - tooltipRect.height - margin.y
              ? margin.y
              : margin.y - tooltipRect.height)
          }px)`;

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

  const data = useMemo(() => group(list, (item) => item.group), [list]);
  console.log({ data });

  useEffect(() => {
    if (!wrapperRef.current || !svgRef.current) {
      return;
    }
    const svg = select<Element, unknown>(svgRef.current);
    const svgContent = svg.select(".content");
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // scales + line generator
    const xScale = scaleTime()
      .domain(extent(list, (d) => d.date))
      .range([10, width - 10]);

    if (currentZoomState) {
      const newXScale = currentZoomState.rescaleX(xScale);
      xScale.domain(newXScale.domain());
    }

    const yScale = scaleLinear()
      // .domain([0, max(list, (d) => d.value)])
      .domain(
        extent(
          list
            .map(({ value }) => value)
            .concat(type === "area" ? list.map(({ value2 }) => value2) : [])
        )
      )
      .range([height - 10, 10]);

    const lineGenerator = line()
      .x((d) => xScale(d.date))
      .y((d) => yScale(d.value))
      .curve(curveCardinal);

    // https://d3-graph-gallery.com/graph/stackedarea_basic.html
    // https://d3-graph-gallery.com/graph/stackedarea_template.html
    var areaGenerator = area()
      .x(function (d) {
        return xScale(d.date);
      })
      .y0(function (d) {
        return yScale(d.value);
      })
      .y1(function (d) {
        return yScale(d.value2);
      });

    const color = scaleOrdinal()
      .domain(Array.from(data.keys(), String))
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
      .attr("fill-opacity", "0.5")
      .attr("fill", (d) => (type === "area" ? color(d[0]) : "none"))
      .attr("d", (d) =>
        type === "area" ? areaGenerator(d[1]) : lineGenerator(d[1])
      );

    svgContent
      .selectAll(".myDot")
      .data(
        (([start, end]) => timeMonth.count(start, end))(xScale.domain()) > 6
          ? []
          : list
      )
      .join("circle")
      .attr("class", "myDot")
      .attr("stroke", "black")
      .attr("r", 3)
      .attr("fill", (d) => color(d.group))
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

    // https://github.com/d3/d3-axis/blob/v3.0.0/README.md#axis_tickSizeInner
    // https://observablehq.com/@d3/styled-axes?collection=@d3/d3-axis
    const margin = {
      top: 10,
      bottom: 10,
      left: 10,
      right: 10,
    };

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

    // brush
    const brush = brushX()
      .extent([
        [0, 0],
        [width, height],
      ])
      .on("start brush end", ({ sourceEvent, selection }) => {
        if (selection) {
          // console.log('brush.event', sourceEvent)
          if (sourceEvent) {
            events$.next({
              type: "select",
              selection,
            });
          }
        }
      });

    // zoom
    const zoomBehavior = zoom()
      .scaleExtent([1, 20])
      .translateExtent([
        [0, 0],
        [width, height],
      ])
      .on("zoom", ({ sourceEvent, transform }) => {
        // console.log('zoom.event', sourceEvent)
        events$.next({
          type: "zoom",
          sourceEvent,
          transform,
        });
      });

    if (move) {
      svg
        .select<SVGGElement>(".brush")
        .call(brush)
        .on("dblclick", function () {
          // https://observablehq.com/@d3/double-click-brush-clear
          // const selection = brushSelection(this) ? null : xScale.range();
          const selection = brushSelection(this) ? null : [0, width];
          select(this).call(brush.move, selection);
        });
    } else {
      svg.call(zoomBehavior);
    }

    // https://bl.ocks.org/larsenmtl/e3b8b7c2ca4787f77d78f58d41c3da91
    if (rule) {
      const cities = color.domain();
      // var cities = color.domain().map(function(name) {
      //   return {
      //     name: name,
      //     values: data.map(function(d) {
      //       return {
      //         date: d.date,
      //         temperature: +d[name]
      //       };
      //     })
      //   };
      // });

      const mousePerLine = svg
        .select<SVGGElement>(".mouse")
        .selectAll(".mouse-per-line")
        .data(cities)
        .enter()
        .append("g")
        .attr("class", "mouse-per-line")
        .style("opacity", "0");

      mousePerLine
        .append("circle")
        .attr("r", 7)
        .style("stroke", (d) => color(d))
        .style("fill", "none")
        .style("stroke-width", "1px");

      mousePerLine.append("text").attr("transform", "translate(10,3)");

      svg
        .select<SVGGElement>(".mouse")
        .selectAll("path") // this is the black vertical line to follow mouse
        .attr("class", "mouse-line")
        .style("stroke", "black")
        .style("stroke-width", "1px")
        .style("opacity", "0");

      svg
        .select<SVGGElement>(".mouse")
        .selectAll("rect")
        .attr("width", width) // can't catch mouse events on a g element
        .attr("height", height)
        .attr("fill", "none")
        .attr("pointer-events", "all")
        .on("mouseout", function () {
          // on mouse out hide line, circles and text
          console.log(["mouseout"]);
          select(".mouse-line").style("opacity", "0");
          selectAll(".mouse-per-line").style("opacity", "0");
        })
        .on("mouseover", function () {
          // on mouse in show line, circles and text
          console.log(["mouseover"]);
          select(".mouse-line").style("opacity", "1");
          selectAll(".mouse-per-line").style("opacity", "1");
        })
        .on("mousemove", function (event) {
          // mouse moving over canvas
          const [x, y] = pointer(event);
          console.log(["mousemove"], x, y);
          select(".mouse-line").attr("d", () => `M${x},${height} ${x},${0}`);
          selectAll(".mouse-per-line").attr(
            "transform",
            function (d: any): string {
              // console.log(width/mouse[0])
              const xDate = xScale.invert(x);
              const values = data.get(d);
              if (!values) {
                return "";
              }
              const bisect = bisector((d: { date: Date }) => d.date).right;
              const idx = bisect(values, xDate);
              const item = values[idx];
              const y = yScale(item.value);
              console.log(item.value);
              select(this).select("text").text(`${item.value}`);

              return "translate(" + x + "," + y + ")";
            }
          );
        });
    }

    const subscription = events$.subscribe((action) => {
      if (move) {
        if (action.type === "zoom") {
          const { sourceEvent, transform } = action;
          if (sourceEvent) {
            // const selection = xScale.range().map(transform.invertX, transform)
            const selection = [0, width].map(transform.invertX, transform);
            svg.select<SVGGElement>(".brush").call(brush.move, selection);
          }
        }
      } else {
        if (action.type === "zoom") {
          const { sourceEvent, transform } = action;
          if (svgRef.current && sourceEvent) {
            if (!svgRef.current.contains(sourceEvent.target)) {
              svg.call(zoomBehavior.transform, transform);
            }
          }
          setCurrentZoomState(transform);
        } else if (action.type === "select") {
          const { selection } = action;
          if (selection[1] > selection[0]) {
            // const indexSelection = selection.map(xScale.invert);
            svg
              .call(zoomBehavior)
              .call(
                zoomBehavior.transform,
                zoomIdentity
                  .scale(width / (selection[1] - selection[0]))
                  .translate(-selection[0], 0)
              );
          }
        }
      }
    });
    return () => subscription.unsubscribe();
  }, [currentZoomState, data, dimensions, move, events$]);

  return (
    <div className={cx(styles.Chart)} ref={wrapperRef}>
      <div ref={tooltipRef} className={styles.Tooltip}>
        {selected && <pre>{JSON.stringify(selected, null, 2)}</pre>}
      </div>
      <svg
        ref={svgRef}
        style={
          move
            ? {
                height: 150,
              }
            : {}
        }
      >
        <defs>
          <clipPath id={id}>
            <rect x="0" y="0" width="100%" height="100%" />
          </clipPath>
        </defs>
        <g className="content" clipPath={`url(#${id})`}></g>
        <g className="x-axis" />
        <g className="y-axis" />
        <g className="brush" />
        <g className="mouse">
          <path />
          <rect />
        </g>
      </svg>
    </div>
  );
}
