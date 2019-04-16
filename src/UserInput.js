import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import CSVReader from 'react-csv-reader';
import Table from './Table';
import CustomizationFields from './CustomizationFields';

const UserInput = props => {
  const handleForce = grid => {
    props.setGrid(grid);
  };

  // const clearChartType = () => {
  //   props.changeChartType('');
  //   props.dispatch({ type: 'SET_INPUT', payload: '' });
  // };

  const handleSubmit = e => {
    e.preventDefault();
    props.dispatch({ type: 'SET_SHOW_TABLE', payload: true });
  };

  const handleClick = chartType => {
    props.dispatch({ type: 'SET_CHART_TYPE', payload: chartType });
  };

  const handleChange = e => {
    if (e.target.name === 'rows') {
      props.dispatch({ type: 'SET_ROWS', payload: e.target.value });
    // } else if (e.target.name === 'columns') {
    //   props.dispatch({ type: 'SET_COLUMNS', payload: e.target.value });
    } else if (e.target.name === 'input') {
      props.dispatch({ type: 'SET_INPUT', payload: e.target.value });
    };
  };

  return (
    <Fragment>
      {
        !props.chartType[0]
          ?
        <div className='center'>
          <div className='card' onClick={() => handleClick('line')}>
            <h5>Line</h5>
            <img className='previewImg' alt='line chart' src='/assets/linePreview.png' />
          </div>
          <div className='card' onClick={() => handleClick('bar')}>
            <h5>Bar</h5>
            <img className='previewImg' alt='bar chart' src='/assets/barPreview.png' />
          </div>
          <div className='card' onClick={() => handleClick('pie')}>
            <h5>Pie</h5>
            <img className='previewImg' alt='pie chart' src='/assets/piePreview.png' />
          </div>
        </div>
          :
        props.chartType[0]
          ?
        <Fragment>
          <CustomizationFields
            showTableToTrue={handleSubmit}
            customize={props.customize}
          />
          <Fragment>
            {
              !props.input[0]
                ?
              <div className='bottom'>
                <h4 className='customizationPaneHeader'>Input your data</h4>
                <label className='smallHeadInline' htmlFor='input'>How would you like to input your data?</label>
                <select name='input' onChange={handleChange}>
                  <option value=''> </option>
                  <option value='csv'>Upload CSV</option>
                  <option value='manual'>Manually</option>
                </select>
              </div>
                :
              props.input === 'csv'
                ?
              <div className='bottom'>
                <h5>Upload your CSV file below:</h5>
                <CSVReader
                  onFileLoaded={handleForce}
                />
              </div>
                :
              props.input === 'manual'
                ?
              <Fragment>
                {
                  props.showTable
                    ?
                  <div className='bottom'>
                    <Table setGrid={props.setGrid} />
                  </div>
                    :
                  <div className='bottom'>
                    <h5>How many rows of data would you like to input?</h5>
                    <form onSubmit={handleSubmit}>
                      <input onChange={handleChange} type='number' min='0' name='rows' placeholder='Number of rows' value={props.rows} />
                      {/*<input onChange={handleChange} type='number' min='0' name='columns' placeholder='Number of columns' value={props.columns} />*/}
                      <input type='submit' value='Go' />
                    </form>
                  </div>
                }
              </Fragment>
                :
              null
            }
          </Fragment>
        </Fragment>
          :
        null
      }
    </Fragment>
  );
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
    showTable: state.showTable
  };
};

export default connect(mapStateToProps)(UserInput);
