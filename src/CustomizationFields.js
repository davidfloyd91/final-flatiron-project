import React, { Fragment } from 'react';
import { connect } from 'react-redux';

// currently you can't set min, max or tick size on horizontal charts -- why/how to fix?

// also you need to generally have fields here fill in with the current state values -- when you toggle between vertical and horizontal bars (maybe other situations), the fields are empty but the old values are still in state

const CustomizationFields = props => {

  const handleChange = e => {
    props.customize(e);
  };

  return (
    <div className={(props.chartType === 'pie' || (props.chartType === 'bar' && props.horizontal)) ? 'customizationPanePie' : 'customizationPane'}>
      <h4 className='customizationPaneHeader'>Customize your chart</h4>
      {
        props.chartType[0]
          ?
        <Fragment>
          <div className={(props.chartType === 'pie' || (props.chartType === 'bar' && props.horizontal)) ? 'customizationCardPie left' : 'customizationCard left'}>
            <h4 className='customizationHeader'>Labels</h4>
            <label htmlFor='title' className='smallHead'>Title </label>
            <input onChange={handleChange} name='title' value={props.title} className='customizationInput' />
            {
              props.chartType !== 'pie'
                ?
              <Fragment>
                <label htmlFor='label' className='smallHead'> Line label </label>
                <input onChange={handleChange} name='label' value={props.label} className='customizationInput' />
                <label htmlFor='xLabel' className='smallHead'> Horizontal axis label </label>
                <input onChange={handleChange} name='xLabel' value={props.xLabel} className='customizationInput' />
                <label htmlFor='yLabel' className='smallHead'> Vertical axis label </label>
                <input onChange={handleChange} name='yLabel' value={props.yLabel} className='customizationInput' />
                {
                  props.chartType === 'bar'
                    ?
                  <Fragment>
                    {
                      props.horizontal
                        ?
                      <button className='customizationButton' onClick={handleChange} name='horizontal'>Switch to vertical bars</button>
                        :
                      <button className='customizationButton' onClick={handleChange} name='horizontal'>Switch to horizontal bars</button>
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
          <div className={(props.chartType === 'pie' || (props.chartType === 'bar' && props.horizontal)) ? 'customizationCardPie right' : 'customizationCard right'}>
            <h4 className='customizationHeader'>Display</h4>
            {
              props.chartType === 'line'
                ?
              <Fragment>
                <label htmlFor='tension' className='smallHead'> Line tension </label>
                <input onChange={handleChange} name='tension' placeholder={props.tension} className='customizationInput' />
                <label htmlFor='radius' className='smallHead'> Point radius </label>
                <input onChange={handleChange} name='radius' placeholder={props.radius} className='customizationInput' />
                <label htmlFor='color' className='smallHead'> Color </label>
                <div className='colorsContainer'>
                  <input
                    onChange={handleChange}
                    type='radio'
                    name='color'
                    value='#05c46b'
                  /><div className='colorBox highlighterPink'>HOWDY!!!</div>
                  <input
                    onChange={handleChange}
                    type='radio'
                    name='color'
                    value='#575fcf'
                  /><div className='colorBox darkPeriwinkle'>HOWDY!!!</div>
                  <input
                    onChange={handleChange}
                    type='radio'
                    name='color'
                    value='#4bcffa'
                  /><div className='colorBox megaman'>HOWDY!!!</div>
                  <input
                    onChange={handleChange}
                    type='radio'
                    name='color'
                    value='#34e7e4'
                  /><div className='colorBox freshTurquoise'>HOWDY!!!</div>
                  <input
                    onChange={handleChange}
                    type='radio'
                    name='color'
                    value='#0be881'
                  /><div className='colorBox mintGreen'>HOWDY!!!</div>
                  <input
                    onChange={handleChange}
                    type='radio'
                    name='color'
                    value='#f53b57'
                  /><div className='colorBox sizzlingRed'>HOWDY!!!</div>
                  <input
                    onChange={handleChange}
                    type='radio'
                    name='color'
                    value='#3c40c6'
                  /><div className='colorBox freeSpeechBlue'>HOWDY!!!</div>
                  <input
                    onChange={handleChange}
                    type='radio'
                    name='color'
                    value='#0fbcf9'
                  /><div className='colorBox spiroDiscoBall'>HOWDY!!!</div>
                  <input
                    onChange={handleChange}
                    type='radio'
                    name='color'
                    value='#00d8d6'
                  /><div className='colorBox jadeDust'>HOWDY!!!</div>
                  <input
                    onChange={handleChange}
                    type='radio'
                    name='color'
                    value='#05c46b'
                  /><div className='colorBox greenTeal'>HOWDY!!!</div>
                  <input
                    onChange={handleChange}
                    type='radio'
                    name='color'
                    value='#ffc048'
                  /><div className='colorBox narenjiOrange'>HOWDY!!!</div>
                  <input
                    onChange={handleChange}
                    type='radio'
                    name='color'
                    value='#ffdd59'
                  /><div className='colorBox yrielYellow'>HOWDY!!!</div>
                  <input
                    onChange={handleChange}
                    type='radio'
                    name='color'
                    value='#ff5e57'
                  /><div className='colorBox sunsetOrange'>HOWDY!!!</div>
                  <input
                    onChange={handleChange}
                    type='radio'
                    name='color'
                    value='#ffa801'
                  /><div className='colorBox chromeYellow'>HOWDY!!!</div>
                  <input
                    onChange={handleChange}
                    type='radio'
                    name='color'
                    value='#ffd32a'
                  /><div className='colorBox vibrantYellow'>HOWDY!!!</div>
                  <input
                    onChange={handleChange}
                    type='radio'
                    name='color'
                    value='#ff3f34'
                  /><div className='colorBox redOrange'>HOWDY!!!</div>
                  <input
                    onChange={handleChange}
                    type='radio'
                    name='color'
                    value='#808e9b'
                  /><div className='colorBox londonSquare'>HOWDY!!!</div>
                  <input
                    onChange={handleChange}
                    type='radio'
                    name='color'
                    value='#d2dae2'
                  /><div className='colorBox hintOfElusiveBlue'>HOWDY!!!</div>
                </div>
              </Fragment>
                :
              <Fragment>
                <label className='smallHead'> Colors </label>
                <div className={(props.chartType === 'pie' || (props.chartType === 'bar' && props.horizontal)) ? 'colorsContainerPie' : 'colorsContainer'}>
                <input
                  onChange={handleChange}
                  type='checkbox'
                  name='colors'
                  value='#05c46b'
                  checked={props.colors.includes('#05c46b')}
                /><div className='colorBox highlighterPink'>HOWDY!!!</div>
                <input
                  onChange={handleChange}
                  type='checkbox'
                  name='colors'
                  value='#575fcf'
                  checked={props.colors.includes('#575fcf')}
                /><div className='colorBox darkPeriwinkle'>HOWDY!!!</div>
                <input
                  onChange={handleChange}
                  type='checkbox'
                  name='colors'
                  value='#4bcffa'
                  checked={props.colors.includes('#4bcffa')}
                /><div className='colorBox megaman'>HOWDY!!!</div>
                <input
                  onChange={handleChange}
                  type='checkbox'
                  name='colors'
                  value='#34e7e4'
                  checked={props.colors.includes('#34e7e4')}
                /><div className='colorBox freshTurquoise'>HOWDY!!!</div>
                <input
                  onChange={handleChange}
                  type='checkbox'
                  name='colors'
                  value='#0be881'
                  checked={props.colors.includes('#0be881')}
                /><div className='colorBox mintGreen'>HOWDY!!!</div>
                <input
                  onChange={handleChange}
                  type='checkbox'
                  name='colors'
                  value='#f53b57'
                  checked={props.colors.includes('#f53b57')}
                /><div className='colorBox sizzlingRed'>HOWDY!!!</div>
                <input
                  onChange={handleChange}
                  type='checkbox'
                  name='colors'
                  value='#3c40c6'
                  checked={props.colors.includes('#3c40c6')}
                /><div className='colorBox freeSpeechBlue'>HOWDY!!!</div>
                <input
                  onChange={handleChange}
                  type='checkbox'
                  name='colors'
                  value='#0fbcf9'
                  checked={props.colors.includes('#0fbcf9')}
                /><div className='colorBox spiroDiscoBall'>HOWDY!!!</div>
                <input
                  onChange={handleChange}
                  type='checkbox'
                  name='colors'
                  value='#00d8d6'
                  checked={props.colors.includes('#00d8d6')}
                /><div className='colorBox jadeDust'>HOWDY!!!</div>
                <input
                  onChange={handleChange}
                  type='checkbox'
                  name='colors'
                  value='#05c46b'
                  checked={props.colors.includes('#05c46b')}
                /><div className='colorBox greenTeal'>HOWDY!!!</div>
                <input
                  onChange={handleChange}
                  type='checkbox'
                  name='colors'
                  value='#ffc048'
                  checked={props.colors.includes('#ffc048')}
                /><div className='colorBox narenjiOrange'>HOWDY!!!</div>
                <input
                  onChange={handleChange}
                  type='checkbox'
                  name='colors'
                  value='#ffdd59'
                  checked={props.colors.includes('#ffdd59')}
                /><div className='colorBox yrielYellow'>HOWDY!!!</div>
                <input
                  onChange={handleChange}
                  type='checkbox'
                  name='colors'
                  value='#ff5e57'
                  checked={props.colors.includes('#ff5e57')}
                /><div className='colorBox sunsetOrange'>HOWDY!!!</div>
                <input
                  onChange={handleChange}
                  type='checkbox'
                  name='colors'
                  value='#ffa801'
                  checked={props.colors.includes('#ffa801')}
                /><div className='colorBox chromeYellow'>HOWDY!!!</div>
                <input
                  onChange={handleChange}
                  type='checkbox'
                  name='colors'
                  value='#ffd32a'
                  checked={props.colors.includes('#ffd32a')}
                /><div className='colorBox vibrantYellow'>HOWDY!!!</div>
                <input
                  onChange={handleChange}
                  type='checkbox'
                  name='colors'
                  value='#ff3f34'
                  checked={props.colors.includes('#ff3f34')}
                /><div className='colorBox redOrange'>HOWDY!!!</div>
                <input
                  onChange={handleChange}
                  type='checkbox'
                  name='colors'
                  value='#808e9b'
                  checked={props.colors.includes('#808e9b')}
                /><div className='colorBox londonSquare'>HOWDY!!!</div>
                <input
                  onChange={handleChange}
                  type='checkbox'
                  name='colors'
                  value='#d2dae2'
                  checked={props.colors.includes('#d2dae2')}
                /><div className='colorBox hintOfElusiveBlue'>HOWDY!!!</div>
                </div>
              </Fragment>
            }
          </div>
          <Fragment>
            {
              (props.chartType !== 'pie' && !props.horizontal)
                ?
              <div className='customizationCard center'>
                <h4 className='customizationHeader'>Scales</h4>
                <label htmlFor='min' className='smallHead'> Vertical minimum </label>
                <input onChange={handleChange} name='min' placeholder={props.min} className='customizationInput' />
                <label htmlFor='max' className='smallHead'> Vertical maximum </label>
                <input onChange={handleChange} name='max' placeholder={props.max} className='customizationInput' />
                <label htmlFor='ticks' className='smallHead'> Tick value </label>
                <input onChange={handleChange} name='ticks' placeholder={props.ticks} className='customizationInput' />
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
