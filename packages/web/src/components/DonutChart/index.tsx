import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { PieArcDatum } from "d3-shape";
import cx from "classnames";
import styles from "./styles.module.scss";

// https://medium.com/react-courses/drawing-basic-charts-with-react-typescript-d3-part-ii-pie-scatter-chart-da4fc653b715
type Data = {
  label: string;
  value: number;
};

export default function Chart({
  list,
}: {
  list: { label: string; value: number }[];
}) {
  const groupRef = useRef<SVGGeometryElement>(null);
  const innerRadius = 60;
  const outerRadius = 130;

  // https://codesandbox.io/s/r5wp0v08xq
  useEffect(() => {
    const createPie = d3
      .pie<Data>()
      .value((d) => d.value)
      .sort(null);
    const createArc = d3
      .arc<PieArcDatum<Data>>()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);
    const colors = d3.scaleOrdinal(d3.schemeCategory10);

    const data = createPie(list);
    const group = d3.select(groupRef.current);
    const groupWithData = group.selectAll("g.arc").data(data);

    groupWithData.exit().remove();

    const groupWithUpdate = groupWithData
      .enter()
      .append("g")
      .attr("class", "arc");

    const path = groupWithUpdate
      .append("path")
      .merge(groupWithData.select("path.arc"));

    path
      .attr("class", "arc")
      .attr("d", createArc)
      .attr("fill", (d, i) => colors(i));

    const text = groupWithUpdate
      .append("text")
      .merge(groupWithData.select("text"));

    text
      .attr("text-anchor", "middle")
      .attr("alignment-baseline", "middle")
      .attr("transform", (d) => `translate(${createArc.centroid(d)})`)
      .style("fill", "white")
      .style("font-size", 10)
      .text(({ data }) => `${data.label} (${data.value})`);
  }, [list]);

  return (
    <div className={cx(styles.Chart)}>
      <svg>
        <g
          ref={groupRef}
          transform={`translate(${outerRadius + 20} ${outerRadius + 20})`}
        />
      </svg>
    </div>
  );
}
