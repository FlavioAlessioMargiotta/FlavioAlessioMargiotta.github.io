$('.open-overlay').click(function() {
    var overlay_navigation = $('.overlay-navigation'),
      nav_item_1 = $('nav li:nth-of-type(1)'),
      nav_item_2 = $('nav li:nth-of-type(2)'),
      nav_item_3 = $('nav li:nth-of-type(3)'),
      nav_item_4 = $('nav li:nth-of-type(4)'),
      nav_item_5 = $('nav li:nth-of-type(5)'),
      top_bar = $('.bar-top'),
      middle_bar = $('.bar-middle'),
      bottom_bar = $('.bar-bottom');
  
    overlay_navigation.toggleClass('overlay-active');
    if (overlay_navigation.hasClass('overlay-active')) {
  
      top_bar.removeClass('animate-out-top-bar').addClass('animate-top-bar');
      middle_bar.removeClass('animate-out-middle-bar').addClass('animate-middle-bar');
      bottom_bar.removeClass('animate-out-bottom-bar').addClass('animate-bottom-bar');
      overlay_navigation.removeClass('overlay-slide-up').addClass('overlay-slide-down')
      nav_item_1.removeClass('slide-in-nav-item-reverse').addClass('slide-in-nav-item');
      nav_item_2.removeClass('slide-in-nav-item-delay-1-reverse').addClass('slide-in-nav-item-delay-1');
      nav_item_3.removeClass('slide-in-nav-item-delay-2-reverse').addClass('slide-in-nav-item-delay-2');
      nav_item_4.removeClass('slide-in-nav-item-delay-3-reverse').addClass('slide-in-nav-item-delay-3');
      nav_item_5.removeClass('slide-in-nav-item-delay-4-reverse').addClass('slide-in-nav-item-delay-4');
    } else {
      top_bar.removeClass('animate-top-bar').addClass('animate-out-top-bar');
      middle_bar.removeClass('animate-middle-bar').addClass('animate-out-middle-bar');
      bottom_bar.removeClass('animate-bottom-bar').addClass('animate-out-bottom-bar');
      overlay_navigation.removeClass('overlay-slide-down').addClass('overlay-slide-up')
      nav_item_1.removeClass('slide-in-nav-item').addClass('slide-in-nav-item-reverse');
      nav_item_2.removeClass('slide-in-nav-item-delay-1').addClass('slide-in-nav-item-delay-1-reverse');
      nav_item_3.removeClass('slide-in-nav-item-delay-2').addClass('slide-in-nav-item-delay-2-reverse');
      nav_item_4.removeClass('slide-in-nav-item-delay-3').addClass('slide-in-nav-item-delay-3-reverse');
      nav_item_5.removeClass('slide-in-nav-item-delay-4').addClass('slide-in-nav-item-delay-4-reverse');
    }
  });


function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step("next", value);}, function (err) {step("throw", err);});}}return step("next");});};} // VARIABLES
var magicalUnderlines = Array.from(document.querySelectorAll('.underline--magical'));

var gradientAPI = 'https://gist.githubusercontent.com/wking-io/3e116c0e5675c8bcad8b5a6dc6ca5344/raw/4e783ce3ad0bcd98811c6531e40256b8feeb8fc8/gradient.json';

// HELPER FUNCTIONS

// 1. Get random number in range. Used to get random index from array.
var randNumInRange = function randNumInRange(max) {return Math.floor(Math.random() * (max - 1));};

// 2. Merge two separate array values at the same index to 
// be the same value in new array.
var mergeArrays = function mergeArrays(arrOne, arrTwo) {return arrOne.
  map(function (item, i) {return item + ' ' + arrTwo[i];}).
  join(', ');};

// 3. Curried function to add a background to array of elms
var addBackground = function addBackground(elms) {return function (color) {
    elms.forEach(function (el) {
      el.style.backgroundImage = color;
    });
  };};
// 4. Function to get data from API
var getData = function () {var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {var response, data;return regeneratorRuntime.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
              fetch(url));case 2:response = _context.sent;_context.next = 5;return (
              response.json());case 5:data = _context.sent;return _context.abrupt('return',
            data.data);case 7:case 'end':return _context.stop();}}}, _callee, undefined);}));return function getData(_x) {return _ref.apply(this, arguments);};}();


// 5. Partial Application of addBackground to always apply 
// background to the magicalUnderlines constant
var addBackgroundToUnderlines = addBackground(magicalUnderlines);

// GRADIENT FUNCTIONS

// 1. Build CSS formatted linear-gradient from API data
var buildGradient = function buildGradient(obj) {return 'linear-gradient(' + obj.direction + ', ' + mergeArrays(obj.colors, obj.positions) + ')';};

// 2. Get single gradient from data pulled in array and
// apply single gradient to a callback function
var applyGradient = function () {var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(url, callback) {var data, gradient;return regeneratorRuntime.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return (
              getData(url));case 2:data = _context2.sent;
            gradient = buildGradient(data[randNumInRange(data.length)]);
            callback(gradient);case 5:case 'end':return _context2.stop();}}}, _callee2, undefined);}));return function applyGradient(_x2, _x3) {return _ref2.apply(this, arguments);};}();


// RESULT
applyGradient(gradientAPI, addBackgroundToUnderlines);

