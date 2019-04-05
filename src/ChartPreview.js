import React, { Component } from 'react';
import './App.css';

export default class ChartPreview extends Component {
  render() {
    return (
      <div className='card' onClick={() => this.props.showChart(this.props.chartId)}>
        <h5>{this.props.chart.data.options.title.text}</h5>
        {
          this.props.chart.data.type === 'line'
          ? <img className='previewImg' width='150px' src='/assets/linePreview.png' />
          : this.props.chart.data.type === 'bar'
          ? <img className='previewImg' width='180px' src='/assets/barPreview.png' />
          : this.props.chart.data.type === 'pie'
          ? <img className='previewImg' width='180px' src='/assets/piePreview.png' />
          : null
        }
      </div>
    );
  };
};
