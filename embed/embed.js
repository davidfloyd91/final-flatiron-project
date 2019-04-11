'use strict';

// this is just example code lifted from https://blog.bitsrc.io/customizing-chart-js-in-react-2199fa81530a to test the ability to embed via script tags
// set up babel thingy:
// $ npm init -y
// $ npm install babel-cli@6 babel-preset-react-app@3
// $ npx babel --watch embed --out-dir . --presets react-app/prod

class Funnnn extends React.Component {
  chartRef = React.createRef();

  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext("2d");
    new Chart(myChartRef, {type: "pie", data: {labels: ["Jan", "Feb", "March"], datasets: [{data: [86, 67, 91]}]}});
  };

  render() {
    return (
      <div>
        <canvas
          id="myChart"
          ref={this.chartRef}
        />
      </div>
    );
  };
};

let domContainer = document.querySelector('#embed_container');
ReactDOM.render(<Funnnn />, domContainer);
