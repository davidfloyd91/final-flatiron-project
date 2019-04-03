import React, { Component } from 'react';
import './App.css';

export default class ChartPreview extends Component {
  render() {
    return (
      <div onClick={() => this.props.showChart(this.props.chartId)}>
        <h5>Hello I'm chart {this.props.chartId}</h5>
      </div>
    );
  };
};
