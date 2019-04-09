import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'chart.js';
let newChart, displayData;

class UserChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  };

  componentDidUpdate() {
    this.buildChart();
  };

  getDisplayData = () => {
    if (this.props.chart) {
      displayData = {...this.props.chart.data};
      if (this.props.chart.data.data._datasets) {
        let datasets = [...this.props.chart.data.data._datasets];
        delete displayData.data._datasets;
        displayData.data.datasets = datasets;
      };
    };

    return displayData;
  };

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");

    if (typeof newChart !== "undefined") {
      newChart.destroy();
    };

    newChart = new Chart(myChartRef, this.getDisplayData());
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

function mapStateToProps(state) {
  return {
    chart: state.chart
  };
};

export default connect(mapStateToProps)(UserChart);
