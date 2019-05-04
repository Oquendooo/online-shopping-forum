webpackJsonp([0],{

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(586);

var _Header = __webpack_require__(271);

var _Header2 = _interopRequireDefault(_Header);

var _Home = __webpack_require__(267);

var _Home2 = _interopRequireDefault(_Home);

var _City = __webpack_require__(266);

var _City2 = _interopRequireDefault(_City);

var _Category = __webpack_require__(265);

var _Category2 = _interopRequireDefault(_Category);

var _Listings = __webpack_require__(269);

var _Listings2 = _interopRequireDefault(_Listings);

var _Listing = __webpack_require__(268);

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
          _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/:city/:category/:listings/:listing', component: _Listing2.default })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(106);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(242);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(_App2.default, null), app);

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

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

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

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

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(246);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.renderCategories = function () {
      if (_this.state.categoriesData.length != 0) {
        return _this.state.categoriesData.map(function (category, i) {
          var renderSubCategories = function renderSubCategories() {
            return category.listings.map(function (listing, index) {
              return _react2.default.createElement(
                'a',
                { href: category.title + '/' + listing.slug, className: 'link', key: index },
                listing.name
              );
            });
          };
          return _react2.default.createElement(
            'div',
            { className: 'category', key: i },
            _react2.default.createElement(
              'div',
              { className: 'title' },
              category.title
            ),
            _react2.default.createElement(
              'div',
              { className: 'categories-links ' + (category.title === 'jobs' || category.title === 'personals' || category.title === 'housing' ? 'single-col' : '') },
              renderSubCategories()
            )
          );
        });
      } else {
        return _react2.default.createElement(
          'div',
          null,
          'Loading'
        );
      }
    };

    _this.renderTags = function () {
      var testArray = [1, 2, 3, 4, 5, 6, 7];
      return testArray.map(function (item, i) {
        return _react2.default.createElement(
          'div',
          { className: 'tag', key: i },
          'Apple Mackbook'
        );
      });
    };

    _this.state = {
      categoriesData: []
    };
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var self = this;
      var _props = this.props,
          match = _props.match,
          history = _props.history;

      if (match.params.city === undefined) {
        history.push('/nyc');
      }

      _axios2.default.get('/api/' + match.params.city + '/categories').then(function (response) {
        self.setState({ categoriesData: response.data });
      }).catch(function (error) {
        console.log(error);
      });
    }
  }, {
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'div',
        { className: 'home' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'h1',
            null,
            'Getting You Exactly What ',
            _react2.default.createElement('br', null),
            'Your Looking For'
          ),
          _react2.default.createElement(
            'section',
            { className: 'categories' },
            this.renderCategories()
          ),
          _react2.default.createElement(
            'section',
            { className: 'trending' },
            _react2.default.createElement('input', { type: 'text', name: 'search', className: 'search' }),
            _react2.default.createElement(
              'div',
              { className: 'title' },
              _react2.default.createElement('i', { className: 'far fa-clock' }),
              'Trending Now'
            ),
            _react2.default.createElement(
              'div',
              { className: 'trending-tags' },
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

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _Gallery = __webpack_require__(270);

var _Gallery2 = _interopRequireDefault(_Gallery);

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
    key: 'renderOtherImages',
    value: function renderOtherImages() {

      var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

      return testArray.map(function (item, i) {
        return _react2.default.createElement('div', { key: i, className: 'thumb-img', style: { "backgroundImage": "url('https://static.cargurus.com/images/site/2015/10/19/18/30/2016_honda_accord_touring-pic-8875933662102923932-640x480.jpeg')" } });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;


      return _react2.default.createElement(
        'div',
        { className: 'listing-section' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'white-box' },
            _react2.default.createElement(
              'section',
              { className: 'sub-menu' },
              _react2.default.createElement(
                'div',
                { className: 'direction' },
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'prev' },
                  'Prev'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#', className: 'next' },
                  'Next'
                )
              ),
              _react2.default.createElement(
                'nav',
                { className: 'sub-links' },
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'More Ads by User'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Print'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Share'
                ),
                _react2.default.createElement(
                  'a',
                  { href: '#' },
                  'Contact Seller'
                )
              )
            ),
            _react2.default.createElement(
              'section',
              { className: 'content-area' },
              _react2.default.createElement(
                'div',
                { className: 'media-column' },
                _react2.default.createElement(_Gallery2.default, null)
              ),
              _react2.default.createElement(
                'div',
                { className: 'details-column' },
                _react2.default.createElement(
                  'div',
                  { className: 'date' },
                  'Posted: May 2th'
                ),
                _react2.default.createElement(
                  'h3',
                  { className: 'title' },
                  'Black Honda Accord 2016'
                ),
                _react2.default.createElement(
                  'h4',
                  { className: 'price' },
                  '$46,300'
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'more-details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Vin'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      'QUWUEUIROWOR'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Mileage'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      '34556'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Transmission'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      '6-Speed Automatic'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Vin'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      'QUWUEUIROWOR'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Mileage'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      '34556'
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'info' },
                    _react2.default.createElement(
                      'label',
                      null,
                      'Transmission'
                    ),
                    _react2.default.createElement(
                      'h5',
                      null,
                      '6-Speed Automatic'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'description' },
                  _react2.default.createElement(
                    'label',
                    null,
                    'Description'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'This 2016 Honda Accord is a ONE-OWNER CLEAN CARFAX AND NON-SMOKER vehicle!'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor amet ramps everyday carry YOLO mumblecore hella. Cronut bicycle rights forage, brunch craft beer tacos leggings af hammock gastropub woke vice. Pok pok deep v trust fund jianbing beard migas, glossier slow-carb irony vape meggings venmo. Hot chicken meh chia, neutra man bun semiotics asymmetrical cornhole swag pabst pok pok.'
                  ),
                  _react2.default.createElement(
                    'p',
                    null,
                    'Lorem ipsum dolor amet ramps everyday carry YOLO mumblecore hella. Cronut bicycle rights forage, brunch craft beer tacos leggings af hammock gastropub woke vice. Pok pok deep v trust fund jianbing beard migas, glossier slow-carb irony vape meggings venmo. Hot chicken meh chia, neutra man bun semiotics asymmetrical cornhole swag pabst pok pok.'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Listing;
}(_react.Component);

exports.default = Listing;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

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

    _this.renderItems = function () {
      var testArray = [1, 2, 3, 4, 5, 6, 7, 8];

      return testArray.map(function (item, i) {
        return _react2.default.createElement(
          "div",
          { className: "item", key: i },
          _react2.default.createElement(
            "div",
            { className: "image" },
            _react2.default.createElement(
              "div",
              { className: "price" },
              "$8290"
            ),
            "img"
          ),
          _react2.default.createElement(
            "div",
            { className: "details" },
            _react2.default.createElement("i", { className: "far fa-star" }),
            _react2.default.createElement(
              "h5",
              null,
              "2016 Honda Accord"
            ),
            _react2.default.createElement(
              "h6",
              null,
              "Brooklyn"
            )
          )
        );
      });
    };

    _this.state = {};
    return _this;
  }

  _createClass(Listings, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          match = _props.match,
          location = _props.location,
          history = _props.history;

      return _react2.default.createElement(
        "div",
        { className: "listings-page" },
        _react2.default.createElement(
          "div",
          { className: "container" },
          _react2.default.createElement(
            "section",
            { id: "filter" },
            _react2.default.createElement(
              "div",
              { className: "form-group price" },
              _react2.default.createElement(
                "label",
                { htmlFor: "" },
                "Price"
              ),
              _react2.default.createElement(
                "div",
                { className: "min-max" },
                _react2.default.createElement(
                  "select",
                  { name: "min-price",
                    className: "min-price" },
                  _react2.default.createElement(
                    "option",
                    { value: "0" },
                    "0"
                  )
                ),
                _react2.default.createElement(
                  "select",
                  { name: "max-price", className: "min-price" },
                  _react2.default.createElement(
                    "option",
                    { value: "1000" },
                    "1000"
                  )
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group make" },
              _react2.default.createElement(
                "label",
                { htmlFor: "" },
                "Make"
              ),
              _react2.default.createElement(
                "select",
                { name: "make", className: "make" },
                _react2.default.createElement(
                  "option",
                  { value: "bmw" },
                  "bmw"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group model" },
              _react2.default.createElement(
                "label",
                { htmlFor: "" },
                "Model"
              ),
              _react2.default.createElement(
                "select",
                { name: "make", className: "model" },
                _react2.default.createElement(
                  "option",
                  { value: "All" },
                  "All Models"
                )
              )
            ),
            _react2.default.createElement(
              "div",
              { className: "form-group button" },
              _react2.default.createElement(
                "div",
                { className: "primary-btn" },
                "Update"
              ),
              _react2.default.createElement(
                "div",
                { className: "reset-btn" },
                "Reset"
              )
            )
          )
        ),
        _react2.default.createElement(
          "section",
          { id: "list-view" },
          _react2.default.createElement(
            "div",
            { className: "container" },
            _react2.default.createElement(
              "div",
              { className: "white-box" },
              _react2.default.createElement(
                "section",
                { className: "change-view" },
                _react2.default.createElement(
                  "div",
                  { className: "form-group view-dropdown" },
                  _react2.default.createElement(
                    "select",
                    { name: "select-view", className: "select-view" },
                    _react2.default.createElement(
                      "option",
                      { value: "gallery" },
                      "Gallery View"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "list" },
                      "List View"
                    ),
                    _react2.default.createElement(
                      "option",
                      { value: "gallery" },
                      "Thumb View"
                    )
                  )
                ),
                _react2.default.createElement(
                  "div",
                  { className: "form-group sort-dropdown" },
                  _react2.default.createElement(
                    "select",
                    { name: "sort-dropdown", className: "sort-dropdown" },
                    _react2.default.createElement(
                      "option",
                      { value: "newest" },
                      "Newest"
                    )
                  )
                )
              ),
              _react2.default.createElement(
                "section",
                { className: "all-items" },
                this.renderItems()
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

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_Component) {
  _inherits(Gallery, _Component);

  function Gallery() {
    _classCallCheck(this, Gallery);

    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this));

    _this.clickedPrevBtn = function () {
      var currentIndex = _this.state.currentIndex;

      if (currentIndex > 0) {
        _this.setState({
          currentIndex: _this.state.currentIndex - 1
        });
      }
    };

    _this.clickedNextBtn = function () {
      var currentIndex = _this.state.currentIndex;
      var length = _this.state.allImgs.length;

      if (currentIndex != length - 1) {
        _this.setState({
          currentIndex: _this.state.currentIndex + 1
        });
      }
    };

    _this.clickedOtherImage = function (index) {
      _this.setState({
        currentIndex: index
      });
    };

    _this.state = {
      currentImage: '',
      allImgs: [],
      currentIndex: 0
    };
    return _this;
  }

  _createClass(Gallery, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var allImgs = ['https://images.craigslist.org/00W0W_7RZZEIoukAH_600x450.jpg', 'https://images.craigslist.org/00a0a_baC7DROk0OL_600x450.jpg', 'https://images.craigslist.org/00404_iB3n5lhRu0m_600x450.jpg', 'https://images.craigslist.org/00V0V_4qcsKYim4z2_600x450.jpg', 'https://images.craigslist.org/00V0V_hInRWlneMEH_600x450.jpg', 'https://images.craigslist.org/00O0O_ccQVII8uATw_600x450.jpg', 'https://images.craigslist.org/00s0s_ba6CTKH99wH_600x450.jpg', 'https://images.craigslist.org/00d0d_1b2fefn94ln_600x450.jpg', 'https://images.craigslist.org/00u0u_8A5XSJ0OBJt_600x450.jpg', 'https://images.craigslist.org/00g0g_5S2uBiEe3Tc_600x450.jpg', 'https://images.craigslist.org/00a0a_9ILVAk44Eaj_600x450.jpg', 'https://images.craigslist.org/00e0e_3K8Xp4iZSqp_600x450.jpg'];

      this.setState({
        allImgs: allImgs,
        currentImage: allImgs[this.state.currentIndex]
      });
    }
  }, {
    key: 'renderOtherImages',
    value: function renderOtherImages() {
      var _this2 = this;

      var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

      return this.state.allImgs.map(function (item, i) {
        return _react2.default.createElement('div', { key: i, className: 'thumb-img', onClick: _this2.clickedOtherImage.bind(null, i), style: { "backgroundImage": 'url(\'' + item + '\')' } });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.state);
      return _react2.default.createElement(
        'div',
        { className: 'gallery' },
        _react2.default.createElement(
          'div',
          { className: 'slider' },
          _react2.default.createElement(
            'div',
            { className: 'main-image' },
            _react2.default.createElement(
              'div',
              { className: 'arrows left-arrow', onClick: this.clickedPrevBtn },
              _react2.default.createElement('i', { className: 'fas fa-chevron-left' })
            ),
            _react2.default.createElement(
              'div',
              { className: 'arrows right-arrow', onClick: this.clickedNextBtn },
              _react2.default.createElement('i', { className: 'fas fa-chevron-right' })
            ),
            _react2.default.createElement('div', { className: 'image-1',
              style: { "backgroundImage": 'url(\'' + this.state.allImgs[this.state.currentIndex] + '\')' }
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'thumbnails' },
          this.renderOtherImages()
        )
      );
    }
  }]);

  return Gallery;
}(_react.Component);

exports.default = Gallery;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(17);

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
              'a',
              { href: '/' },
              _react2.default.createElement(
                'div',
                { className: 'logo' },
                'Classified'
              )
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

},[264]);