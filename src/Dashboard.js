import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ChartPreview from './ChartPreview';
import UserChart from './UserChart';
import './App.css';
let data;

class Dashboard extends Component {
  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.userId}`)
    .then(r => r.json())
    .then(user => {
      let charts = user.charts;
      this.props.dispatch({ type: 'SET_CHARTS', payload: charts });
    });
  };

  deleteChart = () => {
    fetch(`http://localhost:3000/charts/${this.props.chartId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => r.json)
  };

  showChart = chartId => {
    let chart = this.props.charts.find(c => {
      return c.id === chartId;
    });

    this.props.dispatch({ type: 'SET_CHART_ID', payload: chartId });
    this.props.dispatch({ type: 'SET_CHART', payload: chart });
  };

  renderPreviews = () => {
    return this.props.charts.map(chart => {
      return (
        <ChartPreview
          key={chart.id}
          chartId={chart.id}
          chart={chart}
          showChart={this.showChart}
        />
      );
    });
  };

  displayData = () => {
    if (this.props.chart) {
      data = {...this.props.chart.data};
      if (this.props.chart.data.data._datasets) {
        let datasets = [...this.props.chart.data.data._datasets];
        delete data.data._datasets;
        data.data.datasets = datasets;
      };
    };

    return data;
  };

  render() {
    return (
      <div className='container'>
        <div className='previewContainer'>
          {this.props.charts ? this.renderPreviews() : null}
        </div>
        <div className='container'>
          {
            this.props.chartId > 0
              ?
            <Fragment>
              <UserChart data={this.displayData()} />
              <button onClick={this.deleteChart}>Delete chart</button>
            </Fragment>
              :
            <h5 className='center'>Click on a chart above to display it here</h5>
          }
        </div>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    userId: state.userId,
    charts: state.charts,
    chart: state.chart,
    chartId: state.chartId
  };
};

export default connect(mapStateToProps)(Dashboard);
