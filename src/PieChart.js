import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'chart.js';
let newChart, saveData;

class PieChart extends Component {
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
    let colors = this.props.colors;

    if (colors[0]) {
      let divisor = Math.floor(chartData.length / colors.length) + 1;
      if (divisor > 0) {
        for (let i = 0; i < divisor - 1; i++) {
          colors = [...colors, ...this.props.colors]
        };
      };
    };

    saveData = {
      type: "pie",
      data: {
        labels: labels,
        _datasets: [
          {
            fill: false,
            data: chartData,
            backgroundColor: colors
          }
        ]
      },
      options: {
        title: {
            display: true,
            text: title
        }
      }
    };

    let fullData = {...saveData};
    delete fullData.data;

    fullData.data = {
      labels: labels,
      datasets: [
        {
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
    data: state.grid,
    title: state.title,
    colors: state.colors
  };
};

export default connect(mapStateToProps)(PieChart);
