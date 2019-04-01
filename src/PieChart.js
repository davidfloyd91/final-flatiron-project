// thanks and praise to this guy https://blog.bitsrc.io/customizing-chart-js-in-react-2199fa81530a

import React, { Component } from 'react';
import Chart from 'chart.js';
let newChart;

export default class PieChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  };

  componentDidUpdate() {
    this.buildChart();
  };

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");

    if (typeof newChart !== "undefined") {
      newChart.destroy();
    };

    const keys = Object.keys(this.props.data);

    const labels = keys.map(k => {
      return this.props.data[k][0].value;
    });

    const chartData = keys.map(k => {
      return parseInt(this.props.data[k][1].value);
    });

    newChart = new Chart(myChartRef, {
      type: "pie",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Sales",
            fill: false,
            data: chartData,
            borderColor: "#6610f2"
          }
        ]
      },
      options: {

      }
    });
  };

  // this data is structured like you hate data and yourself
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
