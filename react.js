"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Provider = exports.storeShape = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var storeShape = exports.storeShape = _react.PropTypes.shape({
  dispatch: _react.PropTypes.func.isRequired,
  getState: _react.PropTypes.func.isRequired,
  subscribe: _react.PropTypes.func.isRequired
});

var Provider = exports.Provider = function (_React$Component) {
  _inherits(Provider, _React$Component);

  function Provider() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Provider);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Provider.__proto__ || Object.getPrototypeOf(Provider)).call.apply(_ref, [this].concat(args))), _this), _this.store = _this.props.store, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Provider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.unsubscribe = this.store.subscribe(function () {
        return _this2.handleStoreUpdate();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: "handleStoreUpdate",
    value: function handleStoreUpdate() {
      // We always forceUpdate here because elfi skips updating us if the
      // underlying state hasn't changed, so we only receive updates when data
      // actually changed.
      this.forceUpdate();
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      return {
        store: this.store
      };
    }
  }, {
    key: "render",
    value: function render() {
      return _react.Children.only(this.props.children);
    }
  }]);

  return Provider;
}(_react2.default.Component);

Provider.propTypes = {
  store: storeShape.isRequired,
  children: _react.PropTypes.element.isRequired
};

Provider.childContextTypes = {
  store: storeShape.isRequired
};