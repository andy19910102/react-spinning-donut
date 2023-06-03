"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Donut = _interopRequireDefault(require("./dist/Donut/Donut"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "App",
    style: {
      display: 'flex',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/_react.default.createElement(_Donut.default, {
    color: "#dd0000",
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
  }));
}
var _default = App;
exports.default = _default;