import React, { Component, Fragment } from 'react';
import CSVReader from 'react-csv-reader';
import Table from './Table';

export default class CustomizationFields extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.showSetupToFalse();
    this.props.showTableToTrue();
  };

  handleChange = e => {
    if (e.target.name === 'label') {
      this.props.setLabel(e.target.value);
    };
  };

  render() {
    return (
      <Fragment>
        {
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
