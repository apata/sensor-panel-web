import React from "react";
import * as d3 from "d3";

class D3Diagram extends React.Component {
  constructor(props) {
    super(props);
    this.d3Ref = React.createRef();
  }

  componentDidMount() {
    const data = this.props.data;
    const width = 500;
    const height = 500;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const line = d3
      .line()
      .x((d) => x(new Date(d.timestamp)))
      .y((d) => y(d.value));

    const y = d3
      .scaleLinear()
      .domain([d3.min(data, (d) => d.value), d3.max(data, (d) => d.value)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const yAxis = (g) =>
      g.attr("transform", `translate(${margin.left},0)`).call(d3.axisLeft(y));

    const x = d3
      .scaleUtc()
      .domain(d3.extent(data, (d) => new Date(d.timestamp)))
      .range([margin.left, width - margin.right]);

    const xAxis = (g) =>
      g.attr("transform", `translate(0,${height - margin.bottom})`).call(
        d3
          .axisBottom(x)
          .ticks(width / 80)
          .tickSizeOuter(0)
      );

    const chart = () => {
      const svg = d3.select(this.d3Ref.current).append("svg").attr("viewBox", [0, 0, width, height]);

      svg.append("g").call(xAxis);

      svg.append("g").call(yAxis);

      svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", "steelblue")
        .attr("stroke-width", 1.5)
        .attr("stroke-linejoin", "round")
        .attr("stroke-linecap", "round")
        .attr("d", line);
      return svg.node();
    };

    chart()
  }

  render() {
    return <div style={{width: "100%", height: "100%"}} ref={this.d3Ref}></div>;
  }
}
export default D3Diagram;
