webpackJsonp([0],{

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(559);

var _Header = __webpack_require__(245);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(242);

var _Home2 = _interopRequireDefault(_Home);

var _City = __webpack_require__(241);

var _City2 = _interopRequireDefault(_City);

var _Category = __webpack_require__(240);

var _Category2 = _interopRequireDefault(_Category);

var _Listings = __webpack_require__(244);

var _Listings2 = _interopRequireDefault(_Listings);

var _Listing = __webpack_require__(243);

var _Listing2 = _interopRequireDefault(_Listing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_reactRouterDom.Route, { path: '/', component: _Header2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/', component: _Home2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/', component: _Category2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings', component: _Listings2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings:listing', component: _Listing2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(105);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(235);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Category = function (_Component) {
  _inherits(Category, _Component);

  function Category() {
    _classCallCheck(this, Category);

    var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Category, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;


      return _react2.default.createElement(
        'div',
        { className: 'category' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          'These are the listings',
          _react2.default.createElement('br', null),
          'This category is: ',
          match.params.category,
          _react2.default.createElement('br', null)
        )
      );
    }
  }]);

  return Category;
}(_react.Component);

exports.default = Category;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var City = function (_Component) {
  _inherits(City, _Component);

  function City() {
    _classCallCheck(this, City);

    var _this = _possibleConstructorReturn(this, (City.__proto__ || Object.getPrototypeOf(City)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(City, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;


      return _react2.default.createElement(
        'div',
        { className: 'city' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          'This City is: ',
          match.params.city,
          _react2.default.createElement('br', null)
        )
      );
    }
  }]);

  return City;
}(_react.Component);

exports.default = City;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this));

    _this.renderCategories = function () {
      var testArray = [1, 2, 3, 4, 5, 6, 7];

      return testArray.map(function (item, i) {
        return _react2.default.createElement(
          "div",
          { className: "category", key: i },
          _react2.default.createElement(
            "div",
            { className: "title" },
            "Community"
          ),
          _react2.default.createElement(
            "div",
            { className: "categories-links" },
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Community"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Activities"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Artist"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Childcare"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Classes"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Events"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Community"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "General"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Groups"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Local News"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Lost & Found"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Community"
            ),
            _react2.default.createElement(
              "a",
              { href: "#", className: "link" },
              "Community"
            )
          )
        );
      });
    };

    _this.renderTags = function () {
      var testArray = [1, 2, 3, 4, 5, 6, 7];

      return testArray.map(function (item, i) {
        return _react2.default.createElement(
          "div",
          { className: "tag", key: i },
          "Apple Mackbook"
        );
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "home" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "h1",
            null,
            "Getting You Exactly What ",
            _react2.default.createElement("br", null),
            "Your Looking For"
          ),
          _react2.default.createElement(
            "section",
            { className: "categories" },
            this.renderCategories()
          ),
          _react2.default.createElement(
            "section",
            { className: "trending" },
            _react2.default.createElement("input", { type: "text", name: "search", className: "search" }),
            _react2.default.createElement(
              "div",
              { className: "title" },
              _react2.default.createElement("i", { className: "far fa-clock" }),
              "Trending Now"
            ),
            _react2.default.createElement(
              "div",
              { className: "trending-tags" },
              this.renderTags()
            )
          )
        )
      );
    }
  }]);

  return Home;
}(_react.Component);

exports.default = Home;

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listing = function (_Component) {
  _inherits(Listing, _Component);

  function Listing() {
    _classCallCheck(this, Listing);

    var _this = _possibleConstructorReturn(this, (Listing.__proto__ || Object.getPrototypeOf(Listing)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Listing, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;


      return _react2.default.createElement(
        'div',
        { className: 'listing' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          'This listing is: ',
          match.params.listing,
          _react2.default.createElement('br', null)
        )
      );
    }
  }]);

  return Listing;
}(_react.Component);

exports.default = Listing;

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Listings, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;


      return _react2.default.createElement(
        'div',
        { className: 'listings-page' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'section',
            { id: 'filter' },
            _react2.default.createElement(
              'div',
              { className: 'form-group price' },
              _react2.default.createElement(
                'label',
                { htmlFor: '' },
                'Price'
              ),
              _react2.default.createElement(
                'div',
                { className: 'min-max' },
                _react2.default.createElement(
                  'select',
                  { name: 'min-price', className: 'min-price' },
                  _react2.default.createElement(
                    'option',
                    { value: '0' },
                    '0'
                  )
                ),
                _react2.default.createElement(
                  'select',
                  { name: 'max-price', className: 'min-price' },
                  _react2.default.createElement(
                    'option',
                    { value: '1000' },
                    '1000'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group make' },
              _react2.default.createElement(
                'label',
                { htmlFor: '' },
                'Make'
              ),
              _react2.default.createElement(
                'select',
                { name: 'make', className: 'make' },
                _react2.default.createElement(
                  'option',
                  { value: 'bmw' },
                  'bmw'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group model' },
              _react2.default.createElement(
                'label',
                { htmlFor: '' },
                'Model'
              ),
              _react2.default.createElement(
                'select',
                { name: 'make', className: 'model' },
                _react2.default.createElement(
                  'option',
                  { value: 'All' },
                  'All Models'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group button' },
              _react2.default.createElement(
                'div',
                { className: 'primary-btn' },
                'Update'
              ),
              _react2.default.createElement(
                'div',
                { className: 'reset-btn' },
                'Reset'
              )
            )
          ),
          _react2.default.createElement(
            'section',
            { id: 'list-view' },
            _react2.default.createElement(
              'section',
              { className: 'change-view' },
              _react2.default.createElement(
                'div',
                { className: 'form-group view-dropdown' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: '' },
                  'Model'
                ),
                _react2.default.createElement(
                  'select',
                  { name: 'select-view', className: 'select-view' },
                  _react2.default.createElement(
                    'option',
                    { value: 'gallery' },
                    'Gallery View'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'list' },
                    'List View'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: 'gallery' },
                    'Thumb View'
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'form-group sort-dropdown' },
                _react2.default.createElement(
                  'label',
                  { htmlFor: '' },
                  'Model'
                ),
                _react2.default.createElement(
                  'select',
                  { name: 'sort-dropdown', className: 'sort-dropdown' },
                  _react2.default.createElement(
                    'option',
                    { value: 'newest' },
                    'Newest'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'section',
              { className: 'all-items' },
              _react2.default.createElement(
                'div',
                { className: 'item' },
                _react2.default.createElement(
                  'div',
                  { className: 'image' },
                  _react2.default.createElement(
                    'div',
                    { className: 'price' },
                    '$8290'
                  ),
                  'img'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'h5',
                    null,
                    'Title'
                  ),
                  _react2.default.createElement(
                    'h6',
                    null,
                    'City'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {};
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'header',
          { className: 'site-header' },
          _react2.default.createElement(
            'div',
            { className: 'left-links' },
            _react2.default.createElement(
              'div',
              { className: 'logo' },
              'Classified'
            ),
            _react2.default.createElement(
              'div',
              { className: 'city' },
              'New York',
              _react2.default.createElement('i', { className: 'fas fa-chevron-down' })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'right-links' },
            _react2.default.createElement(
              'div',
              { className: 'user-img' },
              'img'
            ),
            _react2.default.createElement(
              'div',
              { className: 'user-dropdown' },
              'My Account',
              _react2.default.createElement('i', { className: 'fas fa-chevron-down' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'post-listing-btn' },
              'Post to Classified'
            )
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ })

},[239]);