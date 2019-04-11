import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
let width, height;

class EmbedCode extends Component {
  data = () => {
    return JSON.stringify(this.props.chart.data).replace(/\"/g, '\'').replace('_datasets', 'datasets');
  };

  render() {
    return (
      <div>
        <p>
        &lt;iframe srcdoc="
            &lt;div id='embed_container'&gt;&lt;/div&gt;

            &lt;script src='https://unpkg.com/react@16/umd/react.development.js' crossorigin&gt;&lt;/script&gt;
            &lt;script src='https://unpkg.com/react-dom@16/umd/react-dom.development.js' crossorigin&gt;&lt;/script&gt;
            &lt;script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js' crossorigin&gt;&lt;/script&gt;

            &lt;canvas id='bar-chart' width='1000px' height='800px'&gt;&lt;/canvas&gt;
            &lt;script&gt;
            new Chart(document.getElementById('bar-chart'), {this.data()});
        &lt;/script&gt;" width="1000px" height="800px"&gt;
        &lt;/iframe&gt;
        </p>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    chart: state.chart
  };
};

export default connect(mapStateToProps)(EmbedCode);
