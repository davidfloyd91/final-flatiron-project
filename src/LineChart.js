import React, { Component, Fragment } from 'react';
import { Line } from 'react-chartjs-2';

export default class LineChart extends Component {

  render() {
    return (
      <Fragment>
        <Line data={this.props.data} />
      </Fragment>
    );
  };
};
