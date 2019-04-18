import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Chart from 'chart.js';
let newChart, saveData, fullData;

class BarChart extends Component {
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

    let chartData, colors, label, labelDisplay, labels, max, min, ticks, title, type, xLabel, yLabel;

    chartData = this.props.data.map(a => {
      return parseFloat(a[1]);
    });

    colors = this.props.colors;

    if (colors[0]) {
      let divisor = Math.floor(chartData.length / colors.length) + 1;
      if (divisor > 0) {
        for (let i = 0; i < divisor - 1; i++) {
          colors = [...colors, ...this.props.colors]
        };
      };
    };

    label = this.props.label;
    labelDisplay = this.props.labelDisplay;

    labels = this.props.data.map(a => {
      return a[0];
    });

    max = this.props.max;
    min = this.props.min;
    chartData.forEach(d => {
      if (d >= max) {
        max = d;
        this.props.dispatch({ type: 'SET_MAX', payload: max });
      };

      if (d <= min) {
        min = d;
        this.props.dispatch({ type: 'SET_MIN', payload: min });
      };
    });

    ticks = this.props.ticks;
    title = this.props.title;

    if (this.props.horizontal) {
      type = 'horizontalBar';
    } else {
      type = 'bar';
    };

    xLabel = this.props.xLabel;
    yLabel = this.props.yLabel;

    saveData = {
      type: type,
      data: {
        labels: labels,
        _datasets: [
          {
            label: label,
            fill: false,
            data: chartData,
            backgroundColor: colors
          }
        ]
      },
      options: {
        legend: {
          display: labelDisplay
        },
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
          backgroundColor: colors
        }
      ]
    };

    newChart = new Chart(myChartRef, fullData);
  };

  render() {
    return (
      <div className='chart'>
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
        {
          this.props.edit
            ?
          <Fragment>
            <button className='button' onClick={() => this.props.updateChart(saveData, fullData)}>Save changes</button>
            <button className='button' onClick={() => this.props.saveChart(saveData, fullData)}>Save as new chart</button>
          </Fragment>
            :
          <button className='button' onClick={() => this.props.saveChart(saveData, fullData)}>Save chart</button>
        }
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    chart: state.chart,
    chartType: state.chartType,
    colors: state.colors,
    data: state.grid,
    edit: state.edit,
    horizontal: state.horizontal,
    label: state.label,
    labelDisplay: state.labelDisplay,
    max: state.max,
    min: state.min,
    ticks: state.ticks,
    title: state.title,
    xLabel: state.xLabel,
    yLabel: state.yLabel
  };
};

export default connect(mapStateToProps)(BarChart);
