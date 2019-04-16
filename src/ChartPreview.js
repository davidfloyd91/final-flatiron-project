import React from 'react';
import './App.css';

const ChartPreview = props => {
  return (
    <div className='card' onClick={props.showChart}>
      <div className='previewHeader'>
        <h5>{props.chart.data.options.title.text}</h5>
      </div>
      <div className='previewImgContainer'>
        {
          props.chart.data.type === 'line'
          ? <img className='previewImg' alt='line chart' src='/assets/linePreview.png' />
          : (props.chart.data.type === 'bar'
          || props.chart.data.type === 'horizontalBar')
          ? <img className='previewImg' alt='bar chart' src='/assets/barPreview.png' />
          : props.chart.data.type === 'pie'
          ? <img className='previewImg' alt='pie chart' src='/assets/piePreview.png' />
          : null
        }
      </div>
    </div>
  );
};

export default ChartPreview;
