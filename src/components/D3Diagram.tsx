import React from "react";
import * as d3 from "d3";
import Measurement from "../../functions/src/models/Measurement";

interface D3DiagramProps {
  data: Measurement[];
  deviceColorMap: Map<string, string>;
}

class D3Diagram extends React.Component<D3DiagramProps, {}> {
  constructor(props: D3DiagramProps) {
    super(props);
    this.d3Ref = React.createRef();
  }

  d3Ref: React.RefObject<HTMLDivElement>;

  componentDidMount() {
    const data = this.props.data;
    let dataSortedByDevice = new Map<string, Measurement[]>();

    data.forEach((d) => {
      const id = d.device.guid;
      if (dataSortedByDevice.has(id)) {
        // non-null assertion ! due to .has(id) above
        dataSortedByDevice.get(id)!.push(d);
      } else {
        dataSortedByDevice.set(id, [d]);
      }
    });

    const width = 500;
    const height = 500;
    const margin = { top: 16, right: 32, bottom: 32, left: 40 };

    const line = d3
      .line()
      .x((d) => x(new Date(((d as unknown) as Measurement).timestamp)))
      .y((d) => y(((d as unknown) as Measurement).value));

    const y = d3
      .scaleLinear()
      .domain([
        d3.min(data, (d) => d.value) as number,
        d3.max(data, (d) => d.value) as number,
      ])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const yAxis = (g: any) =>
      g.attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(y));

    const x = d3
      .scaleUtc()
      .domain(d3.extent(data, (d) => new Date(d.timestamp)) as [Date, Date])
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

      dataSortedByDevice.forEach((d, id) => {
        svg
          .append("path")
          .datum(d as any)
          .attr("fill", "none")
          .attr("stroke", this.props.deviceColorMap.get(id) || "#000")
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
