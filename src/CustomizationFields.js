import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// currently you can't set min, max or tick size on horizontal charts -- why/how to fix?

// also you need to generally have fields here fill in with the current state values -- when you toggle between vertical and horizontal bars (maybe other situations), the fields are empty but the old values are still in state

class CustomizationFields extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.showSetupToFalse(e);
    this.props.showTableToTrue(e);
  };

  handleChange = e => {
    this.props.customize(e);
  };

  render() {
    return (
      <div className='customizationPane'>
        <h4 className='customizationPaneHeader'>Customize your chart</h4>
        {
          this.props.chartType[0]
            ?
          <Fragment>
            <form onSubmit={this.handleSubmit}>
              <div className='customizationCard left'>
                <h4 className='customizationHeader'>Labels</h4>
                <label htmlFor='title'>Title </label>
                <input onChange={this.handleChange} name='title' />
                {
                  this.props.chartType !== 'pie'
                    ?
                  <Fragment>
                    <label htmlFor='label'> Label </label>
                    <input onChange={this.handleChange} name='label' />
                    <label htmlFor='xLabel'> Horizontal axis label </label>
                    <input onChange={this.handleChange} name='xLabel' />
                    <label htmlFor='yLabel'> Vertical axis label </label>
                    <input onChange={this.handleChange} name='yLabel' />
                  </Fragment>
                    :
                  null
                }
            </div>
            <div className='customizationCard'>
              <h4 className='customizationHeader'>Scales</h4>
              {
                this.props.horizontal
                  ?
                null
                  :
                <Fragment>
                  <label htmlFor='min'> Vertical min </label>
                  <input onChange={this.handleChange} name='min' placeholder={this.props.min} />
                  <label htmlFor='max'> Vertical max </label>
                  <input onChange={this.handleChange} name='max' placeholder={this.props.max} />
                  <label htmlFor='ticks'> Tick value </label>
                  <input onChange={this.handleChange} name='ticks' />
                </Fragment>
              }
            </div>
            <div className='customizationCard'>
              <h4 className='customizationHeader'>Line</h4>
              {
                this.props.chartType === 'line'
                  ?
                <Fragment>
                  {/* taken from https://www.w3schools.com/colors/colors_wheels.asp */}
                  <label htmlFor='tension'> Line tension </label>
                  <input onChange={this.handleChange} name='tension' placeholder={this.props.tension} />
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
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#0080FF'
                    checked={this.props.colors.includes('#0080FF')}
                  />Light blue |
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#00FFFF'
                    checked={this.props.colors.includes('#00FFFF')}
                  />Cyan |
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#0000FF'
                    checked={this.props.colors.includes('#0000FF')}
                  />Blue |
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#8000FF'
                    checked={this.props.colors.includes('#8000FF')}
                  />Purple |
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#FF00FF'
                    checked={this.props.colors.includes('#FF00FF')}
                  />Magenta |
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#FF0080'
                    checked={this.props.colors.includes('#FF0080')}
                  />Red-pink |
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#FF0000'
                    checked={this.props.colors.includes('#FF0000')}
                  />Red |
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#FF8000'
                    checked={this.props.colors.includes('#FF8000')}
                  />Orange |
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#FFFF00'
                    checked={this.props.colors.includes('#FFFF00')}
                  />Yellow |
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#80FF00'
                    checked={this.props.colors.includes('#80FF00')}
                  />Light green |
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#00FF00'
                    checked={this.props.colors.includes('#00FF00')}
                  />Green |
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#00FF80'
                    checked={this.props.colors.includes('#00FF80')}
                  />Weird green |
                </Fragment>
              }
            </div>
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
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    colors: state.colors,
    chartType: state.chartType,
    horizontal: state.horizontal,
    max: state.max,
    min: state.min,
    tension: state.tension,
  };
};

export default connect(mapStateToProps)(CustomizationFields);
