import React, { Component } from 'react';
import Chart from 'chart.js';
let newChart;

export default class UserChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    fetch(`http://localhost:3000/charts/${this.props.chartId}`)
    .then(r => r.json())
    .then(chart => {console.log(chart); this.buildChart(chart.data)});
  };

  componentDidUpdate() {
    this.buildChart();
  };

  buildChart = data => {
    const myChartRef = this.chartRef.current.getContext("2d");

    if (typeof newChart !== "undefined") {
      newChart.destroy();
    };

    newChart = new Chart(myChartRef, data);
  };

  render() {
    return (
      <div>
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    );
  };
};
