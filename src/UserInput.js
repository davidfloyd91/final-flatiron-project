import React, { Component, Fragment } from 'react';
import Table from './Table';

export default class UserInput extends Component {
  state = {
    chartType: '',
    showSetup: true,
    showTable: false,
    rows: 0,
    columns: 2,
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      showSetup: false,
      showTable: true,
    });
  };

  handleChange = e => {
    if (e.target.name === 'rows') {
      this.setState({
        rows: e.target.value,
      });
    } else if (e.target.name === 'columns') {
      this.setState({
        columns: e.target.value,
      });
    } else if (e.target.name === 'chartType') {
      this.setState({
        chartType: e.target.value,
      });
      this.props.chartType(e.target.value);
    };
  };

  render() {
    return (
      <Fragment>
        {
          this.state.showSetup
            ?
          <Fragment>
            <h5>What kind of chart would you like to make?</h5>
            <select name='chartType' onChange={this.handleChange}>
              <option value=''></option>
              <option value='line'>Line</option>
              <option value='bar'>Bar</option>
              <option value='pie'>Pie</option>
            </select>
            {
              this.state.chartType[0]
                ?
              <Fragment>
                <h5>How many rows of data would you like to input?</h5>
                <form onSubmit={this.handleSubmit}>
                  <input onChange={this.handleChange} type='number' min='0' name='rows' placeholder='Number of rows' value={this.state.rows} />
                  {/*<input onChange={this.handleChange} type='number' min='0' name='columns' placeholder='Number of columns' value={this.state.columns} />*/}
                  <input type='submit' value='Go' />
                </form>
              </Fragment>
                :
              null
            }
          </Fragment>
            :
          null
        } {
          this.state.showTable
            ?
          <Fragment>
            <h5>What data would you like to display?</h5>
            <Table
              x={this.state.rows}
              y={this.state.columns}
              setGrid={this.props.setGrid}
            />
          </Fragment>
            :
          null
        }
      </Fragment>
    );
  };
};
