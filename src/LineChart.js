// thanks and praise to this guy https://blog.bitsrc.io/customizing-chart-js-in-react-2199fa81530a

import React, { Component } from 'react';
import Chart from 'chart.js';
let newChart, fullData;

export default class LineChart extends Component {
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

    const labels = this.props.data.map(a => {
      return a[0];
    });

    const chartData = this.props.data.map(a => {
      return parseFloat(a[1]);
    });

    const title = this.props.title;
    const label = this.props.label;
    const min = this.props.min;
    const max = this.props.max;
    const ticks = this.props.ticks;
    const color = this.props.color;

    fullData = {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: label,
            fill: false,
            data: chartData,
            borderColor: color
          }
        ]
      },
      options: {
        title: {
            display: true,
            text: title
        },
        scales: {
          yAxes: [{
            ticks: {
              min: parseInt(min),
              max: parseInt(max),
              stepSize: parseInt(ticks)
            }
          }]
        }
      }
    };

    console.log(JSON.stringify(fullData));
    newChart = new Chart(myChartRef, fullData);
  };

  render() {
    return (
      <div>
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
        <button onClick={() => this.props.saveChart(fullData)}>Save chart</button>
      </div>
    );
  };
};
