import React from "react";
import * as d3 from "d3";
import Measurement from "../../functions/src/models/Measurement";
import { MeasurementsByDevice } from "../../functions/src/models/MeasurementsByDevice";

const drawDiagram = (
  ref: React.RefObject<HTMLDivElement>,
  data: MeasurementsByDevice,
  deviceColorMap: Map<string, string>
) => {
  const width = 500;
  const height = 500;
  const margin = { top: 16, right: 32, bottom: 32, left: 40 };

  const line = d3
    .line<Measurement>()
    .defined((d) => d.value !== null && !isNaN(d.value))
    .x((d) => x(new Date(d.timestamp)))
    .y((d) => y(d.value));

  const yMin = d3.min(
    data.map(
      ([_, measurements]) => d3.min(measurements, (d) => d.value) as number
    )
  )!;

  const yMax = d3.max(
    data.map(
      ([_, measurements]) => d3.max(measurements, (d) => d.value) as number
    )
  )!;

  const y = d3
    .scaleLinear()
    .domain([yMin, yMax])
    .nice()
    .range([height - margin.bottom, margin.top]);

  const yAxis = (g: any) =>
    g.attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(y));

  const xMin = d3.min(
    data.map(
      ([_, measurements]) =>
        d3.min(measurements, (d) => new Date(d.timestamp)) as Date
    )
  )!;

  const xMax = d3.max(
    data.map(
      ([_, measurements]) =>
        d3.max(measurements, (d) => new Date(d.timestamp)) as Date
    )
  )!;

  const x = d3
    .scaleUtc()
    .domain([xMin, xMax])
    .range([margin.left, width - margin.right]);

  const xAxis = (g: any) =>
    g.attr("transform", `translate(0,${height - margin.bottom})`).call(
      d3
        .axisBottom(x)
        .ticks(width / 80)
        .tickSizeOuter(0)
    );

  const svg = d3
    .select(ref.current)
    .append("svg")
    .attr("viewBox", `0,0,${width},${height}`);

  svg.append("g").call(xAxis);

  svg.append("g").call(yAxis);

  data.forEach(([deviceID, measurements]) => {
    const strokeColor = deviceColorMap.get(deviceID) || "#000";
    // draw line for undefined areas
    svg
      .append("path")
      .datum(measurements.filter(line.defined()))
      .attr("fill", "none")
      .attr("stroke", strokeColor)
      .attr("stroke-opacity", 0.6)
      .attr("stroke-dasharray", "4")
      .attr("stroke-width", 1)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", line);

    // draw main line
    svg
      .append("path")
      .datum(measurements)
      .attr("fill", "none")
      .attr("stroke", strokeColor)
      .attr("stroke-width", 1.5)
      .attr("stroke-linejoin", "round")
      .attr("stroke-linecap", "round")
      .attr("d", line);
  });
};

export default drawDiagram;
