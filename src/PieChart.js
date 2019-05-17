import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Chart from 'chart.js';
import { convertToFullData } from './helpers';
let newChart, saveData, fullData;

class PieChart extends Component {
  chartRef = React.createRef();

  componentDidMount() {
    this.buildChart();
  };

  componentDidUpdate() {
    this.buildChart();
    if (this.props.pageScroll) {
      window.scrollTo(0, this.props.pageScroll);
    };
  };

  buildChart = () => {
    const myChartRef = this.chartRef.current.getContext("2d");

    if (typeof newChart !== "undefined") {
      newChart.destroy();
    };

    let chartData, colors, labels, title;

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

    fullData = convertToFullData(saveData);

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
    data: state.grid,
    edit: state.edit,
    pageScroll: state.pageScroll,
    title: state.title,
    colors: state.colors
  };
};

export default connect(mapStateToProps)(PieChart);
