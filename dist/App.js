"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Donut = _interopRequireDefault(require("./Donut/Donut"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    style: {
      maxWidth: 960,
      margin: '0 auto'
    }
  }, /*#__PURE__*/_react.default.createElement("header", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/_react.default.createElement("h1", null, "React Spinning Donut"), /*#__PURE__*/_react.default.createElement("p", null, "This is a React component that renders an engaging, spinning donut using ASCII art. This project represents an interesting blend of art and technology, leveraging both the power of JavaScript and the aesthetics of ASCII art to create a dynamic visual component."), /*#__PURE__*/_react.default.createElement("a", {
    href: "https://github.com/andy19910102/react-spinning-donut"
  }, "Check documentation")), /*#__PURE__*/_react.default.createElement("section", {
    className: "App",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: "center",
      position: "relative",
      bottom: 50
    }
  }, /*#__PURE__*/_react.default.createElement(_Donut.default, {
    color: "#ff0000",
    scaleX: 1,
    scaleY: 0.75
  }), /*#__PURE__*/_react.default.createElement(_Donut.default, {
    color: "#8E2DE2",
    scaleX: 1,
    scaleY: 0.75
  }), /*#__PURE__*/_react.default.createElement(_Donut.default, {
    color: "#11998e",
    scaleX: 1,
    scaleY: 0.75
  })), /*#__PURE__*/_react.default.createElement("section", {
    className: "App",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: "center",
      position: "relative",
      bottom: 250
    }
  }, /*#__PURE__*/_react.default.createElement(_Donut.default, {
    color: "rgb(234 88 12)",
    scaleX: 1,
    scaleY: 0.75
  }), /*#__PURE__*/_react.default.createElement(_Donut.default, {
    color: "rgb(219 39 119)",
    scaleX: 1,
    scaleY: 0.75
  }), /*#__PURE__*/_react.default.createElement(_Donut.default, {
    color: "rgb(30 64 175)",
    scaleX: 1,
    scaleY: 0.75
  })));
}
var _default = App;
exports.default = _default;