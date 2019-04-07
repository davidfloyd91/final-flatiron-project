import React, { Component } from 'react';
import './App.css';

export default class ChartPreview extends Component {
  render() {
    return (
      <div className='card' onClick={() => this.props.showChart(this.props.chartId)}>
        <div className='previewHeader'>
          <h5>{this.props.chart.data.options.title.text}</h5>
        </div>
        <div className='previewImgContainer'>
          {
            this.props.chart.data.type === 'line'
            ? <img className='previewImg' alt='line chart' src='/assets/linePreview.png' />
            : (this.props.chart.data.type === 'bar'
            || this.props.chart.data.type === 'horizontalBar')
            ? <img className='previewImg' alt='bar chart' src='/assets/barPreview.png' />
            : this.props.chart.data.type === 'pie'
            ? <img className='previewImg' alt='pie chart' src='/assets/piePreview.png' />
            : null
          }
        </div>
      </div>
    );
  };
};
