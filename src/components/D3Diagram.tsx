import React from "react";
import * as d3 from "d3";
import Measurement from "../../functions/src/models/Measurement";
import { MeasurementsByDevice } from "../../functions/src/models/MeasurementsByDevice";

interface D3DiagramProps {
  data: MeasurementsByDevice;
  deviceColorMap: Map<string, string>;
}

class D3Diagram extends React.Component<D3DiagramProps, {}> {
  constructor(props: D3DiagramProps) {
    super(props);
    this.d3Ref = React.createRef();
  }

  d3Ref: React.RefObject<HTMLDivElement>;

  componentDidMount() {
    const { data } = this.props;

    const width = 500;
    const height = 500;
    const margin = { top: 16, right: 32, bottom: 32, left: 40 };

    const line = d3
      .line<Measurement>()
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

    const chart = () => {
      const svg = d3
        .select(this.d3Ref.current)
        .append("svg")
        .attr("viewBox", `0,0,${width},${height}`);

      svg.append("g").call(xAxis);

      svg.append("g").call(yAxis);

      data.forEach(([deviceID, measurements]) => {
        svg
          .append("path")
          .datum(measurements)
          .attr("fill", "none")
          .attr("stroke", this.props.deviceColorMap.get(deviceID) || "#000")
          .attr("stroke-width", 1.5)
          .attr("stroke-linejoin", "round")
          .attr("stroke-linecap", "round")
          .attr("d", line);
      });

      return svg.node();
    };

    chart();
  }

  render() {
    return (
      <div style={{ width: "100%", height: "100%" }} ref={this.d3Ref}></div>
    );
  }
}

export default D3Diagram;
