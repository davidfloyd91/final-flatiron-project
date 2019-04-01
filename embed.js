'use strict';

// this is just example code lifted from https://blog.bitsrc.io/customizing-chart-js-in-react-2199fa81530a to test the ability to embed via script tags

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LineGraph = function (_React$Component) {
    _inherits(LineGraph, _React$Component);

    function LineGraph() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, LineGraph);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LineGraph.__proto__ || Object.getPrototypeOf(LineGraph)).call.apply(_ref, [this].concat(args))), _this), _this.chartRef = React.createRef(), _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(LineGraph, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var myChartRef = this.chartRef.current.getContext("2d");

            new Chart(myChartRef, {
                type: "line",
                data: {
                    //Bring in data
                    labels: ["Jan", "Feb", "March"],
                    datasets: [{
                        label: "Sales",
                        data: [86, 67, 91]
                    }]
                },
                options: {
                    //Customize chart options
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement("canvas", {
                    id: "myChart",
                    ref: this.chartRef
                })
            );
        }
    }]);

    return LineGraph;
}(React.Component);

var domContainer = document.querySelector('#embed_container');
ReactDOM.render(React.createElement(LineGraph, null), domContainer);