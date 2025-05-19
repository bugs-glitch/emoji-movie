var activeUrlSub, 
	agegateStatus, 
	__agegateUnderageMessage,
	__agegateMobileMessage, 
	__agegateMonthError,
	__agegateDayError,
	__agegateYearError,
	agegate_socialurl_fb,
	agegate_socialurl_tw,
	agegate_socialurl_ig,
	agegate_socialurl_yt;
var YTplaying = false;
var inGame = false;
var muteAudio;

function game(url){
	if (document.getElementById('video'))
		document.getElementById('video').pause();

	if (document.getElementById('yt'))
		document.getElementById('yt').contentWindow.postMessage('{"event": "command","func":"pauseVideo","args":""}', '*');

	pauseHeroVid();

	inGame = true;

	$('html, body').css('overflow', 'hidden');
	//$("html, body").scrollTop(0);
	$('.gamewindow').css('display', 'block');
	$("#gameframe").attr("src", url);
	$("#gameframe").css("padding-top", '30px');
}
function closeGame(){
	$('html, body').css('overflow', 'auto');
	$('.gamewindow').css('display', 'none');
	$("#gameframe").attr("src", "");

	inGame = false
	playHeroVid();
}

function playHeroVid(){ //console.log(document.getElementById('herovideo')  + " -- " +  !Modernizr.touch  + " -- " +  document.getElementById("herovideo").paused + " -- " + activeUrlSub + " -- " + YTplaying);
	if(document.getElementById('herovideo') && !Modernizr.touch && document.getElementById("herovideo").paused && inGame == false && (activeUrlSub == '/' || activeUrlSub == undefined) && YTplaying == false){
		//console.log("playing = " + document.getElementById("herovideo").paused);
		document.getElementById("herovideo").play();
	}
}

function pauseHeroVid(){
	if(document.getElementById('herovideo') && !Modernizr.touch && !document.getElementById("herovideo").paused){
		//console.log("paused = " + document.getElementById("herovideo").paused);
		document.getElementById("herovideo").pause();
	}
}

// Browser Prefix
var prefix = getBrowserPrefix();
var hidden = hiddenProperty(prefix);
var visibilityState = visibilityState(prefix);
var visibilityEvent = visibilityEvent(prefix);

// Get Browser-Specifc Prefix
function getBrowserPrefix() {
   
  // Check for the unprefixed property.
  if ('hidden' in document) {
    return null;
  }
 
  // All the possible prefixes.
  var browserPrefixes = ['moz', 'ms', 'o', 'webkit'];
 
  for (var i = 0; i < browserPrefixes.length; i++) {
    var prefix = browserPrefixes[i] + 'Hidden';
    if (prefix in document) {
      return browserPrefixes[i];
    }
  }
 
  // The API is not supported in browser.
  return null;
}
 
// Get Browser Specific Hidden Property
function hiddenProperty(prefix) {
  if (prefix) {
    return prefix + 'Hidden';
  } else {
    return 'hidden';
  }
}
 
// Get Browser Specific Visibility State
function visibilityState(prefix) {
  if (prefix) {
    return prefix + 'VisibilityState';
  } else {
    return 'visibilityState';
  }
}
 
// Get Browser Specific Event
function visibilityEvent(prefix) {
  if (prefix) {
    return prefix + 'visibilitychange';
  } else {
    return 'visibilitychange';
  }
}
document.addEventListener(visibilityEvent, function(event) {
  if (!document[hidden]) {
  	// play hero video
  	playHeroVid(); //console.log("PLAY");
  }
  else{
  	// pause hero video
	pauseHeroVid(); //console.log("PAUSE");
  }
});

webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(152);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueResource = __webpack_require__(276);

	var _vueResource2 = _interopRequireDefault(_vueResource);

	var _localization = __webpack_require__(2);

	var _localization2 = _interopRequireDefault(_localization);

	var _translate = __webpack_require__(37);

	var _translate2 = _interopRequireDefault(_translate);

	var _ucwords = __webpack_require__(168);

	var _ucwords2 = _interopRequireDefault(_ucwords);

	var _App = __webpack_require__(155);

	var _App2 = _interopRequireDefault(_App);

	__webpack_require__(218);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	window.$ = window.jQuery = __webpack_require__(8);
	__webpack_require__(246);

	_vue2.default.use(_vueResource2.default);

	_vue2.default.filter('translate', _translate2.default);
	_vue2.default.filter('ucwords', _ucwords2.default);

	window.mobileMenuOpen = false;

	_localization2.default.loadLocales().then(function () {
	  return _localization2.default.loadFonts();
	}).then(function () {
	  new _vue2.default({
	    el: 'body',
	    components: { App: _App2.default }
	  });
	});

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _promise = __webpack_require__(184);

	var _promise2 = _interopRequireDefault(_promise);

	var _vue = __webpack_require__(152);

	var _vue2 = _interopRequireDefault(_vue);

	var _lodash = __webpack_require__(6);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _webfontloader = __webpack_require__(277);

	var _webfontloader2 = _interopRequireDefault(_webfontloader);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  loadLocales: function loadLocales() {
	    var _this = this;

	    return new _promise2.default(function (resolve, reject) {
	      _this.detectCountry().then(function (country) {
	        return _this.loadLocale(country);
	      }).then(function (locale) {
	        resolve(_this);
	      });
	    });
	  },
	  detectCountry: function detectCountry() {
	    return new _promise2.default(function (resolve, reject) {
	      setTimeout(function () {
	        resolve('us');
	      }, 100);
	    });
	  },
	  loadLocale: function loadLocale(country) {
	    var _this2 = this;

	    return new _promise2.default(function (resolve, reject) {
	      _this2.loadConfiguration().then(function (config) {
	        var locale = _lodash2.default.findKey(config, function (countries) {
	          return _lodash2.default.find(countries, function (val) {
	            return val === country;
	          });
	        });

	        if (!locale) {
	          locale = config.default;
	        }

	        if (!locale || locale === 'undefined') {
	          locale = 'en';
	        }

	        _vue2.default.http.get('static/data/' + locale + '.json').then(function (response) {
	          window.translationData = response.data;
	        }).catch(function (error) {
	          console.log(error);
	        }).finally(function () {
	          resolve();
	        });
	      });
	    });
	  },
	  loadConfiguration: function loadConfiguration() {
	    return new _promise2.default(function (resolve, reject) {
	      _vue2.default.http.get('static/data/config.json').then(function (response) {
	        resolve(response.data);
	      });
	    });
	  },
	  loadFonts: function loadFonts() {
	    var _this3 = this;

	    return new _promise2.default(function (resolve, reject) {
	      var defaults = {
	        fontactive: function fontactive() {
	          return resolve();
	        }
	      };
	      var config = _lodash2.default.merge({}, defaults, _this3.get('fonts'));

	      _webfontloader2.default.load(config);
	    });
	  },
	  get: function get(key) {
	    return _lodash2.default.get(window.translationData, key);
	  }
	};

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(6);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  addInlineStyle: function addInlineStyle(content) {
	    var head = document.head || document.getElementsByTagName('head')[0];
	    var style = document.createElement('style');

	    style.type = 'text/css';
	    if (style.styleSheet) {
	      style.styleSheet.cssText = content;
	    } else {
	      style.appendChild(document.createTextNode(content));
	    }
	    head.appendChild(style);
	  },
	  addInlineStyleFromObject: function addInlineStyleFromObject(cssSelector, styleObject) {
	    var cssContent = cssSelector + ' {';

	    _lodash2.default.each(styleObject, function (value, key) {
	      cssContent += _lodash2.default.kebabCase(key) + ': ' + value + ' !important; ';
	    });

	    cssContent += '}';

	    this.addInlineStyle(cssContent);
	  }
	};

/***/ },
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _SocialIcon = __webpack_require__(273);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_SocialIcon).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jquery = __webpack_require__(8);

	var _jquery2 = _interopRequireDefault(_jquery);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (url) {
	  if (!(0, _jquery2.default)('[data-url="' + url + '"]').length) {
	    return;
	  }

	  var headerHeight = (0, _jquery2.default)('header').outerHeight();
	  var targetPosition = (0, _jquery2.default)('[data-url="' + url + '"]').offset().top - headerHeight;

	  (0, _jquery2.default)('html,body').animate({ scrollTop: targetPosition + 'px' });
	};

/***/ },
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _localization = __webpack_require__(2);

	var _localization2 = _interopRequireDefault(_localization);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (key) {
	  return _localization2.default.get(key);
	};

/***/ },
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _AboutMovie = __webpack_require__(262);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_AboutMovie).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _App = __webpack_require__(263);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_App).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _CastCrew = __webpack_require__(264);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_CastCrew).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Features = __webpack_require__(265);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Features).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Footer = __webpack_require__(266);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Footer).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Header = __webpack_require__(267);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Header).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Hero = __webpack_require__(268);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Hero).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _MobileNav = __webpack_require__(269);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_MobileNav).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _MovieReviews = __webpack_require__(270);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_MovieReviews).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Nav = __webpack_require__(271);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Nav).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _PhotoGallery = __webpack_require__(272);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_PhotoGallery).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 165 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = [{ name: 'Afghanistan', code: 'AF' }, { name: 'Aland Islands', code: 'AX' }, { name: 'Albania', code: 'AL' }, { name: 'Algeria', code: 'DZ' }, { name: 'American Samoa', code: 'AS' }, { name: 'AndorrA', code: 'AD' }, { name: 'Angola', code: 'AO' }, { name: 'Anguilla', code: 'AI' }, { name: 'Antarctica', code: 'AQ' }, { name: 'Antigua and Barbuda', code: 'AG' }, { name: 'Argentina', code: 'AR' }, { name: 'Armenia', code: 'AM' }, { name: 'Aruba', code: 'AW' }, { name: 'Australia', code: 'AU' }, { name: 'Austria', code: 'AT' }, { name: 'Azerbaijan', code: 'AZ' }, { name: 'Bahamas', code: 'BS' }, { name: 'Bahrain', code: 'BH' }, { name: 'Bangladesh', code: 'BD' }, { name: 'Barbados', code: 'BB' }, { name: 'Belarus', code: 'BY' }, { name: 'Belgium', code: 'BE' }, { name: 'Belize', code: 'BZ' }, { name: 'Benin', code: 'BJ' }, { name: 'Bermuda', code: 'BM' }, { name: 'Bhutan', code: 'BT' }, { name: 'Bolivia', code: 'BO' }, { name: 'Bosnia and Herzegovina', code: 'BA' }, { name: 'Botswana', code: 'BW' }, { name: 'Bouvet Island', code: 'BV' }, { name: 'Brazil', code: 'BR' }, { name: 'British Indian Ocean Territory', code: 'IO' }, { name: 'Brunei Darussalam', code: 'BN' }, { name: 'Bulgaria', code: 'BG' }, { name: 'Burkina Faso', code: 'BF' }, { name: 'Burundi', code: 'BI' }, { name: 'Cambodia', code: 'KH' }, { name: 'Cameroon', code: 'CM' }, { name: 'Canada', code: 'CA' }, { name: 'Cape Verde', code: 'CV' }, { name: 'Cayman Islands', code: 'KY' }, { name: 'Central African Republic', code: 'CF' }, { name: 'Chad', code: 'TD' }, { name: 'Chile', code: 'CL' }, { name: 'China', code: 'CN' }, { name: 'Christmas Island', code: 'CX' }, { name: 'Cocos (Keeling) Islands', code: 'CC' }, { name: 'Colombia', code: 'CO' }, { name: 'Comoros', code: 'KM' }, { name: 'Congo', code: 'CG' }, { name: 'Congo, The Democratic Republic of the', code: 'CD' }, { name: 'Cook Islands', code: 'CK' }, { name: 'Costa Rica', code: 'CR' }, { name: 'Cote D\'Ivoire', code: 'CI' }, { name: 'Croatia', code: 'HR' }, { name: 'Cuba', code: 'CU' }, { name: 'Cyprus', code: 'CY' }, { name: 'Czech Republic', code: 'CZ' }, { name: 'Denmark', code: 'DK' }, { name: 'Djibouti', code: 'DJ' }, { name: 'Dominica', code: 'DM' }, { name: 'Dominican Republic', code: 'DO' }, { name: 'Ecuador', code: 'EC' }, { name: 'Egypt', code: 'EG' }, { name: 'El Salvador', code: 'SV' }, { name: 'Equatorial Guinea', code: 'GQ' }, { name: 'Eritrea', code: 'ER' }, { name: 'Estonia', code: 'EE' }, { name: 'Ethiopia', code: 'ET' }, { name: 'Falkland Islands (Malvinas)', code: 'FK' }, { name: 'Faroe Islands', code: 'FO' }, { name: 'Fiji', code: 'FJ' }, { name: 'Finland', code: 'FI' }, { name: 'France', code: 'FR' }, { name: 'French Guiana', code: 'GF' }, { name: 'French Polynesia', code: 'PF' }, { name: 'French Southern Territories', code: 'TF' }, { name: 'Gabon', code: 'GA' }, { name: 'Gambia', code: 'GM' }, { name: 'Georgia', code: 'GE' }, { name: 'Germany', code: 'DE' }, { name: 'Ghana', code: 'GH' }, { name: 'Gibraltar', code: 'GI' }, { name: 'Greece', code: 'GR' }, { name: 'Greenland', code: 'GL' }, { name: 'Grenada', code: 'GD' }, { name: 'Guadeloupe', code: 'GP' }, { name: 'Guam', code: 'GU' }, { name: 'Guatemala', code: 'GT' }, { name: 'Guernsey', code: 'GG' }, { name: 'Guinea', code: 'GN' }, { name: 'Guinea-Bissau', code: 'GW' }, { name: 'Guyana', code: 'GY' }, { name: 'Haiti', code: 'HT' }, { name: 'Heard Island and Mcdonald Islands', code: 'HM' }, { name: 'Holy See (Vatican City State)', code: 'VA' }, { name: 'Honduras', code: 'HN' }, { name: 'Hong Kong', code: 'HK' }, { name: 'Hungary', code: 'HU' }, { name: 'Iceland', code: 'IS' }, { name: 'India', code: 'IN' }, { name: 'Indonesia', code: 'ID' }, { name: 'Iran, Islamic Republic Of', code: 'IR' }, { name: 'Iraq', code: 'IQ' }, { name: 'Ireland', code: 'IE' }, { name: 'Isle of Man', code: 'IM' }, { name: 'Israel', code: 'IL' }, { name: 'Italy', code: 'IT' }, { name: 'Jamaica', code: 'JM' }, { name: 'Japan', code: 'JP' }, { name: 'Jersey', code: 'JE' }, { name: 'Jordan', code: 'JO' }, { name: 'Kazakhstan', code: 'KZ' }, { name: 'Kenya', code: 'KE' }, { name: 'Kiribati', code: 'KI' }, { name: 'Korea, Democratic People\'S Republic of', code: 'KP' }, { name: 'Korea, Republic of', code: 'KR' }, { name: 'Kuwait', code: 'KW' }, { name: 'Kyrgyzstan', code: 'KG' }, { name: 'Lao People\'S Democratic Republic', code: 'LA' }, { name: 'Latvia', code: 'LV' }, { name: 'Lebanon', code: 'LB' }, { name: 'Lesotho', code: 'LS' }, { name: 'Liberia', code: 'LR' }, { name: 'Libyan Arab Jamahiriya', code: 'LY' }, { name: 'Liechtenstein', code: 'LI' }, { name: 'Lithuania', code: 'LT' }, { name: 'Luxembourg', code: 'LU' }, { name: 'Macao', code: 'MO' }, { name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK' }, { name: 'Madagascar', code: 'MG' }, { name: 'Malawi', code: 'MW' }, { name: 'Malaysia', code: 'MY' }, { name: 'Maldives', code: 'MV' }, { name: 'Mali', code: 'ML' }, { name: 'Malta', code: 'MT' }, { name: 'Marshall Islands', code: 'MH' }, { name: 'Martinique', code: 'MQ' }, { name: 'Mauritania', code: 'MR' }, { name: 'Mauritius', code: 'MU' }, { name: 'Mayotte', code: 'YT' }, { name: 'Mexico', code: 'MX' }, { name: 'Micronesia, Federated States of', code: 'FM' }, { name: 'Moldova, Republic of', code: 'MD' }, { name: 'Monaco', code: 'MC' }, { name: 'Mongolia', code: 'MN' }, { name: 'Montserrat', code: 'MS' }, { name: 'Morocco', code: 'MA' }, { name: 'Mozambique', code: 'MZ' }, { name: 'Myanmar', code: 'MM' }, { name: 'Namibia', code: 'NA' }, { name: 'Nauru', code: 'NR' }, { name: 'Nepal', code: 'NP' }, { name: 'Netherlands', code: 'NL' }, { name: 'Netherlands Antilles', code: 'AN' }, { name: 'New Caledonia', code: 'NC' }, { name: 'New Zealand', code: 'NZ' }, { name: 'Nicaragua', code: 'NI' }, { name: 'Niger', code: 'NE' }, { name: 'Nigeria', code: 'NG' }, { name: 'Niue', code: 'NU' }, { name: 'Norfolk Island', code: 'NF' }, { name: 'Northern Mariana Islands', code: 'MP' }, { name: 'Norway', code: 'NO' }, { name: 'Oman', code: 'OM' }, { name: 'Pakistan', code: 'PK' }, { name: 'Palau', code: 'PW' }, { name: 'Palestinian Territory, Occupied', code: 'PS' }, { name: 'Panama', code: 'PA' }, { name: 'Papua New Guinea', code: 'PG' }, { name: 'Paraguay', code: 'PY' }, { name: 'Peru', code: 'PE' }, { name: 'Philippines', code: 'PH' }, { name: 'Pitcairn', code: 'PN' }, { name: 'Poland', code: 'PL' }, { name: 'Portugal', code: 'PT' }, { name: 'Puerto Rico', code: 'PR' }, { name: 'Qatar', code: 'QA' }, { name: 'Reunion', code: 'RE' }, { name: 'Romania', code: 'RO' }, { name: 'Russian Federation', code: 'RU' }, { name: 'RWANDA', code: 'RW' }, { name: 'Saint Helena', code: 'SH' }, { name: 'Saint Kitts and Nevis', code: 'KN' }, { name: 'Saint Lucia', code: 'LC' }, { name: 'Saint Pierre and Miquelon', code: 'PM' }, { name: 'Saint Vincent and the Grenadines', code: 'VC' }, { name: 'Samoa', code: 'WS' }, { name: 'San Marino', code: 'SM' }, { name: 'Sao Tome and Principe', code: 'ST' }, { name: 'Saudi Arabia', code: 'SA' }, { name: 'Senegal', code: 'SN' }, { name: 'Serbia and Montenegro', code: 'CS' }, { name: 'Seychelles', code: 'SC' }, { name: 'Sierra Leone', code: 'SL' }, { name: 'Singapore', code: 'SG' }, { name: 'Slovakia', code: 'SK' }, { name: 'Slovenia', code: 'SI' }, { name: 'Solomon Islands', code: 'SB' }, { name: 'Somalia', code: 'SO' }, { name: 'South Africa', code: 'ZA' }, { name: 'South Georgia and the South Sandwich Islands', code: 'GS' }, { name: 'Spain', code: 'ES' }, { name: 'Sri Lanka', code: 'LK' }, { name: 'Sudan', code: 'SD' }, { name: 'Suriname', code: 'SR' }, { name: 'Svalbard and Jan Mayen', code: 'SJ' }, { name: 'Swaziland', code: 'SZ' }, { name: 'Sweden', code: 'SE' }, { name: 'Switzerland', code: 'CH' }, { name: 'Syrian Arab Republic', code: 'SY' }, { name: 'Taiwan, Province of China', code: 'TW' }, { name: 'Tajikistan', code: 'TJ' }, { name: 'Tanzania, United Republic of', code: 'TZ' }, { name: 'Thailand', code: 'TH' }, { name: 'Timor-Leste', code: 'TL' }, { name: 'Togo', code: 'TG' }, { name: 'Tokelau', code: 'TK' }, { name: 'Tonga', code: 'TO' }, { name: 'Trinidad and Tobago', code: 'TT' }, { name: 'Tunisia', code: 'TN' }, { name: 'Turkey', code: 'TR' }, { name: 'Turkmenistan', code: 'TM' }, { name: 'Turks and Caicos Islands', code: 'TC' }, { name: 'Tuvalu', code: 'TV' }, { name: 'Uganda', code: 'UG' }, { name: 'Ukraine', code: 'UA' }, { name: 'United Arab Emirates', code: 'AE' }, { name: 'United Kingdom', code: 'GB' }, { name: 'United States', code: 'US' }, { name: 'United States Minor Outlying Islands', code: 'UM' }, { name: 'Uruguay', code: 'UY' }, { name: 'Uzbekistan', code: 'UZ' }, { name: 'Vanuatu', code: 'VU' }, { name: 'Venezuela', code: 'VE' }, { name: 'Viet Nam', code: 'VN' }, { name: 'Virgin Islands, British', code: 'VG' }, { name: 'Virgin Islands, U.S.', code: 'VI' }, { name: 'Wallis and Futuna', code: 'WF' }, { name: 'Western Sahara', code: 'EH' }, { name: 'Yemen', code: 'YE' }, { name: 'Zambia', code: 'ZM' }, { name: 'Zimbabwe', code: 'ZW' }];

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Tickets = __webpack_require__(274);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Tickets).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _Videos = __webpack_require__(275);

	Object.defineProperty(exports, 'default', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_Videos).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 168 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (text) {
	  return text.toLowerCase().replace(/\b[a-z]/g, function (letter) {
	    return letter.toUpperCase();
	  });
	};

/***/ },
/* 169 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  hexToRgb: function hexToRgb(hex) {
	    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

	    return result ? {
	      r: parseInt(result[1], 16),
	      g: parseInt(result[2], 16),
	      b: parseInt(result[3], 16)
	    } : null;
	  }
	};

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _moment = __webpack_require__(1);

	var _moment2 = _interopRequireDefault(_moment);

	var _localization = __webpack_require__(2);

	var _localization2 = _interopRequireDefault(_localization);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  computed: {
	    style: function style() {
	      return _localization2.default.get('about.style');
	    },
	    primaryPhotoStyle: function primaryPhotoStyle() {
	      return {
	        backgroundImage: 'url(static/img/' + this.mainPhoto + ')'
	      };
	    },
	    secondaryPhotoStyle: function secondaryPhotoStyle() {
	      return {
	        backgroundImage: 'url(static/img/' + this.secondaryPhoto + ')'
	      };
	    },
	    headingStyle: function headingStyle() {
	      return _localization2.default.get('about.heading-style');
	    },
	    subheadingStyle: function subheadingStyle() {
	      return _localization2.default.get('about.subheading-style');
	    },
	    descriptionStyle: function descriptionStyle() {
	      return _localization2.default.get('about.description-style');
	    },
	    mainPhoto: function mainPhoto() {
	      return _localization2.default.get('about.main-photo-file');
	    },
	    secondaryPhoto: function secondaryPhoto() {
	      return _localization2.default.get('about.secondary-photo-file');
	    },
	    inTheatersText: function inTheatersText() {
	      var date = (0, _moment2.default)(_localization2.default.get('about.in-theaters.release-date'));
	      var now = (0, _moment2.default)().startOf('day');
	      var diff = date.diff(now, 'days');

	      if (diff <= 0) {
	        return _localization2.default.get('about.in-theaters.text-now');
	      }

	      if (diff === 1) {
	        return _localization2.default.get('about.in-theaters.text-tomorrow');
	      }

	      return _localization2.default.get('about.in-theaters.text-default');
	    }
	  }
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jquery = __webpack_require__(8);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _history = __webpack_require__(239);

	var _localization = __webpack_require__(2);

	var _localization2 = _interopRequireDefault(_localization);

	var _translate = __webpack_require__(37);

	var _translate2 = _interopRequireDefault(_translate);

	var _navigate = __webpack_require__(19);

	var _navigate2 = _interopRequireDefault(_navigate);

	var _Header = __webpack_require__(159);

	var _Header2 = _interopRequireDefault(_Header);

	var _Hero = __webpack_require__(160);

	var _Hero2 = _interopRequireDefault(_Hero);

	var _MobileNav = __webpack_require__(161);

	var _MobileNav2 = _interopRequireDefault(_MobileNav);

	var _Videos = __webpack_require__(167);

	var _Videos2 = _interopRequireDefault(_Videos);

	var _AboutMovie = __webpack_require__(154);

	var _AboutMovie2 = _interopRequireDefault(_AboutMovie);

	var _PhotoGallery = __webpack_require__(164);

	var _PhotoGallery2 = _interopRequireDefault(_PhotoGallery);

	var _CastCrew = __webpack_require__(156);

	var _CastCrew2 = _interopRequireDefault(_CastCrew);

	var _Features = __webpack_require__(157);

	var _Features2 = _interopRequireDefault(_Features);

	var _Footer = __webpack_require__(158);

	var _Footer2 = _interopRequireDefault(_Footer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var history = (0, _history.createHistory)();

	exports.default = {
	  components: {
	    SiteHeader: _Header2.default,
	    SiteHero: _Hero2.default,
	    MobileNav: _MobileNav2.default,
	    MovieVideos: _Videos2.default,
	    AboutMovie: _AboutMovie2.default,
	    PhotoGallery: _PhotoGallery2.default,
	    CastCrew: _CastCrew2.default,
	    SiteFeatures: _Features2.default,
	    SiteFooter: _Footer2.default
	  },

	  data: function data() {
	    return {
	      menuOpen: false
	    };
	  },


	  computed: {
	    style: function style() {
	      return {
	        fontFamily: _localization2.default.get('text-font') + ', sans-serif'
	      };
	    },
	    headerVisible: function headerVisible() {
	      return _localization2.default.get('header.visible');
	    },
	    navVisible: function navVisible() {
	      return _localization2.default.get('nav.visible');
	    },
	    heroVisible: function heroVisible() {
	      return _localization2.default.get('hero.visible');
	    },
	    videosVisible: function videosVisible() {
	      return _localization2.default.get('videos.visible');
	    },
	    aboutVisible: function aboutVisible() {
	      return _localization2.default.get('about.visible');
	    },
	    galleryVisible: function galleryVisible() {
	      return _localization2.default.get('gallery.visible');
	    },
	    castVisible: function castVisible() {
	      return _localization2.default.get('cast-and-crew.visible');
	    },
	    featuresVisible: function featuresVisible() {
	      return _localization2.default.get('features.visible');
	    },
	    footerVisible: function footerVisible() {
	      return _localization2.default.get('footer.visible');
	    }
	  },

	  methods: {
	    updateCookiePushdownPosition: function updateCookiePushdownPosition() {
	      if ((0, _jquery2.default)('#_evh-ric:visible').length) {
	        (0, _jquery2.default)('#_evh-ric > div').attr('style', (0, _jquery2.default)('#_evh-ric > div').attr('style').replace('margin', 'padding'));
	        (0, _jquery2.default)('#_evh-ric').attr('style', (0, _jquery2.default)('#_evh-ric').attr('style') + '; top: 0 !important;');

	        (0, _jquery2.default)('.header').css('margin-top', (0, _jquery2.default)('#_evh-ric').outerHeight());
	        (0, _jquery2.default)('body').css('padding-top', (0, _jquery2.default)('#_evh-ric').outerHeight());

	        return;
	      }

	      (0, _jquery2.default)('.header').css('margin-top', 0);
	      (0, _jquery2.default)('body').css('padding-top', 0);
	       (0, _jquery2.default)('body').css('padding-bottom', 50);
	      (0, _jquery2.default)('#_evh-ric').attr('style', (0, _jquery2.default)('#_evh-ric').attr('style') + '; top: 0 !important;');
	    }
	  },

	  ready: function ready() {
	    var _this = this;

	    var baseHref = (0, _jquery2.default)('base').attr('href') || '';
	    if (baseHref.substr(baseHref.length - 1) === '/') {
	      baseHref = baseHref.substr(0, baseHref.length - 1);
	    }

	    document.title = (0, _translate2.default)('meta.title');

	    (0, _jquery2.default)('[src^="/static/"]').each(function () {
	      var value = (0, _jquery2.default)(this).attr('src').replace('/static/', 'static/');

	      (0, _jquery2.default)(this).attr('src', value);
	    });


	    (0, _jquery2.default)('head').append(_localization2.default.get('cookie-tracking-code'));
	    (0, _jquery2.default)('body').append(_localization2.default.get('click-tracking-code'));

	    if (_localization2.default.get('headTracking')) {
	      _localization2.default.get('headTracking').forEach(function (code) {
	        (0, _jquery2.default)('head').append(code);
	      });
	    }

	    if (_localization2.default.get('tracking')) {
	      _localization2.default.get('tracking').forEach(function (code) {
	        (0, _jquery2.default)('body').append(code);
	      });
	    }

	    (0, _jquery2.default)('body').bind('click', '#_evh-ric img', this.updateCookiePushdownPosition);

	    setTimeout(function () {
	      (0, _navigate2.default)(window.location.pathname.replace(baseHref, ''));

	      _this.updateCookiePushdownPosition();
	    }, 500);

	    (0, _jquery2.default)(document).on('scroll', function () {
	      var currentScrollTop = (0, _jquery2.default)(document).scrollTop();
	      var headerHeight = (0, _jquery2.default)('header').outerHeight();
	      var currentUrl = window.location.pathname.substr(baseHref, '');
	      var activeUrl = '/';
	      activeUrlSub = '/';

	      (0, _jquery2.default)('[data-url]').each(function (index, el) {
	        var $el = (0, _jquery2.default)(el);

	        if ($el.position().top <= currentScrollTop + headerHeight + 1) {
	          activeUrl = baseHref + $el.data('url');
	          activeUrlSub = $el.data('url');
	        }
	      });

	      if (activeUrlSub != '/')
	      	pauseHeroVid();
	      else
	      	playHeroVid();
	      
	      //console.log(activeUrlSub + " -- " + currentUrl);

	      if (activeUrl !== currentUrl) {
	        history.push({
	          pathname: activeUrl
	        });
	      }

	      	// for yt api
			var playerVideo;

			playerVideo = new YT.Player('yt', {
			    events: {
			      'onStateChange': onPlayerStateChange
			    }
			});
			function onPlayerStateChange(event) {
				if (event.data == YT.PlayerState.PLAYING) {
					YTplaying = true;
			        pauseHeroVid();
			    }
			    else if (event.data == YT.PlayerState.ENDED || event.data == YT.PlayerState.PAUSED) {
			    	YTplaying = false;
			    	if (document.getElementById("herovideo").paused){
			    			//if (!document[hidden])
			    				//$("#herovideo").prop("volume", 0.3);
			      				//playHeroVid();
			      	}
			    }
			    else{
			    	YTplaying = false;
			    }
			}
	    });
	  }
	};

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(6);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _localization = __webpack_require__(2);

	var _localization2 = _interopRequireDefault(_localization);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  computed: {
	    style: function style() {
	      var backgroundImage = 'url(static/img/' + _localization2.default.get('cast-and-crew.background-image-file') + ')';

	      return _lodash2.default.merge(_localization2.default.get('cast-and-crew.style'), { backgroundImage: backgroundImage });
	    },
	    columns: function columns() {
	      return _localization2.default.get('cast-and-crew.columns');
	    },
	    headingStyle: function headingStyle() {
	      return _localization2.default.get('cast-and-crew.heading-style');
	    },
	    subheadingStyle: function subheadingStyle() {
	      return _localization2.default.get('cast-and-crew.subheading-style');
	    },
	    personStyle: function personStyle() {
	      return _localization2.default.get('cast-and-crew.person-row-style');
	    }
	  }
	};

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _localization = __webpack_require__(2);

	var _localization2 = _interopRequireDefault(_localization);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  computed: {
	    style: function style() {
	      return _localization2.default.get('features.style');
	    },
	    items: function items() {
	      return _localization2.default.get('features.items');
	    },
	    subtitleColor: function subtitleColor() { console.log(_localization2.default.get('features.style') + " -- " + _localization2.default.get('accent-color'));
	      return _localization2.default.get('features.style');
	      //return _localization2.default.get('accent-color');
	    }
	  }
	};

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jquery = __webpack_require__(8);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _localization = __webpack_require__(2);

	var _localization2 = _interopRequireDefault(_localization);

	var _style = __webpack_require__(12);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      legalOverlayVisible: false
	    };
	  },


	  computed: {
	    style: function style() {
	      return _localization2.default.get('footer.style');
	    },
	    legalStyle: function legalStyle() {
	      return _localization2.default.get('footer.legalStyle');
	    },
	    links: function links() {
	      return _localization2.default.get('footer.links');
	    },
	    logos: function logos() {
	      return _localization2.default.get('footer.logo-files');
	    },
	    copyright: function copyright() {
	      return _localization2.default.get('footer.copyright').replace(/a\shref/, 'a class="link" href');
	    }
	  },

	  methods: {
	    onLinkMouseOver: function onLinkMouseOver(link) {
	      if (link['legal-rollover']) {
	        this.legalOverlayVisible = true;
	      }
	    },
	    onLinkMouseOut: function onLinkMouseOut() {
	      this.legalOverlayVisible = false;
	    },
	    handleLinkClick: function handleLinkClick(link, event) {
	      if (link['legal-rollover']) {
	        event.preventDefault();

	        return false;
	      }
	    }
	  },

	  ready: function ready() {
	    var _this = this;

	    _style2.default.addInlineStyleFromObject('.footer > .links > li > a:hover', _localization2.default.get('footer.link-hover-style'));

	    (0, _jquery2.default)('.legal-overlay').click(function () {
	      _this.legalOverlayVisible = false;
	    });
	  }
	};

/***/ },
/* 175 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(6);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _localization = __webpack_require__(2);

	var _localization2 = _interopRequireDefault(_localization);

	var _navigate2 = __webpack_require__(19);

	var _navigate3 = _interopRequireDefault(_navigate2);

	var _style = __webpack_require__(12);

	var _style2 = _interopRequireDefault(_style);

	var _Nav = __webpack_require__(163);

	var _Nav2 = _interopRequireDefault(_Nav);

	var _SocialIcon = __webpack_require__(18);

	var _SocialIcon2 = _interopRequireDefault(_SocialIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: ['menuOpen'],

	  components: {
	    HeaderNav: _Nav2.default,
	    SocialIcon: _SocialIcon2.default
	  },

	  computed: {
	    navVisible: function navVisible() {
	      return _localization2.default.get('nav.visible');
	    },
	    style: function style() {
	      return _localization2.default.get('header.style');
	    },
	    logoStyle: function logoStyle() {
	      var backgroundStyle = {
	        backgroundImage: 'url(static/img/' + _localization2.default.get('header.logo-file') + ')'
	      };

	      return _lodash2.default.merge({}, backgroundStyle, _localization2.default.get('header.style'));
	    },
	    socialStyle: function socialStyle() {
	      return _localization2.default.get('social.style');
	    }
	  },

	  methods: {
	    social: function social() {
	      return _localization2.default.get('social.items');
	    },
	    toggleMenu: function toggleMenu() {
	      this.menuOpen = !this.menuOpen;
	      document.body.classList.toggle('no-overflow');
	    },
	    navigate: function navigate(url) {
	      if (document.getElementById('video')) {
			document.getElementById('video').pause();
		  }

		  if (document.getElementById('yt')) {
			document.getElementById('yt').contentWindow.postMessage('{"event": "command","func":"pauseVideo","args":""}', '*');
		  }

	      if (url === '/') {
	        (function () {
	          var tracking = _localization2.default.get('menu.homepage.track');

	          if (window.sCode) {
	            setTimeout(function () {
	              window.sCode[tracking.action](tracking.param);
	            }, 0);
	          }
	        })();
	      }

	      (0, _navigate3.default)(url);
	    },
	    clickSocialMediaButton: function clickSocialMediaButton(network) {
	      var tracking = _localization2.default.get('social.items.' + network + '.track');

	      if (window.sCode) {
	        setTimeout(function () {
	          window.sCode[tracking.action](_localization2.default.get('social.items.' + network + '.link'), tracking.param);
	        }, 0);
	      }
	    }
	  },

	  ready: function ready() {
	    _style2.default.addInlineStyleFromObject('.social-buttons .list a:hover svg path', _localization2.default.get('header.social-button-hover-style'));
	  }
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(6);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _localization = __webpack_require__(2);

	var _localization2 = _interopRequireDefault(_localization);

	var _MovieReviews = __webpack_require__(162);

	var _MovieReviews2 = _interopRequireDefault(_MovieReviews);

	var _Tickets = __webpack_require__(166);

	var _Tickets2 = _interopRequireDefault(_Tickets);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    MovieReviews: _MovieReviews2.default,
	    MovieTickets: _Tickets2.default
	  },

	  computed: {
	    reviewsVisible: function reviewsVisible() {
	      return _localization2.default.get('reviews.visible');
	    },
	    posterImageFile: function posterImageFile() {
	      return '/static/img/' + _localization2.default.get('hero.poster-file');
	    },
	    type: function type() {
	      return _localization2.default.get('hero.type');
	    },
	    muteaudio: function muteaudio() {
	      return _localization2.default.get('hero.muteaudio');
	    },
	    videoPosterFile: function videoPosterFile() {
	      return 'static/videos/' + _localization2.default.get('hero.poster-file');
	    },
	    files: function files() {
	      return _lodash2.default.map(_localization2.default.get('hero.files'), function (file) {
	        return '/static/videos/' + file;
	      });
	    },
	    reviews: function reviews() {
	      return _localization2.default.get('reviews.items');
	    },
	    hasTicketsSection: function hasTicketsSection() {
	      return !!_localization2.default.get('tickets');
	    }
	  }
	};

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _localization = __webpack_require__(2);

	var _localization2 = _interopRequireDefault(_localization);

	var _navigate2 = __webpack_require__(19);

	var _navigate3 = _interopRequireDefault(_navigate2);

	var _SocialIcon = __webpack_require__(18);

	var _SocialIcon2 = _interopRequireDefault(_SocialIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: ['menuOpen'],

	  components: {
	    SocialIcon: _SocialIcon2.default
	  },

	  computed: {
	    iconColor: function iconColor() {
	      return _localization2.default.get('accent-color');
	    }
	  },

	  methods: {
	    exists: function exists(item) {
	      return _localization2.default.get('menu.' + item) && _localization2.default.get('menu.' + item).visible;
	    },
	    social: function social() {
	      return _localization2.default.get('social.items');
	    },
	    navigate: function navigate(url, element) {
	      var tracking = _localization2.default.get('menu.' + element + '.track');

	      if (window.sCode) {
	        setTimeout(function () {
	          window.sCode[tracking.action](tracking.param);
	        }, 0);
	      }

	      (0, _navigate3.default)(url);

	      this.menuOpen = false;
	      document.body.classList.remove('no-overflow');
	    },
	    clickSocialMediaButton: function clickSocialMediaButton(network) {
	      var tracking = _localization2.default.get('social.items.' + network + '.track');

	      if (window.sCode) {
	        setTimeout(function () {
	          window.sCode[tracking.action](_localization2.default.get('social.items.' + network + '.link'), tracking.param);
	        }, 0);
	      }
	    }
	  }
	};

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _localization = __webpack_require__(2);

	var _localization2 = _interopRequireDefault(_localization);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: ['reviews', 'moveUp'],

	  data: function data() {
	    return {
	      reviewIndex: 0,
	      state: 'normal'
	    };
	  },


	  computed: {
	    visibleReviews: function visibleReviews() {
	      return this.reviews.filter(function (review) {
	        return review.visible;
	      });
	    },
	    currentReview: function currentReview() {
	      return this.visibleReviews[this.reviewIndex];
	    },
	    style: function style() {
	      return _localization2.default.get('reviews.style');
	    },
	    contentStyle: function contentStyle() {
	      return _localization2.default.get('reviews.content-style');
	    },
	    authorStyle: function authorStyle() {
	      return _localization2.default.get('reviews.author-style');
	    }
	  },

	  methods: {
	    animate: function animate() {
	      var _this = this;

	      this.state = 'animating';

	      setTimeout(function () {
	        _this.reviewIndex = (_this.reviewIndex + 1) % _this.visibleReviews.length;
	      }, 500);

	      setTimeout(function () {
	        _this.state = null;

	        setTimeout(_this.animate, _localization2.default.get('reviews.delay'));
	      }, 1000);
	    }
	  },

	  ready: function ready() {
	    setTimeout(this.animate, _localization2.default.get('reviews.delay'));
	  }
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _localization = __webpack_require__(2);

	var _localization2 = _interopRequireDefault(_localization);

	var _navigate = __webpack_require__(19);

	var _navigate2 = _interopRequireDefault(_navigate);

	var _style = __webpack_require__(12);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  computed: {
	    linkStyle: function linkStyle() {
	      return _localization2.default.get('nav.link-style');
	    },
	    ticketsUrl: function ticketsUrl() {
	      return _localization2.default.get('menu.tickets').external;
	    }
	  },

	  methods: {
	    exists: function exists(item) {
	      return _localization2.default.get('menu.' + item) && _localization2.default.get('menu.' + item).visible;
	    },
	    navigateTo: function navigateTo(url, element) {
	      if (document.getElementById('video')) {
			document.getElementById('video').pause();
		  }

		  if (document.getElementById('yt')) {
			document.getElementById('yt').contentWindow.postMessage('{"event": "command","func":"pauseVideo","args":""}', '*');
		  }

	      var tracking = _localization2.default.get('menu.' + element + '.track');

	      if (window.sCode) {
	        setTimeout(function () {
	          window.sCode[tracking.action](tracking.param);
	        }, 0);
	      }

	      (0, _navigate2.default)(url);
	    }
	  },

	  ready: function ready() {
	    _style2.default.addInlineStyleFromObject('.nav > .list > li > a:hover', _localization2.default.get('nav.link-hover-style'));
	  }
	};

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jquery = __webpack_require__(8);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _lodash = __webpack_require__(6);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _localization = __webpack_require__(2);

	var _localization2 = _interopRequireDefault(_localization);

	var _colors = __webpack_require__(169);

	var _colors2 = _interopRequireDefault(_colors);

	var _style = __webpack_require__(12);

	var _style2 = _interopRequireDefault(_style);

	var _SocialIcon = __webpack_require__(18);

	var _SocialIcon2 = _interopRequireDefault(_SocialIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    SocialIcon: _SocialIcon2.default
	  },

	  computed: {
	    style: function style() {
	      return _localization2.default.get('gallery.style');
	    },
	    headingStyle: function headingStyle() {
	      return _localization2.default.get('gallery.heading-style');
	    },
	    photos: function photos() {
	      return _lodash2.default.map(_localization2.default.get('gallery.photos').filter(function (photo) {
	        return photo.visible;
	      }), function (item) {
	        return '/static/img/' + item.photo;
	      });
	    },
	    allPhotos: function allPhotos() {
	      return _localization2.default.get('gallery.photos').filter(function (photo) {
	        return photo.visible;
	      });
	    },
	    socialIconStyle: function socialIconStyle() {
	      var color = _colors2.default.hexToRgb(_localization2.default.get('accent-color'));

	      var style = {
	        'background-color': 'rgba(' + color.r + ', ' + color.g + ', ' + color.b + ', 0.3)'
	      };

	      return style;
	    }
	  },

	  methods: {
	    shareFacebook: function shareFacebook() {
	      var baseHref = window.location.protocol + '//' + window.location.hostname + (0, _jquery2.default)('base').attr('href');
	      var url = baseHref + 'gallery#' + (0, _jquery2.default)('#gallery').slick('slickCurrentSlide');

	      window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), '_blank', 'width=626,height=436');
	    },
	    shareTwitter: function shareTwitter() {
	      var baseHref = window.location.protocol + '//' + window.location.hostname + (0, _jquery2.default)('base').attr('href');
	      var url = baseHref + 'gallery#' + (0, _jquery2.default)('#gallery').slick('slickCurrentSlide');
	      var shareCopy = _localization2.default.get('gallery.twitter-share-message') + ' ' + url;

	      window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareCopy), '_blank', 'width=626,height=436');
	    },
	    shareTumblr: function shareTumblr() {
	      var baseHref = window.location.protocol + '//' + window.location.hostname + (0, _jquery2.default)('base').attr('href');
	      var currentIndex = (0, _jquery2.default)('#gallery').slick('slickCurrentSlide');
	      var photoUrl = baseHref + 'static/img/' + this.allPhotos[currentIndex].photo;
	      var photoDescription = this.allPhotos[currentIndex].description;

	      window.open('https://tumblr.com/share/photo?url=' + encodeURIComponent(photoUrl) + '&posttype=photo&content=' + encodeURIComponent(photoUrl) + '&description=' + encodeURIComponent(photoDescription), '_blank', 'width=626,height=436');
	    }
	  },

	  ready: function ready() {
	    _style2.default.addInlineStyle('\n      .photo-gallery .slick-prev::after {\n        background-image: url(\'static/img/' + _localization2.default.get('gallery.arrow-left-file') + '\');\n      }\n\n      .photo-gallery .slick-next::after {\n        background-image: url(\'static/img/' + _localization2.default.get('gallery.arrow-right-file') + '\');\n      }');

	    _style2.default.addInlineStyleFromObject('.photo-gallery .social-icons li a:hover', _localization2.default.get('gallery.social-icon-hover-style'));

	    var photoIndex = window.location.hash ? window.location.hash.replace('#', '') : 0;

	    (0, _jquery2.default)('#gallery').slick();
	    (0, _jquery2.default)('#gallery').slick('slickGoTo', photoIndex);


	    (0, _jquery2.default)('.photo-gallery .slick-prev').click(function () {
	      var tracking = _localization2.default.get('gallery.prev-gallery-track');

	      if (window.sCode) {
	        setTimeout(function () {
	          window.sCode[tracking.action](tracking.param);
	        }, 0);
	      }
	    });

	    (0, _jquery2.default)('.photo-gallery .slick-prev').click(function () {
	      var tracking = _localization2.default.get('gallery.next-gallery-track');

	      if (window.sCode) {
	        setTimeout(function () {
	          window.sCode[tracking.action](tracking.param);
	        }, 0);
	      }
	    });
	  }
	};

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _localization = __webpack_require__(2);

	var _localization2 = _interopRequireDefault(_localization);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  props: ['icon', 'large', 'color'],

	  computed: {
	    iconColor: function iconColor() {
	      return this.color ? this.color : _localization2.default.get('header.social-button-color');
	    }
	  }
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(6);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _localization = __webpack_require__(2);

	var _localization2 = _interopRequireDefault(_localization);

	var _countries = __webpack_require__(165);

	var _countries2 = _interopRequireDefault(_countries);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      countries: _countries2.default
	    };
	  },


	  computed: {
	    style: function style() {
	      var bgStyle = {
	        backgroundImage: 'url(static/img/' + _localization2.default.get('tickets.background-image-file') + ')'
	      };

	      return _lodash2.default.merge({}, bgStyle, _localization2.default.get('tickets.style'));
	    },
	    headerStyle: function headerStyle() {
	      return _localization2.default.get('tickets.header-style');
	    },
	    subheaderStyle: function subheaderStyle() {
	      return _localization2.default.get('tickets.subheader-style');
	    },
	    buttonStyle: function buttonStyle() {
	      return _localization2.default.get('tickets.button-style');
	    }
	  }
	};

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _lodash = __webpack_require__(6);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _jquery = __webpack_require__(8);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _localization = __webpack_require__(2);

	var _localization2 = _interopRequireDefault(_localization);

	var _style = __webpack_require__(12);

	var _style2 = _interopRequireDefault(_style);

	var _SocialIcon = __webpack_require__(18);

	var _SocialIcon2 = _interopRequireDefault(_SocialIcon);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  components: {
	    SocialIcon: _SocialIcon2.default
	  },

	  data: function data() {
	    return {
	      activeIndex: 0
	    };
	  },


	  computed: {
	    style: function style() {
	      var backgroundImage = 'url(static/img/' + _localization2.default.get('videos.background-image-file') + ')';

	      return _lodash2.default.merge(_localization2.default.get('videos.style'), {
	        backgroundImage: backgroundImage
	      });
	    },
	    headingStyle: function headingStyle() {
	      return _localization2.default.get('videos.heading-style');
	    },
	    socialIconColor: function socialIconColor() {
	      return _localization2.default.get('videos.social-icon-color');
	    },
	    videos: function videos() {
	      return _localization2.default.get('videos.videos').filter(function (video) {
	        return video.visible;
	      }).map(function (video) {
	        return _lodash2.default.merge(video, {
	          fullThumbnail: video.thumbnail ? '/static/videos/' + video.thumbnail : 'http://img.youtube.com/vi/' + video.id + '/0.jpg',
	          filesFull: video.files ? video.files.map(function (file) {
	            return '/static/videos/' + file;
	          }) : null,
	          youtubeUrl: video.id ? 'https://www.youtube.com/embed/' + video.id + '?enablejsapi=1&rel=0&wmode=transparent&autoplay=0' : null,
	          posterFull: video.poster ? '/static/videos/' + video.poster : null
	        });
	      });
	    },
	    activeVideoThumbnailColor: function activeVideoThumbnailColor() { 
	      return _localization2.default.get('videos.active-video-thumbnail-color');
	    }
	  },

	  methods: {
	    shareFacebook: function shareFacebook() {
	      var baseHref = window.location.protocol + '//' + window.location.hostname + (0, _jquery2.default)('base').attr('href');
	      var url = baseHref + 'videos#video-' + this.activeIndex;

	      window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), '_blank', 'width=626,height=436');
	    },
	    shareTwitter: function shareTwitter() {
	      var baseHref = window.location.protocol + '//' + window.location.hostname + (0, _jquery2.default)('base').attr('href');
	      var url = baseHref + 'videos#video-' + this.activeIndex;
	      var shareCopy = _localization2.default.get('videos.twitter-share-message') + ' ' + url;

	      window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(shareCopy), '_blank', 'width=626,height=436');
	    },
	    shareTumblr: function shareTumblr() {
	      var baseHref = window.location.protocol + '//' + window.location.hostname + (0, _jquery2.default)('base').attr('href');
	      var url = baseHref + 'videos#video-' + this.activeIndex;

	      window.open('https://tumblr.com/share/link?url=' + encodeURIComponent(url), '_blank', 'width=626,height=436');
	    },
	    selectVideo: function selectVideo(index) {
	      this.activeIndex = index;

	      var tracking = this.videos[this.activeIndex].track;

	      if (window.sCode) {
	        setTimeout(function () {
	          window.sCode[tracking.action](tracking.param);
	        }, 0);
	      }
	    }
	  },

	  ready: function ready() {
	    var _this = this;

	    _style2.default.addInlineStyle('\n      .videos .slick-prev {\n        background-image: url(\'static/img/' + _localization2.default.get('videos.arrow-left-file') + '\');\n      }\n\n      .videos .slick-next {\n        background-image: url(\'static/img/' + _localization2.default.get('videos.arrow-right-file') + '\');\n      }\n    ');

	    _style2.default.addInlineStyleFromObject('.videos-social-icons li a:hover', _localization2.default.get('videos.social-icon-hover-style'));

	    (0, _jquery2.default)('#video-carousel').slick({
	      infinite: false,
	      slidesToShow: 4,
	      slidesToScroll: 4,
	      centerMode: false,
	      variableWidth: true,
	      responsive: [{
	        breakpoint: 768,
	        settings: {
	          arrows: false,
	          slidesToShow: 1,
	          slidesToScroll: 1
	        }
	      }]
	    });

	    if (window.location.hash.indexOf('video-') !== -1) {
	      this.activeIndex = parseInt(window.location.hash.replace('#video-', ''));
	      (0, _jquery2.default)('#video-carousel').slick('slickGoTo', this.activeIndex);
	    }

	    (0, _jquery2.default)('[data-slick-index]').click(function (event) {
	      (0, _jquery2.default)('#video-carousel').slick('slickGoTo', (0, _jquery2.default)(event.currentTarget).attr('data-slick-index'));
	    });

	    (0, _jquery2.default)('.videos .slick-prev').click(function () {
	      var tracking = _localization2.default.get('videos.prev-video-track');

	      if (window.sCode) {
	        setTimeout(function () {
	          window.sCode[tracking.action](tracking.param);
	        }, 0);
	      }
	    });

	    (0, _jquery2.default)('.videos .slick-prev').click(function () {
	      var tracking = _localization2.default.get('videos.next-video-track');

	      if (window.sCode) {
	        setTimeout(function () {
	          window.sCode[tracking.action](tracking.param);
	        }, 0);
	      }
	    });

	    setTimeout(function () {
	      (0, _jquery2.default)('#video-carousel').slick('slickGoTo', _this.activeIndex);
	    }, 200);

	    var onFocusChange = function onFocusChange(evt) {
	      if (document.getElementById('video')) {
	        document.getElementById('video').pause();
	      }

	      if (document.getElementById('yt')) {
	        document.getElementById('yt').contentWindow.postMessage('{"event": "command","func":"pauseVideo","args":""}', '*');
	      }
	    };

	    if ('hidden' in document) {
	      document.addEventListener('visibilitychange', onFocusChange);
	    } else if ('mozHidden' in document) {
	      document.addEventListener('mozvisibilitychange', onFocusChange);
	    } else if ('webkitHidden' in document) {
	      document.addEventListener('webkitvisibilitychange', onFocusChange);
	    } else if ('msHidden' in document) {
	      document.addEventListener('msvisibilitychange', onFocusChange);
	    } else if ('onfocusin' in document) {
	      document.onfocusin = document.onfocusout = onFocusChange;
	    }

	    // scroll to video and play
	    if (_localization2.default.get('videos.traileronload') == true){
			setTimeout(function () { 
				 $('html, body').animate({
				        scrollTop: $(".videos").offset().top + 20
				 }, 1000);

				 setTimeout(function () { 
					if (document.getElementById('video')) {
						document.getElementById('video').play();
					}

					if (document.getElementById('yt')) {
						document.getElementById('yt').contentWindow.postMessage('{"event": "command","func":"playVideo","args":""}', '*');
					}
				}, 1500);
		              //alert("HI");
		    }, 3000);
		}

		// ageGate
		agegateStatus = _localization2.default.get('agegate');
		__agegateUnderageMessage = _localization2.default.get('agegateUnderageMessage');
		__agegateMobileMessage = _localization2.default.get('agegateMobileMessage');
		__agegateMonthError = _localization2.default.get('agegateMonthError');
		__agegateDayError = _localization2.default.get('agegateDayError');
		__agegateYearError = _localization2.default.get('agegateYearError');

		// social visibility
		if (_localization2.default.get('social.items.facebook.visible'))
			agegate_socialurl_fb = _localization2.default.get('social.items.facebook.link');
		if (_localization2.default.get('social.items.twitter.visible'))
			agegate_socialurl_tw = _localization2.default.get('social.items.twitter.link');
		if (_localization2.default.get('social.items.youtube.visible'))
			agegate_socialurl_yt = _localization2.default.get('social.items.youtube.link');
		if (_localization2.default.get('social.items.instagram.visible'))
			agegate_socialurl_ig = _localization2.default.get('social.items.instagram.link');

		AgeGate();

	  }
	};

/***/ },
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 219 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 220 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 221 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 222 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 223 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 224 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 225 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 226 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 227 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 228 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 229 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 230 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 231 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 232 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./af": 51,
		"./af.js": 51,
		"./ar": 55,
		"./ar-ma": 52,
		"./ar-ma.js": 52,
		"./ar-sa": 53,
		"./ar-sa.js": 53,
		"./ar-tn": 54,
		"./ar-tn.js": 54,
		"./ar.js": 55,
		"./az": 56,
		"./az.js": 56,
		"./be": 57,
		"./be.js": 57,
		"./bg": 58,
		"./bg.js": 58,
		"./bn": 59,
		"./bn.js": 59,
		"./bo": 60,
		"./bo.js": 60,
		"./br": 61,
		"./br.js": 61,
		"./bs": 62,
		"./bs.js": 62,
		"./ca": 63,
		"./ca.js": 63,
		"./cs": 64,
		"./cs.js": 64,
		"./cv": 65,
		"./cv.js": 65,
		"./cy": 66,
		"./cy.js": 66,
		"./da": 67,
		"./da.js": 67,
		"./de": 69,
		"./de-at": 68,
		"./de-at.js": 68,
		"./de.js": 69,
		"./dv": 70,
		"./dv.js": 70,
		"./el": 71,
		"./el.js": 71,
		"./en-au": 72,
		"./en-au.js": 72,
		"./en-ca": 73,
		"./en-ca.js": 73,
		"./en-gb": 74,
		"./en-gb.js": 74,
		"./en-ie": 75,
		"./en-ie.js": 75,
		"./en-nz": 76,
		"./en-nz.js": 76,
		"./eo": 77,
		"./eo.js": 77,
		"./es": 79,
		"./es-do": 78,
		"./es-do.js": 78,
		"./es.js": 79,
		"./et": 80,
		"./et.js": 80,
		"./eu": 81,
		"./eu.js": 81,
		"./fa": 82,
		"./fa.js": 82,
		"./fi": 83,
		"./fi.js": 83,
		"./fo": 84,
		"./fo.js": 84,
		"./fr": 87,
		"./fr-ca": 85,
		"./fr-ca.js": 85,
		"./fr-ch": 86,
		"./fr-ch.js": 86,
		"./fr.js": 87,
		"./fy": 88,
		"./fy.js": 88,
		"./gd": 89,
		"./gd.js": 89,
		"./gl": 90,
		"./gl.js": 90,
		"./he": 91,
		"./he.js": 91,
		"./hi": 92,
		"./hi.js": 92,
		"./hr": 93,
		"./hr.js": 93,
		"./hu": 94,
		"./hu.js": 94,
		"./hy-am": 95,
		"./hy-am.js": 95,
		"./id": 96,
		"./id.js": 96,
		"./is": 97,
		"./is.js": 97,
		"./it": 98,
		"./it.js": 98,
		"./ja": 99,
		"./ja.js": 99,
		"./jv": 100,
		"./jv.js": 100,
		"./ka": 101,
		"./ka.js": 101,
		"./kk": 102,
		"./kk.js": 102,
		"./km": 103,
		"./km.js": 103,
		"./ko": 104,
		"./ko.js": 104,
		"./ky": 105,
		"./ky.js": 105,
		"./lb": 106,
		"./lb.js": 106,
		"./lo": 107,
		"./lo.js": 107,
		"./lt": 108,
		"./lt.js": 108,
		"./lv": 109,
		"./lv.js": 109,
		"./me": 110,
		"./me.js": 110,
		"./mk": 111,
		"./mk.js": 111,
		"./ml": 112,
		"./ml.js": 112,
		"./mr": 113,
		"./mr.js": 113,
		"./ms": 115,
		"./ms-my": 114,
		"./ms-my.js": 114,
		"./ms.js": 115,
		"./my": 116,
		"./my.js": 116,
		"./nb": 117,
		"./nb.js": 117,
		"./ne": 118,
		"./ne.js": 118,
		"./nl": 119,
		"./nl.js": 119,
		"./nn": 120,
		"./nn.js": 120,
		"./pa-in": 121,
		"./pa-in.js": 121,
		"./pl": 122,
		"./pl.js": 122,
		"./pt": 124,
		"./pt-br": 123,
		"./pt-br.js": 123,
		"./pt.js": 124,
		"./ro": 125,
		"./ro.js": 125,
		"./ru": 126,
		"./ru.js": 126,
		"./se": 127,
		"./se.js": 127,
		"./si": 128,
		"./si.js": 128,
		"./sk": 129,
		"./sk.js": 129,
		"./sl": 130,
		"./sl.js": 130,
		"./sq": 131,
		"./sq.js": 131,
		"./sr": 133,
		"./sr-cyrl": 132,
		"./sr-cyrl.js": 132,
		"./sr.js": 133,
		"./ss": 134,
		"./ss.js": 134,
		"./sv": 135,
		"./sv.js": 135,
		"./sw": 136,
		"./sw.js": 136,
		"./ta": 137,
		"./ta.js": 137,
		"./te": 138,
		"./te.js": 138,
		"./th": 139,
		"./th.js": 139,
		"./tl-ph": 140,
		"./tl-ph.js": 140,
		"./tlh": 141,
		"./tlh.js": 141,
		"./tr": 142,
		"./tr.js": 142,
		"./tzl": 143,
		"./tzl.js": 143,
		"./tzm": 145,
		"./tzm-latn": 144,
		"./tzm-latn.js": 144,
		"./tzm.js": 145,
		"./uk": 146,
		"./uk.js": 146,
		"./uz": 147,
		"./uz.js": 147,
		"./vi": 148,
		"./vi.js": 148,
		"./x-pseudo": 149,
		"./x-pseudo.js": 149,
		"./zh-cn": 150,
		"./zh-cn.js": 150,
		"./zh-tw": 151,
		"./zh-tw.js": 151
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 243;

/***/ },
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */
/***/ function(module, exports) {

	module.exports = "<section class=\"cast-crew\" data-url=\"/cast-and-crew\" :style=\"style\" _v-07b2f0fb=\"\">\n  <div class=\"container\" _v-07b2f0fb=\"\">\n    <div class=\"column\" _v-07b2f0fb=\"\">\n      <h2 class=\"heading\" :style=\"headingStyle\" _v-07b2f0fb=\"\">{{ 'cast-and-crew.heading' | translate }}</h2>\n      <h3 class=\"subheading\" :style=\"subheadingStyle\" _v-07b2f0fb=\"\">{{ 'cast-and-crew.subheading' | translate }}</h3>\n    </div>\n    <div class=\"column\" v-for=\"column in columns\" _v-07b2f0fb=\"\">\n      <div v-for=\"section in column\" :style=\"section.style\" _v-07b2f0fb=\"\">\n        <h2 class=\"section-heading\" :style=\"headingStyle\" _v-07b2f0fb=\"\">{{{ section.heading }}}</h2>\n        <ul _v-07b2f0fb=\"\">\n          <li v-for=\"person in section.content\" class=\"person\" :style=\"personStyle\" _v-07b2f0fb=\"\">\n            {{{ person }}}\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n";

/***/ },
/* 249 */
/***/ function(module, exports) { 
	module.exports = "<section class=\"features\" data-url=\"/features\" :style=\"style\" _v-1700ad9b=\"\">\n  <div class=\"feature\" v-for=\"feature in items\" v-if=\"feature.visible\" :style=\"{ backgroundImage: `url(static/img/${feature.image})` }\" _v-1700ad9b=\"\">\n    <div class=\"overlay-feat\" _v-5f2568bb=\"\"></div>\n    <a class=\"featurelink\" _v-1700ad9b=\"\">\n      <div _v-1700ad9b=\"\">\n        <h2 class=\"title\" _v-1700ad9b=\"\">{{ feature.title }}</h2>\n        <h3 class=\"subtitle\" :style=\"style\" _v-1700ad9b=\"\">{{{ feature.subtitle }}}</h3>\n      </div>\n    </a>\n  </div>\n</section>\n";
	//module.exports = "<section class=\"features\" data-url=\"/features\" :style=\"style\" _v-1700ad9b=\"\">\n  <div class=\"feature\" v-for=\"feature in items\" v-if=\"feature.visible\" :style=\"{ backgroundImage: `url(static/img/${feature.image})` }\" _v-1700ad9b=\"\">\n    <a class=\"featurelink\" onclick=\"game('{{feature.link}}');\" :href=\"#\" _v-1700ad9b=\"\">\n      <div _v-1700ad9b=\"\">\n        <h2 class=\"title\" _v-1700ad9b=\"\">{{ feature.title }}</h2>\n        <h3 class=\"subtitle\" :style=\"{ color: subtitleColor }\" _v-1700ad9b=\"\">{{ feature.subtitle }}</h3>\n      </div>\n    </a>\n  </div>\n</section>\n";

/***/ },
/* 250 */
/***/ function(module, exports) {

	module.exports = "<svg v-if=\"icon === 'facebook'\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" :width=\"large ? 24 : 16\" :height=\"large ? 24 : 16\" viewBox=\"0 0 16 16\" _v-19d1b77b=\"\">\n  <path :fill=\"iconColor\" d=\"M9.5 3h2.5v-3h-2.5c-1.93 0-3.5 1.57-3.5 3.5v1.5h-2v3h2v8h3v-8h2.5l0.5-3h-3v-1.5c0-0.271 0.229-0.5 0.5-0.5z\" _v-19d1b77b=\"\"></path>\n</svg>\n\n<svg v-if=\"icon === 'google-plus'\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" :width=\"large ? 24 : 16\" :height=\"large ? 24 : 16\" viewBox=\"0 0 16 16\" _v-19d1b77b=\"\">\n  <path :fill=\"iconColor\" d=\"M5.091 7.147v1.747h2.888c-0.116 0.75-0.872 2.197-2.888 2.197-1.737 0-3.156-1.441-3.156-3.216s1.419-3.216 3.156-3.216c0.991 0 1.65 0.422 2.028 0.784l1.381-1.331c-0.888-0.828-2.037-1.331-3.409-1.331-2.816 0.003-5.091 2.278-5.091 5.094s2.275 5.091 5.091 5.091c2.937 0 4.888-2.066 4.888-4.975 0-0.334-0.037-0.591-0.081-0.844h-4.806z\" _v-19d1b77b=\"\"></path>\n  <path :fill=\"iconColor\" d=\"M16 7h-1.5v-1.5h-1.5v1.5h-1.5v1.5h1.5v1.5h1.5v-1.5h1.5z\" _v-19d1b77b=\"\"></path>\n</svg>\n\n<svg v-if=\"icon === 'instagram'\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 456.28 456.28\" :width=\"large ? 24 : 16\" :height=\"large ? 24 : 16\" _v-19d1b77b=\"\">\n  <defs _v-19d1b77b=\"\"><style _v-19d1b77b=\"\">.cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}</style><clipPath id=\"clip-path\" transform=\"translate(0 0)\" _v-19d1b77b=\"\"><rect class=\"cls-1\" width=\"456.28\" height=\"456.28\" _v-19d1b77b=\"\"></rect></clipPath></defs><title _v-19d1b77b=\"\">Instagram-icon-black</title><g class=\"cls-2\" _v-19d1b77b=\"\"><path class=\"cls-3\" :fill=\"iconColor\" d=\"M228.14,41.1c60.92,0,68.13.23,92.19,1.33,22.24,1,34.32,4.73,42.36,7.86a70.69,70.69,0,0,1,26.23,17.07A70.66,70.66,0,0,1,406,93.59c3.12,8,6.84,20.12,7.86,42.36,1.1,24.06,1.33,31.27,1.33,92.19s-.23,68.13-1.33,92.19c-1,22.24-4.73,34.32-7.86,42.36a75.55,75.55,0,0,1-43.3,43.3c-8,3.12-20.12,6.84-42.36,7.85-24.05,1.1-31.27,1.33-92.19,1.33S160,414.94,136,413.84c-22.24-1-34.32-4.73-42.36-7.85a70.69,70.69,0,0,1-26.23-17.07,70.72,70.72,0,0,1-17.07-26.23c-3.12-8-6.84-20.12-7.86-42.36-1.1-24.06-1.33-31.27-1.33-92.19s.23-68.13,1.33-92.19c1-22.24,4.73-34.32,7.86-42.36A70.7,70.7,0,0,1,67.36,67.35,70.69,70.69,0,0,1,93.59,50.29c8-3.12,20.12-6.84,42.36-7.86,24.06-1.1,31.27-1.33,92.19-1.33m0-41.11c-62,0-69.73.26-94.06,1.37S93.21,6.34,78.7,12A111.81,111.81,0,0,0,38.29,38.29,111.83,111.83,0,0,0,12,78.7c-5.64,14.51-9.5,31.1-10.6,55.38S0,166.18,0,228.14s.26,69.73,1.37,94.06,5,40.87,10.6,55.38A111.82,111.82,0,0,0,38.29,418,111.81,111.81,0,0,0,78.7,444.3c14.51,5.64,31.09,9.5,55.38,10.6s32.1,1.37,94.06,1.37,69.73-.26,94.06-1.37,40.87-5,55.38-10.6a116.65,116.65,0,0,0,66.72-66.72c5.64-14.51,9.5-31.1,10.6-55.38s1.37-32.1,1.37-94.06-.26-69.73-1.37-94.06-5-40.87-10.6-55.38A111.83,111.83,0,0,0,418,38.29,111.81,111.81,0,0,0,377.58,12c-14.51-5.64-31.09-9.5-55.38-10.6S290.1,0,228.14,0\" transform=\"translate(0 0)\" _v-19d1b77b=\"\"></path><path class=\"cls-3\" :fill=\"iconColor\" d=\"M228.14,111A117.15,117.15,0,1,0,345.29,228.14,117.15,117.15,0,0,0,228.14,111m0,193.2a76,76,0,1,1,76-76,76,76,0,0,1-76,76\" transform=\"translate(0 0)\" _v-19d1b77b=\"\"></path><path class=\"cls-3\" :fill=\"iconColor\" d=\"M377.3,106.36A27.38,27.38,0,1,1,349.92,79a27.38,27.38,0,0,1,27.38,27.38\" transform=\"translate(0 0)\" _v-19d1b77b=\"\"></path></g>\n</svg>\n\n<svg v-if=\"icon === 'linkedin'\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" :width=\"large ? 24 : 16\" :height=\"large ? 24 : 16\" viewBox=\"0 0 16 16\" _v-19d1b77b=\"\">\n  <path :fill=\"iconColor\" d=\"M14.5 0h-13c-0.825 0-1.5 0.675-1.5 1.5v13c0 0.825 0.675 1.5 1.5 1.5h13c0.825 0 1.5-0.675 1.5-1.5v-13c0-0.825-0.675-1.5-1.5-1.5zM6 13h-2v-7h2v7zM5 5c-0.553 0-1-0.447-1-1s0.447-1 1-1c0.553 0 1 0.447 1 1s-0.447 1-1 1zM13 13h-2v-4c0-0.553-0.447-1-1-1s-1 0.447-1 1v4h-2v-7h2v1.241c0.412-0.566 1.044-1.241 1.75-1.241 1.244 0 2.25 1.119 2.25 2.5v4.5z\" _v-19d1b77b=\"\"></path>\n</svg>\n\n<svg v-if=\"icon === 'pinterest'\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" :width=\"large ? 24 : 16\" :height=\"large ? 24 : 16\" viewBox=\"0 0 16 16\" _v-19d1b77b=\"\">\n  <path :fill=\"iconColor\" d=\"M8 1.069c-3.828 0-6.931 3.103-6.931 6.931 0 2.938 1.828 5.444 4.406 6.453-0.059-0.547-0.116-1.391 0.025-1.988 0.125-0.541 0.813-3.444 0.813-3.444s-0.206-0.416-0.206-1.028c0-0.963 0.559-1.684 1.253-1.684 0.591 0 0.878 0.444 0.878 0.975 0 0.594-0.378 1.484-0.575 2.306-0.166 0.691 0.344 1.253 1.025 1.253 1.231 0 2.178-1.3 2.178-3.175 0-1.659-1.194-2.819-2.894-2.819-1.972 0-3.128 1.478-3.128 3.009 0 0.597 0.228 1.234 0.516 1.581 0.056 0.069 0.066 0.128 0.047 0.2-0.053 0.219-0.169 0.691-0.194 0.787-0.031 0.128-0.1 0.153-0.231 0.094-0.866-0.403-1.406-1.669-1.406-2.684 0-2.188 1.587-4.194 4.578-4.194 2.403 0 4.272 1.712 4.272 4.003 0 2.388-1.506 4.313-3.597 4.313-0.703 0-1.362-0.366-1.588-0.797 0 0-0.347 1.322-0.431 1.647-0.156 0.603-0.578 1.356-0.862 1.816 0.65 0.2 1.337 0.309 2.053 0.309 3.828 0 6.931-3.103 6.931-6.931 0-3.831-3.103-6.934-6.931-6.934z\" _v-19d1b77b=\"\"></path>\n</svg>\n\n<svg v-if=\"icon === 'soundcloud'\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" :width=\"large ? 24 : 16\" :height=\"large ? 24 : 16\" viewBox=\"0 0 16 16\" _v-19d1b77b=\"\">\n  <path :fill=\"iconColor\" d=\"M13.937 8.034c-0.283 0-0.552 0.055-0.798 0.154-0.164-1.787-1.723-3.188-3.625-3.188-0.465 0-0.917 0.088-1.317 0.237-0.156 0.058-0.197 0.117-0.197 0.233v6.292c0 0.121 0.098 0.222 0.221 0.234 0.005 0.001 5.68 0.003 5.717 0.003 1.139 0 2.062-0.888 2.062-1.983s-0.924-1.983-2.063-1.983zM6.25 12h0.5l0.25-3.503-0.25-3.497h-0.5l-0.25 3.497zM4.75 12h-0.5l-0.25-2.543 0.25-2.457h0.5l0.25 2.5zM2.25 12h0.5l0.25-2-0.25-2h-0.5l-0.25 2zM0.25 11h0.5l0.25-1-0.25-1h-0.5l-0.25 1z\" _v-19d1b77b=\"\"></path>\n</svg>\n\n<svg v-if=\"icon === 'tumblr'\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" :width=\"large ? 24 : 16\" :height=\"large ? 24 : 16\" viewBox=\"0 0 16 16\" _v-19d1b77b=\"\">\n  <path :fill=\"iconColor\" d=\"M9.001 7l-0 3.659c0 0.928-0.012 1.463 0.086 1.727 0.098 0.262 0.342 0.534 0.609 0.691 0.354 0.212 0.758 0.318 1.214 0.318 0.81 0 1.289-0.107 2.090-0.633v2.405c-0.683 0.321-1.279 0.509-1.833 0.639-0.555 0.129-1.154 0.194-1.798 0.194-0.732 0-1.163-0.092-1.725-0.276-0.562-0.185-1.042-0.45-1.438-0.79-0.398-0.343-0.672-0.706-0.826-1.091s-0.23-0.944-0.23-1.676v-5.611h-2.147v-2.266c0.628-0.204 1.331-0.497 1.778-0.877 0.449-0.382 0.809-0.839 1.080-1.374 0.272-0.534 0.459-1.214 0.561-2.039h2.579l-0 4h3.999v3h-3.999z\" _v-19d1b77b=\"\"></path>\n</svg>\n\n<svg v-if=\"icon === 'twitch'\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" :width=\"large ? 24 : 16\" :height=\"large ? 24 : 16\" viewBox=\"0 0 16 16\" _v-19d1b77b=\"\">\n  <path :fill=\"iconColor\" d=\"M1.5 0l-1.5 2.5v11.5h4v2h2l2-2h2.5l4.5-4.5v-9.5h-13.5zM13 8.5l-2.5 2.5h-2.5l-2 2v-2h-3v-9h10v6.5z\" _v-19d1b77b=\"\"></path>\n  <path :fill=\"iconColor\" d=\"M9.5 4h1.5v4h-1.5v-4z\" _v-19d1b77b=\"\"></path>\n  <path :fill=\"iconColor\" d=\"M6.5 4h1.5v4h-1.5v-4z\" _v-19d1b77b=\"\"></path>\n</svg>\n\n<svg v-if=\"icon === 'twitter'\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" :width=\"large ? 24 : 16\" :height=\"large ? 24 : 16\" viewBox=\"0 0 16 16\" _v-19d1b77b=\"\">\n  <path :fill=\"iconColor\" d=\"M16 3.538c-0.588 0.263-1.222 0.438-1.884 0.516 0.678-0.406 1.197-1.050 1.444-1.816-0.634 0.375-1.338 0.65-2.084 0.797-0.6-0.638-1.453-1.034-2.397-1.034-1.813 0-3.281 1.469-3.281 3.281 0 0.256 0.028 0.506 0.084 0.747-2.728-0.138-5.147-1.444-6.766-3.431-0.281 0.484-0.444 1.050-0.444 1.65 0 1.138 0.578 2.144 1.459 2.731-0.538-0.016-1.044-0.166-1.488-0.409 0 0.013 0 0.028 0 0.041 0 1.591 1.131 2.919 2.634 3.219-0.275 0.075-0.566 0.116-0.866 0.116-0.212 0-0.416-0.022-0.619-0.059 0.419 1.303 1.631 2.253 3.066 2.281-1.125 0.881-2.538 1.406-4.078 1.406-0.266 0-0.525-0.016-0.784-0.047 1.456 0.934 3.181 1.475 5.034 1.475 6.037 0 9.341-5.003 9.341-9.341 0-0.144-0.003-0.284-0.009-0.425 0.641-0.459 1.197-1.038 1.637-1.697z\" _v-19d1b77b=\"\"></path>\n</svg>\n\n<svg v-if=\"icon === 'youtube'\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" :width=\"large ? 24 : 16\" :height=\"large ? 24 : 16\" viewBox=\"0 0 16 16\" _v-19d1b77b=\"\">\n  <path :fill=\"iconColor\" d=\"M15.841 4.8c0 0-0.156-1.103-0.637-1.587-0.609-0.637-1.291-0.641-1.603-0.678-2.237-0.163-5.597-0.163-5.597-0.163h-0.006c0 0-3.359 0-5.597 0.163-0.313 0.038-0.994 0.041-1.603 0.678-0.481 0.484-0.634 1.587-0.634 1.587s-0.159 1.294-0.159 2.591v1.213c0 1.294 0.159 2.591 0.159 2.591s0.156 1.103 0.634 1.588c0.609 0.637 1.409 0.616 1.766 0.684 1.281 0.122 5.441 0.159 5.441 0.159s3.363-0.006 5.6-0.166c0.313-0.037 0.994-0.041 1.603-0.678 0.481-0.484 0.637-1.588 0.637-1.588s0.159-1.294 0.159-2.591v-1.213c-0.003-1.294-0.162-2.591-0.162-2.591zM6.347 10.075v-4.497l4.322 2.256-4.322 2.241z\" _v-19d1b77b=\"\"></path>\n</svg>\n";

/***/ },
/* 251 */
/***/ function(module, exports) {

	module.exports = "<div class=\"root\" :style=\"style\" _v-577d0bbf=\"\">\n  <site-header :menu-open.sync=\"menuOpen\" v-if=\"headerVisible\" _v-577d0bbf=\"\"></site-header>\n  <site-hero v-if=\"heroVisible\" _v-577d0bbf=\"\"></site-hero>\n  <movie-videos v-if=\"videosVisible\" _v-577d0bbf=\"\"></movie-videos>\n  <about-movie v-if=\"aboutVisible\" _v-577d0bbf=\"\"></about-movie>\n  <site-features v-if=\"featuresVisible\" _v-577d0bbf=\"\"></site-features>\n  <photo-gallery v-if=\"galleryVisible\" _v-577d0bbf=\"\"></photo-gallery>\n  <cast-crew v-if=\"castVisible\" _v-577d0bbf=\"\"></cast-crew>\n  <site-footer v-if=\"footerVisible\" _v-577d0bbf=\"\"></site-footer>\n\n  <mobile-nav :menu-open.sync=\"menuOpen\" v-if=\"navVisible\" _v-577d0bbf=\"\"></mobile-nav>\n</div>\n";

/***/ },
/* 252 */
/***/ function(module, exports) {
	//if (muteAudio)
		module.exports = "<section class=\"hero\" data-url=\"/\" _v-5f2568bb=\"\">\n  <img class=\"poster\" :src=\"posterImageFile\" alt=\"Poster\" v-if=\"type === 'poster'\" _v-5f2568bb=\"\">\n  <video class=\"video\" id=\"herovideo\" playsinline=\"\" autoplay=\"\" oncanplay=\"if(!Modernizr.touch){this.play();this.volume=0.2;}\" loop=\"\" muted=\"{{ muteaudio }}\" :poster=\"videoPosterFile\" v-if=\"type === 'video'\" _v-5f2568bb=\"\">\n    <source :src=\"file\" v-for=\"file in files\" _v-5f2568bb=\"\">\n  </video>\n  <img class=\"video-replacement-poster\" :src=\"videoPosterFile\" alt=\"Poster\" v-if=\"type === 'video'\" _v-5f2568bb=\"\">\n\n  <div class=\"overlay\" _v-5f2568bb=\"\"></div>\n\n  <div class=\"content\" _v-5f2568bb=\"\">\n\n  </div>\n  <movie-reviews :reviews=\"reviews\" v-if=\"reviews &amp;&amp; reviewsVisible\" :move-up=\"hasTicketsSection\" _v-5f2568bb=\"\"></movie-reviews>\n  <movie-tickets v-if=\"hasTicketsSection\" _v-5f2568bb=\"\"></movie-tickets>\n</section>\n";
	//else
		//module.exports = "<section class=\"hero\" data-url=\"/\" _v-5f2568bb=\"\">\n  <img class=\"poster\" :src=\"posterImageFile\" alt=\"Poster\" v-if=\"type === 'poster'\" _v-5f2568bb=\"\">\n  <video class=\"video\" id=\"herovideo\" playsinline=\"\" autoplay=\"\" oncanplay=\"if(!Modernizr.touch){this.play();this.volume=0.2;}\" loop=\"\" :poster=\"videoPosterFile\" v-if=\"type === 'video'\" _v-5f2568bb=\"\">\n    <source :src=\"file\" v-for=\"file in files\" _v-5f2568bb=\"\">\n  </video>\n  <img class=\"video-replacement-poster\" :src=\"videoPosterFile\" alt=\"Poster\" v-if=\"type === 'video'\" _v-5f2568bb=\"\">\n\n  <div class=\"overlay\" _v-5f2568bb=\"\"></div>\n\n  <div class=\"content\" _v-5f2568bb=\"\">\n\n  </div>\n  <movie-reviews :reviews=\"reviews\" v-if=\"reviews &amp;&amp; reviewsVisible\" :move-up=\"hasTicketsSection\" _v-5f2568bb=\"\"></movie-reviews>\n  <movie-tickets v-if=\"hasTicketsSection\" _v-5f2568bb=\"\"></movie-tickets>\n</section>\n";

/***/ },
/* 253 */
/***/ function(module, exports) {

	module.exports = "<section class=\"about-movie\" data-url=\"/about\" :style=\"style\" _v-651d794a=\"\">\n  <div class=\"main-photo\" :style=\"primaryPhotoStyle\" _v-651d794a=\"\"></div>\n  <div class=\"sidebar\" _v-651d794a=\"\">\n    <div class=\"copy-container\" _v-651d794a=\"\">\n      <h2 :style=\"headingStyle\" _v-651d794a=\"\">{{{ 'about.heading' | translate }}}</h2>\n      <h3 :style=\"subheadingStyle\" _v-651d794a=\"\">{{{ inTheatersText }}}</h3>\n      <p :style=\"descriptionStyle\" _v-651d794a=\"\">{{{ 'about.description' | translate }}}</p>\n    </div>\n    <div class=\"secondary-photo\" :style=\"secondaryPhotoStyle\" _v-651d794a=\"\"></div>\n  </div>\n</section>\n";

/***/ },
/* 254 */
/***/ function(module, exports) {
	module.exports = "<nav class=\"mobile-nav\" :class=\"{ open: menuOpen }\" _v-65b6663f=\"\">\n  <div _v-65b6663f=\"\">\n    <ul class=\"list\" _v-65b6663f=\"\">\n      <li v-if=\"exists('tickets')\" _v-65b6663f=\"\"><a href=\"{{ \'menu.tickets.external\' | translate }}\" target=\"_blank\" _v-65b6663f=\"\">{{ 'menu.tickets.label' | translate }}</a></li>\n      <li v-if=\"exists('videos')\" _v-65b6663f=\"\"><a href=\"/videos\" @click.prevent=\"navigate('/videos', 'videos')\" _v-65b6663f=\"\">{{ 'menu.videos.label' | translate }}</a></li>\n      <li v-if=\"exists('about')\" _v-65b6663f=\"\"><a href=\"/about\" @click.prevent=\"navigate('/about', 'about')\" _v-65b6663f=\"\">{{ 'menu.about.label' | translate}}</a></li>\n    <li v-if=\"exists('features')\" _v-65b6663f=\"\"><a href=\"/features\" @click.prevent=\"navigate('/features', 'features')\" _v-65b6663f=\"\">{{ 'menu.features.label' | translate }}</a></li>\n   <li v-if=\"exists('gallery')\" _v-65b6663f=\"\"><a href=\"/gallery\" @click.prevent=\"navigate('/gallery', 'gallery')\" _v-65b6663f=\"\">{{ 'menu.gallery.label' | translate}}</a></li>\n      <li v-if=\"exists('cast')\" _v-65b6663f=\"\"><a href=\"/cast-and-crew\" @click.prevent=\"navigate('/cast-and-crew', 'cast')\" _v-65b6663f=\"\">{{ 'menu.cast.label' | translate }}</a></li>\n   <li v-if=\"exists('game1')\" _v-65b6663f=\"\"><a class=\"game\" onclick=\"game('{{ 'menu.game1.external' | translate }}');\":style=\"linkStyle\" _v-65b6663f=\"\">{{ 'menu.game1.label' | translate }}</a></li>\n <li v-if=\"exists('game2')\" _v-65b6663f=\"\"><a class=\"game\" onclick=\"game('{{ 'menu.game2.external' | translate }}');\" :style=\"linkStyle\" _v-65b6663f=\"\">{{ 'menu.game2.label' | translate }}</a></li>\n  <li v-if=\"exists('social-feed')\" _v-65b6663f=\"\"><a href=\"/social-feed\" @click.prevent=\"navigate('/social-feed', 'social-feed')\" _v-65b6663f=\"\">{{ 'menu.social-feed.label' | translate }}</a></li>\n    </ul>\n\n    <nav class=\"social-buttons\" :style=\"socialStyle\" _v-65b6663f=\"\">\n      <ul class=\"social-list\" _v-65b6663f=\"\">\n        <li v-for=\"(network, obj) in social()\" v-if=\"obj.visible\" _v-65b6663f=\"\"><a href=\"javascript:void(0)\" :data-href=\"obj.link\" :id=\"[network]\" class=\"ageGate\" @click=\"clickSocialMediaButton(network)\" :style=\"obj.style\" target=\"_blank\" _v-65b6663f=\"\"><social-icon :icon=\"network\" :large=\"true\" :color=\"iconColor\" _v-65b6663f=\"\"></social-icon></a></li>\n      </ul>\n    </nav>\n  </div>\n</nav>\n";
	//module.exports = "<nav class=\"mobile-nav\" :class=\"{ open: menuOpen }\" _v-65b6663f=\"\">\n  <div _v-65b6663f=\"\">\n    <ul class=\"list\" _v-65b6663f=\"\">\n      <li v-if=\"exists('tickets')\" _v-65b6663f=\"\"><a href=\"{{ \'menu.tickets.external\' | translate }}\" target=\"_blank\" _v-65b6663f=\"\">{{ 'menu.tickets.label' | translate }}</a></li>\n      <li v-if=\"exists('videos')\" _v-65b6663f=\"\"><a href=\"/videos\" @click.prevent=\"navigate('/videos', 'videos')\" _v-65b6663f=\"\">{{ 'menu.videos.label' | translate }}</a></li>\n      <li v-if=\"exists('about')\" _v-65b6663f=\"\"><a href=\"/about\" @click.prevent=\"navigate('/about', 'about')\" _v-65b6663f=\"\">{{ 'menu.about.label' | translate}}</a></li>\n      <li v-if=\"exists('gallery')\" _v-65b6663f=\"\"><a href=\"/gallery\" @click.prevent=\"navigate('/gallery', 'gallery')\" _v-65b6663f=\"\">{{ 'menu.gallery.label' | translate}}</a></li>\n      <li v-if=\"exists('cast')\" _v-65b6663f=\"\"><a href=\"/cast-and-crew\" @click.prevent=\"navigate('/cast-and-crew', 'cast')\" _v-65b6663f=\"\">{{ 'menu.cast.label' | translate }}</a></li>\n   <li v-if=\"exists('game1')\" _v-65b6663f=\"\"><a class=\"game\" onclick=\"game('{{ 'menu.game1.external' | translate }}');\":style=\"linkStyle\" _v-65b6663f=\"\">{{ 'menu.game1.label' | translate }}</a></li>\n <li v-if=\"exists('game2')\" _v-65b6663f=\"\"><a class=\"game\" onclick=\"game('{{ 'menu.game2.external' | translate }}');\" :style=\"linkStyle\" _v-65b6663f=\"\">{{ 'menu.game2.label' | translate }}</a></li>\n   <li v-if=\"exists('features')\" _v-65b6663f=\"\"><a href=\"/features\" @click.prevent=\"navigate('/features', 'features')\" _v-65b6663f=\"\">{{ 'menu.features.label' | translate }}</a></li>\n      <li v-if=\"exists('social-feed')\" _v-65b6663f=\"\"><a href=\"/social-feed\" @click.prevent=\"navigate('/social-feed', 'social-feed')\" _v-65b6663f=\"\">{{ 'menu.social-feed.label' | translate }}</a></li>\n    </ul>\n\n    <nav class=\"social-buttons\" :style=\"socialStyle\" _v-65b6663f=\"\">\n      <ul class=\"social-list\" _v-65b6663f=\"\">\n        <li v-for=\"(network, obj) in social()\" v-if=\"obj.visible\" _v-65b6663f=\"\"><a href=\"javascript:void(0)\" :data-href=\"obj.link\" :id=\"[network]\" class=\"ageGate\" @click=\"clickSocialMediaButton(network)\" :style=\"obj.style\" target=\"_blank\" _v-65b6663f=\"\"><social-icon :icon=\"network\" :large=\"true\" :color=\"iconColor\" _v-65b6663f=\"\"></social-icon></a></li>\n      </ul>\n    </nav>\n  </div>\n</nav>\n";

/***/ },
/* 255 */
/***/ function(module, exports) {

	module.exports = "<section class=\"tickets\" data-url=\"/tickets\" _v-750c1c4b=\"\">\n  <div class=\"box\" :style=\"style\" _v-750c1c4b=\"\">\n    <h2 class=\"header\" :style=\"headerStyle\" _v-750c1c4b=\"\">{{ 'tickets.header' | translate }}</h2>\n    <h3 class=\"subheader\" :style=\"subheaderStyle\" _v-750c1c4b=\"\">{{ 'tickets.subheader' | translate }}</h3>\n\n    <form class=\"form\" action=\"#\" method=\"post\" _v-750c1c4b=\"\">\n      <div class=\"fields-container\" _v-750c1c4b=\"\">\n        <div class=\"half-container\" _v-750c1c4b=\"\">\n          <select class=\"field country\" _v-750c1c4b=\"\">\n            <option _v-750c1c4b=\"\">{{ 'tickets.country-field' | translate }}</option>\n            <option v-for=\"country in countries\" _v-750c1c4b=\"\">{{ country.name | ucwords }}</option>\n          </select>\n\n          <input class=\"field zipcode\" type=\"text\" placeholder=\"{{ 'tickets.zipcode-field' | translate }}\" _v-750c1c4b=\"\">\n        </div>\n\n        <div class=\"half-container\" _v-750c1c4b=\"\">\n          <input class=\"field date\" type=\"text\" placeholder=\"{{ 'tickets.date-field' | translate }}\" _v-750c1c4b=\"\">\n        </div>\n      </div>\n      <div class=\"button-container\" _v-750c1c4b=\"\">\n        <button class=\"button\" :style=\"buttonStyle\" type=\"submit\" _v-750c1c4b=\"\">{{ 'tickets.go-button' | translate }}</button>\n      </div>\n    </form>\n</div></section>\n";

/***/ },
/* 256 */
/***/ function(module, exports) {

	module.exports = "<div class=\"movie-reviews\" :class=\"[state, { 'move-up': moveUp }]\" :style=\"style\" _v-7f0ce75b=\"\">\n  <div class=\"review\" _v-7f0ce75b=\"\">\n    <p class=\"content\" :style=\"contentStyle\" _v-7f0ce75b=\"\">“{{ currentReview.content }}”</p>\n    <p class=\"author\" :style=\"authorStyle\" _v-7f0ce75b=\"\">{{ currentReview.author }}</p>\n  </div>\n</div>\n";

/***/ },
/* 257 */
/***/ function(module, exports) {
	module.exports = "<nav class=\"nav\" _v-b258127a=\"\">\n  <ul class=\"list\" _v-b258127a=\"\">\n    <li v-if=\"exists('tickets')\" _v-b258127a=\"\"><a :style=\"linkStyle\" :href=\"ticketsUrl\" target=\"_blank\" _v-b258127a=\"\">{{ 'menu.tickets.label' | translate }}</a></li>\n    <li v-if=\"exists('videos')\" _v-b258127a=\"\"><a :style=\"linkStyle\" href=\"/videos\" @click.prevent=\"navigateTo('/videos', 'videos')\" _v-b258127a=\"\">{{ 'menu.videos.label' | translate }}</a></li>\n    <li v-if=\"exists('about')\" _v-b258127a=\"\"><a :style=\"linkStyle\" href=\"/about\" @click.prevent=\"navigateTo('/about', 'about')\" _v-b258127a=\"\">{{ 'menu.about.label' | translate}}</a></li>\n   <li v-if=\"exists('features')\" _v-b258127a=\"\"><a :style=\"linkStyle\" href=\"/features\" @click.prevent=\"navigateTo('/features', 'features')\" _v-b258127a=\"\">{{ 'menu.features.label' | translate }}</a></li>\n   <li v-if=\"exists('gallery')\" _v-b258127a=\"\"><a :style=\"linkStyle\" href=\"/gallery\" @click.prevent=\"navigateTo('/gallery', 'gallery')\" _v-b258127a=\"\">{{ 'menu.gallery.label' | translate}}</a></li>\n    <li v-if=\"exists('cast')\" _v-b258127a=\"\"><a :style=\"linkStyle\" href=\"/cast-and-crew\" @click.prevent=\"navigateTo('/cast-and-crew', 'cast')\" _v-b258127a=\"\">{{ 'menu.cast.label' | translate }}</a></li>\n   <li v-if=\"exists('social-feed')\" _v-b258127a=\"\"><a :style=\"linkStyle\" href=\"/social-feed\" @click.prevent=\"navigateTo('/social-feed', 'social-feed')\" _v-b258127a=\"\">{{ 'menu.social-feed.label' | translate }}</a></li>\n  <li v-if=\"exists('game1')\" _v-b258127a=\"\"><a class=\"game\" onclick=\"game('{{ 'menu.game1.external' | translate }}');\":style=\"linkStyle\" _v-b258127a=\"\">{{ 'menu.game1.label' | translate }}</a></li>\n <li v-if=\"exists('game2')\" _v-b258127a=\"\"><a class=\"game\" onclick=\"game('{{ 'menu.game2.external' | translate }}');\":style=\"linkStyle\" _v-b258127a=\"\">{{ 'menu.game2.label' | translate }}</a></li>\n </ul>\n</nav>\n ";

	//module.exports = "<nav class=\"nav\" _v-b258127a=\"\">\n  <ul class=\"list\" _v-b258127a=\"\">\n    <li v-if=\"exists('tickets')\" _v-b258127a=\"\"><a :style=\"linkStyle\" :href=\"ticketsUrl\" target=\"_blank\" _v-b258127a=\"\">{{ 'menu.tickets.label' | translate }}</a></li>\n    <li v-if=\"exists('videos')\" _v-b258127a=\"\"><a :style=\"linkStyle\" href=\"/videos\" @click.prevent=\"navigateTo('/videos', 'videos')\" _v-b258127a=\"\">{{ 'menu.videos.label' | translate }}</a></li>\n    <li v-if=\"exists('about')\" _v-b258127a=\"\"><a :style=\"linkStyle\" href=\"/about\" @click.prevent=\"navigateTo('/about', 'about')\" _v-b258127a=\"\">{{ 'menu.about.label' | translate}}</a></li>\n    <li v-if=\"exists('gallery')\" _v-b258127a=\"\"><a :style=\"linkStyle\" href=\"/gallery\" @click.prevent=\"navigateTo('/gallery', 'gallery')\" _v-b258127a=\"\">{{ 'menu.gallery.label' | translate}}</a></li>\n    <li v-if=\"exists('cast')\" _v-b258127a=\"\"><a :style=\"linkStyle\" href=\"/cast-and-crew\" @click.prevent=\"navigateTo('/cast-and-crew', 'cast')\" _v-b258127a=\"\">{{ 'menu.cast.label' | translate }}</a></li>\n    <li v-if=\"exists('features')\" _v-b258127a=\"\"><a :style=\"linkStyle\" href=\"/features\" @click.prevent=\"navigateTo('/features', 'features')\" _v-b258127a=\"\">{{ 'menu.features.label' | translate }}</a></li>\n    <li v-if=\"exists('social-feed')\" _v-b258127a=\"\"><a :style=\"linkStyle\" href=\"/social-feed\" @click.prevent=\"navigateTo('/social-feed', 'social-feed')\" _v-b258127a=\"\">{{ 'menu.social-feed.label' | translate }}</a></li>\n  <li v-if=\"exists('game1')\" _v-b258127a=\"\"><a class=\"game\" onclick=\"game('{{ 'menu.game1.external' | translate }}');\":style=\"linkStyle\" _v-b258127a=\"\">{{ 'menu.game1.label' | translate }}</a></li>\n <li v-if=\"exists('game2')\" _v-b258127a=\"\"><a class=\"game\" onclick=\"game('{{ 'menu.game2.external' | translate }}');\":style=\"linkStyle\" _v-b258127a=\"\">{{ 'menu.game2.label' | translate }}</a></li>\n </ul>\n</nav>\n ";

/***/ },
/* 258 */
/***/ function(module, exports) {

	module.exports = "<header class=\"header\" :style=\"style\" _v-f13e3bca=\"\">\n  <h1 class=\"logo\" :style=\"logoStyle\" _v-f13e3bca=\"\"><a href=\"/\" @click.prevent=\"navigate('/')\" _v-f13e3bca=\"\">Logo</a></h1>\n\n  <header-nav v-if=\"navVisible\" _v-f13e3bca=\"\"></header-nav>\n\n  <nav class=\"social-buttons\" :style=\"socialStyle\" _v-f13e3bca=\"\">\n    <ul class=\"list\" _v-f13e3bca=\"\">\n      <!-- <li v-for=\"(network, obj) in social()\" v-if=\"obj.visible\"><a :href=\"obj.link\" @click=\"clickSocialMediaButton(network)\" :class=\"[network]\" :style=\"obj.style\" target=\"_blank\"><social-icon :icon=\"network\"></social-icon></a></li> -->\n      <li v-for=\"(network, obj) in social()\" v-if=\"obj.visible\" _v-f13e3bca=\"\"><a href=\"javascript:void(0)\" :data-href=\"obj.link\" class=\"ageGate\" :style=\"obj.style\" target=\"_blank\" _v-f13e3bca=\"\"><social-icon :icon=\"network\" _v-f13e3bca=\"\"></social-icon></a></li>\n    </ul>\n  </nav>\n\n  <div class=\"mobile-toggle-container\" _v-f13e3bca=\"\">\n    <button class=\"mobile-toggle\" :class=\"{ open: menuOpen }\" @click=\"toggleMenu\" _v-f13e3bca=\"\">\n      <span class=\"bar\" _v-f13e3bca=\"\"></span>\n      <span class=\"bar\" _v-f13e3bca=\"\"></span>\n      <span class=\"bar\" _v-f13e3bca=\"\"></span>\n      Toggle\n    </button>\n  </div>\n</header>\n";

/***/ },
/* 259 */
/***/ function(module, exports) {

	module.exports = "<div>\n  <footer class=\"footer\" :style=\"style\">\n    <ul class=\"links\">\n      <li v-for=\"link in links\" v-if=\"link.visible\"><a :href=\"link.url\" @click=\"handleLinkClick(link, $event)\" target=\"_blank\" v-on:mouseover=\"onLinkMouseOver(link)\" v-on:mouseout=\"onLinkMouseOut(link)\">{{ link.label }}</a></li>\n    </ul>\n  <div class=\"logos\">\n      <img :src=\"'/static/img/' + logo\" alt=\"\" v-for=\"logo in logos\">\n    </div>\n    <p class=\"copyright\" v-html=\"copyright\"></p>\n  </div>\n </footer>\n  <div class=\"legal-overlay\" :class=\"{ visible: legalOverlayVisible }\" :style=\"legalStyle\" v-on:mouseover=\"legalOverlayVisible = true\" v-on:mouseout=\"legalOverlayVisible = false\">\n    </div>\n";

/***/ },
/* 260 */
/***/ function(module, exports) {

	module.exports = "<section class=\"photo-gallery\" data-url=\"/gallery\" :style=\"style\">\n  <h2 class=\"gallery-heading\" :style=\"headingStyle\">{{ 'gallery.heading' | translate }}</h2>\n\n  <div class=\"photos-container\" id=\"gallery\">\n    <div v-for=\"photo in photos\" data-index=\"{{ $index + 1 }}\" class=\"photo-frame\"><img :src=\"photo\"></div>\n  </div>\n\n  <ul class=\"social-icons\">\n    <li><a href=\"#\" @click.prevent=\"shareFacebook\" :style=\"socialIconStyle\"><social-icon icon=\"facebook\" color=\"white\"></social-icon></a></li>\n    <li><a href=\"#\" @click.prevent=\"shareTwitter\" :style=\"socialIconStyle\"><social-icon icon=\"twitter\" color=\"white\"></social-icon></a></li>\n    <li><a href=\"#\" @click.prevent=\"shareTumblr\" :style=\"socialIconStyle\"><social-icon icon=\"tumblr\" color=\"white\"></social-icon></a></li>\n  </ul>\n</section>\n";

/***/ },
/* 261 */
/***/ function(module, exports) {

	module.exports = "<section class=\"videos\" data-url=\"/videos\" :style=\"style\">\n  <div class=\"container\">\n    <h2 class=\"heading\" :style=\"headingStyle\">{{ 'videos.heading' | translate }}</h2>\n\n    <div class=\"video\">\n      <video v-if=\"videos[activeIndex].type === 'local'\" :poster=\"videos[activeIndex].posterFull\" controls id=\"video\">\n        <source :src=\"file\" v-for=\"file in videos[activeIndex].filesFull\">\n      </video>\n\n      <div class=\"wrapper\" v-if=\"videos[activeIndex].type === 'youtube'\">\n        <iframe type=\"text/html\" :src=\"videos[activeIndex].youtubeUrl\" frameborder=\"0\" id=\"yt\" allowfullscreen=\"allowfullscreen\" mozallowfullscreen=\"mozallowfullscreen\" msallowfullscreen=\"msallowfullscreen\" oallowfullscreen=\"oallowfullscreen\" webkitallowfullscreen=\"webkitallowfullscreen\"></iframe>\n      </div>\n    </div>\n\n    <ul class=\"videos-social-icons\">\n      <li><a href=\"#\" @click.prevent=\"shareFacebook\"><social-icon icon=\"facebook\" :color=\"socialIconColor\"></a></li>\n      <li><a href=\"#\" @click.prevent=\"shareTwitter\"><social-icon icon=\"twitter\" :color=\"socialIconColor\"></a></li>\n      <li><a href=\"#\" @click.prevent=\"shareTumblr\"><social-icon icon=\"tumblr\" :color=\"socialIconColor\"></a></li>\n    </ul>\n\n    <div class=\"carousel\" id=\"video-carousel\">\n      <div v-for=\"video in videos\" v-if=\"video.visible\" class=\"thumbnail-container\" :style=\"{ borderColor: $index === activeIndex ? activeVideoThumbnailColor : null }\" @click.prevent=\"selectVideo($index)\">\n        <img :src=\"video.fullThumbnail\" alt=\"\">\n      </div>\n    </div>\n  </div>\n</section>\n";

/***/ },
/* 262 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(227)
	__vue_script__ = __webpack_require__(170)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/AboutMovie/AboutMovie.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(253)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 263 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(225)
	__vue_script__ = __webpack_require__(171)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/App/App.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(251)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 264 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(222)
	__vue_script__ = __webpack_require__(172)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/CastCrew/CastCrew.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(248)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 265 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(223)
	__vue_script__ = __webpack_require__(173)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Features/Features.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(249)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 266 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(219)
	__vue_script__ = __webpack_require__(174)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Footer/Footer.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(259)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 267 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(232)
	__vue_script__ = __webpack_require__(175)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Header/Header.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(258)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 268 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(226)
	__vue_script__ = __webpack_require__(176)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Hero/Hero.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(252)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 269 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(228)
	__vue_script__ = __webpack_require__(177)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/MobileNav/MobileNav.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(254)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 270 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(230)
	__vue_script__ = __webpack_require__(178)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/MovieReviews/MovieReviews.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(256)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 271 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(231)
	__vue_script__ = __webpack_require__(179)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Nav/Nav.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(257)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 272 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(220)
	__vue_script__ = __webpack_require__(180)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/PhotoGallery/PhotoGallery.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(260)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 273 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(224)
	__vue_script__ = __webpack_require__(181)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/SocialIcon/SocialIcon.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(250)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 274 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(229)
	__vue_script__ = __webpack_require__(182)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Tickets/Tickets.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(255)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}


/***/ },
/* 275 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(221)
	__vue_script__ = __webpack_require__(183)
	if (__vue_script__ &&
	    __vue_script__.__esModule &&
	    Object.keys(__vue_script__).length > 1) {
	  console.warn("[vue-loader] src/components/Videos/Videos.vue: named exports in *.vue files are ignored.")}
	__vue_template__ = __webpack_require__(261)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) {
	(typeof module.exports === "function" ? (module.exports.options || (module.exports.options = {})) : module.exports).template = __vue_template__
	}
/***/ }
]);