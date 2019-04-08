import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'chart.js';
let newChart, saveData;

class LineChart extends Component {
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

    const chartData = this.props.data.map(a => {
      return parseFloat(a[1]);
    });

    const color = this.props.color;
    const label = this.props.label;

    const labels = this.props.data.map(a => {
      return a[0];
    });

    const max = this.props.max;
    const min = this.props.min;
    const tension = this.props.tension;
    const ticks = this.props.ticks;
    const title = this.props.title;
    const xLabel = this.props.xLabel;
    const yLabel = this.props.yLabel;

    saveData = {
      type: "line",
      data: {
        labels: labels,
        _datasets: [
          {
            label: label,
            fill: false,
            data: chartData,
            borderColor: color,
            lineTension: tension
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
              min: parseFloat(min),
              max: parseFloat(max),
              stepSize: parseFloat(ticks)
            },
            scaleLabel: {
              display: true,
              labelString: yLabel
            }
          }],
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: xLabel
            }
          }]
        }
      }
    };

    let fullData = {...saveData};
    delete fullData.data;

    fullData.data = {
      labels: labels,
      datasets: [
        {
          label: label,
          fill: false,
          data: chartData,
          borderColor: color,
          lineTension: tension
        }
      ]
    };

    newChart = new Chart(myChartRef, fullData);
  };

  render() {
    return (
      <div>
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
        <button onClick={() => this.props.saveChart(saveData)}>Save chart</button>
        <button onClick={this.props.discardChart}>Discard chart</button>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    color: state.color,
    data: state.grid,
    label: state.label,
    max: state.max,
    min: state.min,
    tension: state.tension,
    ticks: state.ticks,
    title: state.title,
    xLabel: state.xLabel,
    yLabel: state.yLabel
  };
};

export default connect(mapStateToProps)(LineChart);
