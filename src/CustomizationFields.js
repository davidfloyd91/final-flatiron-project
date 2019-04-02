import React, { Component, Fragment } from 'react';

export default class CustomizationFields extends Component {
  handleSubmit = e => {
    e.preventDefault();
    // what exactly are these next two lines doing?
    this.props.showSetupToFalse(e);
    this.props.showTableToTrue(e);
  };

  handleChange = e => {
    this.props.customize(e.target.name, e.target.value);
  };

  render() {
    return (
      <Fragment>
        {
          this.props.chartType[0]
            ?
          <Fragment>
            <h5>Customize your chart</h5>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor='title'>Title </label>
              <input onChange={this.handleChange} name='title' />
              {
                this.props.chartType !== 'pie'
                  ?
                <Fragment>
                  <label htmlFor='label'> Label </label>
                  <input onChange={this.handleChange} name='label' />
                  <label htmlFor='min'> Vertical min </label>
                  <input onChange={this.handleChange} name='min' />
                  <label htmlFor='max'> Vertical max </label>
                  <input onChange={this.handleChange} name='max' />
                  <label htmlFor='ticks'> Tick value </label>
                  <input onChange={this.handleChange} name='ticks' />
                </Fragment>
                  :
                null
              }
            </form>
          </Fragment>
            :
          null
        }
      </Fragment>
    );
  };
};
