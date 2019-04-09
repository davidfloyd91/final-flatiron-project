import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import CSVReader from 'react-csv-reader';
import Table from './Table';
import CustomizationFields from './CustomizationFields';

class UserInput extends Component {
  handleForce = grid => {
    this.props.setGrid(grid);
  };

  clearChartType = () => {
    this.props.changeChartType('');
    this.props.dispatch({ type: 'SET_INPUT', payload: '' });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch({ type: 'SET_SHOW_SETUP', payload: false });
    this.props.dispatch({ type: 'SET_SHOW_TABLE', payload: true });
  };

  handleClick = chartType => {
    this.props.dispatch({ type: 'SET_CHART_TYPE', payload: chartType });
  };

  handleChange = e => {
    if (e.target.name === 'rows') {
      this.props.dispatch({ type: 'SET_ROWS', payload: e.target.value });
    } else if (e.target.name === 'columns') {
      this.props.dispatch({ type: 'SET_COLUMNS', payload: e.target.value });
    } else if (e.target.name === 'input') {
      this.props.dispatch({ type: 'SET_INPUT', payload: e.target.value });
    };
  };

  render() {
    return (
      <Fragment>
        {
          this.props.showSetup
            ?
          <Fragment>
            {
              !this.props.chartType[0]
                ?
              <div className='center'>
                <div className='card' onClick={() => this.handleClick('line')}>
                  <h5>Line</h5>
                  <img className='previewImg' alt='line chart' src='/assets/linePreview.png' />
                </div>
                <div className='card' onClick={() => this.handleClick('bar')}>
                  <h5>Bar</h5>
                  <img className='previewImg' alt='bar chart' src='/assets/barPreview.png' />
                </div>
                <div className='card' onClick={() => this.handleClick('pie')}>
                  <h5>Pie</h5>
                  <img className='previewImg' alt='pie chart' src='/assets/piePreview.png' />
                </div>
              </div>
                :
              this.props.chartType[0] && !this.props.input[0]
                ?
              <Fragment>
                <button onClick={this.clearChartType}>Change chart type</button>
                <h5>How would you like to input your data?</h5>
                <select name='input' onChange={this.handleChange}>
                  <option value=''> </option>
                  <option value='csv'>Upload CSV</option>
                  <option value='manual'>Manually</option>
                </select>
              </Fragment>
                :
              null
            } {
              this.props.chartType[0] && this.props.input === 'csv'
                ?
              <Fragment>
                <h5>Upload your CSV file below:</h5>
                <CSVReader
                  onFileLoaded={this.handleForce}
                />
              </Fragment>
                :
              this.props.chartType[0] && this.props.input === 'manual'
                ?
              <Fragment>
                <h5>How many rows of data would you like to input?</h5>
                <form onSubmit={this.handleSubmit}>
                  <input onChange={this.handleChange} type='number' min='0' name='rows' placeholder='Number of rows' value={this.props.rows} />
                  {/*<input onChange={this.handleChange} type='number' min='0' name='columns' placeholder='Number of columns' value={this.props.columns} />*/}
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
          this.props.showTable
            ?
          <Fragment>
            <h5>What data would you like to display?</h5>
            <Table setGrid={this.props.setGrid} />
          </Fragment>
            :
          null
        }
        <CustomizationFields
          showSetupToFalse={this.handleSubmit}
          showTableToTrue={this.handleSubmit}
          customize={this.props.customize}
        />
      </Fragment>
    );
  };
};

function mapStateToProps(state) {
  return {
    chart: state.chart,
    chartType: state.chartType,
    columns: state.columns,
    edit: state.edit,
    horizontal: state.horizontal,
    input: state.input,
    rows: state.rows,
    showSetup: state.showSetup,
    showTable: state.showTable
  };
};

export default connect(mapStateToProps)(UserInput);
