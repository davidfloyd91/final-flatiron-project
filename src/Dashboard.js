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
    let okay = false;
    const index = this.props.charts.findIndex(chart => {
      return chart.id === this.props.chartId;
    });

    const charts = [
      ...this.props.charts.slice(0, index),
      ...this.props.charts.slice(index + 1)
    ];

    fetch(`http://localhost:3000/charts/${this.props.chartId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(r => {
      if (r.ok) {
        okay = true;
      };
      return r.json();
    })
    .then(data => {
      if (okay) {
        this.props.dispatch({ type: 'SET_CHART_ID', payload: 0 });
        this.props.dispatch({ type: 'SET_CHARTS', payload: charts });
        this.props.dispatch({ type: 'SET_CHART', payload: null });
      };
    });
  };

  editChart = () => {
    let data = this.props.chart.data;

    let grid = [];
    data.data.labels.forEach(label => {
      grid = [...grid, [label]]
    });

    for (let i = 0; i < grid.length; i++) {
      grid[i] = [...grid[i], data.data.datasets[0].data[i]]
    };

    this.props.dispatch({ type: 'SET_GRID', payload: grid });

    let title = data.options.title.text;
    this.props.dispatch({ type: 'SET_TITLE', payload: title });

    let type = data.type;
    this.props.dispatch({ type: 'SET_CHART_TYPE', payload: type });

    if (type !== 'line') {
      let colors = [...new Set(data.data.datasets[0].backgroundColor)];
      this.props.dispatch({ type: 'SET_COLORS', payload: colors });
    };

    if (type !== 'pie') {
      let horizontal = false;
      if (data.type === 'horizontalBar') {
        horizontal = true;
      };
      this.props.dispatch({ type: 'SET_HORIZONTAL', payload: horizontal });

      let label = data.data.datasets[0].label;
      this.props.dispatch({ type: 'SET_LABEL', payload: label });

      let max = data.options.scales.yAxes[0].ticks.max;
      this.props.dispatch({ type: 'SET_MAX', payload: max });

      let min = data.options.scales.yAxes[0].ticks.min;
      this.props.dispatch({ type: 'SET_MIN', payload: min });

      let ticks = data.options.scales.yAxes[0].ticks.stepSize;
      this.props.dispatch({ type: 'SET_TICKS', payload: ticks });

      let xLabel = data.options.scales.xAxes[0].scaleLabel.labelString;
      this.props.dispatch({ type: 'SET_X_LABEL', payload: xLabel });

      let yLabel = data.options.scales.yAxes[0].scaleLabel.labelString;
      this.props.dispatch({ type: 'SET_Y_LABEL', payload: yLabel });
    };

    if (type === 'line') {
      let color = data.data.datasets[0].borderColor;
      this.props.dispatch({type: 'SET_COLOR', payload: color });
    };

    this.props.dispatch({ type: 'SET_EDIT', payload: true });
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
        <h4 className='center'>Saved charts</h4>
        <div className='previewContainer'>
          {this.props.charts ? this.renderPreviews() : null}
        </div>
        <div className='container'>
          {
            this.props.chartId > 0
              ?
            <Fragment>
              <UserChart data={this.displayData()} />
              <button onClick={this.editChart}>Edit chart</button>
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
    chartId: state.chartId,
    grid: state.grid // just to log it
  };
};

export default connect(mapStateToProps)(Dashboard);
