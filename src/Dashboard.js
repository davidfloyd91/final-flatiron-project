import React, { Component } from 'react';
import ChartPreview from './ChartPreview';
import UserChart from './UserChart';
import './App.css';
let displayData;

export default class Dashboard extends Component {
  state = {
    charts: [],
    chartId: 0,
    chart: null
  };

  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.userId}`)
    .then(r => r.json())
    .then(user => {
      let charts = user.charts;
      this.setState({ charts });
    });
  };

  showChart = chartId => {
    let chart = this.state.charts.find(c => {
      return c.id === chartId;
    });

    this.setState({
      chartId,
      chart
    });
  };

  renderPreviews = () => {
    return this.state.charts.map(chart => {
      return (
        <ChartPreview
          key={chart.id}
          chartId={chart.id}
          showChart={this.showChart}
        />
      );
    });
  };

  displayData = () => {
    let data = {...this.state.chart.data};
    let datasets = [...this.state.chart.data.data._datasets];
    delete data.data._datasets;
    data.data.datasets = datasets;

    return data;
  };

  render() {
    return (
      <div className='container'>
        {this.state.charts ? this.renderPreviews() : null}
        {
          this.state.chartId > 0
            ?
          <UserChart data={this.displayData()} />
            :
          null
        }
      </div>
    );
  };
};
