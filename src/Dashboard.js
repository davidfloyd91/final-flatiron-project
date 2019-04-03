import React, { Component } from 'react';
import ChartPreview from './ChartPreview';
import './App.css';

export default class Dashboard extends Component {
  state = {
    charts: [],
  };

  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.userId}`)
    .then(r => r.json())
    .then(user => {
      let charts = user.charts;
      console.log(charts);
      this.setState({ charts });
    });
  };

  renderPreviews = () => {
    return this.state.charts.map(chart => {
      return (
        <ChartPreview chartId={chart.id} />
      );
    });
  };

  render() {
    return (
      <div className='container'>
        {this.renderPreviews()}
      </div>
    );
  };
};
