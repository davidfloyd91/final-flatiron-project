import React, { Component, Fragment } from 'react';
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

    let chartData, colors, fullData, labels, title;

    labels = this.props.data.map(a => {
      return a[0];
    });

    chartData = this.props.data.map(a => {
      return parseFloat(a[1]);
    });

    title = this.props.title;
    colors = this.props.colors;

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

    fullData = {...saveData};

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
        {
          this.props.edit
            ?
          <Fragment>
            <button onClick={() => this.props.updateChart(saveData)}>Save changes</button>
            <button onClick={() => this.props.saveChart(saveData)}>Save as new chart</button>
          </Fragment>
            :
          <button onClick={() => this.props.saveChart(saveData)}>Save chart</button>
        }
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    chart: state.chart,
    data: state.grid,
    edit: state.edit,
    title: state.title,
    colors: state.colors
  };
};

export default connect(mapStateToProps)(PieChart);
