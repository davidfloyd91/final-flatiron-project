import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';


class CustomizationFields extends Component {
  handleSubmit = e => {
    e.preventDefault();
    // what exactly are these next two lines doing?
    this.props.showSetupToFalse(e);
    this.props.showTableToTrue(e);
  };

  handleChange = e => {
    this.props.customize(e);
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
              } {
                this.props.chartType === 'line'
                  ?
                <Fragment>
                  {/* taken from https://www.w3schools.com/colors/colors_wheels.asp */}
                  <label htmlFor='color'> Color </label>
                  <select name='color' onChange={this.handleChange}>
                    <option value='#0080FF'>Light blue</option>
                    <option value='#00FFFF'>Cyan</option>
                    <option value='#0000FF'>Blue</option>
                    <option value='#8000FF'>Purple</option>
                    <option value='#FF00FF'>Magenta</option>
                    <option value='#FF0080'>Red-pink</option>
                    <option value='#FF0000'>Red</option>
                    <option value='#FF8000'>Orange</option>
                    <option value='#FFFF00'>Yellow</option>
                    <option value='#80FF00'>Light green</option>
                    <option value='#00FF00'>Green</option>
                    <option value='#00FF80'>Weird green</option>
                  </select>
                </Fragment>
                  :
                <Fragment>
                  <label> Colors </label>
                  <input onChange={this.handleChange} type='checkbox' name='colors' value='#0080FF' />Light blue
                  <input onChange={this.handleChange} type='checkbox' name='colors' value='#00FFFF' />Cyan
                  <input onChange={this.handleChange} type='checkbox' name='colors' value='#0000FF' />Blue
                  <input onChange={this.handleChange} type='checkbox' name='colors' value='#8000FF' />Purple
                  <input onChange={this.handleChange} type='checkbox' name='colors' value='#FF00FF' />Magenta
                  <input onChange={this.handleChange} type='checkbox' name='colors' value='#FF0080' />Red-pink
                  <input onChange={this.handleChange} type='checkbox' name='colors' value='#FF0000' />Red
                  <input onChange={this.handleChange} type='checkbox' name='colors' value='#FF8000' />Orange
                  <input onChange={this.handleChange} type='checkbox' name='colors' value='#FFFF00' />Yellow
                  <input onChange={this.handleChange} type='checkbox' name='colors' value='#80FF00' />Light green
                  <input onChange={this.handleChange} type='checkbox' name='colors' value='#00FF00' />Green
                  <input onChange={this.handleChange} type='checkbox' name='colors' value='#00FF80' />Weird green
                </Fragment>
              }
            </form>
            {
              this.props.chartType === 'bar'
                ?
              <Fragment>
                {
                  this.props.horizontal
                    ?
                  <button onClick={this.handleChange} name='horizontal'>Switch to vertical bars</button>
                    :
                  <button onClick={this.handleChange} name='horizontal'>Switch to horizontal bars</button>
                }
              </Fragment>
                :
              null
            }
          </Fragment>
            :
          null
        }
      </Fragment>
    );
  };
};

function mapStateToProps(state) {
  return {
    chartType: state.chartType,
    horizontal: state.horizontal
  };
};

export default connect(mapStateToProps)(CustomizationFields);
