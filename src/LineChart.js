import React, { Component, Fragment } from 'react';
import { Line } from 'react-chartjs-2';

export default class LineChart extends Component {

  // this data is structured like you hate data and yourself
  render() {
    const keys = Object.keys(this.props.data);

    const labels = keys.map(k => {
      return this.props.data[k][0].value;
    });

    const chartData = keys.map(k => {
      return parseInt(this.props.data[k][1].value);
    });

    const data = {
      labels: labels,
      datasets: [
        {
          label: 'My First dataset',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: chartData
        }
      ]
    };

    return (
      <Fragment>
        <Line data={data} />
      </Fragment>
    );
  };
};
