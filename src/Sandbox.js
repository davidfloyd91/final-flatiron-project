import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import UserInput from './UserInput';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';
import { autoLogin, setChart, setDefault, setLong, toggleNew, url } from './helpers';
let colors;

// SET_GRID is happening in two different places

class Sandbox extends Component {
  componentDidMount() {
    autoLogin(this.props);
    this.setLongIfChart();
    if (!this.props.new) {
      toggleNew(this.props);
    };
  };

  componentDidUpdate() {
    this.setLongIfChart();
  };

  setLongIfChart = () => {
    if (this.props.chart || this.props.chartType) {
      setLong(true, this.props);
    };
  };

  handleSave = data => {
    setChart(data, this.props);
    setDefault(this.props);
    this.props.history.push(`/charts/${data.id}`);
  };

  discardChart = () => {
    setChart(null, this.props);
    setDefault(this.props);
    setLong(false, this.props);
    if (this.props.edit) {
      this.props.dispatch({ type: 'SET_EDIT', payload: false });
    };
    this.props.history.push('/charts');
  };

  updateChart = data => {
    let okay = false;
    const id = this.props.chart.id;

    fetch(`${url}/charts/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: data
      })
    })
    .then(r => {
      if (r.ok) {
        okay = true;
      };
      return r.json()
    })
    .then(data => {
      if (okay) {
        this.handleSave(data);
      };
    });
  };

  saveChart = data => {
    let okay = false;

    fetch(`${url}/charts`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.props.userId,
        data: data
      })
    })
    .then(r => {
      if (r.ok) {
        okay = true;
      };
      return r.json();
    })
    .then(data => {
      if (okay) {
        this.handleSave(data);
      };
    });
  };

  setGrid = firstGrid => {
    let grid = [];
    let i = 0;

    this.props.dispatch({ type: 'WARN', payload: '' });

    firstGrid.forEach(row => {
      if (row[1] && isNaN(parseFloat(row[1]))) {
        grid.push([row[0], '0']);
        i++;
      } else if (!row[1]) {
        return;
      } else {
        grid.push([...row]);
      };
    });

    this.props.dispatch({ type: 'SET_GRID', payload: grid });

    if (i > 0) {
      this.props.dispatch({
        type: 'WARN', payload: `Warning: ${i} y-value(s) not recognized and set to 0. Consider editing your CSV.`
      });
    };
  };

  customize = (e, scroll) => {
    let name = e.target.name;
    let value = e.target.value;

    if ((name === 'min') &&
    (isNaN(value) || value === '' || value.match(/\s+/))) {
      this.props.dispatch({ type: 'SET_MIN', payload: -10 });
    } else if ((name === 'max') &&
    (isNaN(value) || value === '' || value.match(/\s+/))) {
      this.props.dispatch({ type: 'SET_MAX', payload: 10 });
    } else if ((name === 'ticks') &&
    (isNaN(value) || value === '' || value.match(/\s+/))) {
      this.props.dispatch({ type: 'SET_TICKS', payload: 0 });
    } else if ((name === 'tension') &&
    (isNaN(value) || value === '' || value.match(/\s+/))) {
      this.props.dispatch({ type: 'SET_TENSION', payload: 0.4 });
    } else if ((name === 'radius') &&
    (isNaN(value) || value === '' || value.match(/\s+/))) {
      this.props.dispatch({ type: 'SET_RADIUS', payload: 3 });
    } else if (name === 'colors') {
      if (e.target.checked) {
        colors = [...new Set([...this.props.colors, value])];
      } else {
        let i = this.props.colors.indexOf(value);
        colors = [...this.props.colors.slice(0, i), ...this.props.colors.slice(i + 1)];
      };
      // behavior here isn't ideal: deciding which item is which color requires clicking the checkboxes in the right order
      this.props.dispatch({ type: 'SET_COLORS', payload: colors})
    } else if (name === 'horizontal') {
      this.props.dispatch({ type: 'SET_HORIZONTAL', payload: !this.props.horizontal })
    } else if (name === 'displayLabel') {
      this.props.dispatch({ type: 'TOGGLE_LABEL_DISPLAY' });
    } else {
      this.props.dispatch({ type: 'SET_NAME_TO_VALUE', payload: { key: name, value: value } })
    };

    this.props.dispatch({ type: 'SET_PAGE_SCROLL', payload: scroll });
  };

  render() {
    return (
      <div className='container'>
        {
          this.props.edit
            ?
          <h4 className='customizationPaneHeader'>Edit {this.props.chartType} chart</h4>
            :
          <h4 className='customizationPaneHeader'>New {this.props.chartType} chart</h4>
        } {
            this.props.chartType === 'line'
            ? <LineChart
                saveChart={this.saveChart}
                updateChart={this.updateChart}
              />
            : (this.props.chartType === 'bar' || this.props.chartType === 'horizontalBar')
            ? <BarChart
                saveChart={this.saveChart}
                updateChart={this.updateChart}
              />
            : this.props.chartType === 'pie'
            ? <PieChart
                saveChart={this.saveChart}
                updateChart={this.updateChart}
              />
            : null
        } {
          this.props.chartType[0]
            ?
          <Fragment>
            {
              this.props.edit
                ?
              <button className='button red' onClick={this.discardChart}>Discard changes</button>
                :
              <button className='button red' onClick={this.discardChart}>Discard chart</button>
            }
          </Fragment>
            :
          null
        }
        <UserInput
          setGrid={this.setGrid}
          customize={this.customize}
        />
        {
          this.props.warn && this.props.warn[0]
            ?
          <h5>{this.props.warn}</h5>
            :
          null
        }
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    chart: state.chart,
    chartType: state.chartType,
    colors: state.colors,
    edit: state.edit,
    horizontal: state.horizontal,
    new: state.new,
    userId: state.userId,
    warn: state.warn
  };
};

export default connect(mapStateToProps)(Sandbox);
