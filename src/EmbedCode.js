import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

class EmbedCode extends Component {
  embedRef = React.createRef();

  data = () => {
    if (this.props.chart) {
      const data = this.props.chart.data;
      if (data.data._datasets) {
        return this.convertToEmbedCode(data);
      } else if (data.data.datasets) {
        const datasets = data.data.datasets;
        data.data._datasets = datasets;
        delete data.data.dastasets;
        return this.convertToEmbedCode(data);
      };
    };
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
    const embedCode = this.data();

    if (embedCode) {
      const copyData = `<iframe srcdoc="<div id='embed_container'></div><script src='https://unpkg.com/react@16/umd/react.development.js' crossorigin></script><script src='https://unpkg.com/react-dom@16/umd/react-dom.development.js' crossorigin></script><script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js' crossorigin></script><canvas id='salp-chart' width='1000px' height='800px'></canvas><script>new Chart(document.getElementById('salp-chart'),${embedCode});</script>" width="1000px" height="800px"></iframe>`;

      return (
        <Fragment>
          <h5>Click below to copy your chart's embed code:</h5>
          <textarea
            className='embedCode'
            onClick={this.handleClick}
            ref={code => {
              this.embedRef = code;
            }}
            value={copyData}
          />
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
