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
                  <label htmlFor='label' className='smallHead'> Line label </label>
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
                      value='#05c46b'
                    /><div className='colorBox highlighterPink'>O HOWDY</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#575fcf'
                    /><div className='colorBox darkPeriwinkle'>O HOWDY</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#4bcffa'
                    /><div className='colorBox megaman'>O HOWDY</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#34e7e4'
                    /><div className='colorBox freshTurquoise'>O HOWDY</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#0be881'
                    /><div className='colorBox mintGreen'>O HOWDY</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#f53b57'
                    /><div className='colorBox sizzlingRed'>O HOWDY</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#3c40c6'
                    /><div className='colorBox freeSpeechBlue'>O HOWDY</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#0fbcf9'
                    /><div className='colorBox spiroDiscoBall'>O HOWDY</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#00d8d6'
                    /><div className='colorBox jadeDust'>O HOWDY</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#05c46b'
                    /><div className='colorBox greenTeal'>O HOWDY</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#ffc048'
                    /><div className='colorBox narenjiOrange'>O HOWDY</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#ffdd59'
                    /><div className='colorBox yrielYellow'>O HOWDY</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#ff5e57'
                    /><div className='colorBox sunsetOrange'>O HOWDY</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#ffa801'
                    /><div className='colorBox chromeYellow'>O HOWDY</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#ffd32a'
                    /><div className='colorBox vibrantYellow'>O HOWDY</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#ff3f34'
                    /><div className='colorBox redOrange'>O HOWDY</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#808e9b'
                    /><div className='colorBox londonSquare'>O HOWDY</div>
                    <input
                      onChange={this.handleChange}
                      type='radio'
                      name='color'
                      value='#d2dae2'
                    /><div className='colorBox hintOfElusiveBlue'>O HOWDY</div>
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
                    value='#05c46b'
                    checked={this.props.colors.includes('#05c46b')}
                  /><div className='colorBox highlighterPink'>O HOWDY</div>
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#575fcf'
                    checked={this.props.colors.includes('#575fcf')}
                  /><div className='colorBox darkPeriwinkle'>O HOWDY</div>
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#4bcffa'
                    checked={this.props.colors.includes('#4bcffa')}
                  /><div className='colorBox megaman'>O HOWDY</div>
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#34e7e4'
                    checked={this.props.colors.includes('#34e7e4')}
                  /><div className='colorBox freshTurquoise'>O HOWDY</div>
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#0be881'
                    checked={this.props.colors.includes('#0be881')}
                  /><div className='colorBox mintGreen'>O HOWDY</div>
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#f53b57'
                    checked={this.props.colors.includes('#f53b57')}
                  /><div className='colorBox sizzlingRed'>O HOWDY</div>
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#3c40c6'
                    checked={this.props.colors.includes('#3c40c6')}
                  /><div className='colorBox freeSpeechBlue'>O HOWDY</div>
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#0fbcf9'
                    checked={this.props.colors.includes('#0fbcf9')}
                  /><div className='colorBox spiroDiscoBall'>O HOWDY</div>
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#00d8d6'
                    checked={this.props.colors.includes('#00d8d6')}
                  /><div className='colorBox jadeDust'>O HOWDY</div>
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#05c46b'
                    checked={this.props.colors.includes('#05c46b')}
                  /><div className='colorBox greenTeal'>O HOWDY</div>
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#ffc048'
                    checked={this.props.colors.includes('#ffc048')}
                  /><div className='colorBox narenjiOrange'>O HOWDY</div>
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#ffdd59'
                    checked={this.props.colors.includes('#ffdd59')}
                  /><div className='colorBox yrielYellow'>O HOWDY</div>
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#ff5e57'
                    checked={this.props.colors.includes('#ff5e57')}
                  /><div className='colorBox sunsetOrange'>O HOWDY</div>
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#ffa801'
                    checked={this.props.colors.includes('#ffa801')}
                  /><div className='colorBox chromeYellow'>O HOWDY</div>
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#ffd32a'
                    checked={this.props.colors.includes('#ffd32a')}
                  /><div className='colorBox vibrantYellow'>O HOWDY</div>
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#ff3f34'
                    checked={this.props.colors.includes('#ff3f34')}
                  /><div className='colorBox redOrange'>O HOWDY</div>
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#808e9b'
                    checked={this.props.colors.includes('#808e9b')}
                  /><div className='colorBox londonSquare'>O HOWDY</div>
                  <input
                    onChange={this.handleChange}
                    type='checkbox'
                    name='colors'
                    value='#d2dae2'
                    checked={this.props.colors.includes('#d2dae2')}
                  /><div className='colorBox hintOfElusiveBlue'>O HOWDY</div>
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
                  <label htmlFor='min' className='smallHead'> Vertical minimum </label>
                  <input onChange={this.handleChange} name='min' placeholder={this.props.min} className='customizationInput' />
                  <label htmlFor='max' className='smallHead'> Vertical maximum </label>
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
