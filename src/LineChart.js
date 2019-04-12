import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Chart from 'chart.js';
let newChart, saveData, fullData;

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

    let chartData, color, label, labels, max, min, radius, tension, ticks, title, xLabel, yLabel;

    chartData = this.props.data.map(a => {
      return parseFloat(a[1]);
    });

    color = this.props.color;
    label = this.props.label;

    labels = this.props.data.map(a => {
      return a[0];
    });

    max = this.props.max;
    min = this.props.min;
    radius = this.props.radius;
    tension = this.props.tension;
    ticks = this.props.ticks;
    title = this.props.title;
    xLabel = this.props.xLabel;
    yLabel = this.props.yLabel;

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
            lineTension: tension,
            pointRadius: radius
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

    fullData = {...saveData};

    delete fullData.data;
    fullData.data = {
      labels: labels,
      datasets: [
        {
          label: label,
          fill: false,
          data: chartData,
          borderColor: color,
          lineTension: tension,
          pointRadius: radius
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
        {
          this.props.edit
            ?
          <Fragment>
            <button onClick={() => this.props.updateChart(saveData, fullData)}>Save changes</button>
            <button onClick={() => this.props.saveChart(saveData, fullData)}>Save as new chart</button>
          </Fragment>
            :
          <button onClick={() => this.props.saveChart(saveData, fullData)}>Save chart</button>
        }
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    chart: state.chart,
    color: state.color,
    data: state.grid,
    edit: state.edit,
    label: state.label,
    max: state.max,
    min: state.min,
    radius: state.radius,
    tension: state.tension,
    ticks: state.ticks,
    title: state.title,
    xLabel: state.xLabel,
    yLabel: state.yLabel
  };
};

export default connect(mapStateToProps)(LineChart);
