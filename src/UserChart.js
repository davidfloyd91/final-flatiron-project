import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from 'chart.js';
let newChart, displayData;

class UserChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    if (this.props.chart) {
      this.props.history.push(`/charts/${this.props.chart.id}`);
      this.buildChart();
    };
  };

  componentDidUpdate() {
    if (this.props.chart) {
      this.props.history.push(`/charts/${this.props.chart.id}`);
      this.buildChart();
    };
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
    const myChartRef = this.chartRef.current.getContext('2d');

    if (typeof newChart !== 'undefined') {
      newChart.destroy();
    };

    newChart = new Chart(myChartRef, this.getDisplayData());
  };

  render() {
    if (this.props.chart) {
      return (
        <div>
          <canvas
            id='myChart'
            ref={this.chartRef}
          />
          <button onClick={this.props.editChart}>Edit chart</button>
          <button onClick={this.props.deleteChart}>Delete chart</button>
        </div>
      );
    } else {
      return null;
    };
  };
};

function mapStateToProps(state) {
  return {
    chart: state.chart
  };
};

export default connect(mapStateToProps)(UserChart);
