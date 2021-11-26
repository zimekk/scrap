import React, { useEffect, useMemo, useRef, useState } from "react";
import { axisBottom, axisLeft, select, scaleLinear } from "d3";
import cx from "classnames";
import { Subject, of } from "rxjs";
import { delay, switchMap } from "rxjs/operators";
import styles from "./Chart.module.scss";

const { width, height, left, right, top, bottom } = {
  width: 320,
  height: 200,
  left: 10,
  right: 10,
  top: 20,
  bottom: 20,
};

const PROPS = {
  accessoriesPrice: "accessoriesPrice",
  age: "age",
  capacity: "capacity",
  consumptionFuel: "consumptionFuel",
  emission: "emission",
  id: "id",
  images: "images",
  mileage: "mileage",
  newPrice: "newPrice",
  optionsPrice: "optionsPrice",
  powerHP: "powerHP",
  powerKW: "powerKW",
  productionYear: "productionYear",
  transactionalPrice: "transactionalPrice",
  warranty: "warranty",
};

// https://betterprogramming.pub/construct-d3-charts-in-react-cfecc2848ae2
// https://wattenberger.com/blog/react-and-d3
export default function Chart({ list, onSelect }) {
  const [selected, setSelected] = useState<{
    top: number;
    left: number;
    label: string;
  } | null>(null);
  const [{ xProp, yProp }, setProps] = useState(() => ({
    xProp: "transactionalPrice",
    yProp: "newPrice",
  }));
  const xAxisRef = useRef(null);
  const yAxisRef = useRef(null);
  const containerRef = useRef(null);

  // https://stackoverflow.com/questions/62066799/custom-tooltip-with-rxjs
  const selected$ = useMemo(() => new Subject(), []);
  useEffect(() => {
    const subscription = selected$
      .pipe(
        switchMap((selected) => of(selected).pipe(delay(selected ? 0 : 800)))
      )
      .subscribe((selected) => setSelected(selected));

    return () => subscription.unsubscribe();
  }, [selected$]);

  useEffect(() => {
    const dataset = list
      .slice(0, 2000)
      .map(({ item }) => [
        item[xProp],
        item[yProp],
        `[${item.id}] ${item.title}`,
        item.id,
      ]);

    const xx = dataset.map(([x = 0]) => x);
    const yy = dataset.map(([, y = 0]) => y);

    const xDomain = [Math.min(...xx), Math.max(...xx)];
    const yDomain = [Math.min(...yy), Math.max(...yy)];

    const xScale = scaleLinear()
      .domain(xDomain)
      .range([left, width - right]);

    const yScale = scaleLinear()
      .domain(yDomain)
      .range([height - bottom, top]);

    const color = scaleLinear().domain(xDomain).range(["red", "blue"]);

    select(containerRef.current).selectAll("circle").remove();
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
            .on("click", (e, [, , , id]) => onSelect(id))
            .on("mouseover", (e, [, , label]) =>
              selected$.next({ left: e.layerX, top: e.layerY, label })
            )
            .on("mouseout", (e, i) => selected$.next(null))
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
  }, [list, xProp, yProp]);

  return (
    <div className={cx(styles.Chart)}>
      <fieldset>
        <label>
          <span>x</span>
          <select
            value={xProp}
            onChange={(e) =>
              setProps((props) => ({ ...props, xProp: e.target.value }))
            }
          >
            {Object.entries(PROPS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>y</span>
          <select
            value={yProp}
            onChange={(e) =>
              setProps((props) => ({ ...props, yProp: e.target.value }))
            }
          >
            {Object.entries(PROPS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </fieldset>
      <svg
        ref={containerRef}
        width={width}
        height={height}
        viewBox={`0, 0, ${width}, ${height}`}
      >
        <g transform={`translate(0, ${height - bottom})`} ref={xAxisRef} />
        <g transform={`translate(${left}, 0)`} ref={yAxisRef} />
      </svg>
      {selected && (
        <div
          className={styles.Tooltip}
          style={{ top: selected.top, left: selected.left }}
        >
          {selected.label}
        </div>
      )}
    </div>
  );
}
