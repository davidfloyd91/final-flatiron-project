import React, { Component, Fragment } from 'react';
import CSVReader from 'react-csv-reader';
import Table from './Table';

export default class UserInput extends Component {
  state = {
    input: '',
    showSetup: true,
    showTable: false,
    rows: 10,
    columns: 2,
  };

  handleForce = grid => {
    this.props.setGrid(grid);
  };

  clearChartType = () => {
    this.props.changeChartType('');
    this.setState({
      input: '',
    });
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
      this.props.changeChartType(e.target.value);
    } else if (e.target.name === 'input') {
      this.setState({
        input: e.target.value,
      });
    } else if (e.target.name === 'label') {
      this.props.setLabel(e.target.value);
    };
  };

  render() {
    return (
      <Fragment>
        {
          this.state.showSetup
            ?
          <Fragment>
            {
              !this.props.chartType[0]
                ?
              <Fragment>
                <h5>What kind of chart would you like to make?</h5>
                <select name='chartType' onChange={this.handleChange}>
                  <option value=''></option>
                  <option value='line'>Line</option>
                  <option value='bar'>Bar</option>
                  <option value='pie'>Pie</option>
                </select>
              </Fragment>
                :
              this.props.chartType[0] && !this.state.input[0]
                ?
              <Fragment>
                <button onClick={this.clearChartType}>Change chart type</button>
                <h5>How would you like to input your data?</h5>
                <select name='input' onChange={this.handleChange}>
                  <option value=''></option>
                  <option value='csv'>Upload CSV</option>
                  <option value='manual'>Manually</option>
                </select>
              </Fragment>
                :
              null
            } {
              this.props.chartType[0] && this.state.input === 'csv'
                ?
              <Fragment>
                <h5>Upload your CSV file below:</h5>
                <CSVReader
                  onFileLoaded={this.handleForce}
                />
              </Fragment>
                :
              this.props.chartType[0] && this.state.input === 'manual'
                ?
              <Fragment>
                <h5>How many rows of data would you like to input?</h5>
                <form onSubmit={this.handleSubmit}>
                  <input onChange={this.handleChange} type='number' min='1' name='rows' placeholder='Number of rows' value={this.state.rows} />
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
        } {
          this.props.chartType[0] && this.props.chartType !== 'pie'
            ?
          <Fragment>
            <h5>What would you like to label your data?</h5>
            <form onSubmit={this.handleSubmit}>
              <input onChange={this.handleChange} name='label' />
            </form>
          </Fragment>
            :
          null
        }
      </Fragment>
    );
  };
};
