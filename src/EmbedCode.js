import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
let embedCode;

class EmbedCode extends Component {
  embedRef = React.createRef();

  data = () => {
    if (this.props.chart) {
      let data = {...this.props.chart.data};
      if (this.props.chart.data.data.datasets) {
        const datasets = [...this.props.chart.data.data.datasets];
        delete data.data.datasets;
        data.data._datasets = datasets;
      };

      embedCode = this.convertToEmbedCode(data);
    };

    return embedCode;
  };

  convertToEmbedCode = data => {
    return JSON.stringify(data)
    .replace(/'/g, '\\\'')
    .replace(/"/g, '\'')
    .replace('_datasets', 'datasets');
  };

  handleClick = () => {
    this.embedRef.select();
    document.execCommand('copy');
  };

  render() {
    if (this.data()) {
      const copyData = `<iframe srcdoc="<div id='embed_container'></div><script src='https://unpkg.com/react@16/umd/react.development.js' crossorigin></script><script src='https://unpkg.com/react-dom@16/umd/react-dom.development.js' crossorigin></script><script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js' crossorigin></script><canvas id='salp-chart' width='800px' height='600px'></canvas><script>new Chart(document.getElementById('salp-chart'),${embedCode});</script>" width="800px" height="650px"></iframe>`

      return (
        <Fragment>
          <h5>Click below to copy your chart's embed code:</h5>
          <textarea className='embedCode' value={copyData} onClick={this.handleClick} ref={code => {this.embedRef = code;}} />
        </Fragment>
      );
    } else {
      return null;
    };
  };
};
function mapStateToProps(state) {
  return {
    chart: state.chart
  };
};
export default connect(mapStateToProps)(EmbedCode);
