import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// currently you can't set min, max or tick size on horizontal charts -- why/how to fix?

// also you need to generally have fields here fill in with the current state values -- when you toggle between vertical and horizontal bars (maybe other situations), the fields are empty but the old values are still in state

class CustomizationFields extends Component {

  handleChange = e => {
    this.props.customize(e);
  };

  render() {
    return (
      <div className={(this.props.chartType === 'pie' || (this.props.chartType === 'bar' && this.props.horizontal)) ? 'customizationPanePie' : 'customizationPane'}>
        <h4 className='customizationPaneHeader'>Customize your chart</h4>
        {
          this.props.chartType[0]
            ?
          <Fragment>
            <div className={(this.props.chartType === 'pie' || (this.props.chartType === 'bar' && this.props.horizontal)) ? 'customizationCardPie left' : 'customizationCard left'}>
              <h4 className='customizationHeader'>Labels</h4>
              <label htmlFor='title' className='smallHead'>Title </label>
              <input onChange={this.handleChange} name='title' value={this.props.title} className='customizationInput' />
              {
                this.props.chartType !== 'pie'
                  ?
                <Fragment>
                  <label htmlFor='label' className='smallHead'> Label </label>
                  <input onChange={this.handleChange} name='label' value={this.props.label} className='customizationInput' />
                  <label htmlFor='xLabel' className='smallHead'> Horizontal axis label </label>
                  <input onChange={this.handleChange} name='xLabel' value={this.props.xLabel} className='customizationInput' />
                  <label htmlFor='yLabel' className='smallHead'> Vertical axis label </label>
                  <input onChange={this.handleChange} name='yLabel' value={this.props.yLabel} className='customizationInput' />
                  {
                    this.props.chartType === 'bar'
                      ?
                    <Fragment>
                      {
                        this.props.horizontal
                          ?
                        <button className='customizationButton' onClick={this.handleChange} name='horizontal'>Switch to vertical bars</button>
                          :
                        <button className='customizationButton' onClick={this.handleChange} name='horizontal'>Switch to horizontal bars</button>
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
            <div className={(this.props.chartType === 'pie' || (this.props.chartType === 'bar' && this.props.horizontal)) ? 'customizationCardPie right' : 'customizationCard right'}>
              <h4 className='customizationHeader'>Line</h4>
              {
                this.props.chartType === 'line'
                  ?
                <Fragment>
                  {/* taken from https://www.w3schools.com/colors/colors_wheels.asp */}
                  <label htmlFor='tension' className='smallHead'> Line tension </label>
                  <input onChange={this.handleChange} name='tension' placeholder={this.props.tension} className='customizationInput' />
                  <label htmlFor='radius' className='smallHead'> Point radius </label>
                  <input onChange={this.handleChange} name='radius' placeholder={this.props.radius} className='customizationInput' />
                  <label htmlFor='color' className='smallHead'> Color </label>
                  <div className='colorsContainer'>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#0080FF'
                      selected={this.props.color === '#0080FF'}
                    /><div className='colorBox lightBlue'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#00FFFF'
                    /><div className='colorBox cyan'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#0000FF'
                    /><div className='colorBox blue'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#8000FF'
                    /><div className='colorBox purple'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#FF00FF'
                    /><div className='colorBox magenta'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#FF0080'
                    /><div className='colorBox redPink'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#FF0000'
                    /><div className='colorBox red'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#FF8000'
                    /><div className='colorBox orange'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#FFFF00'
                    /><div className='colorBox yellow'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#80FF00'
                    /><div className='colorBox lightGreen'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#00FF00'
                    /><div className='colorBox green'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#00FF80'
                    /><div className='colorBox weirdGreen'>FILLTEXT</div>
                  </div>
                </Fragment>
                  :
                <Fragment>
                  <label className='smallHead'> Colors </label>
                  <div className={(this.props.chartType === 'pie' || (this.props.chartType === 'bar' && this.props.horizontal)) ? 'colorsContainerPie' : 'colorsContainer'}>
                    <input
                      onChange={this.handleChange}
                      type='checkbox'
                      name='colors'
                      value='#0080FF'
                      checked={this.props.colors.includes('#0080FF')}
                    /><div className='colorBox lightBlue'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='checkbox'
                      name='colors'
                      value='#00FFFF'
                      checked={this.props.colors.includes('#00FFFF')}
                    /><div className='colorBox cyan'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='checkbox'
                      name='colors'
                      value='#0000FF'
                      checked={this.props.colors.includes('#0000FF')}
                    /><div className='colorBox blue'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='checkbox'
                      name='colors'
                      value='#8000FF'
                      checked={this.props.colors.includes('#8000FF')}
                    /><div className='colorBox purple'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='checkbox'
                      name='colors'
                      value='#FF00FF'
                      checked={this.props.colors.includes('#FF00FF')}
                    /><div className='colorBox magenta'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='checkbox'
                      name='colors'
                      value='#FF0080'
                      checked={this.props.colors.includes('#FF0080')}
                    /><div className='colorBox redPink'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='checkbox'
                      name='colors'
                      value='#FF0000'
                      checked={this.props.colors.includes('#FF0000')}
                    /><div className='colorBox red'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='checkbox'
                      name='colors'
                      value='#FF8000'
                      checked={this.props.colors.includes('#FF8000')}
                    /><div className='colorBox orange'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='checkbox'
                      name='colors'
                      value='#FFFF00'
                      checked={this.props.colors.includes('#FFFF00')}
                    /><div className='colorBox yellow'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='checkbox'
                      name='colors'
                      value='#80FF00'
                      checked={this.props.colors.includes('#80FF00')}
                    /><div className='colorBox lightGreen'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='checkbox'
                      name='colors'
                      value='#00FF00'
                      checked={this.props.colors.includes('#00FF00')}
                    /><div className='colorBox green'>FILLTEXT</div>
                    <input
                      onChange={this.handleChange}
                      type='checkbox'
                      name='colors'
                      value='#00FF80'
                      checked={this.props.colors.includes('#00FF80')}
                    /><div className='colorBox weirdGreen'>FILLTEXT</div>
                  </div>
                </Fragment>
              }
            </div>
            <Fragment>
              {
                (this.props.chartType !== 'pie' && !this.props.horizontal)
                  ?
                <div className='customizationCard center'>
                  <h4 className='customizationHeader'>Scales</h4>
                  <label htmlFor='min' className='smallHead'> Vertical min </label>
                  <input onChange={this.handleChange} name='min' placeholder={this.props.min} className='customizationInput' />
                  <label htmlFor='max' className='smallHead'> Vertical max </label>
                  <input onChange={this.handleChange} name='max' placeholder={this.props.max} className='customizationInput' />
                  <label htmlFor='ticks' className='smallHead'> Tick value </label>
                  <input onChange={this.handleChange} name='ticks' placeholder={this.props.ticks} className='customizationInput' />
                </div>
                  :
                null
              }
            </Fragment>
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
    color: state.color,
    colors: state.colors,
    chartType: state.chartType,
    horizontal: state.horizontal,
    label: state.label,
    max: state.max,
    min: state.min,
    radius: state.radius,
    tension: state.tension,
    ticks: state.ticks,
    title: state.title,
    xLabel: state.xLabel,
    yLabel: state.yLabel
  };
};

export default connect(mapStateToProps)(CustomizationFields);
