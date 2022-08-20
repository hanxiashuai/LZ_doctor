(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],[
/* 0 */,
/* 1 */
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createPlugin = createPlugin;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 3);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var realAtob;

var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
var b64re = /^(?:[A-Za-z\d+/]{4})*?(?:[A-Za-z\d+/]{2}(?:==)?|[A-Za-z\d+/]{3}=?)?$/;

if (typeof atob !== 'function') {
  realAtob = function realAtob(str) {
    str = String(str).replace(/[\t\n\f\r ]+/g, '');
    if (!b64re.test(str)) {throw new Error("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");}

    // Adding the padding if missing, for semplicity
    str += '=='.slice(2 - (str.length & 3));
    var bitmap;var result = '';var r1;var r2;var i = 0;
    for (; i < str.length;) {
      bitmap = b64.indexOf(str.charAt(i++)) << 18 | b64.indexOf(str.charAt(i++)) << 12 |
      (r1 = b64.indexOf(str.charAt(i++))) << 6 | (r2 = b64.indexOf(str.charAt(i++)));

      result += r1 === 64 ? String.fromCharCode(bitmap >> 16 & 255) :
      r2 === 64 ? String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255) :
      String.fromCharCode(bitmap >> 16 & 255, bitmap >> 8 & 255, bitmap & 255);
    }
    return result;
  };
} else {
  // 注意atob只能在全局对象上调用，例如：`const Base64 = {atob};Base64.atob('xxxx')`是错误的用法
  realAtob = atob;
}

function b64DecodeUnicode(str) {
  return decodeURIComponent(realAtob(str).split('').map(function (c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));
}

function getCurrentUserInfo() {
  var token = wx.getStorageSync('uni_id_token') || '';
  var tokenArr = token.split('.');
  if (!token || tokenArr.length !== 3) {
    return {
      uid: null,
      role: [],
      permission: [],
      tokenExpired: 0 };

  }
  var userInfo;
  try {
    userInfo = JSON.parse(b64DecodeUnicode(tokenArr[1]));
  } catch (error) {
    throw new Error('获取当前用户信息出错，详细错误信息为：' + error.message);
  }
  userInfo.tokenExpired = userInfo.exp * 1000;
  delete userInfo.exp;
  delete userInfo.iat;
  return userInfo;
}

function uniIdMixin(Vue) {
  Vue.prototype.uniIDHasRole = function (roleId) {var _getCurrentUserInfo =


    getCurrentUserInfo(),role = _getCurrentUserInfo.role;
    return role.indexOf(roleId) > -1;
  };
  Vue.prototype.uniIDHasPermission = function (permissionId) {var _getCurrentUserInfo2 =


    getCurrentUserInfo(),permission = _getCurrentUserInfo2.permission;
    return this.uniIDHasRole('admin') || permission.indexOf(permissionId) > -1;
  };
  Vue.prototype.uniIDTokenValid = function () {var _getCurrentUserInfo3 =


    getCurrentUserInfo(),tokenExpired = _getCurrentUserInfo3.tokenExpired;
    return tokenExpired > Date.now();
  };
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

function sortObject(obj) {
  var sortObj = {};
  if (isPlainObject(obj)) {
    Object.keys(obj).sort().forEach(function (key) {
      sortObj[key] = obj[key];
    });
  }
  return !Object.keys(sortObj) ? obj : sortObj;
}

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return new Promise(function (resolve, reject) {
      res.then(function (res) {
        if (res[0]) {
          reject(res[0]);
        } else {
          resolve(res[1]);
        }
      });
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendHostEvent|sendNativeEvent|restoreGlobal|requireGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64|getLocale|setLocale|invokePushCallback|getWindowInfo|getDeviceInfo|getAppBaseInfo|getSystemSetting|getAppAuthorizeSetting/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection', 'createPushMessage'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var LOCALE_ZH_HANS = 'zh-Hans';
var LOCALE_ZH_HANT = 'zh-Hant';
var LOCALE_EN = 'en';
var LOCALE_FR = 'fr';
var LOCALE_ES = 'es';

var messages = {};

var locale;

{
  locale = normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}

function initI18nMessages() {
  if (!isEnableLocale()) {
    return;
  }
  var localeKeys = Object.keys(__uniConfig.locales);
  if (localeKeys.length) {
    localeKeys.forEach(function (locale) {
      var curMessages = messages[locale];
      var userMessages = __uniConfig.locales[locale];
      if (curMessages) {
        Object.assign(curMessages, userMessages);
      } else {
        messages[locale] = userMessages;
      }
    });
  }
}

initI18nMessages();

var i18n = (0, _uniI18n.initVueI18n)(
locale,
{});

var t = i18n.t;
var i18nMixin = i18n.mixin = {
  beforeCreate: function beforeCreate() {var _this = this;
    var unwatch = i18n.i18n.watchLocale(function () {
      _this.$forceUpdate();
    });
    this.$once('hook:beforeDestroy', function () {
      unwatch();
    });
  },
  methods: {
    $$t: function $$t(key, values) {
      return t(key, values);
    } } };


var setLocale = i18n.setLocale;
var getLocale = i18n.getLocale;

function initAppLocale(Vue, appVm, locale) {
  var state = Vue.observable({
    locale: locale || i18n.getLocale() });

  var localeWatchers = [];
  appVm.$watchLocale = function (fn) {
    localeWatchers.push(fn);
  };
  Object.defineProperty(appVm, '$locale', {
    get: function get() {
      return state.locale;
    },
    set: function set(v) {
      state.locale = v;
      localeWatchers.forEach(function (watch) {return watch(v);});
    } });

}

function isEnableLocale() {
  return typeof __uniConfig !== 'undefined' && __uniConfig.locales && !!Object.keys(__uniConfig.locales).length;
}

function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}

function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}

function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale === 'chinese') {
    // 支付宝
    return LOCALE_ZH_HANS;
  }
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}
// export function initI18n() {
//   const localeKeys = Object.keys(__uniConfig.locales || {})
//   if (localeKeys.length) {
//     localeKeys.forEach((locale) =>
//       i18n.add(locale, __uniConfig.locales[locale])
//     )
//   }
// }

function getLocale$1() {
  // 优先使用 $locale
  var app = getApp({
    allowDefault: true });

  if (app && app.$vm) {
    return app.$vm.$locale;
  }
  return normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN;
}

function setLocale$1(locale) {
  var app = getApp();
  if (!app) {
    return false;
  }
  var oldLocale = app.$vm.$locale;
  if (oldLocale !== locale) {
    app.$vm.$locale = locale;
    onLocaleChangeCallbacks.forEach(function (fn) {return fn({
        locale: locale });});

    return true;
  }
  return false;
}

var onLocaleChangeCallbacks = [];
function onLocaleChange(fn) {
  if (onLocaleChangeCallbacks.indexOf(fn) === -1) {
    onLocaleChangeCallbacks.push(fn);
  }
}

if (typeof global !== 'undefined') {
  global.getLocale = getLocale$1;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  getLocale: getLocale$1,
  setLocale: setLocale$1,
  onLocaleChange: onLocaleChange,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function useDeviceId(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.screenHeight - safeArea.bottom };

  }
}

function populateParameters(result) {var _result$brand =





  result.brand,brand = _result$brand === void 0 ? '' : _result$brand,_result$model = result.model,model = _result$model === void 0 ? '' : _result$model,_result$system = result.system,system = _result$system === void 0 ? '' : _result$system,_result$language = result.language,language = _result$language === void 0 ? '' : _result$language,theme = result.theme,version = result.version,platform = result.platform,fontSizeSetting = result.fontSizeSetting,SDKVersion = result.SDKVersion,pixelRatio = result.pixelRatio,deviceOrientation = result.deviceOrientation;
  // const isQuickApp = "mp-weixin".indexOf('quickapp-webview') !== -1

  // osName osVersion
  var osName = '';
  var osVersion = '';
  {
    osName = system.split(' ')[0] || '';
    osVersion = system.split(' ')[1] || '';
  }
  var hostVersion = version;

  // deviceType
  var deviceType = getGetDeviceType(result, model);

  // deviceModel
  var deviceBrand = getDeviceBrand(brand);

  // hostName
  var _hostName = getHostName(result);

  // deviceOrientation
  var _deviceOrientation = deviceOrientation; // 仅 微信 百度 支持

  // devicePixelRatio
  var _devicePixelRatio = pixelRatio;

  // SDKVersion
  var _SDKVersion = SDKVersion;

  // hostLanguage
  var hostLanguage = language.replace(/_/g, '-');

  // wx.getAccountInfoSync

  var parameters = {
    appId: "__UNI__197A913",
    appName: "LZ_doctor",
    appVersion: "1.0.0",
    appVersionCode: "100",
    appLanguage: getAppLanguage(hostLanguage),
    uniCompileVersion: "3.5.3",
    uniRuntimeVersion: "3.5.3",
    uniPlatform: undefined || "mp-weixin",
    deviceBrand: deviceBrand,
    deviceModel: model,
    deviceType: deviceType,
    devicePixelRatio: _devicePixelRatio,
    deviceOrientation: _deviceOrientation,
    osName: osName.toLocaleLowerCase(),
    osVersion: osVersion,
    hostTheme: theme,
    hostVersion: hostVersion,
    hostLanguage: hostLanguage,
    hostName: _hostName,
    hostSDKVersion: _SDKVersion,
    hostFontSizeSetting: fontSizeSetting,
    windowTop: 0,
    windowBottom: 0,
    // TODO
    osLanguage: undefined,
    osTheme: undefined,
    ua: undefined,
    hostPackageName: undefined,
    browserName: undefined,
    browserVersion: undefined };


  Object.assign(result, parameters);
}

function getGetDeviceType(result, model) {
  var deviceType = result.deviceType || 'phone';
  {
    var deviceTypeMaps = {
      ipad: 'pad',
      windows: 'pc',
      mac: 'pc' };

    var deviceTypeMapsKeys = Object.keys(deviceTypeMaps);
    var _model = model.toLocaleLowerCase();
    for (var index = 0; index < deviceTypeMapsKeys.length; index++) {
      var _m = deviceTypeMapsKeys[index];
      if (_model.indexOf(_m) !== -1) {
        deviceType = deviceTypeMaps[_m];
        break;
      }
    }
  }
  return deviceType;
}

function getDeviceBrand(brand) {
  var deviceBrand = brand;
  if (deviceBrand) {
    deviceBrand = brand.toLocaleLowerCase();
  }
  return deviceBrand;
}

function getAppLanguage(defaultLanguage) {
  return getLocale$1 ?
  getLocale$1() :
  defaultLanguage;
}

function getHostName(result) {
  var _platform = 'WeChat';
  var _hostName = result.hostName || _platform; // mp-jd
  {
    if (result.environment) {
      _hostName = result.environment;
    } else if (result.host && result.host.env) {
      _hostName = result.host.env;
    }
  }

  return _hostName;
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    useDeviceId(result);
    addSafeAreaInsets(result);
    populateParameters(result);
  } };


var showActionSheet = {
  args: function args(fromArgs) {
    if (typeof fromArgs === 'object') {
      fromArgs.alertText = fromArgs.title;
    }
  } };


var getAppBaseInfo = {
  returnValue: function returnValue(result) {var _result =
    result,version = _result.version,language = _result.language,SDKVersion = _result.SDKVersion,theme = _result.theme;

    var _hostName = getHostName(result);

    var hostLanguage = language.replace('_', '-');

    result = sortObject(Object.assign(result, {
      appId: "__UNI__197A913",
      appName: "LZ_doctor",
      appVersion: "1.0.0",
      appVersionCode: "100",
      appLanguage: getAppLanguage(hostLanguage),
      hostVersion: version,
      hostLanguage: hostLanguage,
      hostName: _hostName,
      hostSDKVersion: SDKVersion,
      hostTheme: theme }));

  } };


var getDeviceInfo = {
  returnValue: function returnValue(result) {var _result2 =
    result,brand = _result2.brand,model = _result2.model;
    var deviceType = getGetDeviceType(result, model);
    var deviceBrand = getDeviceBrand(brand);
    useDeviceId(result);

    result = sortObject(Object.assign(result, {
      deviceType: deviceType,
      deviceBrand: deviceBrand,
      deviceModel: model }));

  } };


var getWindowInfo = {
  returnValue: function returnValue(result) {
    addSafeAreaInsets(result);

    result = sortObject(Object.assign(result, {
      windowTop: 0,
      windowBottom: 0 }));

  } };


var getAppAuthorizeSetting = {
  returnValue: function returnValue(result) {var
    locationReducedAccuracy = result.locationReducedAccuracy;

    result.locationAccuracy = 'unsupported';
    if (locationReducedAccuracy === true) {
      result.locationAccuracy = 'reduced';
    } else if (locationReducedAccuracy === false) {
      result.locationAccuracy = 'full';
    }
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo,
  showActionSheet: showActionSheet,
  getAppBaseInfo: getAppBaseInfo,
  getDeviceInfo: getDeviceInfo,
  getWindowInfo: getWindowInfo,
  getAppAuthorizeSetting: getAppAuthorizeSetting };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("The '".concat(methodName, "' method of platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support option '").concat(key, "'"));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("Platform '\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F' does not support '".concat(methodName, "'."));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail method '").concat(name, "' not supported") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail service not found' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


/**
                    * 框架内 try-catch
                    */
/**
                        * 开发者 try-catch
                        */
function tryCatch(fn) {
  return function () {
    try {
      return fn.apply(fn, arguments);
    } catch (e) {
      // TODO
      console.error(e);
    }
  };
}

function getApiCallbacks(params) {
  var apiCallbacks = {};
  for (var name in params) {
    var param = params[name];
    if (isFn(param)) {
      apiCallbacks[name] = tryCatch(param);
      delete params[name];
    }
  }
  return apiCallbacks;
}

var cid;
var cidErrMsg;
var enabled;

function normalizePushMessage(message) {
  try {
    return JSON.parse(message);
  } catch (e) {}
  return message;
}

function invokePushCallback(
args)
{
  if (args.type === 'enabled') {
    enabled = true;
  } else if (args.type === 'clientId') {
    cid = args.cid;
    cidErrMsg = args.errMsg;
    invokeGetPushCidCallbacks(cid, args.errMsg);
  } else if (args.type === 'pushMsg') {
    var message = {
      type: 'receive',
      data: normalizePushMessage(args.message) };

    for (var i = 0; i < onPushMessageCallbacks.length; i++) {
      var callback = onPushMessageCallbacks[i];
      callback(message);
      // 该消息已被阻止
      if (message.stopped) {
        break;
      }
    }
  } else if (args.type === 'click') {
    onPushMessageCallbacks.forEach(function (callback) {
      callback({
        type: 'click',
        data: normalizePushMessage(args.message) });

    });
  }
}

var getPushCidCallbacks = [];

function invokeGetPushCidCallbacks(cid, errMsg) {
  getPushCidCallbacks.forEach(function (callback) {
    callback(cid, errMsg);
  });
  getPushCidCallbacks.length = 0;
}

function getPushClientId(args) {
  if (!isPlainObject(args)) {
    args = {};
  }var _getApiCallbacks =




  getApiCallbacks(args),success = _getApiCallbacks.success,fail = _getApiCallbacks.fail,complete = _getApiCallbacks.complete;
  var hasSuccess = isFn(success);
  var hasFail = isFn(fail);
  var hasComplete = isFn(complete);
  Promise.resolve().then(function () {
    if (typeof enabled === 'undefined') {
      enabled = false;
      cid = '';
      cidErrMsg = 'unipush is not enabled';
    }
    getPushCidCallbacks.push(function (cid, errMsg) {
      var res;
      if (cid) {
        res = {
          errMsg: 'getPushClientId:ok',
          cid: cid };

        hasSuccess && success(res);
      } else {
        res = {
          errMsg: 'getPushClientId:fail' + (errMsg ? ' ' + errMsg : '') };

        hasFail && fail(res);
      }
      hasComplete && complete(res);
    });
    if (typeof cid !== 'undefined') {
      invokeGetPushCidCallbacks(cid, cidErrMsg);
    }
  });
}

var onPushMessageCallbacks = [];
// 不使用 defineOnApi 实现，是因为 defineOnApi 依赖 UniServiceJSBridge ，该对象目前在小程序上未提供，故简单实现
var onPushMessage = function onPushMessage(fn) {
  if (onPushMessageCallbacks.indexOf(fn) === -1) {
    onPushMessageCallbacks.push(fn);
  }
};

var offPushMessage = function offPushMessage(fn) {
  if (!fn) {
    onPushMessageCallbacks.length = 0;
  } else {
    var index = onPushMessageCallbacks.indexOf(fn);
    if (index > -1) {
      onPushMessageCallbacks.splice(index, 1);
    }
  }
};

var api = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getPushClientId: getPushClientId,
  onPushMessage: onPushMessage,
  offPushMessage: offPushMessage,
  invokePushCallback: invokePushCallback });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  var oldTriggerEvent = mpInstance.triggerEvent;
  var newTriggerEvent = function newTriggerEvent(event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
  try {
    // 京东小程序 triggerEvent 为只读
    mpInstance.triggerEvent = newTriggerEvent;
  } catch (error) {
    mpInstance._triggerEvent = newTriggerEvent;
  }
}

function initHook(name, options, isComponent) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"LZ_doctor","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';var options = arguments.length > 3 ? arguments[3] : undefined;
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    {
      if (options.virtualHost) {
        properties.virtualHostStyle = {
          type: null,
          value: '' };

        properties.virtualHostClass = {
          type: null,
          value: '' };

      }
    }
    // scopedSlotsCompiler auto
    properties.scopedSlotsCompiler = {
      type: String,
      value: '' };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            var _type = _this2.$vm.mpType === 'page' ? 'Page' : 'Component';
            var path = _this2.route || _this2.is;
            throw new Error("".concat(_type, " \"").concat(path, "\" does not have a method \"").concat(methodName, "\""));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function initScopedSlotsParams() {
  var center = {};
  var parents = {};

  _vue.default.prototype.$hasScopedSlotsParams = function (vueId) {
    var has = center[vueId];
    if (!has) {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
    return has;
  };

  _vue.default.prototype.$getScopedSlotsParams = function (vueId, name, key) {
    var data = center[vueId];
    if (data) {
      var object = data[name] || {};
      return key ? object[key] : object;
    } else {
      parents[vueId] = this;
      this.$on('hook:destroyed', function () {
        delete parents[vueId];
      });
    }
  };

  _vue.default.prototype.$setScopedSlotsParams = function (name, value) {
    var vueIds = this.$options.propsData.vueId;
    if (vueIds) {
      var vueId = vueIds.split(',')[0];
      var object = center[vueId] = center[vueId] || {};
      object[name] = value;
      if (parents[vueId]) {
        parents[vueId].$forceUpdate();
      }
    }
  };

  _vue.default.mixin({
    destroyed: function destroyed() {
      var propsData = this.$options.propsData;
      var vueId = propsData && propsData.vueId;
      if (vueId) {
        delete center[vueId];
        delete parents[vueId];
      }
    } });

}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  {
    initScopedSlotsParams();
  }
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }
  uniIdMixin(_vue.default);

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;
      if (this.mpType === 'page' && typeof getApp === 'function') {// hack vue-i18n
        var app = getApp();
        if (app.$vm && app.$vm.$i18n) {
          this._i18n = app.$vm.$i18n;
        }
      }
      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (wx.canIUse && !wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initAppLocale(_vue.default, vm, normalizeLocale(wx.getSystemInfoSync().language) || LOCALE_EN);

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file, options),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  vm.$scope = app;
  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

function createPlugin(vm) {
  var appOptions = parseApp(vm);
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {args[_key7] = arguments[_key7];}
      vm.__call_hook('onShow', args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {args[_key8] = arguments[_key8];}
      vm.__call_hook('onHide', args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    vm.__call_hook('onLaunch', args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;
wx.createPlugin = createPlugin;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 2 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/*!*************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.es.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni, global) {Object.defineProperty(exports, "__esModule", { value: true });exports.compileI18nJsonStr = compileI18nJsonStr;exports.hasI18nJson = hasI18nJson;exports.initVueI18n = initVueI18n;exports.isI18nStr = isI18nStr;exports.normalizeLocale = normalizeLocale;exports.parseI18nJson = parseI18nJson;exports.resolveLocale = resolveLocale;exports.isString = exports.LOCALE_ZH_HANT = exports.LOCALE_ZH_HANS = exports.LOCALE_FR = exports.LOCALE_ES = exports.LOCALE_EN = exports.I18n = exports.Formatter = void 0;function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isArray = Array.isArray;
var isObject = function isObject(val) {return val !== null && typeof val === 'object';};
var defaultDelimiters = ['{', '}'];var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {var delimiters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultDelimiters;
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();exports.Formatter = BaseFormatter;

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format, _ref) {var _ref2 = _slicedToArray(_ref, 2),startDelimiter = _ref2[0],endDelimiter = _ref2[1];
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var char = format[position++];
    if (char === startDelimiter) {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      char = format[position++];
      while (char !== undefined && char !== endDelimiter) {
        sub += char;
        char = format[position++];
      }
      var isClosed = char === endDelimiter;
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    }
    //  else if (char === '%') {
    //   // when found rails i18n syntax, skip text capture
    //   if (format[position] !== '{') {
    //     text += char
    //   }
    // }
    else {
        text += char;
      }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var LOCALE_ZH_HANS = 'zh-Hans';exports.LOCALE_ZH_HANS = LOCALE_ZH_HANS;
var LOCALE_ZH_HANT = 'zh-Hant';exports.LOCALE_ZH_HANT = LOCALE_ZH_HANT;
var LOCALE_EN = 'en';exports.LOCALE_EN = LOCALE_EN;
var LOCALE_FR = 'fr';exports.LOCALE_FR = LOCALE_FR;
var LOCALE_ES = 'es';exports.LOCALE_ES = LOCALE_ES;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages && messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') > -1) {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf('-hant') > -1) {
      return LOCALE_ZH_HANT;
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return LOCALE_ZH_HANT;
    }
    return LOCALE_ZH_HANS;
  }
  var lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref3) {var locale = _ref3.locale,fallbackLocale = _ref3.fallbackLocale,messages = _ref3.messages,watcher = _ref3.watcher,formater = _ref3.formater;_classCallCheck(this, I18n);
    this.locale = LOCALE_EN;
    this.fallbackLocale = LOCALE_EN;
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages || {};
    this.setLocale(locale || LOCALE_EN);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        // 可能初始化时不存在
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      // 仅发生变化时，通知
      if (oldLocale !== this.locale) {
        this.watchers.forEach(function (watcher) {
          watcher(_this.locale, oldLocale);
        });
      }
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "add", value: function add(
    locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else
        {
          Object.keys(message).forEach(function (key) {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else
      {
        this.messages[locale] = message;
      }
    } }, { key: "f", value: function f(
    message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join('');
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function watchAppLocale(appVm, i18n) {
  // 需要保证 watch 的触发在组件渲染之前
  if (appVm.$watchLocale) {
    // vue2
    appVm.$watchLocale(function (newLocale) {
      i18n.setLocale(newLocale);
    });
  } else
  {
    appVm.$watch(function () {return appVm.$locale;}, function (newLocale) {
      i18n.setLocale(newLocale);
    });
  }
}
function getDefaultLocale() {
  if (typeof uni !== 'undefined' && uni.getLocale) {
    return uni.getLocale();
  }
  // 小程序平台，uni 和 uni-i18n 互相引用，导致访问不到 uni，故在 global 上挂了 getLocale
  if (typeof global !== 'undefined' && global.getLocale) {
    return global.getLocale();
  }
  return LOCALE_EN;
}
function initVueI18n(locale) {var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var fallbackLocale = arguments.length > 2 ? arguments[2] : undefined;var watcher = arguments.length > 3 ? arguments[3] : undefined;
  // 兼容旧版本入参
  if (typeof locale !== 'string') {var _ref4 =
    [
    messages,
    locale];locale = _ref4[0];messages = _ref4[1];

  }
  if (typeof locale !== 'string') {
    // 因为小程序平台，uni-i18n 和 uni 互相引用，导致此时访问 uni 时，为 undefined
    locale = getDefaultLocale();
  }
  if (typeof fallbackLocale !== 'string') {
    fallbackLocale =
    typeof __uniConfig !== 'undefined' && __uniConfig.fallbackLocale ||
    LOCALE_EN;
  }
  var i18n = new I18n({
    locale: locale,
    fallbackLocale: fallbackLocale,
    messages: messages,
    watcher: watcher });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var isWatchedAppLocale = false;
      _t = function t(key, values) {
        var appVm = getApp().$vm;
        // 可能$vm还不存在，比如在支付宝小程序中，组件定义较早，在props的default里使用了t()函数（如uni-goods-nav），此时app还未初始化
        // options: {
        // 	type: Array,
        // 	default () {
        // 		return [{
        // 			icon: 'shop',
        // 			text: t("uni-goods-nav.options.shop"),
        // 		}, {
        // 			icon: 'cart',
        // 			text: t("uni-goods-nav.options.cart")
        // 		}]
        // 	}
        // },
        if (appVm) {
          // 触发响应式
          appVm.$locale;
          if (!isWatchedAppLocale) {
            isWatchedAppLocale = true;
            watchAppLocale(appVm, i18n);
          }
        }
        return i18n.t(key, values);
      };
    }
    return _t(key, values);
  };
  return {
    i18n: i18n,
    f: function f(message, values, delimiters) {
      return i18n.f(message, values, delimiters);
    },
    t: function t(key, values) {
      return _t(key, values);
    },
    add: function add(locale, message) {var override = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      return i18n.add(locale, message, override);
    },
    watch: function watch(fn) {
      return i18n.watchLocale(fn);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    } };

}

var isString = function isString(val) {return typeof val === 'string';};exports.isString = isString;
var formater;
function hasI18nJson(jsonObj, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  return walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        return true;
      }
    } else
    {
      return hasI18nJson(value, delimiters);
    }
  });
}
function parseI18nJson(jsonObj, values, delimiters) {
  if (!formater) {
    formater = new BaseFormatter();
  }
  walkJsonObj(jsonObj, function (jsonObj, key) {
    var value = jsonObj[key];
    if (isString(value)) {
      if (isI18nStr(value, delimiters)) {
        jsonObj[key] = compileStr(value, values, delimiters);
      }
    } else
    {
      parseI18nJson(value, values, delimiters);
    }
  });
  return jsonObj;
}
function compileI18nJsonStr(jsonStr, _ref5) {var locale = _ref5.locale,locales = _ref5.locales,delimiters = _ref5.delimiters;
  if (!isI18nStr(jsonStr, delimiters)) {
    return jsonStr;
  }
  if (!formater) {
    formater = new BaseFormatter();
  }
  var localeValues = [];
  Object.keys(locales).forEach(function (name) {
    if (name !== locale) {
      localeValues.push({
        locale: name,
        values: locales[name] });

    }
  });
  localeValues.unshift({ locale: locale, values: locales[locale] });
  try {
    return JSON.stringify(compileJsonObj(JSON.parse(jsonStr), localeValues, delimiters), null, 2);
  }
  catch (e) {}
  return jsonStr;
}
function isI18nStr(value, delimiters) {
  return value.indexOf(delimiters[0]) > -1;
}
function compileStr(value, values, delimiters) {
  return formater.interpolate(value, values, delimiters).join('');
}
function compileValue(jsonObj, key, localeValues, delimiters) {
  var value = jsonObj[key];
  if (isString(value)) {
    // 存在国际化
    if (isI18nStr(value, delimiters)) {
      jsonObj[key] = compileStr(value, localeValues[0].values, delimiters);
      if (localeValues.length > 1) {
        // 格式化国际化语言
        var valueLocales = jsonObj[key + 'Locales'] = {};
        localeValues.forEach(function (localValue) {
          valueLocales[localValue.locale] = compileStr(value, localValue.values, delimiters);
        });
      }
    }
  } else
  {
    compileJsonObj(value, localeValues, delimiters);
  }
}
function compileJsonObj(jsonObj, localeValues, delimiters) {
  walkJsonObj(jsonObj, function (jsonObj, key) {
    compileValue(jsonObj, key, localeValues, delimiters);
  });
  return jsonObj;
}
function walkJsonObj(jsonObj, walk) {
  if (isArray(jsonObj)) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (walk(jsonObj, i)) {
        return true;
      }
    }
  } else
  if (isObject(jsonObj)) {
    for (var key in jsonObj) {
      if (walk(jsonObj, key)) {
        return true;
      }
    }
  }
  return false;
}

function resolveLocale(locales) {
  return function (locale) {
    if (!locale) {
      return locale;
    }
    locale = normalizeLocale(locale) || locale;
    return resolveLocaleChain(locale).find(function (locale) {return locales.indexOf(locale) > -1;});
  };
}
function resolveLocaleChain(locale) {
  var chain = [];
  var tokens = locale.split('-');
  while (tokens.length) {
    chain.push(tokens.join('-'));
    tokens.pop();
  }
  return chain;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"], __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 4 */
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu' || vm.mpHost === 'mp-kuaishou' || vm.mpHost === 'mp-xhs'){//百度、快手、小红书 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue !== pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"LZ_doctor","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"LZ_doctor","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"LZ_doctor","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"LZ_doctor","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = typeof getApp === 'function' && getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      (this.$scope['_triggerEvent'] || this.$scope['triggerEvent']).call(this.$scope, event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    // 解决动态属性添加
    Vue.set(target, key, value);
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 2)))

/***/ }),
/* 5 */
/*!*************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/pages.json ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 12 */
/*!********************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





var _mixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mixin.js */ 13));

var _mpMixin = _interopRequireDefault(__webpack_require__(/*! ./libs/mixin/mpMixin.js */ 14));

var _luchRequest = _interopRequireDefault(__webpack_require__(/*! ./libs/luch-request */ 15));


var _route = _interopRequireDefault(__webpack_require__(/*! ./libs/util/route.js */ 33));

var _colorGradient = _interopRequireDefault(__webpack_require__(/*! ./libs/function/colorGradient.js */ 37));


var _test = _interopRequireDefault(__webpack_require__(/*! ./libs/function/test.js */ 38));

var _debounce = _interopRequireDefault(__webpack_require__(/*! ./libs/function/debounce.js */ 39));

var _throttle = _interopRequireDefault(__webpack_require__(/*! ./libs/function/throttle.js */ 40));

var _index = _interopRequireDefault(__webpack_require__(/*! ./libs/function/index.js */ 41));


var _config = _interopRequireDefault(__webpack_require__(/*! ./libs/config/config.js */ 43));

var _props = _interopRequireDefault(__webpack_require__(/*! ./libs/config/props.js */ 44));

var _zIndex = _interopRequireDefault(__webpack_require__(/*! ./libs/config/zIndex.js */ 134));

var _color = _interopRequireDefault(__webpack_require__(/*! ./libs/config/color.js */ 92));

var _platform = _interopRequireDefault(__webpack_require__(/*! ./libs/function/platform */ 135));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} // 看到此报错，是因为没有配置vue.config.js的【transpileDependencies】，详见：https://www.uviewui.com/components/npmSetting.html#_5-cli模式额外配置
var pleaseSetTranspileDependencies = {},babelTest = pleaseSetTranspileDependencies === null || pleaseSetTranspileDependencies === void 0 ? void 0 : pleaseSetTranspileDependencies.test; // 引入全局mixin
var $u = _objectSpread(_objectSpread({
  route: _route.default,
  date: _index.default.timeFormat, // 另名date
  colorGradient: _colorGradient.default.colorGradient,
  hexToRgb: _colorGradient.default.hexToRgb,
  rgbToHex: _colorGradient.default.rgbToHex,
  colorToRgba: _colorGradient.default.colorToRgba,
  test: _test.default,
  type: ['primary', 'success', 'error', 'warning', 'info'],
  http: new _luchRequest.default(),
  config: _config.default, // uView配置信息相关，比如版本号
  zIndex: _zIndex.default,
  debounce: _debounce.default,
  throttle: _throttle.default,
  mixin: _mixin.default,
  mpMixin: _mpMixin.default,
  props: _props.default },
_index.default), {}, {
  color: _color.default,
  platform: _platform.default });


// $u挂载到uni对象上
uni.$u = $u;

var install = function install(Vue) {
  // 时间格式化，同时两个名称，date和timeFormat
  Vue.filter('timeFormat', function (timestamp, format) {return uni.$u.timeFormat(timestamp, format);});
  Vue.filter('date', function (timestamp, format) {return uni.$u.timeFormat(timestamp, format);});
  // 将多久以前的方法，注入到全局过滤器
  Vue.filter('timeFrom', function (timestamp, format) {return uni.$u.timeFrom(timestamp, format);});
  // 同时挂载到uni和Vue.prototype中

  // 只有vue，挂载到Vue.prototype才有意义，因为nvue中全局Vue.prototype和Vue.mixin是无效的
  Vue.prototype.$u = $u;
  Vue.mixin(_mixin.default);

};var _default =

{
  install: install };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 13 */
/*!*******************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/mixin/mixin.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(uni) {module.exports = {
  // 定义每个组件都可能需要用到的外部样式以及类名
  props: {
    // 每个组件都有的父组件传递的样式，可以为字符串或者对象形式
    customStyle: {
      type: [Object, String],
      default: function _default() {return {};} },

    customClass: {
      type: String,
      default: '' },

    // 跳转的页面路径
    url: {
      type: String,
      default: '' },

    // 页面跳转的类型
    linkType: {
      type: String,
      default: 'navigateTo' } },


  data: function data() {
    return {};
  },
  onLoad: function onLoad() {
    // getRect挂载到$u上，因为这方法需要使用in(this)，所以无法把它独立成一个单独的文件导出
    this.$u.getRect = this.$uGetRect;
  },
  created: function created() {
    // 组件当中，只有created声明周期，为了能在组件使用，故也在created中将方法挂载到$u
    this.$u.getRect = this.$uGetRect;
  },
  computed: {
    // 在2.x版本中，将会把$u挂载到uni对象下，导致在模板中无法使用uni.$u.xxx形式
    // 所以这里通过computed计算属性将其附加到this.$u上，就可以在模板或者js中使用uni.$u.xxx
    // 只在nvue环境通过此方式引入完整的$u，其他平台会出现性能问题，非nvue则按需引入（主要原因是props过大）
    $u: function $u() {

      // 在非nvue端，移除props，http，mixin等对象，避免在小程序setData时数据过大影响性能
      return uni.$u.deepMerge(uni.$u, {
        props: undefined,
        http: undefined,
        mixin: undefined });





    },
    /**
        * 生成bem规则类名
        * 由于微信小程序，H5，nvue之间绑定class的差异，无法通过:class="[bem()]"的形式进行同用
        * 故采用如下折中做法，最后返回的是数组（一般平台）或字符串（支付宝和字节跳动平台），类似['a', 'b', 'c']或'a b c'的形式
        * @param {String} name 组件名称
        * @param {Array} fixed 一直会存在的类名
        * @param {Array} change 会根据变量值为true或者false而出现或者隐藏的类名
        * @returns {Array|string}
        */
    bem: function bem() {
      return function (name, fixed, change) {var _this = this;
        // 类名前缀
        var prefix = "u-".concat(name, "--");
        var classes = {};
        if (fixed) {
          fixed.map(function (item) {
            // 这里的类名，会一直存在
            classes[prefix + _this[item]] = true;
          });
        }
        if (change) {
          change.map(function (item) {
            // 这里的类名，会根据this[item]的值为true或者false，而进行添加或者移除某一个类
            _this[item] ? classes[prefix + item] = _this[item] : delete classes[prefix + item];
          });
        }
        return Object.keys(classes);
        // 支付宝，头条小程序无法动态绑定一个数组类名，否则解析出来的结果会带有","，而导致失效



      };
    } },

  methods: {
    // 跳转某一个页面
    openPage: function openPage() {var urlKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'url';
      var url = this[urlKey];
      if (url) {
        // 执行类似uni.navigateTo的方法
        uni[this.linkType]({
          url: url });

      }
    },
    // 查询节点信息
    // 目前此方法在支付宝小程序中无法获取组件跟接点的尺寸，为支付宝的bug(2020-07-21)
    // 解决办法为在组件根部再套一个没有任何作用的view元素
    $uGetRect: function $uGetRect(selector, all) {var _this2 = this;
      return new Promise(function (resolve) {
        uni.createSelectorQuery().
        in(_this2)[all ? 'selectAll' : 'select'](selector).
        boundingClientRect(function (rect) {
          if (all && Array.isArray(rect) && rect.length) {
            resolve(rect);
          }
          if (!all && rect) {
            resolve(rect);
          }
        }).
        exec();
      });
    },
    getParentData: function getParentData() {var _this3 = this;var parentName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      // 避免在created中去定义parent变量
      if (!this.parent) this.parent = {};
      // 这里的本质原理是，通过获取父组件实例(也即类似u-radio的父组件u-radio-group的this)
      // 将父组件this中对应的参数，赋值给本组件(u-radio的this)的parentData对象中对应的属性
      // 之所以需要这么做，是因为所有端中，头条小程序不支持通过this.parent.xxx去监听父组件参数的变化
      // 此处并不会自动更新子组件的数据，而是依赖父组件u-radio-group去监听data的变化，手动调用更新子组件的方法去重新获取
      this.parent = uni.$u.$parent.call(this, parentName);
      if (this.parent.children) {
        // 如果父组件的children不存在本组件的实例，才将本实例添加到父组件的children中
        this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
      }
      if (this.parent && this.parentData) {
        // 历遍parentData中的属性，将parent中的同名属性赋值给parentData
        Object.keys(this.parentData).map(function (key) {
          _this3.parentData[key] = _this3.parent[key];
        });
      }
    },
    // 阻止事件冒泡
    preventEvent: function preventEvent(e) {
      e && typeof e.stopPropagation === 'function' && e.stopPropagation();
    },
    // 空操作
    noop: function noop(e) {
      this.preventEvent(e);
    } },

  onReachBottom: function onReachBottom() {
    uni.$emit('uOnReachBottom');
  },
  beforeDestroy: function beforeDestroy() {var _this4 = this;
    // 判断当前页面是否存在parent和chldren，一般在checkbox和checkbox-group父子联动的场景会有此情况
    // 组件销毁时，移除子组件在父组件children数组中的实例，释放资源，避免数据混乱
    if (this.parent && uni.$u.test.array(this.parent.children)) {
      // 组件销毁时，移除父组件中的children数组中对应的实例
      var childrenList = this.parent.children;
      childrenList.map(function (child, index) {
        // 如果相等，则移除
        if (child === _this4) {
          childrenList.splice(index, 1);
        }
      });
    }
  } };
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 14 */
/*!*********************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/mixin/mpMixin.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {

  // 将自定义节点设置成虚拟的，更加接近Vue组件的表现，能更好的使用flex属性
  options: {
    virtualHost: true } };exports.default = _default;

/***/ }),
/* 15 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/luch-request/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _Request = _interopRequireDefault(__webpack_require__(/*! ./core/Request */ 16));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

_Request.default;exports.default = _default;

/***/ }),
/* 16 */
/*!*********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/luch-request/core/Request.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;












var _dispatchRequest = _interopRequireDefault(__webpack_require__(/*! ./dispatchRequest */ 17));
var _InterceptorManager = _interopRequireDefault(__webpack_require__(/*! ./InterceptorManager */ 25));
var _mergeConfig = _interopRequireDefault(__webpack_require__(/*! ./mergeConfig */ 26));
var _defaults = _interopRequireDefault(__webpack_require__(/*! ./defaults */ 27));
var _utils = __webpack_require__(/*! ../utils */ 20);
var _clone = _interopRequireDefault(__webpack_require__(/*! ../utils/clone */ 28));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var

Request = /*#__PURE__*/function () {
  /**
                                    * @param {Object} arg - 全局配置
                                    * @param {String} arg.baseURL - 全局根路径
                                    * @param {Object} arg.header - 全局header
                                    * @param {String} arg.method = [GET|POST|PUT|DELETE|CONNECT|HEAD|OPTIONS|TRACE] - 全局默认请求方式
                                    * @param {String} arg.dataType = [json] - 全局默认的dataType
                                    * @param {String} arg.responseType = [text|arraybuffer] - 全局默认的responseType。支付宝小程序不支持
                                    * @param {Object} arg.custom - 全局默认的自定义参数
                                    * @param {Number} arg.timeout - 全局默认的超时时间，单位 ms。默认60000。H5(HBuilderX 2.9.9+)、APP(HBuilderX 2.9.9+)、微信小程序（2.10.0）、支付宝小程序
                                    * @param {Boolean} arg.sslVerify - 全局默认的是否验证 ssl 证书。默认true.仅App安卓端支持（HBuilderX 2.3.3+）
                                    * @param {Boolean} arg.withCredentials - 全局默认的跨域请求时是否携带凭证（cookies）。默认false。仅H5支持（HBuilderX 2.6.15+）
                                    * @param {Boolean} arg.firstIpv4 - 全DNS解析时优先使用ipv4。默认false。仅 App-Android 支持 (HBuilderX 2.8.0+)
                                    * @param {Function(statusCode):Boolean} arg.validateStatus - 全局默认的自定义验证器。默认statusCode >= 200 && statusCode < 300
                                    */
  function Request() {var arg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, Request);
    if (!(0, _utils.isPlainObject)(arg)) {
      arg = {};
      console.warn('设置全局参数必须接收一个Object');
    }
    this.config = (0, _clone.default)(_objectSpread(_objectSpread({}, _defaults.default), arg));
    this.interceptors = {
      request: new _InterceptorManager.default(),
      response: new _InterceptorManager.default() };

  }

  /**
    * @Function
    * @param {Request~setConfigCallback} f - 设置全局默认配置
    */_createClass(Request, [{ key: "setConfig", value: function setConfig(
    f) {
      this.config = f(this.config);
    } }, { key: "middleware", value: function middleware(

    config) {
      config = (0, _mergeConfig.default)(this.config, config);
      var chain = [_dispatchRequest.default, undefined];
      var promise = Promise.resolve(config);

      this.interceptors.request.forEach(function (interceptor) {
        chain.unshift(interceptor.fulfilled, interceptor.rejected);
      });

      this.interceptors.response.forEach(function (interceptor) {
        chain.push(interceptor.fulfilled, interceptor.rejected);
      });

      while (chain.length) {
        promise = promise.then(chain.shift(), chain.shift());
      }

      return promise;
    }

    /**
      * @Function
      * @param {Object} config - 请求配置项
      * @prop {String} options.url - 请求路径
      * @prop {Object} options.data - 请求参数
      * @prop {Object} [options.responseType = config.responseType] [text|arraybuffer] - 响应的数据类型
      * @prop {Object} [options.dataType = config.dataType] - 如果设为 json，会尝试对返回的数据做一次 JSON.parse
      * @prop {Object} [options.header = config.header] - 请求header
      * @prop {Object} [options.method = config.method] - 请求方法
      * @returns {Promise<unknown>}
      */ }, { key: "request", value: function request()
    {var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return this.middleware(config);
    } }, { key: "get", value: function get(

    url) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.middleware(_objectSpread({
        url: url,
        method: 'GET' },
      options));

    } }, { key: "post", value: function post(

    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'POST' },
      options));

    } }, { key: "put", value: function put(


    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'PUT' },
      options));

    } }, { key: "delete", value: function _delete(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'DELETE' },
      options));

    } }, { key: "connect", value: function connect(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'CONNECT' },
      options));

    } }, { key: "head", value: function head(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'HEAD' },
      options));

    } }, { key: "options", value: function options(




    url, data) {var _options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'OPTIONS' },
      _options));

    } }, { key: "trace", value: function trace(




    url, data) {var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.middleware(_objectSpread({
        url: url,
        data: data,
        method: 'TRACE' },
      options));

    } }, { key: "upload", value: function upload(



    url) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      config.url = url;
      config.method = 'UPLOAD';
      return this.middleware(config);
    } }, { key: "download", value: function download(

    url) {var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      config.url = url;
      config.method = 'DOWNLOAD';
      return this.middleware(config);
    } }]);return Request;}();


/**
                               * setConfig回调
                               * @return {Object} - 返回操作后的config
                               * @callback Request~setConfigCallback
                               * @param {Object} config - 全局默认config
                               */exports.default = Request;

/***/ }),
/* 17 */
/*!*****************************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/luch-request/core/dispatchRequest.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _index = _interopRequireDefault(__webpack_require__(/*! ../adapters/index */ 18));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var _default =

function _default(config) {return (0, _index.default)(config);};exports.default = _default;

/***/ }),
/* 18 */
/*!***********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/luch-request/adapters/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _buildURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/buildURL */ 19));
var _buildFullPath = _interopRequireDefault(__webpack_require__(/*! ../core/buildFullPath */ 21));
var _settle = _interopRequireDefault(__webpack_require__(/*! ../core/settle */ 24));
var _utils = __webpack_require__(/*! ../utils */ 20);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * 返回可选值存在的配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @param {Array} keys - 可选值数组
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @param {Object} config2 - 配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           * @return {{}} - 存在的配置项
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */
var mergeKeys = function mergeKeys(keys, config2) {
  var config = {};
  keys.forEach(function (prop) {
    if (!(0, _utils.isUndefined)(config2[prop])) {
      config[prop] = config2[prop];
    }
  });
  return config;
};var _default =
function _default(config) {return new Promise(function (resolve, reject) {
    var fullPath = (0, _buildURL.default)((0, _buildFullPath.default)(config.baseURL, config.url), config.params);
    var _config = {
      url: fullPath,
      header: config.header,
      complete: function complete(response) {
        config.fullPath = fullPath;
        response.config = config;
        try {
          // 对可能字符串不是json 的情况容错
          if (typeof response.data === 'string') {
            response.data = JSON.parse(response.data);
          }
          // eslint-disable-next-line no-empty
        } catch (e) {
        }
        (0, _settle.default)(resolve, reject, response);
      } };

    var requestTask;
    if (config.method === 'UPLOAD') {
      delete _config.header['content-type'];
      delete _config.header['Content-Type'];
      var otherConfig = {



        filePath: config.filePath,
        name: config.name };

      var optionalKeys = [









      'formData'];

      requestTask = uni.uploadFile(_objectSpread(_objectSpread(_objectSpread({}, _config), otherConfig), mergeKeys(optionalKeys, config)));
    } else if (config.method === 'DOWNLOAD') {





      requestTask = uni.downloadFile(_config);
    } else {
      var _optionalKeys = [
      'data',
      'method',

      'timeout',

      'dataType',

      'responseType'];











      requestTask = uni.request(_objectSpread(_objectSpread({}, _config), mergeKeys(_optionalKeys, config)));
    }
    if (config.getTask) {
      config.getTask(requestTask, config);
    }
  });};exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 19 */
/*!*************************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/luch-request/helpers/buildURL.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = buildURL;

var utils = _interopRequireWildcard(__webpack_require__(/*! ../utils */ 20));function _getRequireWildcardCache() {if (typeof WeakMap !== "function") return null;var cache = new WeakMap();_getRequireWildcardCache = function _getRequireWildcardCache() {return cache;};return cache;}function _interopRequireWildcard(obj) {if (obj && obj.__esModule) {return obj;}if (obj === null || typeof obj !== "object" && typeof obj !== "function") {return { default: obj };}var cache = _getRequireWildcardCache();if (cache && cache.has(obj)) {return cache.get(obj);}var newObj = {};var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;for (var key in obj) {if (Object.prototype.hasOwnProperty.call(obj, key)) {var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;if (desc && (desc.get || desc.set)) {Object.defineProperty(newObj, key, desc);} else {newObj[key] = obj[key];}}}newObj.default = obj;if (cache) {cache.set(obj, newObj);}return newObj;}

function encode(val) {
  return encodeURIComponent(val).
  replace(/%40/gi, '@').
  replace(/%3A/gi, ':').
  replace(/%24/g, '$').
  replace(/%2C/gi, ',').
  replace(/%20/g, '+').
  replace(/%5B/gi, '[').
  replace(/%5D/gi, ']');
}

/**
   * Build a URL by appending params to the end
   *
   * @param {string} url The base of the url (e.g., http://www.google.com)
   * @param {object} [params] The params to be appended
   * @returns {string} The formatted url
   */
function buildURL(url, params) {
  /* eslint no-param-reassign:0 */
  if (!params) {
    return url;
  }

  var serializedParams;
  if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function (val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = "".concat(key, "[]");
      } else {
        val = [val];
      }

      utils.forEach(val, function (v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push("".concat(encode(key), "=").concat(encode(v)));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}

/***/ }),
/* 20 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/luch-request/utils.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// utils is a library of generic helper functions non-specific to axios
Object.defineProperty(exports, "__esModule", { value: true });exports.isArray = isArray;exports.isObject = isObject;exports.isDate = isDate;exports.isURLSearchParams = isURLSearchParams;exports.forEach = forEach;exports.isBoolean = isBoolean;exports.isPlainObject = isPlainObject;exports.deepMerge = deepMerge;exports.isUndefined = isUndefined;var
toString = Object.prototype.toString;

/**
                                       * Determine if a value is an Array
                                       *
                                       * @param {Object} val The value to test
                                       * @returns {boolean} True if value is an Array, otherwise false
                                       */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
   * Determine if a value is an Object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is an Object, otherwise false
   */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
   * Determine if a value is a Date
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a Date, otherwise false
   */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
   * Determine if a value is a URLSearchParams object
   *
   * @param {Object} val The value to test
   * @returns {boolean} True if value is a URLSearchParams object, otherwise false
   */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
   * Iterate over an Array or an Object invoking a function for each item.
   *
   * If `obj` is an Array callback will be called passing
   * the value, index, and complete array for each item.
   *
   * If 'obj' is an Object callback will be called passing
   * the value, key, and complete object for each property.
   *
   * @param {Object|Array} obj The object to iterate
   * @param {Function} fn The callback to invoke for each item
   */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /* eslint no-param-reassign:0 */
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
   * 是否为boolean 值
   * @param val
   * @returns {boolean}
   */
function isBoolean(val) {
  return typeof val === 'boolean';
}

/**
   * 是否为真正的对象{} new Object
   * @param {any} obj - 检测的对象
   * @returns {boolean}
   */
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
   * Function equal to merge with the difference being that no reference
   * to original objects is kept.
   *
   * @see merge
   * @param {Object} obj1 Object to merge
   * @returns {Object} Result of all merge properties
   */
function deepMerge() /* obj1, obj2, obj3, ... */{
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }
  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

function isUndefined(val) {
  return typeof val === 'undefined';
}

/***/ }),
/* 21 */
/*!***************************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/luch-request/core/buildFullPath.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = buildFullPath;

var _isAbsoluteURL = _interopRequireDefault(__webpack_require__(/*! ../helpers/isAbsoluteURL */ 22));
var _combineURLs = _interopRequireDefault(__webpack_require__(/*! ../helpers/combineURLs */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

/**
                                                                                                                                                                            * Creates a new URL by combining the baseURL with the requestedURL,
                                                                                                                                                                            * only when the requestedURL is not already an absolute URL.
                                                                                                                                                                            * If the requestURL is absolute, this function returns the requestedURL untouched.
                                                                                                                                                                            *
                                                                                                                                                                            * @param {string} baseURL The base URL
                                                                                                                                                                            * @param {string} requestedURL Absolute or relative URL to combine
                                                                                                                                                                            * @returns {string} The combined full path
                                                                                                                                                                            */
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !(0, _isAbsoluteURL.default)(requestedURL)) {
    return (0, _combineURLs.default)(baseURL, requestedURL);
  }
  return requestedURL;
}

/***/ }),
/* 22 */
/*!******************************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/luch-request/helpers/isAbsoluteURL.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Determines whether the specified URL is absolute
               *
               * @param {string} url The URL to test
               * @returns {boolean} True if the specified URL is absolute, otherwise false
               */Object.defineProperty(exports, "__esModule", { value: true });exports.default = isAbsoluteURL;
function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

/***/ }),
/* 23 */
/*!****************************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/luch-request/helpers/combineURLs.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
               * Creates a new URL by combining the specified URLs
               *
               * @param {string} baseURL The base URL
               * @param {string} relativeURL The relative URL
               * @returns {string} The combined URL
               */Object.defineProperty(exports, "__esModule", { value: true });exports.default = combineURLs;
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? "".concat(
  baseURL.replace(/\/+$/, ''), "/").concat(relativeURL.replace(/^\/+/, '')) :
  baseURL;
}

/***/ }),
/* 24 */
/*!********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/luch-request/core/settle.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = settle; /**
                                                                                                      * Resolve or reject a Promise based on response status.
                                                                                                      *
                                                                                                      * @param {Function} resolve A function that resolves the promise.
                                                                                                      * @param {Function} reject A function that rejects the promise.
                                                                                                      * @param {object} response The response.
                                                                                                      */
function settle(resolve, reject, response) {var
  validateStatus = response.config.validateStatus;
  var status = response.statusCode;
  if (status && (!validateStatus || validateStatus(status))) {
    resolve(response);
  } else {
    reject(response);
  }
}

/***/ }),
/* 25 */
/*!********************************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/luch-request/core/InterceptorManager.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;

function InterceptorManager() {
  this.handlers = [];
}

/**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected });

  return this.handlers.length - 1;
};

/**
    * Remove an interceptor from the stack
    *
    * @param {Number} id The ID that was returned by `use`
    */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
    * Iterate over all the registered interceptors
    *
    * This method is particularly useful for skipping over any
    * interceptors that may have become `null` calling `eject`.
    *
    * @param {Function} fn The function to call for each interceptor
    */
InterceptorManager.prototype.forEach = function forEach(fn) {
  this.handlers.forEach(function (h) {
    if (h !== null) {
      fn(h);
    }
  });
};var _default =

InterceptorManager;exports.default = _default;

/***/ }),
/* 26 */
/*!*************************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/luch-request/core/mergeConfig.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _utils = __webpack_require__(/*! ../utils */ 20);function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * 合并局部配置优先的配置，如果局部有该配置项则用局部，如果全局有该配置项则用全局
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @param {Array} keys - 配置项
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @param {Object} globalsConfig - 当前的全局配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @param {Object} config2 - 局部配置
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * @return {{}}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */
var mergeKeys = function mergeKeys(keys, globalsConfig, config2) {
  var config = {};
  keys.forEach(function (prop) {
    if (!(0, _utils.isUndefined)(config2[prop])) {
      config[prop] = config2[prop];
    } else if (!(0, _utils.isUndefined)(globalsConfig[prop])) {
      config[prop] = globalsConfig[prop];
    }
  });
  return config;
};
/**
    *
    * @param globalsConfig - 当前实例的全局配置
    * @param config2 - 当前的局部配置
    * @return - 合并后的配置
    */var _default =
function _default(globalsConfig) {var config2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var method = config2.method || globalsConfig.method || 'GET';
  var config = {
    baseURL: globalsConfig.baseURL || '',
    method: method,
    url: config2.url || '',
    params: config2.params || {},
    custom: _objectSpread(_objectSpread({}, globalsConfig.custom || {}), config2.custom || {}),
    header: (0, _utils.deepMerge)(globalsConfig.header || {}, config2.header || {}) };

  var defaultToConfig2Keys = ['getTask', 'validateStatus'];
  config = _objectSpread(_objectSpread({}, config), mergeKeys(defaultToConfig2Keys, globalsConfig, config2));

  // eslint-disable-next-line no-empty
  if (method === 'DOWNLOAD') {







  } else if (method === 'UPLOAD') {
    delete config.header['content-type'];
    delete config.header['Content-Type'];
    var uploadKeys = [









    'filePath',
    'name',



    'formData'];

    uploadKeys.forEach(function (prop) {
      if (!(0, _utils.isUndefined)(config2[prop])) {
        config[prop] = config2[prop];
      }
    });





  } else {
    var defaultsKeys = [
    'data',

    'timeout',

    'dataType',

    'responseType'];











    config = _objectSpread(_objectSpread({}, config), mergeKeys(defaultsKeys, globalsConfig, config2));
  }

  return config;
};exports.default = _default;

/***/ }),
/* 27 */
/*!**********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/luch-request/core/defaults.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 默认的全局配置
                                                                                                      */var _default =

{
  baseURL: '',
  header: {},
  method: 'GET',
  dataType: 'json',

  responseType: 'text',

  custom: {},

  timeout: 60000,










  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  } };exports.default = _default;

/***/ }),
/* 28 */
/*!********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/luch-request/utils/clone.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /* eslint-disable */
var clone = function () {
  'use strict';

  function _instanceof(obj, type) {
    return type != null && obj instanceof type;
  }

  var nativeMap;
  try {
    nativeMap = Map;
  } catch (_) {
    // maybe a reference error because no `Map`. Give it a dummy value that no
    // value will ever be an instanceof.
    nativeMap = function nativeMap() {};
  }

  var nativeSet;
  try {
    nativeSet = Set;
  } catch (_) {
    nativeSet = function nativeSet() {};
  }

  var nativePromise;
  try {
    nativePromise = Promise;
  } catch (_) {
    nativePromise = function nativePromise() {};
  }

  /**
     * Clones (copies) an Object using deep copying.
     *
     * This function supports circular references by default, but if you are certain
     * there are no circular references in your object, you can save some CPU time
     * by calling clone(obj, false).
     *
     * Caution: if `circular` is false and `parent` contains circular references,
     * your program may enter an infinite loop and crash.
     *
     * @param `parent` - the object to be cloned
     * @param `circular` - set to true if the object to be cloned may contain
     *    circular references. (optional - true by default)
     * @param `depth` - set to a number if the object is only to be cloned to
     *    a particular depth. (optional - defaults to Infinity)
     * @param `prototype` - sets the prototype to be used when cloning an object.
     *    (optional - defaults to parent prototype).
     * @param `includeNonEnumerable` - set to true if the non-enumerable properties
     *    should be cloned as well. Non-enumerable properties on the prototype
     *    chain will be ignored. (optional - false by default)
     */
  function clone(parent, circular, depth, prototype, includeNonEnumerable) {
    if (typeof circular === 'object') {
      depth = circular.depth;
      prototype = circular.prototype;
      includeNonEnumerable = circular.includeNonEnumerable;
      circular = circular.circular;
    }
    // maintain two arrays for circular references, where corresponding parents
    // and children have the same index
    var allParents = [];
    var allChildren = [];

    var useBuffer = typeof Buffer != 'undefined';

    if (typeof circular == 'undefined')
    circular = true;

    if (typeof depth == 'undefined')
    depth = Infinity;

    // recurse this function so we don't reset allParents and allChildren
    function _clone(parent, depth) {
      // cloning null always returns null
      if (parent === null)
      return null;

      if (depth === 0)
      return parent;

      var child;
      var proto;
      if (typeof parent != 'object') {
        return parent;
      }

      if (_instanceof(parent, nativeMap)) {
        child = new nativeMap();
      } else if (_instanceof(parent, nativeSet)) {
        child = new nativeSet();
      } else if (_instanceof(parent, nativePromise)) {
        child = new nativePromise(function (resolve, reject) {
          parent.then(function (value) {
            resolve(_clone(value, depth - 1));
          }, function (err) {
            reject(_clone(err, depth - 1));
          });
        });
      } else if (clone.__isArray(parent)) {
        child = [];
      } else if (clone.__isRegExp(parent)) {
        child = new RegExp(parent.source, __getRegExpFlags(parent));
        if (parent.lastIndex) child.lastIndex = parent.lastIndex;
      } else if (clone.__isDate(parent)) {
        child = new Date(parent.getTime());
      } else if (useBuffer && Buffer.isBuffer(parent)) {
        if (Buffer.from) {
          // Node.js >= 5.10.0
          child = Buffer.from(parent);
        } else {
          // Older Node.js versions
          child = new Buffer(parent.length);
          parent.copy(child);
        }
        return child;
      } else if (_instanceof(parent, Error)) {
        child = Object.create(parent);
      } else {
        if (typeof prototype == 'undefined') {
          proto = Object.getPrototypeOf(parent);
          child = Object.create(proto);
        } else
        {
          child = Object.create(prototype);
          proto = prototype;
        }
      }

      if (circular) {
        var index = allParents.indexOf(parent);

        if (index != -1) {
          return allChildren[index];
        }
        allParents.push(parent);
        allChildren.push(child);
      }

      if (_instanceof(parent, nativeMap)) {
        parent.forEach(function (value, key) {
          var keyChild = _clone(key, depth - 1);
          var valueChild = _clone(value, depth - 1);
          child.set(keyChild, valueChild);
        });
      }
      if (_instanceof(parent, nativeSet)) {
        parent.forEach(function (value) {
          var entryChild = _clone(value, depth - 1);
          child.add(entryChild);
        });
      }

      for (var i in parent) {
        var attrs = Object.getOwnPropertyDescriptor(parent, i);
        if (attrs) {
          child[i] = _clone(parent[i], depth - 1);
        }

        try {
          var objProperty = Object.getOwnPropertyDescriptor(parent, i);
          if (objProperty.set === 'undefined') {
            // no setter defined. Skip cloning this property
            continue;
          }
          child[i] = _clone(parent[i], depth - 1);
        } catch (e) {
          if (e instanceof TypeError) {
            // when in strict mode, TypeError will be thrown if child[i] property only has a getter
            // we can't do anything about this, other than inform the user that this property cannot be set.
            continue;
          } else if (e instanceof ReferenceError) {
            //this may happen in non strict mode
            continue;
          }
        }

      }

      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(parent);
        for (var i = 0; i < symbols.length; i++) {
          // Don't need to worry about cloning a symbol because it is a primitive,
          // like a number or string.
          var symbol = symbols[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
          if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
            continue;
          }
          child[symbol] = _clone(parent[symbol], depth - 1);
          Object.defineProperty(child, symbol, descriptor);
        }
      }

      if (includeNonEnumerable) {
        var allPropertyNames = Object.getOwnPropertyNames(parent);
        for (var i = 0; i < allPropertyNames.length; i++) {
          var propertyName = allPropertyNames[i];
          var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
          if (descriptor && descriptor.enumerable) {
            continue;
          }
          child[propertyName] = _clone(parent[propertyName], depth - 1);
          Object.defineProperty(child, propertyName, descriptor);
        }
      }

      return child;
    }

    return _clone(parent, depth);
  }

  /**
     * Simple flat clone using prototype, accepts only objects, usefull for property
     * override on FLAT configuration object (no nested props).
     *
     * USE WITH CAUTION! This may not behave as you wish if you do not know how this
     * works.
     */
  clone.clonePrototype = function clonePrototype(parent) {
    if (parent === null)
    return null;

    var c = function c() {};
    c.prototype = parent;
    return new c();
  };

  // private utility functions

  function __objToStr(o) {
    return Object.prototype.toString.call(o);
  }
  clone.__objToStr = __objToStr;

  function __isDate(o) {
    return typeof o === 'object' && __objToStr(o) === '[object Date]';
  }
  clone.__isDate = __isDate;

  function __isArray(o) {
    return typeof o === 'object' && __objToStr(o) === '[object Array]';
  }
  clone.__isArray = __isArray;

  function __isRegExp(o) {
    return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
  }
  clone.__isRegExp = __isRegExp;

  function __getRegExpFlags(re) {
    var flags = '';
    if (re.global) flags += 'g';
    if (re.ignoreCase) flags += 'i';
    if (re.multiline) flags += 'm';
    return flags;
  }
  clone.__getRegExpFlags = __getRegExpFlags;

  return clone;
}();var _default =

clone;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/buffer/index.js */ 29).Buffer))

/***/ }),
/* 29 */
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ 30)
var ieee754 = __webpack_require__(/*! ieee754 */ 31)
var isArray = __webpack_require__(/*! isarray */ 32)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 2)))

/***/ }),
/* 30 */
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 31 */
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 32 */
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 33 */
/*!******************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/util/route.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 34));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * 路由跳转方法，该方法相对于直接使用uni.xxx的好处是使用更加简单快捷
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * 并且带有路由拦截功能
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */var

Router = /*#__PURE__*/function () {
  function Router() {_classCallCheck(this, Router);
    // 原始属性定义
    this.config = {
      type: 'navigateTo',
      url: '',
      delta: 1, // navigateBack页面后退时,回退的层数
      params: {}, // 传递的参数
      animationType: 'pop-in', // 窗口动画,只在APP有效
      animationDuration: 300, // 窗口动画持续时间,单位毫秒,只在APP有效
      intercept: false // 是否需要拦截
    };
    // 因为route方法是需要对外赋值给另外的对象使用，同时route内部有使用this，会导致route失去上下文
    // 这里在构造函数中进行this绑定
    this.route = this.route.bind(this);
  }

  // 判断url前面是否有"/"，如果没有则加上，否则无法跳转
  _createClass(Router, [{ key: "addRootPath", value: function addRootPath(url) {
      return url[0] === '/' ? url : "/".concat(url);
    }

    // 整合路由参数
  }, { key: "mixinParam", value: function mixinParam(url, params) {
      url = url && this.addRootPath(url);

      // 使用正则匹配，主要依据是判断是否有"/","?","="等，如“/page/index/index?name=mary"
      // 如果有url中有get参数，转换后无需带上"?"
      var query = '';
      if (/.*\/.*\?.*=.*/.test(url)) {
        // object对象转为get类型的参数
        query = uni.$u.queryParams(params, false);
        // 因为已有get参数,所以后面拼接的参数需要带上"&"隔开
        return url += "&".concat(query);
      }
      // 直接拼接参数，因为此处url中没有后面的query参数，也就没有"?/&"之类的符号
      query = uni.$u.queryParams(params);
      return url += query;
    }

    // 对外的方法名称
  }, { key: "route", value: function () {var _route = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var options,params,mergeConfig,isNext,_args = arguments;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};params = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
                // 合并用户的配置和内部的默认配置
                mergeConfig = {};

                if (typeof options === 'string') {
                  // 如果options为字符串，则为route(url, params)的形式
                  mergeConfig.url = this.mixinParam(options, params);
                  mergeConfig.type = 'navigateTo';
                } else {
                  mergeConfig = uni.$u.deepClone(options, this.config);
                  // 否则正常使用mergeConfig中的url和params进行拼接
                  mergeConfig.url = this.mixinParam(options.url, options.params);
                }

                // 如果本次跳转的路径和本页面路径一致，不执行跳转，防止用户快速点击跳转按钮，造成多次跳转同一个页面的问题
                if (!(mergeConfig.url === uni.$u.page())) {_context.next = 6;break;}return _context.abrupt("return");case 6:

                if (params.intercept) {
                  this.config.intercept = params.intercept;
                }
                // params参数也带给拦截器
                mergeConfig.params = params;
                // 合并内外部参数
                mergeConfig = uni.$u.deepMerge(this.config, mergeConfig);
                // 判断用户是否定义了拦截器
                if (!(typeof uni.$u.routeIntercept === 'function')) {_context.next = 16;break;}_context.next = 12;return (

                  new Promise(function (resolve, reject) {
                    uni.$u.routeIntercept(mergeConfig, resolve);
                  }));case 12:isNext = _context.sent;
                // 如果isNext为true，则执行路由跳转
                isNext && this.openPage(mergeConfig);_context.next = 17;break;case 16:

                this.openPage(mergeConfig);case 17:case "end":return _context.stop();}}}, _callee, this);}));function route() {return _route.apply(this, arguments);}return route;}()



    // 执行路由跳转
  }, { key: "openPage", value: function openPage(config) {
      // 解构参数
      var
      url =




      config.url,type = config.type,delta = config.delta,animationType = config.animationType,animationDuration = config.animationDuration;
      if (config.type == 'navigateTo' || config.type == 'to') {
        uni.navigateTo({
          url: url,
          animationType: animationType,
          animationDuration: animationDuration });

      }
      if (config.type == 'redirectTo' || config.type == 'redirect') {
        uni.redirectTo({
          url: url });

      }
      if (config.type == 'switchTab' || config.type == 'tab') {
        uni.switchTab({
          url: url });

      }
      if (config.type == 'reLaunch' || config.type == 'launch') {
        uni.reLaunch({
          url: url });

      }
      if (config.type == 'navigateBack' || config.type == 'back') {
        uni.navigateBack({
          delta: delta });

      }
    } }]);return Router;}();var _default =


new Router().route;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 34 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 35);

/***/ }),
/* 35 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 36);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 36 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 37 */
/*!******************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/function/colorGradient.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 求两个颜色之间的渐变值
                                                                                                      * @param {string} startColor 开始的颜色
                                                                                                      * @param {string} endColor 结束的颜色
                                                                                                      * @param {number} step 颜色等分的份额
                                                                                                      * */
function colorGradient() {var startColor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'rgb(0, 0, 0)';var endColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rgb(255, 255, 255)';var step = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
  var startRGB = hexToRgb(startColor, false); // 转换为rgb数组模式
  var startR = startRGB[0];
  var startG = startRGB[1];
  var startB = startRGB[2];

  var endRGB = hexToRgb(endColor, false);
  var endR = endRGB[0];
  var endG = endRGB[1];
  var endB = endRGB[2];

  var sR = (endR - startR) / step; // 总差值
  var sG = (endG - startG) / step;
  var sB = (endB - startB) / step;
  var colorArr = [];
  for (var i = 0; i < step; i++) {
    // 计算每一步的hex值
    var hex = rgbToHex("rgb(".concat(Math.round(sR * i + startR), ",").concat(Math.round(sG * i + startG), ",").concat(Math.round(sB *
    i + startB), ")"));
    // 确保第一个颜色值为startColor的值
    if (i === 0) hex = rgbToHex(startColor);
    // 确保最后一个颜色值为endColor的值
    if (i === step - 1) hex = rgbToHex(endColor);
    colorArr.push(hex);
  }
  return colorArr;
}

// 将hex表示方式转换为rgb表示方式(这里返回rgb数组模式)
function hexToRgb(sColor) {var str = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  sColor = String(sColor).toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i = 1; _i < 7; _i += 2) {
      sColorChange.push(parseInt("0x".concat(sColor.slice(_i, _i + 2))));
    }
    if (!str) {
      return sColorChange;
    }
    return "rgb(".concat(sColorChange[0], ",").concat(sColorChange[1], ",").concat(sColorChange[2], ")");
  }if (/^(rgb|RGB)/.test(sColor)) {
    var arr = sColor.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
    return arr.map(function (val) {return Number(val);});
  }
  return sColor;
}

// 将rgb表示方式转换为hex表示方式
function rgbToHex(rgb) {
  var _this = rgb;
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  if (/^(rgb|RGB)/.test(_this)) {
    var aColor = _this.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
    var strHex = '#';
    for (var i = 0; i < aColor.length; i++) {
      var hex = Number(aColor[i]).toString(16);
      hex = String(hex).length == 1 ? "".concat(0, hex) : hex; // 保证每个rgb的值为2位
      if (hex === '0') {
        hex += hex;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = _this;
    }
    return strHex;
  }if (reg.test(_this)) {
    var aNum = _this.replace(/#/, '').split('');
    if (aNum.length === 6) {
      return _this;
    }if (aNum.length === 3) {
      var numHex = '#';
      for (var _i2 = 0; _i2 < aNum.length; _i2 += 1) {
        numHex += aNum[_i2] + aNum[_i2];
      }
      return numHex;
    }
  } else {
    return _this;
  }
}

/**
  * JS颜色十六进制转换为rgb或rgba,返回的格式为 rgba（255，255，255，0.5）字符串
  * sHex为传入的十六进制的色值
  * alpha为rgba的透明度
  */
function colorToRgba(color, alpha) {
  color = rgbToHex(color);
  // 十六进制颜色值的正则表达式
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  /* 16进制颜色转为RGB格式 */
  var sColor = String(color).toLowerCase();
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      var sColorNew = '#';
      for (var i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    var sColorChange = [];
    for (var _i3 = 1; _i3 < 7; _i3 += 2) {
      sColorChange.push(parseInt("0x".concat(sColor.slice(_i3, _i3 + 2))));
    }
    // return sColorChange.join(',')
    return "rgba(".concat(sColorChange.join(','), ",").concat(alpha, ")");
  }

  return sColor;
}var _default =

{
  colorGradient: colorGradient,
  hexToRgb: hexToRgb,
  rgbToHex: rgbToHex,
  colorToRgba: colorToRgba };exports.default = _default;

/***/ }),
/* 38 */
/*!*********************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/function/test.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 验证电子邮箱格式
                                                                                                      */
function email(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
}

/**
   * 验证手机格式
   */
function mobile(value) {
  return /^1[23456789]\d{9}$/.test(value);
}

/**
   * 验证URL格式
   */
function url(value) {
  return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.
  test(value);
}

/**
   * 验证日期格式
   */
function date(value) {
  if (!value) return false;
  // 判断是否数值或者字符串数值(意味着为时间戳)，转为数值，否则new Date无法识别字符串时间戳
  if (number(value)) value = +value;
  return !/Invalid|NaN/.test(new Date(value).toString());
}

/**
   * 验证ISO类型的日期格式
   */
function dateISO(value) {
  return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}

/**
   * 验证十进制数字
   */
function number(value) {
  return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
}

/**
   * 验证字符串
   */
function string(value) {
  return typeof value === 'string';
}

/**
   * 验证整数
   */
function digits(value) {
  return /^\d+$/.test(value);
}

/**
   * 验证身份证号码
   */
function idCard(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
  value);

}

/**
   * 是否车牌号
   */
function carNo(value) {
  // 新能源车牌
  var xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  // 旧车牌
  var creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (value.length === 7) {
    return creg.test(value);
  }if (value.length === 8) {
    return xreg.test(value);
  }
  return false;
}

/**
   * 金额,只允许2位小数
   */
function amount(value) {
  // 金额，只允许保留两位小数
  return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
}

/**
   * 中文
   */
function chinese(value) {
  var reg = /^[\u4e00-\u9fa5]+$/gi;
  return reg.test(value);
}

/**
   * 只能输入字母
   */
function letter(value) {
  return /^[a-zA-Z]*$/.test(value);
}

/**
   * 只能是字母或者数字
   */
function enOrNum(value) {
  // 英文或者数字
  var reg = /^[0-9a-zA-Z]*$/g;
  return reg.test(value);
}

/**
   * 验证是否包含某个值
   */
function contains(value, param) {
  return value.indexOf(param) >= 0;
}

/**
   * 验证一个值范围[min, max]
   */
function range(value, param) {
  return value >= param[0] && value <= param[1];
}

/**
   * 验证一个长度范围[min, max]
   */
function rangeLength(value, param) {
  return value.length >= param[0] && value.length <= param[1];
}

/**
   * 是否固定电话
   */
function landline(value) {
  var reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
  return reg.test(value);
}

/**
   * 判断是否为空
   */
function empty(value) {
  switch (typeof value) {
    case 'undefined':
      return true;
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length == 0) return true;
      break;
    case 'boolean':
      if (!value) return true;
      break;
    case 'number':
      if (value === 0 || isNaN(value)) return true;
      break;
    case 'object':
      if (value === null || value.length === 0) return true;
      for (var i in value) {
        return false;
      }
      return true;}

  return false;
}

/**
   * 是否json字符串
   */
function jsonString(value) {
  if (typeof value === 'string') {
    try {
      var obj = JSON.parse(value);
      if (typeof obj === 'object' && obj) {
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  }
  return false;
}

/**
   * 是否数组
   */
function array(value) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value);
  }
  return Object.prototype.toString.call(value) === '[object Array]';
}

/**
   * 是否对象
   */
function object(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

/**
   * 是否短信验证码
   */
function code(value) {var len = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return new RegExp("^\\d{".concat(len, "}$")).test(value);
}

/**
   * 是否函数方法
   * @param {Object} value
   */
function func(value) {
  return typeof value === 'function';
}

/**
   * 是否promise对象
   * @param {Object} value
   */
function promise(value) {
  return object(value) && func(value.then) && func(value.catch);
}

/** 是否图片格式
   * @param {Object} value
   */
function image(value) {
  var newValue = value.split('?')[0];
  var IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
  return IMAGE_REGEXP.test(newValue);
}

/**
   * 是否视频格式
   * @param {Object} value
   */
function video(value) {
  var VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
  return VIDEO_REGEXP.test(value);
}

/**
   * 是否为正则对象
   * @param {Object}
   * @return {Boolean}
   */
function regExp(o) {
  return o && Object.prototype.toString.call(o) === '[object RegExp]';
}var _default =

{
  email: email,
  mobile: mobile,
  url: url,
  date: date,
  dateISO: dateISO,
  number: number,
  digits: digits,
  idCard: idCard,
  carNo: carNo,
  amount: amount,
  chinese: chinese,
  letter: letter,
  enOrNum: enOrNum,
  contains: contains,
  range: range,
  rangeLength: rangeLength,
  empty: empty,
  isEmpty: empty,
  jsonString: jsonString,
  landline: landline,
  object: object,
  array: array,
  code: code,
  func: func,
  promise: promise,
  video: video,
  image: image,
  regExp: regExp,
  string: string };exports.default = _default;

/***/ }),
/* 39 */
/*!*************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/function/debounce.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timeout = null;

/**
                                                                                                                         * 防抖原理：一定时间内，只有最后一次操作，再过wait毫秒后才执行函数
                                                                                                                         *
                                                                                                                         * @param {Function} func 要执行的回调函数
                                                                                                                         * @param {Number} wait 延时的时间
                                                                                                                         * @param {Boolean} immediate 是否立即执行
                                                                                                                         * @return null
                                                                                                                         */
function debounce(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 清除定时器
  if (timeout !== null) clearTimeout(timeout);
  // 立即执行，此类情况一般用不到
  if (immediate) {
    var callNow = !timeout;
    timeout = setTimeout(function () {
      timeout = null;
    }, wait);
    if (callNow) typeof func === 'function' && func();
  } else {
    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    timeout = setTimeout(function () {
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =

debounce;exports.default = _default;

/***/ }),
/* 40 */
/*!*************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/function/throttle.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var timer;var
flag;
/**
       * 节流原理：在一定时间内，只能触发一次
       *
       * @param {Function} func 要执行的回调函数
       * @param {Number} wait 延时的时间
       * @param {Boolean} immediate 是否立即执行
       * @return null
       */
function throttle(func) {var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  if (immediate) {
    if (!flag) {
      flag = true;
      // 如果是立即执行，则在wait毫秒内开始时执行
      typeof func === 'function' && func();
      timer = setTimeout(function () {
        flag = false;
      }, wait);
    }
  } else if (!flag) {
    flag = true;
    // 如果是非立即执行，则在wait毫秒内的结束处执行
    timer = setTimeout(function () {
      flag = false;
      typeof func === 'function' && func();
    }, wait);
  }
}var _default =
throttle;exports.default = _default;

/***/ }),
/* 41 */
/*!**********************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/function/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _test = _interopRequireDefault(__webpack_require__(/*! ./test.js */ 38));
var _digit = __webpack_require__(/*! ./digit.js */ 42);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @description 如果value小于min，取min；如果value大于max，取max
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @param {number} min 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @param {number} max 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             * @param {number} value
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             */
function range() {var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return Math.max(min, Math.min(max, Number(value)));
}

/**
   * @description 用于获取用户传递值的px值  如果用户传递了"xxpx"或者"xxrpx"，取出其数值部分，如果是"xxxrpx"还需要用过uni.upx2px进行转换
   * @param {number|string} value 用户传递值的px值
   * @param {boolean} unit 
   * @returns {number|string}
   */
function getPx(value) {var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (_test.default.number(value)) {
    return unit ? "".concat(value, "px") : Number(value);
  }
  // 如果带有rpx，先取出其数值部分，再转为px值
  if (/(rpx|upx)$/.test(value)) {
    return unit ? "".concat(uni.upx2px(parseInt(value)), "px") : Number(uni.upx2px(parseInt(value)));
  }
  return unit ? "".concat(parseInt(value), "px") : parseInt(value);
}

/**
   * @description 进行延时，以达到可以简写代码的目的 比如: await uni.$u.sleep(20)将会阻塞20ms
   * @param {number} value 堵塞时间 单位ms 毫秒
   * @returns {Promise} 返回promise
   */
function sleep() {var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve();
    }, value);
  });
}
/**
   * @description 运行期判断平台
   * @returns {string} 返回所在平台(小写) 
   * @link 运行期判断平台 https://uniapp.dcloud.io/frame?id=判断平台
   */
function os() {
  return uni.getSystemInfoSync().platform.toLowerCase();
}
/**
   * @description 获取系统信息同步接口
   * @link 获取系统信息同步接口 https://uniapp.dcloud.io/api/system/info?id=getsysteminfosync 
   */
function sys() {
  return uni.getSystemInfoSync();
}

/**
   * @description 取一个区间数
   * @param {Number} min 最小值
   * @param {Number} max 最大值
   */
function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    var gab = max - min + 1;
    return Math.floor(Math.random() * gab + min);
  }
  return 0;
}

/**
   * @param {Number} len uuid的长度
   * @param {Boolean} firstU 将返回的首字母置为"u"
   * @param {Nubmer} radix 生成uuid的基数(意味着返回的字符串都是这个基数),2-二进制,8-八进制,10-十进制,16-十六进制
   */
function guid() {var len = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;var firstU = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var radix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [];
  radix = radix || chars.length;

  if (len) {
    // 如果指定uuid长度,只是取随机的字符,0|x为位运算,能去掉x的小数位,返回整数位
    for (var i = 0; i < len; i++) {uuid[i] = chars[0 | Math.random() * radix];}
  } else {
    var r;
    // rfc4122标准要求返回的uuid中,某些位为固定的字符
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (var _i = 0; _i < 36; _i++) {
      if (!uuid[_i]) {
        r = 0 | Math.random() * 16;
        uuid[_i] = chars[_i == 19 ? r & 0x3 | 0x8 : r];
      }
    }
  }
  // 移除第一个字符,并用u替代,因为第一个字符为数值时,该guuid不能用作id或者class
  if (firstU) {
    uuid.shift();
    return "u".concat(uuid.join(''));
  }
  return uuid.join('');
}

/**
  * @description 获取父组件的参数，因为支付宝小程序不支持provide/inject的写法
     this.$parent在非H5中，可以准确获取到父组件，但是在H5中，需要多次this.$parent.$parent.xxx
     这里默认值等于undefined有它的含义，因为最顶层元素(组件)的$parent就是undefined，意味着不传name
     值(默认为undefined)，就是查找最顶层的$parent
  *  @param {string|undefined} name 父组件的参数名
  */
function $parent() {var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  var parent = this.$parent;
  // 通过while历遍，这里主要是为了H5需要多层解析的问题
  while (parent) {
    // 父组件
    if (parent.$options && parent.$options.name !== name) {
      // 如果组件的name不相等，继续上一级寻找
      parent = parent.$parent;
    } else {
      return parent;
    }
  }
  return false;
}

/**
   * @description 样式转换
   * 对象转字符串，或者字符串转对象
   * @param {object | string} customStyle 需要转换的目标
   * @param {String} target 转换的目的，object-转为对象，string-转为字符串
   * @returns {object|string}
   */
function addStyle(customStyle) {var target = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'object';
  // 字符串转字符串，对象转对象情形，直接返回
  if (_test.default.empty(customStyle) || typeof customStyle === 'object' && target === 'object' || target === 'string' &&
  typeof customStyle === 'string') {
    return customStyle;
  }
  // 字符串转对象
  if (target === 'object') {
    // 去除字符串样式中的两端空格(中间的空格不能去掉，比如padding: 20px 0如果去掉了就错了)，空格是无用的
    customStyle = trim(customStyle);
    // 根据";"将字符串转为数组形式
    var styleArray = customStyle.split(';');
    var style = {};
    // 历遍数组，拼接成对象
    for (var i = 0; i < styleArray.length; i++) {
      // 'font-size:20px;color:red;'，如此最后字符串有";"的话，会导致styleArray最后一个元素为空字符串，这里需要过滤
      if (styleArray[i]) {
        var item = styleArray[i].split(':');
        style[trim(item[0])] = trim(item[1]);
      }
    }
    return style;
  }
  // 这里为对象转字符串形式
  var string = '';
  for (var _i2 in customStyle) {
    // 驼峰转为中划线的形式，否则css内联样式，无法识别驼峰样式属性名
    var key = _i2.replace(/([A-Z])/g, '-$1').toLowerCase();
    string += "".concat(key, ":").concat(customStyle[_i2], ";");
  }
  // 去除两端空格
  return trim(string);
}

/**
   * @description 添加单位，如果有rpx，upx，%，px等单位结尾或者值为auto，直接返回，否则加上px单位结尾
   * @param {string|number} value 需要添加单位的值
   * @param {string} unit 添加的单位名 比如px
   */
function addUnit() {var _uni$$u$config$unit, _uni, _uni$$u, _uni$$u$config;var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'auto';var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (_uni$$u$config$unit = (_uni = uni) === null || _uni === void 0 ? void 0 : (_uni$$u = _uni.$u) === null || _uni$$u === void 0 ? void 0 : (_uni$$u$config = _uni$$u.config) === null || _uni$$u$config === void 0 ? void 0 : _uni$$u$config.unit) !== null && _uni$$u$config$unit !== void 0 ? _uni$$u$config$unit : 'px';
  value = String(value);
  // 用uView内置验证规则中的number判断是否为数值
  return _test.default.number(value) ? "".concat(value).concat(unit) : value;
}

/**
   * @description 深度克隆
   * @param {object} obj 需要深度克隆的对象
   * @returns {*} 克隆后的对象或者原值（不是对象）
   */
function deepClone(obj) {
  // 对常见的“非”值，直接返回原来值
  if ([null, undefined, NaN, false].includes(obj)) return obj;
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    // 原始类型直接返回
    return obj;
  }
  var o = _test.default.array(obj) ? [] : {};
  for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
      o[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i];
    }
  }
  return o;
}

/**
   * @description JS对象深度合并
   * @param {object} target 需要拷贝的对象
   * @param {object} source 拷贝的来源对象
   * @returns {object|boolean} 深度合并后的对象或者false（入参有不是对象）
   */
function deepMerge() {var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var source = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  target = deepClone(target);
  if (typeof target !== 'object' || typeof source !== 'object') return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== 'object') {
        target[prop] = source[prop];
      } else if (typeof source[prop] !== 'object') {
        target[prop] = source[prop];
      } else if (target[prop].concat && source[prop].concat) {
        target[prop] = target[prop].concat(source[prop]);
      } else {
        target[prop] = deepMerge(target[prop], source[prop]);
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}

/**
   * @description error提示
   * @param {*} err 错误内容
   */
function error(err) {
  // 开发环境才提示，生产环境不会提示
  if (true) {
    console.error("uView\u63D0\u793A\uFF1A".concat(err));
  }
}

/**
   * @description 打乱数组
   * @param {array} array 需要打乱的数组
   * @returns {array} 打乱后的数组
   */
function randomArray() {var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // 原理是sort排序,Math.random()产生0<= x < 1之间的数,会导致x-0.05大于或者小于0
  return array.sort(function () {return Math.random() - 0.5;});
}

// padStart 的 polyfill，因为某些机型或情况，还无法支持es7的padStart，比如电脑版的微信小程序
// 所以这里做一个兼容polyfill的兼容处理
if (!String.prototype.padStart) {
  // 为了方便表示这里 fillString 用了ES6 的默认参数，不影响理解
  String.prototype.padStart = function (maxLength) {var fillString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ' ';
    if (Object.prototype.toString.call(fillString) !== '[object String]') {
      throw new TypeError(
      'fillString must be String');

    }
    var str = this;
    // 返回 String(str) 这里是为了使返回的值是字符串字面量，在控制台中更符合直觉
    if (str.length >= maxLength) return String(str);

    var fillLength = maxLength - str.length;
    var times = Math.ceil(fillLength / fillString.length);
    while (times >>= 1) {
      fillString += fillString;
      if (times === 1) {
        fillString += fillString;
      }
    }
    return fillString.slice(0, fillLength) + str;
  };
}

/**
   * @description 格式化时间
   * @param {String|Number} dateTime 需要格式化的时间戳
   * @param {String} fmt 格式化规则 yyyy:mm:dd|yyyy:mm|yyyy年mm月dd日|yyyy年mm月dd日 hh时MM分等,可自定义组合 默认yyyy-mm-dd
   * @returns {string} 返回格式化后的字符串
   */
function timeFormat() {var dateTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var formatStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  var date;
  // 若传入时间为假值，则取当前时间
  if (!dateTime) {
    date = new Date();
  }
  // 若为unix秒时间戳，则转为毫秒时间戳（逻辑有点奇怪，但不敢改，以保证历史兼容）
  else if (/^\d{10}$/.test(dateTime === null || dateTime === void 0 ? void 0 : dateTime.toString().trim())) {
      date = new Date(dateTime * 1000);
    }
    // 若用户传入字符串格式时间戳，new Date无法解析，需做兼容
    else if (typeof dateTime === 'string' && /^\d+$/.test(dateTime.trim())) {
        date = new Date(Number(dateTime));
      }
      // 其他都认为符合 RFC 2822 规范
      else {
          // 处理平台性差异，在Safari/Webkit中，new Date仅支持/作为分割符的字符串时间
          date = new Date(
          typeof dateTime === 'string' ?
          dateTime.replace(/-/g, '/') :
          dateTime);

        }

  var timeSource = {
    'y': date.getFullYear().toString(), // 年
    'm': (date.getMonth() + 1).toString().padStart(2, '0'), // 月
    'd': date.getDate().toString().padStart(2, '0'), // 日
    'h': date.getHours().toString().padStart(2, '0'), // 时
    'M': date.getMinutes().toString().padStart(2, '0'), // 分
    's': date.getSeconds().toString().padStart(2, '0') // 秒
    // 有其他格式化字符需求可以继续添加，必须转化成字符串
  };

  for (var key in timeSource) {var _ref =
    new RegExp("".concat(key, "+")).exec(formatStr) || [],_ref2 = _slicedToArray(_ref, 1),ret = _ref2[0];
    if (ret) {
      // 年可能只需展示两位
      var beginIndex = key === 'y' && ret.length === 2 ? 2 : 0;
      formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
    }
  }

  return formatStr;
}

/**
   * @description 时间戳转为多久之前
   * @param {String|Number} timestamp 时间戳
   * @param {String|Boolean} format 
   * 格式化规则如果为时间格式字符串，超出一定时间范围，返回固定的时间格式；
   * 如果为布尔值false，无论什么时间，都返回多久以前的格式
   * @returns {string} 转化后的内容
   */
function timeFrom() {var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'yyyy-mm-dd';
  if (timestamp == null) timestamp = Number(new Date());
  timestamp = parseInt(timestamp);
  // 判断用户输入的时间戳是秒还是毫秒,一般前端js获取的时间戳是毫秒(13位),后端传过来的为秒(10位)
  if (timestamp.toString().length == 10) timestamp *= 1000;
  var timer = new Date().getTime() - timestamp;
  timer = parseInt(timer / 1000);
  // 如果小于5分钟,则返回"刚刚",其他以此类推
  var tips = '';
  switch (true) {
    case timer < 300:
      tips = '刚刚';
      break;
    case timer >= 300 && timer < 3600:
      tips = "".concat(parseInt(timer / 60), "\u5206\u949F\u524D");
      break;
    case timer >= 3600 && timer < 86400:
      tips = "".concat(parseInt(timer / 3600), "\u5C0F\u65F6\u524D");
      break;
    case timer >= 86400 && timer < 2592000:
      tips = "".concat(parseInt(timer / 86400), "\u5929\u524D");
      break;
    default:
      // 如果format为false，则无论什么时间戳，都显示xx之前
      if (format === false) {
        if (timer >= 2592000 && timer < 365 * 86400) {
          tips = "".concat(parseInt(timer / (86400 * 30)), "\u4E2A\u6708\u524D");
        } else {
          tips = "".concat(parseInt(timer / (86400 * 365)), "\u5E74\u524D");
        }
      } else {
        tips = timeFormat(timestamp, format);
      }}

  return tips;
}

/**
   * @description 去除空格
   * @param String str 需要去除空格的字符串
   * @param String pos both(左右)|left|right|all 默认both
   */
function trim(str) {var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'both';
  str = String(str);
  if (pos == 'both') {
    return str.replace(/^\s+|\s+$/g, '');
  }
  if (pos == 'left') {
    return str.replace(/^\s*/, '');
  }
  if (pos == 'right') {
    return str.replace(/(\s*$)/g, '');
  }
  if (pos == 'all') {
    return str.replace(/\s+/g, '');
  }
  return str;
}

/**
   * @description 对象转url参数
   * @param {object} data,对象
   * @param {Boolean} isPrefix,是否自动加上"?"
   * @param {string} arrayFormat 规则 indices|brackets|repeat|comma
   */
function queryParams() {var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var isPrefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;var arrayFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'brackets';
  var prefix = isPrefix ? '?' : '';
  var _result = [];
  if (['indices', 'brackets', 'repeat', 'comma'].indexOf(arrayFormat) == -1) arrayFormat = 'brackets';var _loop = function _loop(
  key) {
    var value = data[key];
    // 去掉为空的参数
    if (['', undefined, null].indexOf(value) >= 0) {
      return "continue";
    }
    // 如果值为数组，另行处理
    if (value.constructor === Array) {
      // e.g. {ids: [1, 2, 3]}
      switch (arrayFormat) {
        case 'indices':
          // 结果: ids[0]=1&ids[1]=2&ids[2]=3
          for (var i = 0; i < value.length; i++) {
            _result.push("".concat(key, "[").concat(i, "]=").concat(value[i]));
          }
          break;
        case 'brackets':
          // 结果: ids[]=1&ids[]=2&ids[]=3
          value.forEach(function (_value) {
            _result.push("".concat(key, "[]=").concat(_value));
          });
          break;
        case 'repeat':
          // 结果: ids=1&ids=2&ids=3
          value.forEach(function (_value) {
            _result.push("".concat(key, "=").concat(_value));
          });
          break;
        case 'comma':
          // 结果: ids=1,2,3
          var commaStr = '';
          value.forEach(function (_value) {
            commaStr += (commaStr ? ',' : '') + _value;
          });
          _result.push("".concat(key, "=").concat(commaStr));
          break;
        default:
          value.forEach(function (_value) {
            _result.push("".concat(key, "[]=").concat(_value));
          });}

    } else {
      _result.push("".concat(key, "=").concat(value));
    }};for (var key in data) {var _ret = _loop(key);if (_ret === "continue") continue;
  }
  return _result.length ? prefix + _result.join('&') : '';
}

/**
   * 显示消息提示框
   * @param {String} title 提示的内容，长度与 icon 取值有关。
   * @param {Number} duration 提示的延迟时间，单位毫秒，默认：2000
   */
function toast(title) {var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  uni.showToast({
    title: String(title),
    icon: 'none',
    duration: duration });

}

/**
   * @description 根据主题type值,获取对应的图标
   * @param {String} type 主题名称,primary|info|error|warning|success
   * @param {boolean} fill 是否使用fill填充实体的图标
   */
function type2icon() {var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'success';var fill = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  // 如果非预置值,默认为success
  if (['primary', 'info', 'error', 'warning', 'success'].indexOf(type) == -1) type = 'success';
  var iconName = '';
  // 目前(2019-12-12),info和primary使用同一个图标
  switch (type) {
    case 'primary':
      iconName = 'info-circle';
      break;
    case 'info':
      iconName = 'info-circle';
      break;
    case 'error':
      iconName = 'close-circle';
      break;
    case 'warning':
      iconName = 'error-circle';
      break;
    case 'success':
      iconName = 'checkmark-circle';
      break;
    default:
      iconName = 'checkmark-circle';}

  // 是否是实体类型,加上-fill,在icon组件库中,实体的类名是后面加-fill的
  if (fill) iconName += '-fill';
  return iconName;
}

/**
   * @description 数字格式化
   * @param {number|string} number 要格式化的数字
   * @param {number} decimals 保留几位小数
   * @param {string} decimalPoint 小数点符号
   * @param {string} thousandsSeparator 千分位符号
   * @returns {string} 格式化后的数字
   */
function priceFormat(number) {var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;var decimalPoint = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.';var thousandsSeparator = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : ',';
  number = "".concat(number).replace(/[^0-9+-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number;
  var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  var sep = typeof thousandsSeparator === 'undefined' ? ',' : thousandsSeparator;
  var dec = typeof decimalPoint === 'undefined' ? '.' : decimalPoint;
  var s = '';

  s = (prec ? (0, _digit.round)(n, prec) + '' : "".concat(Math.round(n))).split('.');
  var re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, "$1".concat(sep, "$2"));
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

/**
   * @description 获取duration值
   * 如果带有ms或者s直接返回，如果大于一定值，认为是ms单位，小于一定值，认为是s单位
   * 比如以30位阈值，那么300大于30，可以理解为用户想要的是300ms，而不是想花300s去执行一个动画
   * @param {String|number} value 比如: "1s"|"100ms"|1|100
   * @param {boolean} unit  提示: 如果是false 默认返回number
   * @return {string|number} 
   */
function getDuration(value) {var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var valueNum = parseInt(value);
  if (unit) {
    if (/s$/.test(value)) return value;
    return value > 30 ? "".concat(value, "ms") : "".concat(value, "s");
  }
  if (/ms$/.test(value)) return valueNum;
  if (/s$/.test(value)) return valueNum > 30 ? valueNum : valueNum * 1000;
  return valueNum;
}

/**
   * @description 日期的月或日补零操作
   * @param {String} value 需要补零的值
   */
function padZero(value) {
  return "00".concat(value).slice(-2);
}

/**
   * @description 在u-form的子组件内容发生变化，或者失去焦点时，尝试通知u-form执行校验方法
   * @param {*} instance
   * @param {*} event
   */
function formValidate(instance, event) {
  var formItem = uni.$u.$parent.call(instance, 'u-form-item');
  var form = uni.$u.$parent.call(instance, 'u-form');
  // 如果发生变化的input或者textarea等，其父组件中有u-form-item或者u-form等，就执行form的validate方法
  // 同时将form-item的pros传递给form，让其进行精确对象验证
  if (formItem && form) {
    form.validateField(formItem.prop, function () {}, event);
  }
}

/**
   * @description 获取某个对象下的属性，用于通过类似'a.b.c'的形式去获取一个对象的的属性的形式
   * @param {object} obj 对象
   * @param {string} key 需要获取的属性字段
   * @returns {*}
   */
function getProperty(obj, key) {
  if (!obj) {
    return;
  }
  if (typeof key !== 'string' || key === '') {
    return '';
  }
  if (key.indexOf('.') !== -1) {
    var keys = key.split('.');
    var firstObj = obj[keys[0]] || {};

    for (var i = 1; i < keys.length; i++) {
      if (firstObj) {
        firstObj = firstObj[keys[i]];
      }
    }
    return firstObj;
  }
  return obj[key];
}

/**
   * @description 设置对象的属性值，如果'a.b.c'的形式进行设置
   * @param {object} obj 对象
   * @param {string} key 需要设置的属性
   * @param {string} value 设置的值
   */
function setProperty(obj, key, value) {
  if (!obj) {
    return;
  }
  // 递归赋值
  var inFn = function inFn(_obj, keys, v) {
    // 最后一个属性key
    if (keys.length === 1) {
      _obj[keys[0]] = v;
      return;
    }
    // 0~length-1个key
    while (keys.length > 1) {
      var k = keys[0];
      if (!_obj[k] || typeof _obj[k] !== 'object') {
        _obj[k] = {};
      }
      var _key = keys.shift();
      // 自调用判断是否存在属性，不存在则自动创建对象
      inFn(_obj[k], keys, v);
    }
  };

  if (typeof key !== 'string' || key === '') {

  } else if (key.indexOf('.') !== -1) {// 支持多层级赋值操作
    var keys = key.split('.');
    inFn(obj, keys, value);
  } else {
    obj[key] = value;
  }
}

/**
   * @description 获取当前页面路径
   */
function page() {var _pages$route, _pages;
  var pages = getCurrentPages();
  // 某些特殊情况下(比如页面进行redirectTo时的一些时机)，pages可能为空数组
  return "/".concat((_pages$route = (_pages = pages[pages.length - 1]) === null || _pages === void 0 ? void 0 : _pages.route) !== null && _pages$route !== void 0 ? _pages$route : '');
}

/**
   * @description 获取当前路由栈实例数组
   */
function pages() {
  var pages = getCurrentPages();
  return pages;
}

/**
   * @description 修改uView内置属性值
   * @param {object} props 修改内置props属性
   * @param {object} config 修改内置config属性
   * @param {object} color 修改内置color属性
   * @param {object} zIndex 修改内置zIndex属性
   */
function setConfig(_ref3)




{var _ref3$props = _ref3.props,props = _ref3$props === void 0 ? {} : _ref3$props,_ref3$config = _ref3.config,config = _ref3$config === void 0 ? {} : _ref3$config,_ref3$color = _ref3.color,color = _ref3$color === void 0 ? {} : _ref3$color,_ref3$zIndex = _ref3.zIndex,zIndex = _ref3$zIndex === void 0 ? {} : _ref3$zIndex;var

  deepMerge =
  uni.$u.deepMerge;
  uni.$u.config = deepMerge(uni.$u.config, config);
  uni.$u.props = deepMerge(uni.$u.props, props);
  uni.$u.color = deepMerge(uni.$u.color, color);
  uni.$u.zIndex = deepMerge(uni.$u.zIndex, zIndex);
}var _default =

{
  range: range,
  getPx: getPx,
  sleep: sleep,
  os: os,
  sys: sys,
  random: random,
  guid: guid,
  $parent: $parent,
  addStyle: addStyle,
  addUnit: addUnit,
  deepClone: deepClone,
  deepMerge: deepMerge,
  error: error,
  randomArray: randomArray,
  timeFormat: timeFormat,
  timeFrom: timeFrom,
  trim: trim,
  queryParams: queryParams,
  toast: toast,
  type2icon: type2icon,
  priceFormat: priceFormat,
  getDuration: getDuration,
  padZero: padZero,
  formValidate: formValidate,
  getProperty: getProperty,
  setProperty: setProperty,
  page: page,
  pages: pages,
  setConfig: setConfig };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 42 */
/*!**********************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/function/digit.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.times = times;exports.plus = plus;exports.minus = minus;exports.divide = divide;exports.round = round;exports.enableBoundaryChecking = enableBoundaryChecking;exports.default = void 0;function _toArray(arr) {return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}var _boundaryCheckingState = true; // 是否进行越界检查的全局开关

/**
 * 把错误的数据转正
 * @private
 * @example strip(0.09999999999999998)=0.1
 */
function strip(num) {var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 15;
  return +parseFloat(Number(num).toPrecision(precision));
}

/**
   * Return digits length of a number
   * @private
   * @param {*number} num Input number
   */
function digitLength(num) {
  // Get digit length of e
  var eSplit = num.toString().split(/[eE]/);
  var len = (eSplit[0].split('.')[1] || '').length - +(eSplit[1] || 0);
  return len > 0 ? len : 0;
}

/**
   * 把小数转成整数,如果是小数则放大成整数
   * @private
   * @param {*number} num 输入数
   */
function float2Fixed(num) {
  if (num.toString().indexOf('e') === -1) {
    return Number(num.toString().replace('.', ''));
  }
  var dLen = digitLength(num);
  return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
}

/**
   * 检测数字是否越界，如果越界给出提示
   * @private
   * @param {*number} num 输入数
   */
function checkBoundary(num) {
  if (_boundaryCheckingState) {
    if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
      console.warn("".concat(num, " \u8D85\u51FA\u4E86\u7CBE\u5EA6\u9650\u5236\uFF0C\u7ED3\u679C\u53EF\u80FD\u4E0D\u6B63\u786E"));
    }
  }
}

/**
   * 把递归操作扁平迭代化
   * @param {number[]} arr 要操作的数字数组
   * @param {function} operation 迭代操作
   * @private
   */
function iteratorOperation(arr, operation) {var _arr = _toArray(
  arr),num1 = _arr[0],num2 = _arr[1],others = _arr.slice(2);
  var res = operation(num1, num2);

  others.forEach(function (num) {
    res = operation(res, num);
  });

  return res;
}

/**
   * 高精度乘法
   * @export
   */
function times() {for (var _len = arguments.length, nums = new Array(_len), _key = 0; _key < _len; _key++) {nums[_key] = arguments[_key];}
  if (nums.length > 2) {
    return iteratorOperation(nums, times);
  }var

  num1 = nums[0],num2 = nums[1];
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  var baseNum = digitLength(num1) + digitLength(num2);
  var leftValue = num1Changed * num2Changed;

  checkBoundary(leftValue);

  return leftValue / Math.pow(10, baseNum);
}

/**
   * 高精度加法
   * @export
   */
function plus() {for (var _len2 = arguments.length, nums = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {nums[_key2] = arguments[_key2];}
  if (nums.length > 2) {
    return iteratorOperation(nums, plus);
  }var

  num1 = nums[0],num2 = nums[1];
  // 取最大的小数位
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  // 把小数都转为整数然后再计算
  return (times(num1, baseNum) + times(num2, baseNum)) / baseNum;
}

/**
   * 高精度减法
   * @export
   */
function minus() {for (var _len3 = arguments.length, nums = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {nums[_key3] = arguments[_key3];}
  if (nums.length > 2) {
    return iteratorOperation(nums, minus);
  }var

  num1 = nums[0],num2 = nums[1];
  var baseNum = Math.pow(10, Math.max(digitLength(num1), digitLength(num2)));
  return (times(num1, baseNum) - times(num2, baseNum)) / baseNum;
}

/**
   * 高精度除法
   * @export
   */
function divide() {for (var _len4 = arguments.length, nums = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {nums[_key4] = arguments[_key4];}
  if (nums.length > 2) {
    return iteratorOperation(nums, divide);
  }var

  num1 = nums[0],num2 = nums[1];
  var num1Changed = float2Fixed(num1);
  var num2Changed = float2Fixed(num2);
  checkBoundary(num1Changed);
  checkBoundary(num2Changed);
  // 重要，这里必须用strip进行修正
  return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
}

/**
   * 四舍五入
   * @export
   */
function round(num, ratio) {
  var base = Math.pow(10, ratio);
  var result = divide(Math.round(Math.abs(times(num, base))), base);
  if (num < 0 && result !== 0) {
    result = times(result, -1);
  }
  // 位数不足则补0
  return result;
}

/**
   * 是否进行边界检查，默认开启
   * @param flag 标记开关，true 为开启，false 为关闭，默认为 true
   * @export
   */
function enableBoundaryChecking() {var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  _boundaryCheckingState = flag;
}var _default =


{
  times: times,
  plus: plus,
  minus: minus,
  divide: divide,
  round: round,
  enableBoundaryChecking: enableBoundaryChecking };exports.default = _default;

/***/ }),
/* 43 */
/*!*********************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/config.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 此版本发布于2022-06-17
var version = '2.0.33';

// 开发环境才提示，生产环境不会提示
if (true) {
  console.log("\n %c uView V".concat(version, " %c https://www.uviewui.com/ \n\n"), 'color: #ffffff; background: #3c9cff; padding:5px 0;', 'color: #3c9cff;background: #ffffff; padding:5px 0;');
}var _default =

{
  v: version,
  version: version,
  // 主题名称
  type: [
  'primary',
  'success',
  'info',
  'error',
  'warning'],

  // 颜色部分，本来可以通过scss的:export导出供js使用，但是奈何nvue不支持
  color: {
    'u-primary': '#2979ff',
    'u-warning': '#ff9900',
    'u-success': '#19be6b',
    'u-error': '#fa3534',
    'u-info': '#909399',
    'u-main-color': '#303133',
    'u-content-color': '#606266',
    'u-tips-color': '#909399',
    'u-light-color': '#c0c4cc' },

  // 默认单位，可以通过配置为rpx，那么在用于传入组件大小参数为数值时，就默认为rpx
  unit: 'px' };exports.default = _default;

/***/ }),
/* 44 */
/*!********************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;




var _config = _interopRequireDefault(__webpack_require__(/*! ./config */ 43));

var _actionSheet = _interopRequireDefault(__webpack_require__(/*! ./props/actionSheet.js */ 45));
var _album = _interopRequireDefault(__webpack_require__(/*! ./props/album.js */ 46));
var _alert = _interopRequireDefault(__webpack_require__(/*! ./props/alert.js */ 47));
var _avatar = _interopRequireDefault(__webpack_require__(/*! ./props/avatar */ 48));
var _avatarGroup = _interopRequireDefault(__webpack_require__(/*! ./props/avatarGroup */ 49));
var _backtop = _interopRequireDefault(__webpack_require__(/*! ./props/backtop */ 50));
var _badge = _interopRequireDefault(__webpack_require__(/*! ./props/badge */ 51));
var _button = _interopRequireDefault(__webpack_require__(/*! ./props/button */ 52));
var _calendar = _interopRequireDefault(__webpack_require__(/*! ./props/calendar */ 53));
var _carKeyboard = _interopRequireDefault(__webpack_require__(/*! ./props/carKeyboard */ 54));
var _cell = _interopRequireDefault(__webpack_require__(/*! ./props/cell */ 55));
var _cellGroup = _interopRequireDefault(__webpack_require__(/*! ./props/cellGroup */ 56));
var _checkbox = _interopRequireDefault(__webpack_require__(/*! ./props/checkbox */ 57));
var _checkboxGroup = _interopRequireDefault(__webpack_require__(/*! ./props/checkboxGroup */ 58));
var _circleProgress = _interopRequireDefault(__webpack_require__(/*! ./props/circleProgress */ 59));
var _code = _interopRequireDefault(__webpack_require__(/*! ./props/code */ 60));
var _codeInput = _interopRequireDefault(__webpack_require__(/*! ./props/codeInput */ 61));
var _col = _interopRequireDefault(__webpack_require__(/*! ./props/col */ 62));
var _collapse = _interopRequireDefault(__webpack_require__(/*! ./props/collapse */ 63));
var _collapseItem = _interopRequireDefault(__webpack_require__(/*! ./props/collapseItem */ 64));
var _columnNotice = _interopRequireDefault(__webpack_require__(/*! ./props/columnNotice */ 65));
var _countDown = _interopRequireDefault(__webpack_require__(/*! ./props/countDown */ 66));
var _countTo = _interopRequireDefault(__webpack_require__(/*! ./props/countTo */ 67));
var _datetimePicker = _interopRequireDefault(__webpack_require__(/*! ./props/datetimePicker */ 68));
var _divider = _interopRequireDefault(__webpack_require__(/*! ./props/divider */ 69));
var _empty = _interopRequireDefault(__webpack_require__(/*! ./props/empty */ 70));
var _form = _interopRequireDefault(__webpack_require__(/*! ./props/form */ 71));
var _formItem = _interopRequireDefault(__webpack_require__(/*! ./props/formItem */ 72));
var _gap = _interopRequireDefault(__webpack_require__(/*! ./props/gap */ 73));
var _grid = _interopRequireDefault(__webpack_require__(/*! ./props/grid */ 74));
var _gridItem = _interopRequireDefault(__webpack_require__(/*! ./props/gridItem */ 75));
var _icon = _interopRequireDefault(__webpack_require__(/*! ./props/icon */ 76));
var _image = _interopRequireDefault(__webpack_require__(/*! ./props/image */ 77));
var _indexAnchor = _interopRequireDefault(__webpack_require__(/*! ./props/indexAnchor */ 78));
var _indexList = _interopRequireDefault(__webpack_require__(/*! ./props/indexList */ 79));
var _input = _interopRequireDefault(__webpack_require__(/*! ./props/input */ 80));
var _keyboard = _interopRequireDefault(__webpack_require__(/*! ./props/keyboard */ 81));
var _line = _interopRequireDefault(__webpack_require__(/*! ./props/line */ 82));
var _lineProgress = _interopRequireDefault(__webpack_require__(/*! ./props/lineProgress */ 83));
var _link = _interopRequireDefault(__webpack_require__(/*! ./props/link */ 84));
var _list = _interopRequireDefault(__webpack_require__(/*! ./props/list */ 85));
var _listItem = _interopRequireDefault(__webpack_require__(/*! ./props/listItem */ 86));
var _loadingIcon = _interopRequireDefault(__webpack_require__(/*! ./props/loadingIcon */ 87));
var _loadingPage = _interopRequireDefault(__webpack_require__(/*! ./props/loadingPage */ 88));
var _loadmore = _interopRequireDefault(__webpack_require__(/*! ./props/loadmore */ 89));
var _modal = _interopRequireDefault(__webpack_require__(/*! ./props/modal */ 90));
var _navbar = _interopRequireDefault(__webpack_require__(/*! ./props/navbar */ 91));
var _noNetwork = _interopRequireDefault(__webpack_require__(/*! ./props/noNetwork */ 93));
var _noticeBar = _interopRequireDefault(__webpack_require__(/*! ./props/noticeBar */ 94));
var _notify = _interopRequireDefault(__webpack_require__(/*! ./props/notify */ 95));
var _numberBox = _interopRequireDefault(__webpack_require__(/*! ./props/numberBox */ 96));
var _numberKeyboard = _interopRequireDefault(__webpack_require__(/*! ./props/numberKeyboard */ 97));
var _overlay = _interopRequireDefault(__webpack_require__(/*! ./props/overlay */ 98));
var _parse = _interopRequireDefault(__webpack_require__(/*! ./props/parse */ 99));
var _picker = _interopRequireDefault(__webpack_require__(/*! ./props/picker */ 100));
var _popup = _interopRequireDefault(__webpack_require__(/*! ./props/popup */ 101));
var _radio = _interopRequireDefault(__webpack_require__(/*! ./props/radio */ 102));
var _radioGroup = _interopRequireDefault(__webpack_require__(/*! ./props/radioGroup */ 103));
var _rate = _interopRequireDefault(__webpack_require__(/*! ./props/rate */ 104));
var _readMore = _interopRequireDefault(__webpack_require__(/*! ./props/readMore */ 105));
var _row = _interopRequireDefault(__webpack_require__(/*! ./props/row */ 106));
var _rowNotice = _interopRequireDefault(__webpack_require__(/*! ./props/rowNotice */ 107));
var _scrollList = _interopRequireDefault(__webpack_require__(/*! ./props/scrollList */ 108));
var _search = _interopRequireDefault(__webpack_require__(/*! ./props/search */ 109));
var _section = _interopRequireDefault(__webpack_require__(/*! ./props/section */ 110));
var _skeleton = _interopRequireDefault(__webpack_require__(/*! ./props/skeleton */ 111));
var _slider = _interopRequireDefault(__webpack_require__(/*! ./props/slider */ 112));
var _statusBar = _interopRequireDefault(__webpack_require__(/*! ./props/statusBar */ 113));
var _steps = _interopRequireDefault(__webpack_require__(/*! ./props/steps */ 114));
var _stepsItem = _interopRequireDefault(__webpack_require__(/*! ./props/stepsItem */ 115));
var _sticky = _interopRequireDefault(__webpack_require__(/*! ./props/sticky */ 116));
var _subsection = _interopRequireDefault(__webpack_require__(/*! ./props/subsection */ 117));
var _swipeAction = _interopRequireDefault(__webpack_require__(/*! ./props/swipeAction */ 118));
var _swipeActionItem = _interopRequireDefault(__webpack_require__(/*! ./props/swipeActionItem */ 119));
var _swiper = _interopRequireDefault(__webpack_require__(/*! ./props/swiper */ 120));
var _swipterIndicator = _interopRequireDefault(__webpack_require__(/*! ./props/swipterIndicator */ 121));
var _switch2 = _interopRequireDefault(__webpack_require__(/*! ./props/switch */ 122));
var _tabbar = _interopRequireDefault(__webpack_require__(/*! ./props/tabbar */ 123));
var _tabbarItem = _interopRequireDefault(__webpack_require__(/*! ./props/tabbarItem */ 124));
var _tabs = _interopRequireDefault(__webpack_require__(/*! ./props/tabs */ 125));
var _tag = _interopRequireDefault(__webpack_require__(/*! ./props/tag */ 126));
var _text = _interopRequireDefault(__webpack_require__(/*! ./props/text */ 127));
var _textarea = _interopRequireDefault(__webpack_require__(/*! ./props/textarea */ 128));
var _toast = _interopRequireDefault(__webpack_require__(/*! ./props/toast */ 129));
var _toolbar = _interopRequireDefault(__webpack_require__(/*! ./props/toolbar */ 130));
var _tooltip = _interopRequireDefault(__webpack_require__(/*! ./props/tooltip */ 131));
var _transition = _interopRequireDefault(__webpack_require__(/*! ./props/transition */ 132));
var _upload = _interopRequireDefault(__webpack_require__(/*! ./props/upload */ 133));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var


color =
_config.default.color;var _default = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({},


_actionSheet.default),
_album.default),
_alert.default),
_avatar.default),
_avatarGroup.default),
_backtop.default),
_badge.default),
_button.default),
_calendar.default),
_carKeyboard.default),
_cell.default),
_cellGroup.default),
_checkbox.default),
_checkboxGroup.default),
_circleProgress.default),
_code.default),
_codeInput.default),
_col.default),
_collapse.default),
_collapseItem.default),
_columnNotice.default),
_countDown.default),
_countTo.default),
_datetimePicker.default),
_divider.default),
_empty.default),
_form.default),
_formItem.default),
_gap.default),
_grid.default),
_gridItem.default),
_icon.default),
_image.default),
_indexAnchor.default),
_indexList.default),
_input.default),
_keyboard.default),
_line.default),
_lineProgress.default),
_link.default),
_list.default),
_listItem.default),
_loadingIcon.default),
_loadingPage.default),
_loadmore.default),
_modal.default),
_navbar.default),
_noNetwork.default),
_noticeBar.default),
_notify.default),
_numberBox.default),
_numberKeyboard.default),
_overlay.default),
_parse.default),
_picker.default),
_popup.default),
_radio.default),
_radioGroup.default),
_rate.default),
_readMore.default),
_row.default),
_rowNotice.default),
_scrollList.default),
_search.default),
_section.default),
_skeleton.default),
_slider.default),
_statusBar.default),
_steps.default),
_stepsItem.default),
_sticky.default),
_subsection.default),
_swipeAction.default),
_swipeActionItem.default),
_swiper.default),
_swipterIndicator.default),
_switch2.default),
_tabbar.default),
_tabbarItem.default),
_tabs.default),
_tag.default),
_text.default),
_textarea.default),
_toast.default),
_toolbar.default),
_tooltip.default),
_transition.default),
_upload.default);exports.default = _default;

/***/ }),
/* 45 */
/*!********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/actionSheet.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:44:35
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/actionSheet.js
                                                                                                      */var _default =
{
  // action-sheet组件
  actionSheet: {
    show: false,
    title: '',
    description: '',
    actions: function actions() {return [];},
    index: '',
    cancelText: '',
    closeOnClickAction: true,
    safeAreaInsetBottom: true,
    openType: '',
    closeOnClickOverlay: true,
    round: 0 } };exports.default = _default;

/***/ }),
/* 46 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/album.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:47:24
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/album.js
                                                                                                      */var _default =
{
  // album 组件
  album: {
    urls: function urls() {return [];},
    keyName: '',
    singleSize: 180,
    multipleSize: 70,
    space: 6,
    singleMode: 'scaleToFill',
    multipleMode: 'aspectFill',
    maxCount: 9,
    previewFullImage: true,
    rowCount: 3,
    showMore: true } };exports.default = _default;

/***/ }),
/* 47 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/alert.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:48:53
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/alert.js
                                                                                                      */var _default =
{
  // alert警告组件
  alert: {
    title: '',
    type: 'warning',
    description: '',
    closable: false,
    showIcon: false,
    effect: 'light',
    center: false,
    fontSize: 14 } };exports.default = _default;

/***/ }),
/* 48 */
/*!***************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/avatar.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:49:22
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/avatar.js
                                                                                                      */var _default =
{
  // avatar 组件
  avatar: {
    src: '',
    shape: 'circle',
    size: 40,
    mode: 'scaleToFill',
    text: '',
    bgColor: '#c0c4cc',
    color: '#ffffff',
    fontSize: 18,
    icon: '',
    mpAvatar: false,
    randomBgColor: false,
    defaultUrl: '',
    colorIndex: '',
    name: '' } };exports.default = _default;

/***/ }),
/* 49 */
/*!********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/avatarGroup.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:49:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/avatarGroup.js
                                                                                                      */var _default =
{
  // avatarGroup 组件
  avatarGroup: {
    urls: function urls() {return [];},
    maxCount: 5,
    shape: 'circle',
    mode: 'scaleToFill',
    showMore: true,
    size: 40,
    keyName: '',
    gap: 0.5,
    extraValue: 0 } };exports.default = _default;

/***/ }),
/* 50 */
/*!****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/backtop.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:50:18
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/backtop.js
                                                                                                      */var _default =
{
  // backtop组件
  backtop: {
    mode: 'circle',
    icon: 'arrow-upward',
    text: '',
    duration: 100,
    scrollTop: 0,
    top: 400,
    bottom: 100,
    right: 20,
    zIndex: 9,
    iconStyle: function iconStyle() {return {
        color: '#909399',
        fontSize: '19px' };} } };exports.default = _default;

/***/ }),
/* 51 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/badge.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-23 19:51:50
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/badge.js
                                                                                                      */var _default =
{
  // 徽标数组件
  badge: {
    isDot: false,
    value: '',
    show: true,
    max: 999,
    type: 'error',
    showZero: false,
    bgColor: null,
    color: null,
    shape: 'circle',
    numberType: 'overflow',
    offset: function offset() {return [];},
    inverted: false,
    absolute: false } };exports.default = _default;

/***/ }),
/* 52 */
/*!***************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/button.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:51:27
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/button.js
                                                                                                      */var _default =
{
  // button组件
  button: {
    hairline: false,
    type: 'info',
    size: 'normal',
    shape: 'square',
    plain: false,
    disabled: false,
    loading: false,
    loadingText: '',
    loadingMode: 'spinner',
    loadingSize: 15,
    openType: '',
    formType: '',
    appParameter: '',
    hoverStopPropagation: true,
    lang: 'en',
    sessionFrom: '',
    sendMessageTitle: '',
    sendMessagePath: '',
    sendMessageImg: '',
    showMessageCard: false,
    dataName: '',
    throttleTime: 0,
    hoverStartTime: 0,
    hoverStayTime: 200,
    text: '',
    icon: '',
    iconColor: '',
    color: '' } };exports.default = _default;

/***/ }),
/* 53 */
/*!*****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/calendar.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:52:43
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/calendar.js
                                                                                                      */var _default =
{
  // calendar 组件
  calendar: {
    title: '日期选择',
    showTitle: true,
    showSubtitle: true,
    mode: 'single',
    startText: '开始',
    endText: '结束',
    customList: function customList() {return [];},
    color: '#3c9cff',
    minDate: 0,
    maxDate: 0,
    defaultDate: null,
    maxCount: Number.MAX_SAFE_INTEGER, // Infinity
    rowHeight: 56,
    formatter: null,
    showLunar: false,
    showMark: true,
    confirmText: '确定',
    confirmDisabledText: '确定',
    show: false,
    closeOnClickOverlay: false,
    readonly: false,
    showConfirm: true,
    maxRange: Number.MAX_SAFE_INTEGER, // Infinity
    rangePrompt: '',
    showRangePrompt: true,
    allowSameDay: false,
    round: 0,
    monthNum: 3 } };exports.default = _default;

/***/ }),
/* 54 */
/*!********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/carKeyboard.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:53:20
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/carKeyboard.js
                                                                                                      */var _default =
{
  // 车牌号键盘
  carKeyboard: {
    random: false } };exports.default = _default;

/***/ }),
/* 55 */
/*!*************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/cell.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-23 20:53:09
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/cell.js
                                                                                                      */var _default =
{
  // cell组件的props
  cell: {
    customClass: '',
    title: '',
    label: '',
    value: '',
    icon: '',
    disabled: false,
    border: true,
    center: false,
    url: '',
    linkType: 'navigateTo',
    clickable: false,
    isLink: false,
    required: false,
    arrowDirection: '',
    iconStyle: {},
    rightIconStyle: {},
    rightIcon: 'arrow-right',
    titleStyle: {},
    size: '',
    stop: true,
    name: '' } };exports.default = _default;

/***/ }),
/* 56 */
/*!******************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/cellGroup.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:54:16
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/cellGroup.js
                                                                                                      */var _default =
{
  // cell-group组件的props
  cellGroup: {
    title: '',
    border: true,
    customStyle: {} } };exports.default = _default;

/***/ }),
/* 57 */
/*!*****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/checkbox.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-23 21:06:59
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/checkbox.js
                                                                                                      */var _default =
{
  // checkbox组件
  checkbox: {
    name: '',
    shape: '',
    size: '',
    checkbox: false,
    disabled: '',
    activeColor: '',
    inactiveColor: '',
    iconSize: '',
    iconColor: '',
    label: '',
    labelSize: '',
    labelColor: '',
    labelDisabled: '' } };exports.default = _default;

/***/ }),
/* 58 */
/*!**********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/checkboxGroup.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:54:47
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/checkboxGroup.js
                                                                                                      */var _default =
{
  // checkbox-group组件
  checkboxGroup: {
    name: '',
    value: function value() {return [];},
    shape: 'square',
    disabled: false,
    activeColor: '#2979ff',
    inactiveColor: '#c8c9cc',
    size: 18,
    placement: 'row',
    labelSize: 14,
    labelColor: '#303133',
    labelDisabled: false,
    iconColor: '#ffffff',
    iconSize: 12,
    iconPlacement: 'left',
    borderBottom: false } };exports.default = _default;

/***/ }),
/* 59 */
/*!***********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/circleProgress.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:55:02
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/circleProgress.js
                                                                                                      */var _default =
{
  // circleProgress 组件
  circleProgress: {
    percentage: 30 } };exports.default = _default;

/***/ }),
/* 60 */
/*!*************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/code.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:55:27
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/code.js
                                                                                                      */var _default =

{
  // code 组件
  code: {
    seconds: 60,
    startText: '获取验证码',
    changeText: 'X秒重新获取',
    endText: '重新获取',
    keepRunning: false,
    uniqueKey: '' } };exports.default = _default;

/***/ }),
/* 61 */
/*!******************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/codeInput.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:55:58
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/codeInput.js
                                                                                                      */var _default =
{
  // codeInput 组件
  codeInput: {
    adjustPosition: true,
    maxlength: 6,
    dot: false,
    mode: 'box',
    hairline: false,
    space: 10,
    value: '',
    focus: false,
    bold: false,
    color: '#606266',
    fontSize: 18,
    size: 35,
    disabledKeyboard: false,
    borderColor: '#c9cacc',
    disabledDot: true } };exports.default = _default;

/***/ }),
/* 62 */
/*!************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/col.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:56:12
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/col.js
                                                                                                      */var _default =
{
  // col 组件
  col: {
    span: 12,
    offset: 0,
    justify: 'start',
    align: 'stretch',
    textAlign: 'left' } };exports.default = _default;

/***/ }),
/* 63 */
/*!*****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/collapse.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:56:30
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/collapse.js
                                                                                                      */var _default =
{
  // collapse 组件
  collapse: {
    value: null,
    accordion: false,
    border: true } };exports.default = _default;

/***/ }),
/* 64 */
/*!*********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/collapseItem.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:56:42
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/collapseItem.js
                                                                                                      */var _default =
{
  // collapseItem 组件
  collapseItem: {
    title: '',
    value: '',
    label: '',
    disabled: false,
    isLink: true,
    clickable: true,
    border: true,
    align: 'left',
    name: '',
    icon: '',
    duration: 300 } };exports.default = _default;

/***/ }),
/* 65 */
/*!*********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/columnNotice.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:57:16
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/columnNotice.js
                                                                                                      */var _default =
{
  // columnNotice 组件
  columnNotice: {
    text: '',
    icon: 'volume',
    mode: '',
    color: '#f9ae3d',
    bgColor: '#fdf6ec',
    fontSize: 14,
    speed: 80,
    step: false,
    duration: 1500,
    disableTouch: true } };exports.default = _default;

/***/ }),
/* 66 */
/*!******************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/countDown.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:11:29
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/countDown.js
                                                                                                      */var _default =
{
  // u-count-down 计时器组件
  countDown: {
    time: 0,
    format: 'HH:mm:ss',
    autoStart: true,
    millisecond: false } };exports.default = _default;

/***/ }),
/* 67 */
/*!****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/countTo.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:57:32
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/countTo.js
                                                                                                      */var _default =
{
  // countTo 组件
  countTo: {
    startVal: 0,
    endVal: 0,
    duration: 2000,
    autoplay: true,
    decimals: 0,
    useEasing: true,
    decimal: '.',
    color: '#606266',
    fontSize: 22,
    bold: false,
    separator: '' } };exports.default = _default;

/***/ }),
/* 68 */
/*!***********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/datetimePicker.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:57:48
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/datetimePicker.js
                                                                                                      */var _default =
{
  // datetimePicker 组件
  datetimePicker: {
    show: false,
    showToolbar: true,
    value: '',
    title: '',
    mode: 'datetime',
    maxDate: new Date(new Date().getFullYear() + 10, 0, 1).getTime(),
    minDate: new Date(new Date().getFullYear() - 10, 0, 1).getTime(),
    minHour: 0,
    maxHour: 23,
    minMinute: 0,
    maxMinute: 59,
    filter: null,
    formatter: null,
    loading: false,
    itemHeight: 44,
    cancelText: '取消',
    confirmText: '确认',
    cancelColor: '#909193',
    confirmColor: '#3c9cff',
    visibleItemCount: 5,
    closeOnClickOverlay: false,
    defaultIndex: function defaultIndex() {return [];} } };exports.default = _default;

/***/ }),
/* 69 */
/*!****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/divider.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:58:03
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/divider.js
                                                                                                      */var _default =
{
  // divider组件
  divider: {
    dashed: false,
    hairline: true,
    dot: false,
    textPosition: 'center',
    text: '',
    textSize: 14,
    textColor: '#909399',
    lineColor: '#dcdfe6' } };exports.default = _default;

/***/ }),
/* 70 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/empty.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:03:27
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/empty.js
                                                                                                      */var _default =
{
  // empty组件
  empty: {
    icon: '',
    text: '',
    textColor: '#c0c4cc',
    textSize: 14,
    iconColor: '#c0c4cc',
    iconSize: 90,
    mode: 'data',
    width: 160,
    height: 160,
    show: true,
    marginTop: 0 } };exports.default = _default;

/***/ }),
/* 71 */
/*!*************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/form.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:03:49
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/form.js
                                                                                                      */var _default =
{
  // form 组件
  form: {
    model: function model() {return {};},
    rules: function rules() {return {};},
    errorType: 'message',
    borderBottom: true,
    labelPosition: 'left',
    labelWidth: 45,
    labelAlign: 'left',
    labelStyle: function labelStyle() {return {};} } };exports.default = _default;

/***/ }),
/* 72 */
/*!*****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/formItem.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:04:32
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/formItem.js
                                                                                                      */var _default =
{
  // formItem 组件
  formItem: {
    label: '',
    prop: '',
    borderBottom: '',
    labelWidth: '',
    rightIcon: '',
    leftIcon: '',
    required: false,
    leftIconStyle: '' } };exports.default = _default;

/***/ }),
/* 73 */
/*!************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/gap.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:05:25
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/gap.js
                                                                                                      */var _default =
{
  // gap组件
  gap: {
    bgColor: 'transparent',
    height: 20,
    marginTop: 0,
    marginBottom: 0,
    customStyle: {} } };exports.default = _default;

/***/ }),
/* 74 */
/*!*************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/grid.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:05:57
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/grid.js
                                                                                                      */var _default =
{
  // grid组件
  grid: {
    col: 3,
    border: false,
    align: 'left' } };exports.default = _default;

/***/ }),
/* 75 */
/*!*****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/gridItem.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:06:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/gridItem.js
                                                                                                      */var _default =
{
  // grid-item组件
  gridItem: {
    name: null,
    bgColor: 'transparent' } };exports.default = _default;

/***/ }),
/* 76 */
/*!*************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/icon.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _config = _interopRequireDefault(__webpack_require__(/*! ../config */ 43));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                          * @Author       : LQ
                                                                                                                                                          * @Description  :
                                                                                                                                                          * @version      : 1.0
                                                                                                                                                          * @Date         : 2021-08-20 16:44:21
                                                                                                                                                          * @LastAuthor   : LQ
                                                                                                                                                          * @lastTime     : 2021-08-20 18:00:14
                                                                                                                                                          * @FilePath     : /u-view2.0/uview-ui/libs/config/props/icon.js
                                                                                                                                                          */var color = _config.default.color;var _default = { // icon组件
  icon: { name: '', color: color['u-content-color'],
    size: '16px',
    bold: false,
    index: '',
    hoverClass: '',
    customPrefix: 'uicon',
    label: '',
    labelPos: 'right',
    labelSize: '15px',
    labelColor: color['u-content-color'],
    space: '3px',
    imgMode: '',
    width: '',
    height: '',
    top: 0,
    stop: false } };exports.default = _default;

/***/ }),
/* 77 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/image.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:01:51
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/image.js
                                                                                                      */var _default =
{
  // image组件
  image: {
    src: '',
    mode: 'aspectFill',
    width: '300',
    height: '225',
    shape: 'square',
    radius: 0,
    lazyLoad: true,
    showMenuByLongpress: true,
    loadingIcon: 'photo',
    errorIcon: 'error-circle',
    showLoading: true,
    showError: true,
    fade: true,
    webp: false,
    duration: 500,
    bgColor: '#f3f4f6' } };exports.default = _default;

/***/ }),
/* 78 */
/*!********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/indexAnchor.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:13:15
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/indexAnchor.js
                                                                                                      */var _default =
{
  // indexAnchor 组件
  indexAnchor: {
    text: '',
    color: '#606266',
    size: 14,
    bgColor: '#dedede',
    height: 32 } };exports.default = _default;

/***/ }),
/* 79 */
/*!******************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/indexList.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:13:35
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/indexList.js
                                                                                                      */var _default =
{
  // indexList 组件
  indexList: {
    inactiveColor: '#606266',
    activeColor: '#5677fc',
    indexList: function indexList() {return [];},
    sticky: true,
    customNavHeight: 0 } };exports.default = _default;

/***/ }),
/* 80 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/input.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:13:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/input.js
                                                                                                      */var _default =
{
  // index 组件
  input: {
    value: '',
    type: 'text',
    fixed: false,
    disabled: false,
    disabledColor: '#f5f7fa',
    clearable: false,
    password: false,
    maxlength: -1,
    placeholder: null,
    placeholderClass: 'input-placeholder',
    placeholderStyle: 'color: #c0c4cc',
    showWordLimit: false,
    confirmType: 'done',
    confirmHold: false,
    holdKeyboard: false,
    focus: false,
    autoBlur: false,
    disableDefaultPadding: false,
    cursor: -1,
    cursorSpacing: 30,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    inputAlign: 'left',
    fontSize: '15px',
    color: '#303133',
    prefixIcon: '',
    prefixIconStyle: '',
    suffixIcon: '',
    suffixIconStyle: '',
    border: 'surround',
    readonly: false,
    shape: 'square',
    formatter: null } };exports.default = _default;

/***/ }),
/* 81 */
/*!*****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/keyboard.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:07:49
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/keyboard.js
                                                                                                      */var _default =
{
  // 键盘组件
  keyboard: {
    mode: 'number',
    dotDisabled: false,
    tooltip: true,
    showTips: true,
    tips: '',
    showCancel: true,
    showConfirm: true,
    random: false,
    safeAreaInsetBottom: true,
    closeOnClickOverlay: true,
    show: false,
    overlay: true,
    zIndex: 10075,
    cancelText: '取消',
    confirmText: '确定',
    autoChange: false } };exports.default = _default;

/***/ }),
/* 82 */
/*!*************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/line.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:04:49
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/line.js
                                                                                                      */var _default =
{
  // line组件
  line: {
    color: '#d6d7d9',
    length: '100%',
    direction: 'row',
    hairline: true,
    margin: 0,
    dashed: false } };exports.default = _default;

/***/ }),
/* 83 */
/*!*********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/lineProgress.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:14:11
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/lineProgress.js
                                                                                                      */var _default =
{
  // lineProgress 组件
  lineProgress: {
    activeColor: '#19be6b',
    inactiveColor: '#ececec',
    percentage: 0,
    showText: true,
    height: 12 } };exports.default = _default;

/***/ }),
/* 84 */
/*!*************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/link.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _config = _interopRequireDefault(__webpack_require__(/*! ../config */ 43));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                          * @Author       : LQ
                                                                                                                                                          * @Description  :
                                                                                                                                                          * @version      : 1.0
                                                                                                                                                          * @Date         : 2021-08-20 16:44:21
                                                                                                                                                          * @LastAuthor   : LQ
                                                                                                                                                          * @lastTime     : 2021-08-20 17:45:36
                                                                                                                                                          * @FilePath     : /u-view2.0/uview-ui/libs/config/props/link.js
                                                                                                                                                          */var color = _config.default.color;var _default = { // link超链接组件props参数
  link: { color: color['u-primary'], fontSize: 15,
    underLine: false,
    href: '',
    mpTips: '链接已复制，请在浏览器打开',
    lineColor: '',
    text: '' } };exports.default = _default;

/***/ }),
/* 85 */
/*!*************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/list.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:14:53
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/list.js
                                                                                                      */var _default =
{
  // list 组件
  list: {
    showScrollbar: false,
    lowerThreshold: 50,
    upperThreshold: 0,
    scrollTop: 0,
    offsetAccuracy: 10,
    enableFlex: false,
    pagingEnabled: false,
    scrollable: true,
    scrollIntoView: '',
    scrollWithAnimation: false,
    enableBackToTop: false,
    height: 0,
    width: 0,
    preLoadScreen: 1 } };exports.default = _default;

/***/ }),
/* 86 */
/*!*****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/listItem.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:15:40
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/listItem.js
                                                                                                      */var _default =
{
  // listItem 组件
  listItem: {
    anchor: '' } };exports.default = _default;

/***/ }),
/* 87 */
/*!********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/loadingIcon.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _config = _interopRequireDefault(__webpack_require__(/*! ../config */ 43));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                          * @Author       : LQ
                                                                                                                                                          * @Description  :
                                                                                                                                                          * @version      : 1.0
                                                                                                                                                          * @Date         : 2021-08-20 16:44:21
                                                                                                                                                          * @LastAuthor   : LQ
                                                                                                                                                          * @lastTime     : 2021-08-20 17:45:47
                                                                                                                                                          * @FilePath     : /u-view2.0/uview-ui/libs/config/props/loadingIcon.js
                                                                                                                                                          */var color = _config.default.color;var _default = { // loading-icon加载中图标组件
  loadingIcon: { show: true, color: color['u-tips-color'],
    textColor: color['u-tips-color'],
    vertical: false,
    mode: 'spinner',
    size: 24,
    textSize: 15,
    text: '',
    timingFunction: 'ease-in-out',
    duration: 1200,
    inactiveColor: '' } };exports.default = _default;

/***/ }),
/* 88 */
/*!********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/loadingPage.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:00:23
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/loadingPage.js
                                                                                                      */var _default =
{
  // loading-page组件
  loadingPage: {
    loadingText: '正在加载',
    image: '',
    loadingMode: 'circle',
    loading: false,
    bgColor: '#ffffff',
    color: '#C8C8C8',
    fontSize: 19,
    iconSize: 28,
    loadingColor: '#C8C8C8' } };exports.default = _default;

/***/ }),
/* 89 */
/*!*****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/loadmore.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:15:26
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/loadmore.js
                                                                                                      */var _default =
{
  // loadmore 组件
  loadmore: {
    status: 'loadmore',
    bgColor: 'transparent',
    icon: true,
    fontSize: 14,
    iconSize: 17,
    color: '#606266',
    loadingIcon: 'spinner',
    loadmoreText: '加载更多',
    loadingText: '正在加载...',
    nomoreText: '没有更多了',
    isDot: false,
    iconColor: '#b7b7b7',
    marginTop: 10,
    marginBottom: 10,
    height: 'auto',
    line: false,
    lineColor: '#E6E8EB',
    dashed: false } };exports.default = _default;

/***/ }),
/* 90 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/modal.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:15:59
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/modal.js
                                                                                                      */var _default =
{
  // modal 组件
  modal: {
    show: false,
    title: '',
    content: '',
    confirmText: '确认',
    cancelText: '取消',
    showConfirmButton: true,
    showCancelButton: false,
    confirmColor: '#2979ff',
    cancelColor: '#606266',
    buttonReverse: false,
    zoom: true,
    asyncClose: false,
    closeOnClickOverlay: false,
    negativeTop: 0,
    width: '650rpx',
    confirmButtonShape: '' } };exports.default = _default;

/***/ }),
/* 91 */
/*!***************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/navbar.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;








var _color = _interopRequireDefault(__webpack_require__(/*! ../color */ 92));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} /*
                                                                                                                                                        * @Author       : LQ
                                                                                                                                                        * @Description  :
                                                                                                                                                        * @version      : 1.0
                                                                                                                                                        * @Date         : 2021-08-20 16:44:21
                                                                                                                                                        * @LastAuthor   : LQ
                                                                                                                                                        * @lastTime     : 2021-08-20 17:16:18
                                                                                                                                                        * @FilePath     : /u-view2.0/uview-ui/libs/config/props/navbar.js
                                                                                                                                                        */var _default = { // navbar 组件
  navbar: { safeAreaInsetTop: true, placeholder: false, fixed: true, border: false, leftIcon: 'arrow-left', leftText: '',
    rightText: '',
    rightIcon: '',
    title: '',
    bgColor: '#ffffff',
    titleWidth: '400rpx',
    height: '44px',
    leftIconSize: 20,
    leftIconColor: _color.default.mainColor,
    autoBack: false,
    titleStyle: '' } };exports.default = _default;

/***/ }),
/* 92 */
/*!********************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/color.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // 为了让用户能够自定义主题，会逐步弃用此文件，各颜色通过css提供
// 为了给某些特殊场景使用和向后兼容，无需删除此文件(2020-06-20)
var color = {
  primary: '#3c9cff',
  info: '#909399',
  default: '#909399',
  warning: '#f9ae3d',
  error: '#f56c6c',
  success: '#5ac725',
  mainColor: '#303133',
  contentColor: '#606266',
  tipsColor: '#909399',
  lightColor: '#c0c4cc',
  borderColor: '#e4e7ed' };var _default =


color;exports.default = _default;

/***/ }),
/* 93 */
/*!******************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/noNetwork.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:16:39
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/noNetwork.js
                                                                                                      */var _default =
{
  // noNetwork
  noNetwork: {
    tips: '哎呀，网络信号丢失',
    zIndex: '',
    image: 'data:image/png;base64,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' } };exports.default = _default;

/***/ }),
/* 94 */
/*!******************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/noticeBar.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:17:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/noticeBar.js
                                                                                                      */var _default =
{
  // noticeBar
  noticeBar: {
    text: function text() {return [];},
    direction: 'row',
    step: false,
    icon: 'volume',
    mode: '',
    color: '#f9ae3d',
    bgColor: '#fdf6ec',
    speed: 80,
    fontSize: 14,
    duration: 2000,
    disableTouch: true,
    url: '',
    linkType: 'navigateTo' } };exports.default = _default;

/***/ }),
/* 95 */
/*!***************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/notify.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:10:21
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/notify.js
                                                                                                      */var _default =
{
  // notify组件
  notify: {
    top: 0,
    type: 'primary',
    color: '#ffffff',
    bgColor: '',
    message: '',
    duration: 3000,
    fontSize: 15,
    safeAreaInsetTop: false } };exports.default = _default;

/***/ }),
/* 96 */
/*!******************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/numberBox.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:11:46
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/numberBox.js
                                                                                                      */var _default =
{
  // 步进器组件
  numberBox: {
    name: '',
    value: 0,
    min: 1,
    max: Number.MAX_SAFE_INTEGER,
    step: 1,
    integer: false,
    disabled: false,
    disabledInput: false,
    asyncChange: false,
    inputWidth: 35,
    showMinus: true,
    showPlus: true,
    decimalLength: null,
    longPress: true,
    color: '#323233',
    buttonSize: 30,
    bgColor: '#EBECEE',
    cursorSpacing: 100,
    disableMinus: false,
    disablePlus: false,
    iconStyle: '' } };exports.default = _default;

/***/ }),
/* 97 */
/*!***********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/numberKeyboard.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:08:05
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/numberKeyboard.js
                                                                                                      */var _default =
{
  // 数字键盘
  numberKeyboard: {
    mode: 'number',
    dotDisabled: false,
    random: false } };exports.default = _default;

/***/ }),
/* 98 */
/*!****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/overlay.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:06:50
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/overlay.js
                                                                                                      */var _default =
{
  // overlay组件
  overlay: {
    show: false,
    zIndex: 10070,
    duration: 300,
    opacity: 0.5 } };exports.default = _default;

/***/ }),
/* 99 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/parse.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:17:33
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/parse.js
                                                                                                      */var _default =
{
  // parse
  parse: {
    copyLink: true,
    errorImg: '',
    lazyLoad: false,
    loadingImg: '',
    pauseVideo: true,
    previewImg: true,
    setTitle: true,
    showImgMenu: true } };exports.default = _default;

/***/ }),
/* 100 */
/*!***************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/picker.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:18:20
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/picker.js
                                                                                                      */var _default =
{
  // picker
  picker: {
    show: false,
    showToolbar: true,
    title: '',
    columns: function columns() {return [];},
    loading: false,
    itemHeight: 44,
    cancelText: '取消',
    confirmText: '确定',
    cancelColor: '#909193',
    confirmColor: '#3c9cff',
    visibleItemCount: 5,
    keyName: 'text',
    closeOnClickOverlay: false,
    defaultIndex: function defaultIndex() {return [];},
    immediateChange: false } };exports.default = _default;

/***/ }),
/* 101 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/popup.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:06:33
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/popup.js
                                                                                                      */var _default =
{
  // popup组件
  popup: {
    show: false,
    overlay: true,
    mode: 'bottom',
    duration: 300,
    closeable: false,
    overlayStyle: function overlayStyle() {},
    closeOnClickOverlay: true,
    zIndex: 10075,
    safeAreaInsetBottom: true,
    safeAreaInsetTop: false,
    closeIconPos: 'top-right',
    round: 0,
    zoom: true,
    bgColor: '',
    overlayOpacity: 0.5 } };exports.default = _default;

/***/ }),
/* 102 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/radio.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:02:34
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/radio.js
                                                                                                      */var _default =
{
  // radio组件
  radio: {
    name: '',
    shape: '',
    disabled: '',
    labelDisabled: '',
    activeColor: '',
    inactiveColor: '',
    iconSize: '',
    labelSize: '',
    label: '',
    labelColor: '',
    size: '',
    iconColor: '',
    placement: '' } };exports.default = _default;

/***/ }),
/* 103 */
/*!*******************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/radioGroup.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:03:12
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/radioGroup.js
                                                                                                      */var _default =
{
  // radio-group组件
  radioGroup: {
    value: '',
    disabled: false,
    shape: 'circle',
    activeColor: '#2979ff',
    inactiveColor: '#c8c9cc',
    name: '',
    size: 18,
    placement: 'row',
    label: '',
    labelColor: '#303133',
    labelSize: 14,
    labelDisabled: false,
    iconColor: '#ffffff',
    iconSize: 12,
    borderBottom: false,
    iconPlacement: 'left' } };exports.default = _default;

/***/ }),
/* 104 */
/*!*************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/rate.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:05:09
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/rate.js
                                                                                                      */var _default =
{
  // rate组件
  rate: {
    value: 1,
    count: 5,
    disabled: false,
    size: 18,
    inactiveColor: '#b2b2b2',
    activeColor: '#FA3534',
    gutter: 4,
    minCount: 1,
    allowHalf: false,
    activeIcon: 'star-fill',
    inactiveIcon: 'star',
    touchable: true } };exports.default = _default;

/***/ }),
/* 105 */
/*!*****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/readMore.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:18:41
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/readMore.js
                                                                                                      */var _default =
{
  // readMore
  readMore: {
    showHeight: 400,
    toggle: false,
    closeText: '展开阅读全文',
    openText: '收起',
    color: '#2979ff',
    fontSize: 14,
    textIndent: '2em',
    name: '' } };exports.default = _default;

/***/ }),
/* 106 */
/*!************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/row.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:18:58
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/row.js
                                                                                                      */var _default =
{
  // row
  row: {
    gutter: 0,
    justify: 'start',
    align: 'center' } };exports.default = _default;

/***/ }),
/* 107 */
/*!******************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/rowNotice.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:19:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/rowNotice.js
                                                                                                      */var _default =
{
  // rowNotice
  rowNotice: {
    text: '',
    icon: 'volume',
    mode: '',
    color: '#f9ae3d',
    bgColor: '#fdf6ec',
    fontSize: 14,
    speed: 80 } };exports.default = _default;

/***/ }),
/* 108 */
/*!*******************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/scrollList.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:19:28
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/scrollList.js
                                                                                                      */var _default =
{
  // scrollList
  scrollList: {
    indicatorWidth: 50,
    indicatorBarWidth: 20,
    indicator: true,
    indicatorColor: '#f2f2f2',
    indicatorActiveColor: '#3c9cff',
    indicatorStyle: '' } };exports.default = _default;

/***/ }),
/* 109 */
/*!***************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/search.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:19:45
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/search.js
                                                                                                      */var _default =
{
  // search
  search: {
    shape: 'round',
    bgColor: '#f2f2f2',
    placeholder: '请输入关键字',
    clearabled: true,
    focus: false,
    showAction: true,
    actionStyle: function actionStyle() {return {};},
    actionText: '搜索',
    inputAlign: 'left',
    inputStyle: function inputStyle() {return {};},
    disabled: false,
    borderColor: 'transparent',
    searchIconColor: '#909399',
    searchIconSize: 22,
    color: '#606266',
    placeholderColor: '#909399',
    searchIcon: 'search',
    margin: '0',
    animation: false,
    value: '',
    maxlength: '-1',
    height: 32,
    label: null } };exports.default = _default;

/***/ }),
/* 110 */
/*!****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/section.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:07:33
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/section.js
                                                                                                      */var _default =
{
  // u-section组件
  section: {
    title: '',
    subTitle: '更多',
    right: true,
    fontSize: 15,
    bold: true,
    color: '#303133',
    subColor: '#909399',
    showLine: true,
    lineColor: '',
    arrow: true } };exports.default = _default;

/***/ }),
/* 111 */
/*!*****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/skeleton.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:20:14
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/skeleton.js
                                                                                                      */var _default =
{
  // skeleton
  skeleton: {
    loading: true,
    animate: true,
    rows: 0,
    rowsWidth: '100%',
    rowsHeight: 18,
    title: true,
    titleWidth: '50%',
    titleHeight: 18,
    avatar: false,
    avatarSize: 32,
    avatarShape: 'circle' } };exports.default = _default;

/***/ }),
/* 112 */
/*!***************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/slider.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:08:25
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/slider.js
                                                                                                      */var _default =
{
  // slider组件
  slider: {
    value: 0,
    blockSize: 18,
    min: 0,
    max: 100,
    step: 1,
    activeColor: '#2979ff',
    inactiveColor: '#c0c4cc',
    blockColor: '#ffffff',
    showValue: false,
    disabled: false,
    blockStyle: function blockStyle() {} } };exports.default = _default;

/***/ }),
/* 113 */
/*!******************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/statusBar.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:20:39
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/statusBar.js
                                                                                                      */var _default =
{
  // statusBar
  statusBar: {
    bgColor: 'transparent' } };exports.default = _default;

/***/ }),
/* 114 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/steps.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:12:37
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/steps.js
                                                                                                      */var _default =
{
  // steps组件
  steps: {
    direction: 'row',
    current: 0,
    activeColor: '#3c9cff',
    inactiveColor: '#969799',
    activeIcon: '',
    inactiveIcon: '',
    dot: false } };exports.default = _default;

/***/ }),
/* 115 */
/*!******************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/stepsItem.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:12:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/stepsItem.js
                                                                                                      */var _default =
{
  // steps-item组件
  stepsItem: {
    title: '',
    desc: '',
    iconSize: 17,
    error: false } };exports.default = _default;

/***/ }),
/* 116 */
/*!***************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/sticky.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:01:30
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/sticky.js
                                                                                                      */var _default =
{
  // sticky组件
  sticky: {
    offsetTop: 0,
    customNavHeight: 0,
    disabled: false,
    bgColor: 'transparent',
    zIndex: '',
    index: '' } };exports.default = _default;

/***/ }),
/* 117 */
/*!*******************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/subsection.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:12:20
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/subsection.js
                                                                                                      */var _default =
{
  // subsection组件
  subsection: {
    list: [],
    current: 0,
    activeColor: '#3c9cff',
    inactiveColor: '#303133',
    mode: 'button',
    fontSize: 12,
    bold: true,
    bgColor: '#eeeeef',
    keyName: 'name' } };exports.default = _default;

/***/ }),
/* 118 */
/*!********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/swipeAction.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:00:42
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swipeAction.js
                                                                                                      */var _default =
{
  // swipe-action组件
  swipeAction: {
    autoClose: true } };exports.default = _default;

/***/ }),
/* 119 */
/*!************************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/swipeActionItem.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:01:13
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swipeActionItem.js
                                                                                                      */var _default =
{
  // swipeActionItem 组件
  swipeActionItem: {
    show: false,
    name: '',
    disabled: false,
    threshold: 20,
    autoClose: true,
    options: [],
    duration: 300 } };exports.default = _default;

/***/ }),
/* 120 */
/*!***************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/swiper.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:21:38
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swiper.js
                                                                                                      */var _default =
{
  // swiper 组件
  swiper: {
    list: function list() {return [];},
    indicator: false,
    indicatorActiveColor: '#FFFFFF',
    indicatorInactiveColor: 'rgba(255, 255, 255, 0.35)',
    indicatorStyle: '',
    indicatorMode: 'line',
    autoplay: true,
    current: 0,
    currentItemId: '',
    interval: 3000,
    duration: 300,
    circular: false,
    previousMargin: 0,
    nextMargin: 0,
    acceleration: false,
    displayMultipleItems: 1,
    easingFunction: 'default',
    keyName: 'url',
    imgMode: 'aspectFill',
    height: 130,
    bgColor: '#f3f4f6',
    radius: 4,
    loading: false,
    showTitle: false } };exports.default = _default;

/***/ }),
/* 121 */
/*!*************************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/swipterIndicator.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:07
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/swiperIndicator.js
                                                                                                      */var _default =
{
  // swiperIndicator 组件
  swiperIndicator: {
    length: 0,
    current: 0,
    indicatorActiveColor: '',
    indicatorInactiveColor: '',
    indicatorMode: 'line' } };exports.default = _default;

/***/ }),
/* 122 */
/*!***************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/switch.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:24
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/switch.js
                                                                                                      */var _default =
{
  // switch
  switch: {
    loading: false,
    disabled: false,
    size: 25,
    activeColor: '#2979ff',
    inactiveColor: '#ffffff',
    value: false,
    activeValue: true,
    inactiveValue: false,
    asyncChange: false,
    space: 0 } };exports.default = _default;

/***/ }),
/* 123 */
/*!***************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/tabbar.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:40
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tabbar.js
                                                                                                      */var _default =
{
  // tabbar
  tabbar: {
    value: null,
    safeAreaInsetBottom: true,
    border: true,
    zIndex: 1,
    activeColor: '#1989fa',
    inactiveColor: '#7d7e80',
    fixed: true,
    placeholder: true } };exports.default = _default;

/***/ }),
/* 124 */
/*!*******************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/tabbarItem.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:22:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tabbarItem.js
                                                                                                      */var _default =
{
  //
  tabbarItem: {
    name: null,
    icon: '',
    badge: null,
    dot: false,
    text: '',
    badgeStyle: 'top: 6px;right:2px;' } };exports.default = _default;

/***/ }),
/* 125 */
/*!*************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/tabs.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:23:14
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tabs.js
                                                                                                      */var _default =
{
  //
  tabs: {
    duration: 300,
    list: function list() {return [];},
    lineColor: '#3c9cff',
    activeStyle: function activeStyle() {return {
        color: '#303133' };},

    inactiveStyle: function inactiveStyle() {return {
        color: '#606266' };},

    lineWidth: 20,
    lineHeight: 3,
    lineBgSize: 'cover',
    itemStyle: function itemStyle() {return {
        height: '44px' };},

    scrollable: true,
    current: 0,
    keyName: 'name' } };exports.default = _default;

/***/ }),
/* 126 */
/*!************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/tag.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:23:37
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tag.js
                                                                                                      */var _default =
{
  // tag 组件
  tag: {
    type: 'primary',
    disabled: false,
    size: 'medium',
    shape: 'square',
    text: '',
    bgColor: '',
    color: '',
    borderColor: '',
    closeColor: '#C6C7CB',
    name: '',
    plainFill: false,
    plain: false,
    closable: false,
    show: true,
    icon: '' } };exports.default = _default;

/***/ }),
/* 127 */
/*!*************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/text.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:23:58
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/text.js
                                                                                                      */var _default =
{
  // text 组件
  text: {
    type: '',
    show: true,
    text: '',
    prefixIcon: '',
    suffixIcon: '',
    mode: '',
    href: '',
    format: '',
    call: false,
    openType: '',
    bold: false,
    block: false,
    lines: '',
    color: '#303133',
    size: 15,
    iconStyle: function iconStyle() {return {
        fontSize: '15px' };},

    decoration: 'none',
    margin: 0,
    lineHeight: '',
    align: 'left',
    wordWrap: 'normal' } };exports.default = _default;

/***/ }),
/* 128 */
/*!*****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/textarea.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:24:32
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/textarea.js
                                                                                                      */var _default =
{
  // textarea 组件
  textarea: {
    value: '',
    placeholder: '',
    placeholderClass: 'textarea-placeholder',
    placeholderStyle: 'color: #c0c4cc',
    height: 70,
    confirmType: '',
    disabled: false,
    count: false,
    focus: false,
    autoHeight: false,
    fixed: false,
    cursorSpacing: 0,
    cursor: '',
    showConfirmBar: true,
    selectionStart: -1,
    selectionEnd: -1,
    adjustPosition: true,
    disableDefaultPadding: false,
    holdKeyboard: false,
    maxlength: 140,
    border: 'surround',
    formatter: null } };exports.default = _default;

/***/ }),
/* 129 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/toast.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:07:07
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/toast.js
                                                                                                      */var _default =
{
  // toast组件
  toast: {
    zIndex: 10090,
    loading: false,
    text: '',
    icon: '',
    type: '',
    loadingMode: '',
    show: '',
    overlay: false,
    position: 'center',
    params: function params() {},
    duration: 2000,
    isTab: false,
    url: '',
    callback: null,
    back: false } };exports.default = _default;

/***/ }),
/* 130 */
/*!****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/toolbar.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:24:55
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/toolbar.js
                                                                                                      */var _default =
{
  // toolbar 组件
  toolbar: {
    show: true,
    cancelText: '取消',
    confirmText: '确认',
    cancelColor: '#909193',
    confirmColor: '#3c9cff',
    title: '' } };exports.default = _default;

/***/ }),
/* 131 */
/*!****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/tooltip.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:25:14
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/tooltip.js
                                                                                                      */var _default =
{
  // tooltip 组件
  tooltip: {
    text: '',
    copyText: '',
    size: 14,
    color: '#606266',
    bgColor: 'transparent',
    direction: 'top',
    zIndex: 10071,
    showCopy: true,
    buttons: function buttons() {return [];},
    overlay: true,
    showToast: true } };exports.default = _default;

/***/ }),
/* 132 */
/*!*******************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/transition.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 16:59:00
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/transition.js
                                                                                                      */var _default =
{
  // transition动画组件的props
  transition: {
    show: false,
    mode: 'fade',
    duration: '300',
    timingFunction: 'ease-out' } };exports.default = _default;

/***/ }),
/* 133 */
/*!***************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/props/upload.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-20 16:44:21
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-20 17:09:50
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/libs/config/props/upload.js
                                                                                                      */var _default =
{
  // upload组件
  upload: {
    accept: 'image',
    capture: function capture() {return ['album', 'camera'];},
    compressed: true,
    camera: 'back',
    maxDuration: 60,
    uploadIcon: 'camera-fill',
    uploadIconColor: '#D3D4D6',
    useBeforeRead: false,
    previewFullImage: true,
    maxCount: 52,
    disabled: false,
    imageMode: 'aspectFill',
    name: '',
    sizeType: function sizeType() {return ['original', 'compressed'];},
    multiple: false,
    deletable: true,
    maxSize: Number.MAX_VALUE,
    fileList: function fileList() {return [];},
    uploadText: '',
    width: 80,
    height: 80,
    previewImage: true } };exports.default = _default;

/***/ }),
/* 134 */
/*!*********************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/config/zIndex.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; // uniapp在H5中各API的z-index值如下：
/**
 * actionsheet: 999
 * modal: 999
 * navigate: 998
 * tabbar: 998
 * toast: 999
 */var _default =

{
  toast: 10090,
  noNetwork: 10080,
  // popup包含popup，actionsheet，keyboard，picker的值
  popup: 10075,
  mask: 10070,
  navbar: 980,
  topTips: 975,
  sticky: 970,
  indexListSticky: 965 };exports.default = _default;

/***/ }),
/* 135 */
/*!*************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/function/platform.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /**
                                                                                                      * 注意：
                                                                                                      * 此部分内容，在vue-cli模式下，需要在vue.config.js加入如下内容才有效：
                                                                                                      * module.exports = {
                                                                                                      *     transpileDependencies: ['uview-v2']
                                                                                                      * }
                                                                                                      */

var platform = 'none';






platform = 'vue2';















platform = 'weixin';



























platform = 'mp';var _default =














platform;exports.default = _default;

/***/ }),
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */
/*!******************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/static/image/cunxuexiao.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 143 */
/*!**********************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/static/image/jingzhunbangfu.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIEAYAAAD9yHLdAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAAPFtJREFUeNrtnXdgFFXXxp8z20Io6XQRRCkiCIpSRJQOKogiYEMpAvrpqyAgCjaUomB/eUURsBewAmJBRKVKUaQovUsoqUAgyWZ3zvfH9bKgICmze2c29/cPGs3MM8PunLnnnPscQKPRaDQajUaj0Wg0Go1Go9FoNBqNRqPRaDQajUaj0Wg0Go1Go9FoNBqNRqPRaDQajUaj0Wg0Go1Go9FoNBqNRqNRA6kWoNGogM3MjMyMuDiQa2igZnIywK/Qjvj4k/6PX7GoXDkwNTGe8Hj+cQDC9VwrGAQwh2ccORL6NaM5bjxyBGT+7Jmbnk4UHx8fn5Wl+no1mnCgA4jGUTAzM7tc4KPj01fWrg0yPzGuatAAwBHzvzVrAsijvJo1ASRyl1q1AJTDU7VqAWhLnyUnA1yLH05KAtADg08TGKxnDRYFgwCW0aSMDIC28s3p6QAS6O1duwAEudzOnWCcS/t27QJwuTlh1y6Q2df9yMaN4IRtCds2byaDDDICAdX3X6M5GR1ANLZABAbDAGdlHmrdoAEI5Lq6VSuAPsJvl14KhpvHXnwxiL6hHhdeCPB0Xh4bq1p3BJhEI/PzweiD+X/8AaI23Gz9ejBPw/xffgFRK+xYuhQcVyE5ae1aHWg0kUQHEE1EEAGCCMhG2qyLLwaQZFzbpQtAz2JE69YA38U3tGgBIBtN4uJU63Ue1BZxOTlgfh5zV64EoSbqL1oENg4Yl3z9NahCi8Tc1auJiIhMU7VaTXSgA4jGUpj3Pr/3+TJlgPJe35ZrrgG4uVHn2msBmsH3dO4M8Hgcq1JFtc5SB+Mbejg9HUQbeMj8+YDZBmW+/BJsvkxDv/ySjOS5yXOPHlUtU+MsdADRFAs22dx6n88HZPdLeKtjRxCt47t79gSwE7dffz3AO1GtQgXVOjVnZRT1z8sDaAt/smABmO+iYx9/DAQ/wJ2ff64Di+bf0AFEUyiY01elr6pXD3C14yf69gXjdaoyYAAInfmZ5GTV+jSWIwILw4Mac+cCNIZ+mjqVjPiEpA0LFqgWp7EHOoBoToFNNtn0eoHsmRnZN98Mog3c7+67AR6OaS1aqNanUU489V+7FuAlwGuvAXnv+Cu/8w5R1TeqvnH8uGpxmsiiA0gph82MeRnzKlQAGReYz/TrB9BtGDF8OMDz0aJ6ddX6NLYnHmsOHwaoOm1++20gmEEjJk4kSspLytu3T7U4TXjRAaSUwWbO7Qe+rVgRKLjW3XXkSIDeQJnBg0H8KW8rW1a1Po3jEW3HoLbc/s03weYbrtnjx5ORODNx5t69qsVprEUHkCiH+fCyw8sSEwGzhb/F/fcDlIC1Q4fqIrcmQkzDWL8fwDd49K23gGAs9R8zhih5bvLc1FTV4jQlQweQKONEdxRlZSfcOXQoYJzHnkce0QFDYw9oGHXLzQVQBf1eeAHsb2TGPfMMGRV7V+ydk6NanaZo6AASJbCZdWd6ua5dAfTEhS++CMIVPK92bdW6NJp/h0ah7P79ACbg2JNPAnFxycnTpukNj85ABxCHwubhZYdmnn8+YOaR+/XXQWiC1m3bqtal0ZQIxn14fcUKAIfN5oMGkZHwZaX269aplqU5PTqAOATRXut2g7K3pV91771gupvWjRuni9+aKGUhPgsEALqf/K++CuTNCNQZNYqocqfKnY4dUy1OI9ABxOawmfXhocsuvhhAY2P/m2+CUJnXNGmiWpdGE2EmwbNlC8D1uU///kSJfSrOXbpUtajSjqFagOZUpOkgc9aWtCsfeACE9UbDFSt04NCUckagoE4dgKpR359+Ys6qkHbNM8+IlXlEbPk1p0GvQGwCmznbDy6oVAkU+K9rxIwZAD/B86+5RrUujcbmvIpfVq0Cu97FuNtuI6PCppTFW7eqFlVa0AFEMWxmjUq7pXVrEBHNnTkT4OG8s3Jl1bo0GmdBTeA/ehSMd3hJ//5kxLeu2PuTT1SrinZ0CksRzNnZaWmDBoFwHhosWKADh0ZTEngNvOXLg7g6NZw160SKS06w1IQFvQKJEMypA1MHxsYCZbK9B958E8BUntGrl2pdGk2UMwI3zp8P4A33ot69iRIogbKzVYuKFnQACTPMR8YdGZeUBJi/+PfMng3wdB57xRWqdWk0pYw51HTbNrBrAte45hpdK7EGHUDCxImNfmT+bNz51VcA+vHeCy5QrUujKdWcmMzIAfNQ9+66Hbhk6BqIxTBnxmTGtGgBMitS6sqV0IFDo7EPJwagGZ8bG+fPZ8586FBOly6qZTkVHUAs4kQ3FYzKwe3ffgsgCbcnJKjWpdFoTgdP5+WxsQCl0OgvvmAze9GhmTfdpFqV09ABpISceIMhOkC7vvnmRDeIRqNxAnfhUa8XxAFyf/QRc3b9Q3v69VMtyinoGkgxYc7MTBt77bUATUfaZ59BfhA1Go2T2YmNpgnAY/Tt358ooWHSjrffVi3KrugAUkSYs0enT23bFuBMzJ03D8B4nhETo1qXRqOxlDVYFAwCvBo5t99OlPhQyp0ffaRalN3QKaxCwpwxL2Ne8+YAvuK+s2dDBw6NJpppgtYuF0CJ2PvOO2xm1U1bcd11qkXZDb0COQtsZk7MnHjRRSAaEWy8ZAmAbDSJi1OtS6PRRJRR1D8vD+CWJtq31+2/Ah1AzgBz2ti0sVWqAO7ROLB8OYBsPHHuuap1OR9mZiAYXLly1SogGNywYeNGwDSPHz9+HAAMgwgAXC5hQEFE9M/fB0wzGASITNM0AaIyZWJjAbe7SZOLLwYM45JLnOVdfOzY8eNAIPDdd99/D5jmwYMHDgCmWVAQCJx8X44dy80FgOPHT56KISb4AUSxsWXKAIaRnJycDBhG48aNG4s/GzVSfY1RwUqMzMgAu1ZjcMuWZFQYndJsyxbVolShA8jfOGE5wmWOe85duBCEyRjcrJlqXc4lPT0jA/D758798ksRKMQD0O12u8N53kAgEAAMo0yZMmUAt7tr1y5dAMNISalYUfU9AQKBJUuWLQOCwbVr164FmF0ucT/+HjBPvR7mzMzMTCAUSAsHkfj/3e5q1apVA1yua6/t3BkgqlKlShXVd8OBMDZR/x07AM//Ave1aEFGufcqdzp0SLWsSKMDyF/IORxANtLf+fxzANm45vrrVetyHkePHj0K+P0ffPDRR4BpysfcmR6MkUI8QA1DvMl7vTfd1KMHACQmRmK3TjAoAkZBwW+/rV0LAB5PUaZYhAJHQUFBgXX3w+1OSkpMBNzuXr169QKIKlZMTg7//YgeqCV1XrwYHPd70qp27cgggwxr/oacgA4gf8GctTDt08cfB9AErceMUa3HaQQCc+fOmwcEAnv3/vknEEpB2ZVgMBgEXK4qVSpVAjyeG27o3t3K42dlZWUB+fkffTRrFsBsGMW5H8wytScCc7iQKxSP57LLLrsMcLmuuaZTp/CdL/qgzrTyv/8lil+RfO3996tWE7GrVi1ANWwerpvxYIcOIHOKecXXX+NE94Xm38nJOXYMyM9/++133wWYw52SCi9EIkXk8/Xt26cPAJQtW5xJ84HA0qXLlwOBwNq169YBxQ+kIsAxZ2RkZABFTVmVFJcrNrZsWcDjueuuvn0Bovj4+PjInd/BxPPCfv2IEqhi77feUi0m3JTaAMKcPfrAt7VqAdzd9ePq1QDOx4OJiap12R3T3Ldv/36goODzz7/4AmAuWirG7hCJorXH06HD1VcDhlG3br16Z/+9goIPP5w5EwgGDx8+ckQcqXgpOxEomMUKxrqUVXHvhwhbPl+/fn36AEQ1atSooU6P/aEB1OL4cTD7g6+1aEFGwpeV2otXiWik1AUQUeswDCAb6Vi4EEA20q+6SrUu+3P0aE4OkJ//zjvvvef8FcfZEd1dbneDBhdeCLjdrVu3avXP/8vvnzp1+nRR67FihcCckyNSVaIryy7IFJfP16tXjx4AUf369eurVmVnaAje/+MP4GijvGDTpkTnDDtnmGgfiSZK4UbC7J3pGx97DDpwFIloSVUVHsMwDCAQ+OOPjRuBQOCHH378MfRf/f7XXnvjDSsDR35+fj4AyC41e8EsVlT5+bNmffIJwLxr1+7dqlXZGX4Jt114IVB+acxzEyeqVhMuSs0KhM3DLdO7Nm0KMvtzs2XLAPTA4GhKvoSHgoJZsz79FAgGZUolvBAFg6YJeDxXXNGiBWAYF1/csCFgmvv3798PBIPffbdwIRAMHjsm9kGIB334EYGCSNYmrAqk8niyy0qsfOyO3JXi840YMXw4AMTE+HyqVdmSLKQxg9EFR7t1IyNhc0qzL79ULcoqoj6AMO/knRwTA8SPLnd47VoAI1BQp45qXXbHNPftS00F/P45c8THPVwPapHj93rbtWvbFjCM+vXr1i2Mvt9//+MPwO9ftGjJknDqCy/Wt+dGFo+nevXq1QG3u3//O+9UrcbO0CiU3b8fwASPv0ED0ZQQiVey8OLAr1xRSdhQ7vwnnoAOHEVCtuWG68EsVxoxMffcM2hQ4QOHxDBEbcLlKl/eWeb5skh++PDhw4BTA4ckENizZ+9egDktLS1NtRo7w+NxrEoVME8MXBk9Ka2oDSBsZl13cEGjRgCvQL9hw1TrcQqmmZqamgqEK40irUd8vv/7v0GDgJLuF3G7O3Xq0AGIdJtrcWGWqbe8vLw81WqsuB6RzAoEZs+OnsRMGCHcxTMHDGAzOyvjovbtVcspKVEXQESXlcsFQn/j4hkzoGsdRSIQmDfvm28A63eOizdtn2/QoAEDrDsqUUqKM3ZO5+aK4rgMINFFMLhv37594p+CQdVqbE0CUohAPIePTpkSSrE7k6gLIMDhw+npAwYAaANceqlqNU7DNAsK/H5rj2iagNfbrVvXroDVO9RNc8sWYWWn2irlTPj9fj/AHN6d5KqRXVqmuXLl6tWq1TiCbrz6/POB+KTyx4YOVS2muERNAGEzvWt61/LlAUyiWtqKpKgEAsuX//wzAEhTP2twucqWjY0FDKNGjerVw6F74cJFiyJ1l4qCCMTM2dnZ2YBTUmwlJRiUO/A1hYPOZe+oUczpXdO7Vq2qWk1RiZoAAriu5MlPPAHwcN5ZubJqNU4jGFy//vffrTyiWHl4PL179+xpvd5A4IsvZs8WtRp7PZhFqo45K6s0BQ6Jaaanp6erVuEkeCEOlysHuObwvvHjVaspKo4PIMxZvJ9r1gSB8MJ//qNaj1Nh9vut7AYyDLdbpKp8Piv2B5jm7t27dwP5+ZMnT5kCBAIHD4quH7ukrmQ3ldwvU7oCh4Q5EBA1EGfsZ7ERa/BSnz7MWXxoZuPGqsUUFscHEDBme+5/7DEAd+FRr1e1HOciH/hWHa1pUysqUKa5e/eePYDfL4r79vPeCgTEiiM7OytLNnGo1qQO2ZXFLAZiaQpNLdQ3DIAqUUXnpOAdG0DYPLzs0MzzzwchyBfdcYdqPU7FNLdt27YNsO5NXnThGEaTJla8R8lBVPazh5fF8cxMseIITT4pzRiGWIkRycmJmqLBm3FRt25sHonJ6Gv/QXbOdTUinkZln3wSwPNo60R3JmGW5/fPmzdvHmCaaWkidyxsxeVoUperTp26dQG3+6qrrrzSehXM27fv3GnlEa1JXQQCS5aIidMej73WlXl5ubliI6Bw3dWcjNudk5OTA4Rrn4ussQSDy5evWAEw7927dy8QspqpVq1qVcDluvLKVq0Aw0hKSkpSfVeKAQXb8/ljxgD4EujcWbWcM+G4B+9JNuztkHPzzar1FB7xZp6X9+qrU6cCgMsldnjLN2u3W6RmxJ/M4jEcCGzatHkzEAisW7duXegL4fXeeqsVVx+aRW4NRNakwkxzw4Y//hBHtEeNQ8wgZxZzUDSnIuepuFy5uSJwWPMiYZq7du3aBfj9r78+bRpgmrKr7Uxs2PD770BBwbffzp8PECUnp6QAPt+DDz7wAGAYCQmRmEBpAe/y4E6d2DxSJWNbs2ZkVMhLemvFCtWi/o4TU1gL3IGhQ+GYwU8ycLzyyv/+BwBerwgURU3JeL0+H2Ca0lb9lVcmT7ZCX36+lW+KRNaYDDKLuRzqOXr0yBGxj0O8WZfuGseZ8HjkykNSsg2FgcDPP//8M5CX98wzkyYVJnD8E1GLESuW/PxHH338cYD5yBFHrRzJfIdnDxmiWsaZcEwAEf30CQkA/NyhXz/VegpLfv7//vfaawAQGxsba+X98PliYgC/X7jlFp+CAmt3DhNZEdaFX5SVugqLeHOWA52Y7WmvbhcMQ648/n6fvN7ipR5FIPL7xdwZq1ag0kLG73/ppVdeUX3XiqQ8maf17MmcnX3w7vPOU63m7zgmgABAYM6gQaG+aXtjmn/+uW9f+LuGpM158SnerO4zEwxasXIginTqSrQxh0bIiiK55t9xu48cOf0O++KNwPX733vvww8B618fxMoxGBSp4GBwzZrffov03SoWf2Va+Ihrn/22Kdg+gIQmCHIAm+++W7WewlJQ8NVXX38NhN9mXM5hkBvXigZR2bJWOvEwizfSkkIkU33hRtSAZBuu3r9QOAxDBFiX60zF8oSE4gSQYHDr1q1bw68/EPjxx59+Cv95LOQc/k+/fsypA1MHWpnLKBm2DyBAVvO0WR07AnDxkJo1VaspLMzWFqf/DeGG+ueff/5ZnN9OTLSyS4XZmnZWw6hdu3Zt63SFkAFC5NRDHlW6tlEUPJ4zrTxiYsQLSfFStszhWvmd+mJgmr/9JlYgjnlhyEaTuDhwmRRvzx49VIuR2D+AMI2hGQMHqpZRdCLdflq84rVh1Kx57rlW6pDdZSW9mquvbt0asM7dVTQLyBRVaISspii4XOLFSK5A/onVnyerOPXFRtZETHP//tRU1dqKANHneMQ+z0PbBhA2c7YfXFCpEgh/4krh4+oM5P6AyM4Od7mKlzIwjBo1zjkHsO5NTKTsTHP16l9/LdkVuVwlKaHKYnh29uHDoT8d9MZpM8QKzeOR3Whn4vzzS7JytKoN/HT6T/f3zrxr15494ThfuOB5/G6rVszpq9JX1aunWo1tAwhQsNG4oXdvOGyeR2jEamQhqly5ZBaS0sPIGgKBdevWry/5cTyetm3btAHOnmKS/13sQwgVw61tUy6teDyi/VXOhD8zF1xw/vnFPw+R6C60ntO/OJjmnj3OCiB/zROBexieuvVW1WLsG0CIZtCtvXqpllFUmPfujewH0po3asOIjbXC9DCkSg5QKqmuunXr1Pm3B5f0ohJNBMxHjuiVhnXIVJXbLZwTzoxs261VqySVSmbhwGA9p//8SJNO58Gt+N3evVWrsF0AYTNjXsa86tUBfpRva9FCtZ4i6+e8vMjm1q15ULpc9evXr2+lLpHCM81fflmzpuRH83g6dmzX7uTrFW/EzBkZmZmAnL+hsQqxovN6ZervbFx66SWXAMXf/yEgKlfO2iZ9+Xk5/QrWgSsQyQgU1Kmj2r3XdgEEZFxjfn3TTTjhTuksmCNt+meaVqSeXK7mzYV1m7UjSQsKVq5ctarkxzGMCy644ALAMEQOntmaFY7m9Mid5dKi5Oy0aGGF9Z9hVKhQvryVV/Lv3w9m6UHn0H0/TF/jRnWZGjs+oDegT7duqkUUF6LI2o1bZx8uit+GYe2+ldCoU7GxsuQqK1Z0xgx0Z2IYojvN7T5bsVySnCzawEtW+5AwyzZgqzhbbU98f0zz0KFDh6w8b4QgPE0D1DUZ2SaAnDSS9ht8cMUVqvUUHdEWGGnbcaJg0Mpcv9t9xRUtWwLW7YsQASQQ+PLLefOsOJ61xX6NgEjOri/qhlThemuV5YhhWF1EL9wKinn/fmfOL+Gv8PxFF7GZmZGZUaNGpM9umwACcs3B4+3awaGDoQKBX39VZY1gpeWHYTRs2KCBuCIrJxSaplyJbNu2fXvxjxMMHjjgzC+6vfF4RK1DBpKzU6FChQoA0KbNVVdZqUQ6K1hFYQOI0z9Xxrbgqk6dIn5W1Zd9Eu25ZpcuqkUUl2BQ2E5HnvA4RrnddevWrVuSI4gVjKxVMGdmZmcDgcDHH3/2GVDU4n8wOHv23Lnit3R3lXW43cKe/syWJGeiSxfxuCpZ0fzvEFkdQArnzWaaBw4cPGjleSMMsRefRf75aacAcgc1bdtWtYjiwnz4cOG6VawmXAGkQwfR9SRnfZ/5ykWqS07oE220zGlpYma5tM8WXVLBoPjT75848fnnAeadO08/0EqkBAOBt99+7z3A7//tt7VrVdzf6MQw8vP9/tD+jsKTmJiYCACtWtk70SybQQr3whEFI3jLo/7VV4e8AyOD8oFSbObcfuDbihWBgm58iRVlOFXI+RWRtjAJr4OTxyNG0xYUrF+/YUPIq4hIFFtDliBFXVGI4wSD7777wQehMChdeEMrDZlbt8tgKWcj99N4vcKuvuh07y5Kth5POJwWmK2qcZ3txedUTPPgQUevQIAk3J6QAGTVzqotG/J//z3cJ1W/AqHA757r7f0uU8gLicrHm8t1xRUtWgAul9zRLU0IZRutNSklGQZNU65odMCwklCRXOybKXytQ9KoUcOGAHD55ZddFk6l1rg5FzWAAIXd72J3jF+DKyL3PFUfQJhbml+Kvh9nY/VcjcISmQet292nz223AUTatdZZyA2BYsUhB0AVnnLlypYFgNtvv+WWSOi1qquwaAEk9ELk0P0gIerh7tIUQIhmUp/LL1cto+REqn1XmgSKlFn47K9PhUjkvj2eZs2i4W+rtOD1itqcrHkUnVtvFYFDdl2Fm7+Pxi0qcmVVvMFmjht5+88ruB7jrdjSWTiU10AA3szPNWqkWkWJr+JEEV26iTKfnLuX64TQxr9T3+PF/ObQPA2ZYmCWLqKh3zv1N4u6VC8ZLlfnzh07Am735s2bNwOBgHQf1tgJWRz/56jZwiJfFC65JJJGGcw5OaefM1JY/P6SWAnJ7zFRcrJDN6z2xobzz2dONVMHxsYSVX2j6hvhm0ykbAVy0sYXAx2LY0RuF2S3h0wNSC8sWTPIyxNtrHKJLNsl5X+XcypkMVp0KTHLN6h/9/IB1FRfPJ7BgwcOBJxnNhPdeDxiQJZszy06550nJm9HKmV1KqZZXN2SknnRMTv+heivEbixkzzjrXW3Ox0Kv/7UMrjN+SuPYDA1tWQzyUuKYagpNgvLCa/3jjt0bUQ90nqk8BYkfycpSbTn3n23GFcUWUseCVFxPc7k569kppohN2fH04Jzw/98VRdAiD6izy+8UNn5LYK5uKNkrUJ6V1lrglhYiGrWrFkT8HrlxjJNJJErDbnyKDplygj79Pvuu+ceALDazLBomGZxA2DJUleS0OAxh8Pcj1h4SoQThSsQvplvEItlJyPnUKhDVFeCwe3bT78hLzIYhmjv9Hovu+zSS1Xej9KBnEle9I2AEtn0MWjQgAEAUKVKlSqqrwpgLm7NprhNAn+npCk0m0DogHHhf76qzGBfieG1aik8vyUw5+ba4QNnmtu2bd2qWgXgcnXp0rkz4PVKTy2NNciRsuIN2e0ubreSXLH263fHHQBQv776wagnU1QPNjnr3JrJk8yBgMPbeP+6EMTQVyUZ7VU4VAaQipgb/gsMP1a9+ZQM5r171abSTsXluuGG7t0Bj6eknlqlHbmPIzMzKwtwu48fL15PjVxxDBzYvz8ANG1qr5WiDIhF3deUn2/tXBi/P5JdjWGDUI9nROEKRLSxEgHIoj6Rtx+2nkhPIDw9pim9p+yF29279003AV7vxReLncy62F4YZBu3z5eenpEhnACK9zmTZof33DNoEAAIaxq7EQgU1+usqCaQZyNKAgiQjSZxccxZnMXh63JVsA/kyPIjyxMSAIznGdY6/6vBWtvz4sKcn18YHcHgihUrVwJ+/zfffPstEGoTdrlO9TYSbcREwtvL47nttltuAVyu4s28drmuv75bN8DrFUVbv//nn1euVH3X7IecQS7ncpx5FvzZKFtW7CC/99677waA884rWcJY6MrP/+CDjz4CgkE5qlh2PZ26ciAqWzY2FnC7r776qqsAj+e666699sxHN80tW7ZsKYoeuf/JKusTAXNk91WFn+Dq4OrKlcU/W1+tjXwKi6m/f6SYYRYt2GMvxL+38+blvfLK5MkicMyfDwBEQvffA4dE/JxZBBi//+23330X8Ptnzvz44+KrdLk6duzQAfD5RNeWbv8VuN3Hjh0/Dvh80ququIGjYsWUFAAYMWLoUKCkgcM09+7duxc4fnzYsJEjQy8goRen06ecmMX1FBTMm/f110Be3siRjzwCnGnFHgwWNQUbrpHG0ebAZmwynwrf8zbyjz4K7HKtcugez9PidtsjgIgcdzC4Zcu2baGf+v0ffTRz5snticX1zhLF12Bw06bNmwG//9NPP/+8+GoN47LLmjYFfD5RzLXHPYwksrYh/l48HulkUNyAWrdunToAMHLk8OEAULmyfO8sDjIlmp8/YcLEiUBJV9qmKbrGcnOfeebZZ093N9LTxWzysyEDqzVF879DJF+sogWqZ1wdvuetihXIucGfomcFwmyvD1wwuGjRokUn//vvv2/caOUZZNvw+vXr14uNlKmpJTlajRo1agA+37BhQ4YALpdIfUQrhiFSJDExaWnp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"

/***/ }),
/* 144 */
/*!*****************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/static/image/cunyiyuan.png ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 145 */
/*!****************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/static/image/jiankang.png ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 146 */
/*!******************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/static/image/zixunjieda.png ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 147 */
/*!***********************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/static/image/yue.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */
/*!****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-picker/props.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 是否展示picker弹窗
    show: {
      type: Boolean,
      default: uni.$u.props.picker.show },

    // 是否展示顶部的操作栏
    showToolbar: {
      type: Boolean,
      default: uni.$u.props.picker.showToolbar },

    // 顶部标题
    title: {
      type: String,
      default: uni.$u.props.picker.title },

    // 对象数组，设置每一列的数据
    columns: {
      type: Array,
      default: uni.$u.props.picker.columns },

    // 是否显示加载中状态
    loading: {
      type: Boolean,
      default: uni.$u.props.picker.loading },

    // 各列中，单个选项的高度
    itemHeight: {
      type: [String, Number],
      default: uni.$u.props.picker.itemHeight },

    // 取消按钮的文字
    cancelText: {
      type: String,
      default: uni.$u.props.picker.cancelText },

    // 确认按钮的文字
    confirmText: {
      type: String,
      default: uni.$u.props.picker.confirmText },

    // 取消按钮的颜色
    cancelColor: {
      type: String,
      default: uni.$u.props.picker.cancelColor },

    // 确认按钮的颜色
    confirmColor: {
      type: String,
      default: uni.$u.props.picker.confirmColor },

    // 每列中可见选项的数量
    visibleItemCount: {
      type: [String, Number],
      default: uni.$u.props.picker.visibleItemCount },

    // 选项对象中，需要展示的属性键名
    keyName: {
      type: String,
      default: uni.$u.props.picker.keyName },

    // 是否允许点击遮罩关闭选择器
    closeOnClickOverlay: {
      type: Boolean,
      default: uni.$u.props.picker.closeOnClickOverlay },

    // 各列的默认索引
    defaultIndex: {
      type: Array,
      default: uni.$u.props.picker.defaultIndex },

    // 是否在手指松开时立即触发 change 事件。若不开启则会在滚动动画结束后触发 change 事件，只在微信2.21.1及以上有效
    immediateChange: {
      type: Boolean,
      default: uni.$u.props.picker.immediateChange } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */
/*!****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-swiper/props.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 列表数组，元素可为字符串，如为对象可通过keyName指定目标属性名
    list: {
      type: Array,
      default: uni.$u.props.swiper.list },

    // 是否显示面板指示器
    indicator: {
      type: Boolean,
      default: uni.$u.props.swiper.indicator },

    // 指示器非激活颜色
    indicatorActiveColor: {
      type: String,
      default: uni.$u.props.swiper.indicatorActiveColor },

    // 指示器的激活颜色
    indicatorInactiveColor: {
      type: String,
      default: uni.$u.props.swiper.indicatorInactiveColor },

    // 指示器样式，可通过bottom，left，right进行定位
    indicatorStyle: {
      type: [String, Object],
      default: uni.$u.props.swiper.indicatorStyle },

    // 指示器模式，line-线型，dot-点型
    indicatorMode: {
      type: String,
      default: uni.$u.props.swiper.indicatorMode },

    // 是否自动切换
    autoplay: {
      type: Boolean,
      default: uni.$u.props.swiper.autoplay },

    // 当前所在滑块的 index
    current: {
      type: [String, Number],
      default: uni.$u.props.swiper.current },

    // 当前所在滑块的 item-id ，不能与 current 被同时指定
    currentItemId: {
      type: String,
      default: uni.$u.props.swiper.currentItemId },

    // 滑块自动切换时间间隔
    interval: {
      type: [String, Number],
      default: uni.$u.props.swiper.interval },

    // 滑块切换过程所需时间
    duration: {
      type: [String, Number],
      default: uni.$u.props.swiper.duration },

    // 播放到末尾后是否重新回到开头
    circular: {
      type: Boolean,
      default: uni.$u.props.swiper.circular },

    // 前边距，可用于露出前一项的一小部分，nvue和支付宝不支持
    previousMargin: {
      type: [String, Number],
      default: uni.$u.props.swiper.previousMargin },

    // 后边距，可用于露出后一项的一小部分，nvue和支付宝不支持
    nextMargin: {
      type: [String, Number],
      default: uni.$u.props.swiper.nextMargin },

    // 当开启时，会根据滑动速度，连续滑动多屏，支付宝不支持
    acceleration: {
      type: Boolean,
      default: uni.$u.props.swiper.acceleration },

    // 同时显示的滑块数量，nvue、支付宝小程序不支持
    displayMultipleItems: {
      type: Number,
      default: uni.$u.props.swiper.displayMultipleItems },

    // 指定swiper切换缓动动画类型，有效值：default、linear、easeInCubic、easeOutCubic、easeInOutCubic
    // 只对微信小程序有效
    easingFunction: {
      type: String,
      default: uni.$u.props.swiper.easingFunction },

    // list数组中指定对象的目标属性名
    keyName: {
      type: String,
      default: uni.$u.props.swiper.keyName },

    // 图片的裁剪模式
    imgMode: {
      type: String,
      default: uni.$u.props.swiper.imgMode },

    // 组件高度
    height: {
      type: [String, Number],
      default: uni.$u.props.swiper.height },

    // 背景颜色
    bgColor: {
      type: String,
      default: uni.$u.props.swiper.bgColor },

    // 组件圆角，数值或带单位的字符串
    radius: {
      type: [String, Number],
      default: uni.$u.props.swiper.radius },

    // 是否加载中
    loading: {
      type: Boolean,
      default: uni.$u.props.swiper.loading },

    // 是否显示标题，要求数组对象中有title属性
    showTitle: {
      type: Boolean,
      default: uni.$u.props.swiper.showTitle } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-grid/props.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 分成几列
    col: {
      type: [String, Number],
      default: uni.$u.props.grid.col },

    // 是否显示边框
    border: {
      type: Boolean,
      default: uni.$u.props.grid.border },

    // 宫格对齐方式，表现为数量少的时候，靠左，居中，还是靠右
    align: {
      type: String,
      default: uni.$u.props.grid.align } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */
/*!*******************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-grid-item/props.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 宫格的name
    name: {
      type: [String, Number, null],
      default: uni.$u.props.gridItem.name },

    // 背景颜色
    bgColor: {
      type: String,
      default: uni.$u.props.gridItem.bgColor } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
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
/* 218 */,
/* 219 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-icon/icons.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  'uicon-level': "\uE693",
  'uicon-column-line': "\uE68E",
  'uicon-checkbox-mark': "\uE807",
  'uicon-folder': "\uE7F5",
  'uicon-movie': "\uE7F6",
  'uicon-star-fill': "\uE669",
  'uicon-star': "\uE65F",
  'uicon-phone-fill': "\uE64F",
  'uicon-phone': "\uE622",
  'uicon-apple-fill': "\uE881",
  'uicon-chrome-circle-fill': "\uE885",
  'uicon-backspace': "\uE67B",
  'uicon-attach': "\uE632",
  'uicon-cut': "\uE948",
  'uicon-empty-car': "\uE602",
  'uicon-empty-coupon': "\uE682",
  'uicon-empty-address': "\uE646",
  'uicon-empty-favor': "\uE67C",
  'uicon-empty-permission': "\uE686",
  'uicon-empty-news': "\uE687",
  'uicon-empty-search': "\uE664",
  'uicon-github-circle-fill': "\uE887",
  'uicon-rmb': "\uE608",
  'uicon-person-delete-fill': "\uE66A",
  'uicon-reload': "\uE788",
  'uicon-order': "\uE68F",
  'uicon-server-man': "\uE6BC",
  'uicon-search': "\uE62A",
  'uicon-fingerprint': "\uE955",
  'uicon-more-dot-fill': "\uE630",
  'uicon-scan': "\uE662",
  'uicon-share-square': "\uE60B",
  'uicon-map': "\uE61D",
  'uicon-map-fill': "\uE64E",
  'uicon-tags': "\uE629",
  'uicon-tags-fill': "\uE651",
  'uicon-bookmark-fill': "\uE63B",
  'uicon-bookmark': "\uE60A",
  'uicon-eye': "\uE613",
  'uicon-eye-fill': "\uE641",
  'uicon-mic': "\uE64A",
  'uicon-mic-off': "\uE649",
  'uicon-calendar': "\uE66E",
  'uicon-calendar-fill': "\uE634",
  'uicon-trash': "\uE623",
  'uicon-trash-fill': "\uE658",
  'uicon-play-left': "\uE66D",
  'uicon-play-right': "\uE610",
  'uicon-minus': "\uE618",
  'uicon-plus': "\uE62D",
  'uicon-info': "\uE653",
  'uicon-info-circle': "\uE7D2",
  'uicon-info-circle-fill': "\uE64B",
  'uicon-question': "\uE715",
  'uicon-error': "\uE6D3",
  'uicon-close': "\uE685",
  'uicon-checkmark': "\uE6A8",
  'uicon-android-circle-fill': "\uE67E",
  'uicon-android-fill': "\uE67D",
  'uicon-ie': "\uE87B",
  'uicon-IE-circle-fill': "\uE889",
  'uicon-google': "\uE87A",
  'uicon-google-circle-fill': "\uE88A",
  'uicon-setting-fill': "\uE872",
  'uicon-setting': "\uE61F",
  'uicon-minus-square-fill': "\uE855",
  'uicon-plus-square-fill': "\uE856",
  'uicon-heart': "\uE7DF",
  'uicon-heart-fill': "\uE851",
  'uicon-camera': "\uE7D7",
  'uicon-camera-fill': "\uE870",
  'uicon-more-circle': "\uE63E",
  'uicon-more-circle-fill': "\uE645",
  'uicon-chat': "\uE620",
  'uicon-chat-fill': "\uE61E",
  'uicon-bag-fill': "\uE617",
  'uicon-bag': "\uE619",
  'uicon-error-circle-fill': "\uE62C",
  'uicon-error-circle': "\uE624",
  'uicon-close-circle': "\uE63F",
  'uicon-close-circle-fill': "\uE637",
  'uicon-checkmark-circle': "\uE63D",
  'uicon-checkmark-circle-fill': "\uE635",
  'uicon-question-circle-fill': "\uE666",
  'uicon-question-circle': "\uE625",
  'uicon-share': "\uE631",
  'uicon-share-fill': "\uE65E",
  'uicon-shopping-cart': "\uE621",
  'uicon-shopping-cart-fill': "\uE65D",
  'uicon-bell': "\uE609",
  'uicon-bell-fill': "\uE640",
  'uicon-list': "\uE650",
  'uicon-list-dot': "\uE616",
  'uicon-zhihu': "\uE6BA",
  'uicon-zhihu-circle-fill': "\uE709",
  'uicon-zhifubao': "\uE6B9",
  'uicon-zhifubao-circle-fill': "\uE6B8",
  'uicon-weixin-circle-fill': "\uE6B1",
  'uicon-weixin-fill': "\uE6B2",
  'uicon-twitter-circle-fill': "\uE6AB",
  'uicon-twitter': "\uE6AA",
  'uicon-taobao-circle-fill': "\uE6A7",
  'uicon-taobao': "\uE6A6",
  'uicon-weibo-circle-fill': "\uE6A5",
  'uicon-weibo': "\uE6A4",
  'uicon-qq-fill': "\uE6A1",
  'uicon-qq-circle-fill': "\uE6A0",
  'uicon-moments-circel-fill': "\uE69A",
  'uicon-moments': "\uE69B",
  'uicon-qzone': "\uE695",
  'uicon-qzone-circle-fill': "\uE696",
  'uicon-baidu-circle-fill': "\uE680",
  'uicon-baidu': "\uE681",
  'uicon-facebook-circle-fill': "\uE68A",
  'uicon-facebook': "\uE689",
  'uicon-car': "\uE60C",
  'uicon-car-fill': "\uE636",
  'uicon-warning-fill': "\uE64D",
  'uicon-warning': "\uE694",
  'uicon-clock-fill': "\uE638",
  'uicon-clock': "\uE60F",
  'uicon-edit-pen': "\uE612",
  'uicon-edit-pen-fill': "\uE66B",
  'uicon-email': "\uE611",
  'uicon-email-fill': "\uE642",
  'uicon-minus-circle': "\uE61B",
  'uicon-minus-circle-fill': "\uE652",
  'uicon-plus-circle': "\uE62E",
  'uicon-plus-circle-fill': "\uE661",
  'uicon-file-text': "\uE663",
  'uicon-file-text-fill': "\uE665",
  'uicon-pushpin': "\uE7E3",
  'uicon-pushpin-fill': "\uE86E",
  'uicon-grid': "\uE673",
  'uicon-grid-fill': "\uE678",
  'uicon-play-circle': "\uE647",
  'uicon-play-circle-fill': "\uE655",
  'uicon-pause-circle-fill': "\uE654",
  'uicon-pause': "\uE8FA",
  'uicon-pause-circle': "\uE643",
  'uicon-eye-off': "\uE648",
  'uicon-eye-off-outline': "\uE62B",
  'uicon-gift-fill': "\uE65C",
  'uicon-gift': "\uE65B",
  'uicon-rmb-circle-fill': "\uE657",
  'uicon-rmb-circle': "\uE677",
  'uicon-kefu-ermai': "\uE656",
  'uicon-server-fill': "\uE751",
  'uicon-coupon-fill': "\uE8C4",
  'uicon-coupon': "\uE8AE",
  'uicon-integral': "\uE704",
  'uicon-integral-fill': "\uE703",
  'uicon-home-fill': "\uE964",
  'uicon-home': "\uE965",
  'uicon-hourglass-half-fill': "\uE966",
  'uicon-hourglass': "\uE967",
  'uicon-account': "\uE628",
  'uicon-plus-people-fill': "\uE626",
  'uicon-minus-people-fill': "\uE615",
  'uicon-account-fill': "\uE614",
  'uicon-thumb-down-fill': "\uE726",
  'uicon-thumb-down': "\uE727",
  'uicon-thumb-up': "\uE733",
  'uicon-thumb-up-fill': "\uE72F",
  'uicon-lock-fill': "\uE979",
  'uicon-lock-open': "\uE973",
  'uicon-lock-opened-fill': "\uE974",
  'uicon-lock': "\uE97A",
  'uicon-red-packet-fill': "\uE690",
  'uicon-photo-fill': "\uE98B",
  'uicon-photo': "\uE98D",
  'uicon-volume-off-fill': "\uE659",
  'uicon-volume-off': "\uE644",
  'uicon-volume-fill': "\uE670",
  'uicon-volume': "\uE633",
  'uicon-red-packet': "\uE691",
  'uicon-download': "\uE63C",
  'uicon-arrow-up-fill': "\uE6B0",
  'uicon-arrow-down-fill': "\uE600",
  'uicon-play-left-fill': "\uE675",
  'uicon-play-right-fill': "\uE676",
  'uicon-rewind-left-fill': "\uE679",
  'uicon-rewind-right-fill': "\uE67A",
  'uicon-arrow-downward': "\uE604",
  'uicon-arrow-leftward': "\uE601",
  'uicon-arrow-rightward': "\uE603",
  'uicon-arrow-upward': "\uE607",
  'uicon-arrow-down': "\uE60D",
  'uicon-arrow-right': "\uE605",
  'uicon-arrow-left': "\uE60E",
  'uicon-arrow-up': "\uE606",
  'uicon-skip-back-left': "\uE674",
  'uicon-skip-forward-right': "\uE672",
  'uicon-rewind-right': "\uE66F",
  'uicon-rewind-left': "\uE671",
  'uicon-arrow-right-double': "\uE68D",
  'uicon-arrow-left-double': "\uE68C",
  'uicon-wifi-off': "\uE668",
  'uicon-wifi': "\uE667",
  'uicon-empty-data': "\uE62F",
  'uicon-empty-history': "\uE684",
  'uicon-empty-list': "\uE68B",
  'uicon-empty-page': "\uE627",
  'uicon-empty-order': "\uE639",
  'uicon-man': "\uE697",
  'uicon-woman': "\uE69C",
  'uicon-man-add': "\uE61C",
  'uicon-man-add-fill': "\uE64C",
  'uicon-man-delete': "\uE61A",
  'uicon-man-delete-fill': "\uE66A",
  'uicon-zh': "\uE70A",
  'uicon-en': "\uE692" };exports.default = _default;

/***/ }),
/* 220 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-icon/props.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 图标类名
    name: {
      type: String,
      default: uni.$u.props.icon.name },

    // 图标颜色，可接受主题色
    color: {
      type: String,
      default: uni.$u.props.icon.color },

    // 字体大小，单位px
    size: {
      type: [String, Number],
      default: uni.$u.props.icon.size },

    // 是否显示粗体
    bold: {
      type: Boolean,
      default: uni.$u.props.icon.bold },

    // 点击图标的时候传递事件出去的index（用于区分点击了哪一个）
    index: {
      type: [String, Number],
      default: uni.$u.props.icon.index },

    // 触摸图标时的类名
    hoverClass: {
      type: String,
      default: uni.$u.props.icon.hoverClass },

    // 自定义扩展前缀，方便用户扩展自己的图标库
    customPrefix: {
      type: String,
      default: uni.$u.props.icon.customPrefix },

    // 图标右边或者下面的文字
    label: {
      type: [String, Number],
      default: uni.$u.props.icon.label },

    // label的位置，只能右边或者下边
    labelPos: {
      type: String,
      default: uni.$u.props.icon.labelPos },

    // label的大小
    labelSize: {
      type: [String, Number],
      default: uni.$u.props.icon.labelSize },

    // label的颜色
    labelColor: {
      type: String,
      default: uni.$u.props.icon.labelColor },

    // label与图标的距离
    space: {
      type: [String, Number],
      default: uni.$u.props.icon.space },

    // 图片的mode
    imgMode: {
      type: String,
      default: uni.$u.props.icon.imgMode },

    // 用于显示图片小图标时，图片的宽度
    width: {
      type: [String, Number],
      default: uni.$u.props.icon.width },

    // 用于显示图片小图标时，图片的高度
    height: {
      type: [String, Number],
      default: uni.$u.props.icon.height },

    // 用于解决某些情况下，让图标垂直居中的用途
    top: {
      type: [String, Number],
      default: uni.$u.props.icon.top },

    // 是否阻止事件传播
    stop: {
      type: Boolean,
      default: uni.$u.props.icon.stop } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */
/*!********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-cell-group/props.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 分组标题
    title: {
      type: String,
      default: uni.$u.props.cellGroup.title },

    // 是否显示外边框
    border: {
      type: Boolean,
      default: uni.$u.props.cellGroup.border } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-cell/props.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default2 = {
  props: {
    // 标题
    title: {
      type: [String, Number],
      default: uni.$u.props.cell.title },

    // 标题下方的描述信息
    label: {
      type: [String, Number],
      default: uni.$u.props.cell.label },

    // 右侧的内容
    value: {
      type: [String, Number],
      default: uni.$u.props.cell.value },

    // 左侧图标名称，或者图片链接(本地文件建议使用绝对地址)
    icon: {
      type: String,
      default: uni.$u.props.cell.icon },

    // 是否禁用cell
    disabled: {
      type: Boolean,
      default: uni.$u.props.cell.disabled },

    // 是否显示下边框
    border: {
      type: Boolean,
      default: uni.$u.props.cell.border },

    // 内容是否垂直居中(主要是针对右侧的value部分)
    center: {
      type: Boolean,
      default: uni.$u.props.cell.center },

    // 点击后跳转的URL地址
    url: {
      type: String,
      default: uni.$u.props.cell.url },

    // 链接跳转的方式，内部使用的是uView封装的route方法，可能会进行拦截操作
    linkType: {
      type: String,
      default: uni.$u.props.cell.linkType },

    // 是否开启点击反馈(表现为点击时加上灰色背景)
    clickable: {
      type: Boolean,
      default: uni.$u.props.cell.clickable },

    // 是否展示右侧箭头并开启点击反馈
    isLink: {
      type: Boolean,
      default: uni.$u.props.cell.isLink },

    // 是否显示表单状态下的必填星号(此组件可能会内嵌入input组件)
    required: {
      type: Boolean,
      default: uni.$u.props.cell.required },

    // 右侧的图标箭头
    rightIcon: {
      type: String,
      default: uni.$u.props.cell.rightIcon },

    // 右侧箭头的方向，可选值为：left，up，down
    arrowDirection: {
      type: String,
      default: uni.$u.props.cell.arrowDirection },

    // 左侧图标样式
    iconStyle: {
      type: [Object, String],
      default: function _default() {
        return uni.$u.props.cell.iconStyle;
      } },

    // 右侧箭头图标的样式
    rightIconStyle: {
      type: [Object, String],
      default: function _default() {
        return uni.$u.props.cell.rightIconStyle;
      } },

    // 标题的样式
    titleStyle: {
      type: [Object, String],
      default: function _default() {
        return uni.$u.props.cell.titleStyle;
      } },

    // 单位元的大小，可选值为large
    size: {
      type: String,
      default: uni.$u.props.cell.size },

    // 点击cell是否阻止事件传播
    stop: {
      type: Boolean,
      default: uni.$u.props.cell.stop },

    // 标识符，cell被点击时返回
    name: {
      type: [Number, String],
      default: uni.$u.props.cell.name } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */
/*!*************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-tag/props.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 标签类型info、primary、success、warning、error
    type: {
      type: String,
      default: uni.$u.props.tag.type },

    // 不可用
    disabled: {
      type: [Boolean, String],
      default: uni.$u.props.tag.disabled },

    // 标签的大小，large，medium，mini
    size: {
      type: String,
      default: uni.$u.props.tag.size },

    // tag的形状，circle（两边半圆形）, square（方形，带圆角）
    shape: {
      type: String,
      default: uni.$u.props.tag.shape },

    // 标签文字
    text: {
      type: [String, Number],
      default: uni.$u.props.tag.text },

    // 背景颜色，默认为空字符串，即不处理
    bgColor: {
      type: String,
      default: uni.$u.props.tag.bgColor },

    // 标签字体颜色，默认为空字符串，即不处理
    color: {
      type: String,
      default: uni.$u.props.tag.color },

    // 标签的边框颜色
    borderColor: {
      type: String,
      default: uni.$u.props.tag.borderColor },

    // 关闭按钮图标的颜色
    closeColor: {
      type: String,
      default: uni.$u.props.tag.closeColor },

    // 点击时返回的索引值，用于区分例遍的数组哪个元素被点击了
    name: {
      type: [String, Number],
      default: uni.$u.props.tag.name },

    // // 模式选择，dark|light|plain
    // mode: {
    // 	type: String,
    // 	default: 'light'
    // },
    // 镂空时是否填充背景色
    plainFill: {
      type: Boolean,
      default: uni.$u.props.tag.plainFill },

    // 是否镂空
    plain: {
      type: Boolean,
      default: uni.$u.props.tag.plain },

    // 是否可关闭
    closable: {
      type: Boolean,
      default: uni.$u.props.tag.closable },

    // 是否显示
    show: {
      type: Boolean,
      default: uni.$u.props.tag.show },

    // 内置图标，或绝对路径的图片
    icon: {
      type: String,
      default: uni.$u.props.tag.icon } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */
/*!********************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/mixin/button.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    lang: String,
    sessionFrom: String,
    sendMessageTitle: String,
    sendMessagePath: String,
    sendMessageImg: String,
    showMessageCard: Boolean,
    appParameter: String,
    formType: String,
    openType: String } };exports.default = _default;

/***/ }),
/* 253 */
/*!**********************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/mixin/openType.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    openType: String },

  methods: {
    onGetUserInfo: function onGetUserInfo(event) {
      this.$emit('getuserinfo', event.detail);
    },
    onContact: function onContact(event) {
      this.$emit('contact', event.detail);
    },
    onGetPhoneNumber: function onGetPhoneNumber(event) {
      this.$emit('getphonenumber', event.detail);
    },
    onError: function onError(event) {
      this.$emit('error', event.detail);
    },
    onLaunchApp: function onLaunchApp(event) {
      this.$emit('launchapp', event.detail);
    },
    onOpenSetting: function onOpenSetting(event) {
      this.$emit('opensetting', event.detail);
    } } };exports.default = _default;

/***/ }),
/* 254 */
/*!****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-button/props.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; /*
                                                                                                      * @Author       : LQ
                                                                                                      * @Description  :
                                                                                                      * @version      : 1.0
                                                                                                      * @Date         : 2021-08-16 10:04:04
                                                                                                      * @LastAuthor   : LQ
                                                                                                      * @lastTime     : 2021-08-16 10:04:24
                                                                                                      * @FilePath     : /u-view2.0/uview-ui/components/u-button/props.js
                                                                                                      */var _default =
{
  props: {
    // 是否细边框
    hairline: {
      type: Boolean,
      default: uni.$u.props.button.hairline },

    // 按钮的预置样式，info，primary，error，warning，success
    type: {
      type: String,
      default: uni.$u.props.button.type },

    // 按钮尺寸，large，normal，small，mini
    size: {
      type: String,
      default: uni.$u.props.button.size },

    // 按钮形状，circle（两边为半圆），square（带圆角）
    shape: {
      type: String,
      default: uni.$u.props.button.shape },

    // 按钮是否镂空
    plain: {
      type: Boolean,
      default: uni.$u.props.button.plain },

    // 是否禁止状态
    disabled: {
      type: Boolean,
      default: uni.$u.props.button.disabled },

    // 是否加载中
    loading: {
      type: Boolean,
      default: uni.$u.props.button.loading },

    // 加载中提示文字
    loadingText: {
      type: [String, Number],
      default: uni.$u.props.button.loadingText },

    // 加载状态图标类型
    loadingMode: {
      type: String,
      default: uni.$u.props.button.loadingMode },

    // 加载图标大小
    loadingSize: {
      type: [String, Number],
      default: uni.$u.props.button.loadingSize },

    // 开放能力，具体请看uniapp稳定关于button组件部分说明
    // https://uniapp.dcloud.io/component/button
    openType: {
      type: String,
      default: uni.$u.props.button.openType },

    // 用于 <form> 组件，点击分别会触发 <form> 组件的 submit/reset 事件
    // 取值为submit（提交表单），reset（重置表单）
    formType: {
      type: String,
      default: uni.$u.props.button.formType },

    // 打开 APP 时，向 APP 传递的参数，open-type=launchApp时有效
    // 只微信小程序、QQ小程序有效
    appParameter: {
      type: String,
      default: uni.$u.props.button.appParameter },

    // 指定是否阻止本节点的祖先节点出现点击态，微信小程序有效
    hoverStopPropagation: {
      type: Boolean,
      default: uni.$u.props.button.hoverStopPropagation },

    // 指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文。只微信小程序有效
    lang: {
      type: String,
      default: uni.$u.props.button.lang },

    // 会话来源，open-type="contact"时有效。只微信小程序有效
    sessionFrom: {
      type: String,
      default: uni.$u.props.button.sessionFrom },

    // 会话内消息卡片标题，open-type="contact"时有效
    // 默认当前标题，只微信小程序有效
    sendMessageTitle: {
      type: String,
      default: uni.$u.props.button.sendMessageTitle },

    // 会话内消息卡片点击跳转小程序路径，open-type="contact"时有效
    // 默认当前分享路径，只微信小程序有效
    sendMessagePath: {
      type: String,
      default: uni.$u.props.button.sendMessagePath },

    // 会话内消息卡片图片，open-type="contact"时有效
    // 默认当前页面截图，只微信小程序有效
    sendMessageImg: {
      type: String,
      default: uni.$u.props.button.sendMessageImg },

    // 是否显示会话内消息卡片，设置此参数为 true，用户进入客服会话会在右下角显示"可能要发送的小程序"提示，
    // 用户点击后可以快速发送小程序消息，open-type="contact"时有效
    showMessageCard: {
      type: Boolean,
      default: uni.$u.props.button.showMessageCard },

    // 额外传参参数，用于小程序的data-xxx属性，通过target.dataset.name获取
    dataName: {
      type: String,
      default: uni.$u.props.button.dataName },

    // 节流，一定时间内只能触发一次
    throttleTime: {
      type: [String, Number],
      default: uni.$u.props.button.throttleTime },

    // 按住后多久出现点击态，单位毫秒
    hoverStartTime: {
      type: [String, Number],
      default: uni.$u.props.button.hoverStartTime },

    // 手指松开后点击态保留时间，单位毫秒
    hoverStayTime: {
      type: [String, Number],
      default: uni.$u.props.button.hoverStayTime },

    // 按钮文字，之所以通过props传入，是因为slot传入的话
    // nvue中无法控制文字的样式
    text: {
      type: [String, Number],
      default: uni.$u.props.button.text },

    // 按钮图标
    icon: {
      type: String,
      default: uni.$u.props.button.icon },

    // 按钮图标
    iconColor: {
      type: String,
      default: uni.$u.props.button.icon },

    // 按钮颜色，支持传入linear-gradient渐变色
    color: {
      type: String,
      default: uni.$u.props.button.color } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-form/props.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 当前form的需要验证字段的集合
    model: {
      type: Object,
      default: uni.$u.props.form.model },

    // 验证规则
    rules: {
      type: [Object, Function, Array],
      default: uni.$u.props.form.rules },

    // 有错误时的提示方式，message-提示信息，toast-进行toast提示
    // border-bottom-下边框呈现红色，none-无提示
    errorType: {
      type: String,
      default: uni.$u.props.form.errorType },

    // 是否显示表单域的下划线边框
    borderBottom: {
      type: Boolean,
      default: uni.$u.props.form.borderBottom },

    // label的位置，left-左边，top-上边
    labelPosition: {
      type: String,
      default: uni.$u.props.form.labelPosition },

    // label的宽度，单位px
    labelWidth: {
      type: [String, Number],
      default: uni.$u.props.form.labelWidth },

    // lable字体的对齐方式
    labelAlign: {
      type: String,
      default: uni.$u.props.form.labelAlign },

    // lable的样式，对象形式
    labelStyle: {
      type: Object,
      default: uni.$u.props.form.labelStyle } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */
/*!*******************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-form-item/props.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // input的label提示语
    label: {
      type: String,
      default: uni.$u.props.formItem.label },

    // 绑定的值
    prop: {
      type: String,
      default: uni.$u.props.formItem.prop },

    // 是否显示表单域的下划线边框
    borderBottom: {
      type: [String, Boolean],
      default: uni.$u.props.formItem.borderBottom },

    // label的宽度，单位px
    labelWidth: {
      type: [String, Number],
      default: uni.$u.props.formItem.labelWidth },

    // 右侧图标
    rightIcon: {
      type: String,
      default: uni.$u.props.formItem.rightIcon },

    // 左侧图标
    leftIcon: {
      type: String,
      default: uni.$u.props.formItem.leftIcon },

    // 是否显示左边的必填星号，只作显示用，具体校验必填的逻辑，请在rules中配置
    required: {
      type: Boolean,
      default: uni.$u.props.formItem.required },

    leftIconStyle: {
      type: [String, Object],
      default: uni.$u.props.formItem.leftIconStyle } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */
/*!***************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-input/props.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 输入的值
    value: {
      type: [String, Number],
      default: uni.$u.props.input.value },

    // 输入框类型
    // number-数字输入键盘，app-vue下可以输入浮点数，app-nvue和小程序平台下只能输入整数
    // idcard-身份证输入键盘，微信、支付宝、百度、QQ小程序
    // digit-带小数点的数字键盘，App的nvue页面、微信、支付宝、百度、头条、QQ小程序
    // text-文本输入键盘
    type: {
      type: String,
      default: uni.$u.props.input.type },

    // 如果 textarea 是在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true，
    // 兼容性：微信小程序、百度小程序、字节跳动小程序、QQ小程序
    fixed: {
      type: Boolean,
      default: uni.$u.props.input.fixed },

    // 是否禁用输入框
    disabled: {
      type: Boolean,
      default: uni.$u.props.input.disabled },

    // 禁用状态时的背景色
    disabledColor: {
      type: String,
      default: uni.$u.props.input.disabledColor },

    // 是否显示清除控件
    clearable: {
      type: Boolean,
      default: uni.$u.props.input.clearable },

    // 是否密码类型
    password: {
      type: Boolean,
      default: uni.$u.props.input.password },

    // 最大输入长度，设置为 -1 的时候不限制最大长度
    maxlength: {
      type: [String, Number],
      default: uni.$u.props.input.maxlength },

    // 	输入框为空时的占位符
    placeholder: {
      type: String,
      default: uni.$u.props.input.placeholder },

    // 指定placeholder的样式类，注意页面或组件的style中写了scoped时，需要在类名前写/deep/
    placeholderClass: {
      type: String,
      default: uni.$u.props.input.placeholderClass },

    // 指定placeholder的样式
    placeholderStyle: {
      type: [String, Object],
      default: uni.$u.props.input.placeholderStyle },

    // 是否显示输入字数统计，只在 type ="text"或type ="textarea"时有效
    showWordLimit: {
      type: Boolean,
      default: uni.$u.props.input.showWordLimit },

    // 设置右下角按钮的文字，有效值：send|search|next|go|done，兼容性详见uni-app文档
    // https://uniapp.dcloud.io/component/input
    // https://uniapp.dcloud.io/component/textarea
    confirmType: {
      type: String,
      default: uni.$u.props.input.confirmType },

    // 点击键盘右下角按钮时是否保持键盘不收起，H5无效
    confirmHold: {
      type: Boolean,
      default: uni.$u.props.input.confirmHold },

    // focus时，点击页面的时候不收起键盘，微信小程序有效
    holdKeyboard: {
      type: Boolean,
      default: uni.$u.props.input.holdKeyboard },

    // 自动获取焦点
    // 在 H5 平台能否聚焦以及软键盘是否跟随弹出，取决于当前浏览器本身的实现。nvue 页面不支持，需使用组件的 focus()、blur() 方法控制焦点
    focus: {
      type: Boolean,
      default: uni.$u.props.input.focus },

    // 键盘收起时，是否自动失去焦点，目前仅App3.0.0+有效
    autoBlur: {
      type: Boolean,
      default: uni.$u.props.input.autoBlur },

    // 是否去掉 iOS 下的默认内边距，仅微信小程序，且type=textarea时有效
    disableDefaultPadding: {
      type: Boolean,
      default: uni.$u.props.input.disableDefaultPadding },

    // 指定focus时光标的位置
    cursor: {
      type: [String, Number],
      default: uni.$u.props.input.cursor },

    // 输入框聚焦时底部与键盘的距离
    cursorSpacing: {
      type: [String, Number],
      default: uni.$u.props.input.cursorSpacing },

    // 光标起始位置，自动聚集时有效，需与selection-end搭配使用
    selectionStart: {
      type: [String, Number],
      default: uni.$u.props.input.selectionStart },

    // 光标结束位置，自动聚集时有效，需与selection-start搭配使用
    selectionEnd: {
      type: [String, Number],
      default: uni.$u.props.input.selectionEnd },

    // 键盘弹起时，是否自动上推页面
    adjustPosition: {
      type: Boolean,
      default: uni.$u.props.input.adjustPosition },

    // 输入框内容对齐方式，可选值为：left|center|right
    inputAlign: {
      type: String,
      default: uni.$u.props.input.inputAlign },

    // 输入框字体的大小
    fontSize: {
      type: [String, Number],
      default: uni.$u.props.input.fontSize },

    // 输入框字体颜色
    color: {
      type: String,
      default: uni.$u.props.input.color },

    // 输入框前置图标
    prefixIcon: {
      type: String,
      default: uni.$u.props.input.prefixIcon },

    // 前置图标样式，对象或字符串
    prefixIconStyle: {
      type: [String, Object],
      default: uni.$u.props.input.prefixIconStyle },

    // 输入框后置图标
    suffixIcon: {
      type: String,
      default: uni.$u.props.input.suffixIcon },

    // 后置图标样式，对象或字符串
    suffixIconStyle: {
      type: [String, Object],
      default: uni.$u.props.input.suffixIconStyle },

    // 边框类型，surround-四周边框，bottom-底部边框，none-无边框
    border: {
      type: String,
      default: uni.$u.props.input.border },

    // 是否只读，与disabled不同之处在于disabled会置灰组件，而readonly则不会
    readonly: {
      type: Boolean,
      default: uni.$u.props.input.readonly },

    // 输入框形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: uni.$u.props.input.shape },

    // 用于处理或者过滤输入框内容的方法
    formatter: {
      type: [Function, null],
      default: uni.$u.props.input.formatter } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */
/*!*********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-radio-group/props.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 绑定的值
    value: {
      type: [String, Number, Boolean],
      default: uni.$u.props.radioGroup.value },


    // 是否禁用全部radio
    disabled: {
      type: Boolean,
      default: uni.$u.props.radioGroup.disabled },

    // 形状，circle-圆形，square-方形
    shape: {
      type: String,
      default: uni.$u.props.radioGroup.shape },

    // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
    activeColor: {
      type: String,
      default: uni.$u.props.radioGroup.activeColor },

    // 未选中的颜色
    inactiveColor: {
      type: String,
      default: uni.$u.props.radioGroup.inactiveColor },

    // 标识符
    name: {
      type: String,
      default: uni.$u.props.radioGroup.name },

    // 整个组件的尺寸，默认px
    size: {
      type: [String, Number],
      default: uni.$u.props.radioGroup.size },

    // 布局方式，row-横向，column-纵向
    placement: {
      type: String,
      default: uni.$u.props.radioGroup.placement },

    // label的文本
    label: {
      type: [String],
      default: uni.$u.props.radioGroup.label },

    // label的颜色 （默认 '#303133' ）
    labelColor: {
      type: [String],
      default: uni.$u.props.radioGroup.labelColor },

    // label的字体大小，px单位
    labelSize: {
      type: [String, Number],
      default: uni.$u.props.radioGroup.labelSize },

    // 是否禁止点击文本操作checkbox(默认 false )
    labelDisabled: {
      type: Boolean,
      default: uni.$u.props.radioGroup.labelDisabled },

    // 图标颜色
    iconColor: {
      type: String,
      default: uni.$u.props.radioGroup.iconColor },

    // 图标的大小，单位px
    iconSize: {
      type: [String, Number],
      default: uni.$u.props.radioGroup.iconSize },

    // 竖向配列时，是否显示下划线
    borderBottom: {
      type: Boolean,
      default: uni.$u.props.radioGroup.borderBottom },

    // 图标与文字的对齐方式
    iconPlacement: {
      type: String,
      default: uni.$u.props.radio.iconPlacement } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */
/*!***************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-radio/props.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // radio的名称
    name: {
      type: [String, Number, Boolean],
      default: uni.$u.props.radio.name },

    // 形状，square为方形，circle为圆型
    shape: {
      type: String,
      default: uni.$u.props.radio.shape },

    // 是否禁用
    disabled: {
      type: [String, Boolean],
      default: uni.$u.props.radio.disabled },

    // 是否禁止点击提示语选中单选框
    labelDisabled: {
      type: [String, Boolean],
      default: uni.$u.props.radio.labelDisabled },

    // 选中状态下的颜色，如设置此值，将会覆盖parent的activeColor值
    activeColor: {
      type: String,
      default: uni.$u.props.radio.activeColor },

    // 未选中的颜色
    inactiveColor: {
      type: String,
      default: uni.$u.props.radio.inactiveColor },

    // 图标的大小，单位px
    iconSize: {
      type: [String, Number],
      default: uni.$u.props.radio.iconSize },

    // label的字体大小，px单位
    labelSize: {
      type: [String, Number],
      default: uni.$u.props.radio.labelSize },

    // label提示文字，因为nvue下，直接slot进来的文字，由于特殊的结构，无法修改样式
    label: {
      type: [String, Number],
      default: uni.$u.props.radio.label },

    // 整体的大小
    size: {
      type: [String, Number],
      default: uni.$u.props.radio.size },

    // 图标颜色
    color: {
      type: String,
      default: uni.$u.props.radio.color },

    // label的颜色
    labelColor: {
      type: String,
      default: uni.$u.props.radio.labelColor } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */
/*!***************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-popup/props.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 是否展示弹窗
    show: {
      type: Boolean,
      default: uni.$u.props.popup.show },

    // 是否显示遮罩
    overlay: {
      type: Boolean,
      default: uni.$u.props.popup.overlay },

    // 弹出的方向，可选值为 top bottom right left center
    mode: {
      type: String,
      default: uni.$u.props.popup.mode },

    // 动画时长，单位ms
    duration: {
      type: [String, Number],
      default: uni.$u.props.popup.duration },

    // 是否显示关闭图标
    closeable: {
      type: Boolean,
      default: uni.$u.props.popup.closeable },

    // 自定义遮罩的样式
    overlayStyle: {
      type: [Object, String],
      default: uni.$u.props.popup.overlayStyle },

    // 点击遮罩是否关闭弹窗
    closeOnClickOverlay: {
      type: Boolean,
      default: uni.$u.props.popup.closeOnClickOverlay },

    // 层级
    zIndex: {
      type: [String, Number],
      default: uni.$u.props.popup.zIndex },

    // 是否为iPhoneX留出底部安全距离
    safeAreaInsetBottom: {
      type: Boolean,
      default: uni.$u.props.popup.safeAreaInsetBottom },

    // 是否留出顶部安全距离（状态栏高度）
    safeAreaInsetTop: {
      type: Boolean,
      default: uni.$u.props.popup.safeAreaInsetTop },

    // 自定义关闭图标位置，top-left为左上角，top-right为右上角，bottom-left为左下角，bottom-right为右下角
    closeIconPos: {
      type: String,
      default: uni.$u.props.popup.closeIconPos },

    // 是否显示圆角
    round: {
      type: [Boolean, String, Number],
      default: uni.$u.props.popup.round },

    // mode=center，也即中部弹出时，是否使用缩放模式
    zoom: {
      type: Boolean,
      default: uni.$u.props.popup.zoom },

    // 弹窗背景色，设置为transparent可去除白色背景
    bgColor: {
      type: String,
      default: uni.$u.props.popup.bgColor },

    // 遮罩的透明度，0-1之间
    overlayOpacity: {
      type: [Number, String],
      default: uni.$u.props.popup.overlayOpacity } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */
/*!*****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-toolbar/props.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 是否展示工具条
    show: {
      type: Boolean,
      default: uni.$u.props.toolbar.show },

    // 取消按钮的文字
    cancelText: {
      type: String,
      default: uni.$u.props.toolbar.cancelText },

    // 确认按钮的文字
    confirmText: {
      type: String,
      default: uni.$u.props.toolbar.confirmText },

    // 取消按钮的颜色
    cancelColor: {
      type: String,
      default: uni.$u.props.toolbar.cancelColor },

    // 确认按钮的颜色
    confirmColor: {
      type: String,
      default: uni.$u.props.toolbar.confirmColor },

    // 标题文字
    title: {
      type: String,
      default: uni.$u.props.toolbar.title } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */
/*!**********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-loading-icon/props.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 是否显示组件
    show: {
      type: Boolean,
      default: uni.$u.props.loadingIcon.show },

    // 颜色
    color: {
      type: String,
      default: uni.$u.props.loadingIcon.color },

    // 提示文字颜色
    textColor: {
      type: String,
      default: uni.$u.props.loadingIcon.textColor },

    // 文字和图标是否垂直排列
    vertical: {
      type: Boolean,
      default: uni.$u.props.loadingIcon.vertical },

    // 模式选择，circle-圆形，spinner-花朵形，semicircle-半圆形
    mode: {
      type: String,
      default: uni.$u.props.loadingIcon.mode },

    // 图标大小，单位默认px
    size: {
      type: [String, Number],
      default: uni.$u.props.loadingIcon.size },

    // 文字大小
    textSize: {
      type: [String, Number],
      default: uni.$u.props.loadingIcon.textSize },

    // 文字内容
    text: {
      type: [String, Number],
      default: uni.$u.props.loadingIcon.text },

    // 动画模式
    timingFunction: {
      type: String,
      default: uni.$u.props.loadingIcon.timingFunction },

    // 动画执行周期时间
    duration: {
      type: [String, Number],
      default: uni.$u.props.loadingIcon.duration },

    // mode=circle时的暗边颜色
    inactiveColor: {
      type: String,
      default: uni.$u.props.loadingIcon.inactiveColor } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */
/*!**************************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-swiper-indicator/props.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 轮播的长度
    length: {
      type: [String, Number],
      default: uni.$u.props.swiperIndicator.length },

    // 当前处于活动状态的轮播的索引
    current: {
      type: [String, Number],
      default: uni.$u.props.swiperIndicator.current },

    // 指示器非激活颜色
    indicatorActiveColor: {
      type: String,
      default: uni.$u.props.swiperIndicator.indicatorActiveColor },

    // 指示器的激活颜色
    indicatorInactiveColor: {
      type: String,
      default: uni.$u.props.swiperIndicator.indicatorInactiveColor },

    // 指示器模式，line-线型，dot-点型
    indicatorMode: {
      type: String,
      default: uni.$u.props.swiperIndicator.indicatorMode } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */
/*!*****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-overlay/props.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 是否显示遮罩
    show: {
      type: Boolean,
      default: uni.$u.props.overlay.show },

    // 层级z-index
    zIndex: {
      type: [String, Number],
      default: uni.$u.props.overlay.zIndex },

    // 遮罩的过渡时间，单位为ms
    duration: {
      type: [String, Number],
      default: uni.$u.props.overlay.duration },

    // 不透明度值，当做rgba的第四个参数
    opacity: {
      type: [String, Number],
      default: uni.$u.props.overlay.opacity } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */
/*!*************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-gap/props.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 背景颜色（默认transparent）
    bgColor: {
      type: String,
      default: uni.$u.props.gap.bgColor },

    // 分割槽高度，单位px（默认30）
    height: {
      type: [String, Number],
      default: uni.$u.props.gap.height },

    // 与上一个组件的距离
    marginTop: {
      type: [String, Number],
      default: uni.$u.props.gap.marginTop },

    // 与下一个组件的距离
    marginBottom: {
      type: [String, Number],
      default: uni.$u.props.gap.marginBottom } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */
/*!**************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-line/props.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    color: {
      type: String,
      default: uni.$u.props.line.color },

    // 长度，竖向时表现为高度，横向时表现为长度，可以为百分比，带px单位的值等
    length: {
      type: [String, Number],
      default: uni.$u.props.line.length },

    // 线条方向，col-竖向，row-横向
    direction: {
      type: String,
      default: uni.$u.props.line.direction },

    // 是否显示细边框
    hairline: {
      type: Boolean,
      default: uni.$u.props.line.hairline },

    // 线条与上下左右元素的间距，字符串形式，如"30px"、"20px 30px"
    margin: {
      type: [String, Number],
      default: uni.$u.props.line.margin },

    // 是否虚线，true-虚线，false-实线
    dashed: {
      type: Boolean,
      default: uni.$u.props.line.dashed } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */
/*!********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-transition/props.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    // 是否展示组件
    show: {
      type: Boolean,
      default: uni.$u.props.transition.show },

    // 使用的动画模式
    mode: {
      type: String,
      default: uni.$u.props.transition.mode },

    // 动画的执行时间，单位ms
    duration: {
      type: [String, Number],
      default: uni.$u.props.transition.duration },

    // 使用的动画过渡函数
    timingFunction: {
      type: String,
      default: uni.$u.props.transition.timingFunction } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 357 */
/*!*************************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-transition/transition.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 34));


var _nvueAniMap = _interopRequireDefault(__webpack_require__(/*! ./nvue.ani-map.js */ 358));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} // 定义一个一定时间后自动成功的promise，让调用nextTick方法处，进入下一个then方法
var nextTick = function nextTick() {return new Promise(function (resolve) {return setTimeout(resolve, 1000 / 50);});}; // nvue动画模块实现细节抽离在外部文件

// 定义类名，通过给元素动态切换类名，赋予元素一定的css动画样式
var getClassNames = function getClassNames(name) {return {
    enter: "u-".concat(name, "-enter u-").concat(name, "-enter-active"),
    'enter-to': "u-".concat(name, "-enter-to u-").concat(name, "-enter-active"),
    leave: "u-".concat(name, "-leave u-").concat(name, "-leave-active"),
    'leave-to': "u-".concat(name, "-leave-to u-").concat(name, "-leave-active") };};var _default =










{
  methods: {
    // 组件被点击发出事件
    clickHandler: function clickHandler() {
      this.$emit('click');
    },

    // vue版本的组件进场处理
    vueEnter: function vueEnter() {var _this = this;
      // 动画进入时的类名
      var classNames = getClassNames(this.mode);
      // 定义状态和发出动画进入前事件
      this.status = 'enter';
      this.$emit('beforeEnter');
      this.inited = true;
      this.display = true;
      this.classes = classNames.enter;
      this.$nextTick( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:



                // 标识动画尚未结束
                _this.$emit('enter');
                _this.transitionEnded = false;
                // 组件动画进入后触发的事件
                _this.$emit('afterEnter');
                // 赋予组件enter-to类名
                _this.classes = classNames['enter-to'];case 4:case "end":return _context.stop();}}}, _callee);})));

    },
    // 动画离场处理
    vueLeave: function vueLeave() {var _this2 = this;
      // 如果不是展示状态，无需执行逻辑
      if (!this.display) return;
      var classNames = getClassNames(this.mode);
      // 标记离开状态和发出事件
      this.status = 'leave';
      this.$emit('beforeLeave');
      // 获得类名
      this.classes = classNames.leave;

      this.$nextTick(function () {
        // 动画正在离场的状态
        _this2.transitionEnded = false;
        _this2.$emit('leave');
        // 组件执行动画，到了执行的执行时间后，执行一些额外处理
        setTimeout(_this2.onTransitionEnd, _this2.duration);
        _this2.classes = classNames['leave-to'];
      });
    },







































































    // 完成过渡后触发
    onTransitionEnd: function onTransitionEnd() {
      // 如果已经是结束的状态，无需再处理
      if (this.transitionEnded) return;
      this.transitionEnded = true;
      // 发出组件动画执行后的事件
      this.$emit(this.status === 'leave' ? 'afterLeave' : 'afterEnter');
      if (!this.show && this.display) {
        this.display = false;
        this.inited = false;
      }
    } } };exports.default = _default;

/***/ }),
/* 358 */
/*!***************************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-transition/nvue.ani-map.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  fade: {
    enter: { opacity: 0 },
    'enter-to': { opacity: 1 },
    leave: { opacity: 1 },
    'leave-to': { opacity: 0 } },

  'fade-up': {
    enter: { opacity: 0, transform: 'translateY(100%)' },
    'enter-to': { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 1, transform: 'translateY(0)' },
    'leave-to': { opacity: 0, transform: 'translateY(100%)' } },

  'fade-down': {
    enter: { opacity: 0, transform: 'translateY(-100%)' },
    'enter-to': { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 1, transform: 'translateY(0)' },
    'leave-to': { opacity: 0, transform: 'translateY(-100%)' } },

  'fade-left': {
    enter: { opacity: 0, transform: 'translateX(-100%)' },
    'enter-to': { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 1, transform: 'translateY(0)' },
    'leave-to': { opacity: 0, transform: 'translateX(-100%)' } },

  'fade-right': {
    enter: { opacity: 0, transform: 'translateX(100%)' },
    'enter-to': { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 1, transform: 'translateY(0)' },
    'leave-to': { opacity: 0, transform: 'translateX(100%)' } },

  'slide-up': {
    enter: { transform: 'translateY(100%)' },
    'enter-to': { transform: 'translateY(0)' },
    leave: { transform: 'translateY(0)' },
    'leave-to': { transform: 'translateY(100%)' } },

  'slide-down': {
    enter: { transform: 'translateY(-100%)' },
    'enter-to': { transform: 'translateY(0)' },
    leave: { transform: 'translateY(0)' },
    'leave-to': { transform: 'translateY(-100%)' } },

  'slide-left': {
    enter: { transform: 'translateX(-100%)' },
    'enter-to': { transform: 'translateY(0)' },
    leave: { transform: 'translateY(0)' },
    'leave-to': { transform: 'translateX(-100%)' } },

  'slide-right': {
    enter: { transform: 'translateX(100%)' },
    'enter-to': { transform: 'translateY(0)' },
    leave: { transform: 'translateY(0)' },
    'leave-to': { transform: 'translateX(100%)' } },

  zoom: {
    enter: { transform: 'scale(0.95)' },
    'enter-to': { transform: 'scale(1)' },
    leave: { transform: 'scale(1)' },
    'leave-to': { transform: 'scale(0.95)' } },

  'fade-zoom': {
    enter: { opacity: 0, transform: 'scale(0.95)' },
    'enter-to': { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 1, transform: 'scale(1)' },
    'leave-to': { opacity: 0, transform: 'scale(0.95)' } } };exports.default = _default;

/***/ }),
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */
/*!****************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/libs/util/async-validator.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/* eslint no-console:0 */
var formatRegExp = /%[sdj%]/g;
var warning = function warning() {}; // don't print warning message when in production env or node runtime

if (typeof process !== 'undefined' && Object({"VUE_APP_NAME":"LZ_doctor","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}) && "development" !== 'production' && typeof window !==
'undefined' && typeof document !== 'undefined') {
  warning = function warning(type, errors) {
    if (typeof console !== 'undefined' && console.warn) {
      if (errors.every(function (e) {return typeof e === 'string';})) {
        console.warn(type, errors);
      }
    }
  };
}

function convertFieldsError(errors) {
  if (!errors || !errors.length) return null;
  var fields = {};
  errors.forEach(function (error) {var
    field = error.field;
    fields[field] = fields[field] || [];
    fields[field].push(error);
  });
  return fields;
}

function format() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var i = 1;
  var f = args[0];
  var len = args.length;

  if (typeof f === 'function') {
    return f.apply(null, args.slice(1));
  }

  if (typeof f === 'string') {
    var str = String(f).replace(formatRegExp, function (x) {
      if (x === '%%') {
        return '%';
      }

      if (i >= len) {
        return x;
      }

      switch (x) {
        case '%s':
          return String(args[i++]);

        case '%d':
          return Number(args[i++]);

        case '%j':
          try {
            return JSON.stringify(args[i++]);
          } catch (_) {
            return '[Circular]';
          }

          break;

        default:
          return x;}

    });

    for (var arg = args[i]; i < len; arg = args[++i]) {
      str += " ".concat(arg);
    }

    return str;
  }

  return f;
}

function isNativeStringType(type) {
  return type === 'string' || type === 'url' || type === 'hex' || type === 'email' || type === 'pattern';
}

function isEmptyValue(value, type) {
  if (value === undefined || value === null) {
    return true;
  }

  if (type === 'array' && Array.isArray(value) && !value.length) {
    return true;
  }

  if (isNativeStringType(type) && typeof value === 'string' && !value) {
    return true;
  }

  return false;
}

function asyncParallelArray(arr, func, callback) {
  var results = [];
  var total = 0;
  var arrLength = arr.length;

  function count(errors) {
    results.push.apply(results, errors);
    total++;

    if (total === arrLength) {
      callback(results);
    }
  }

  arr.forEach(function (a) {
    func(a, count);
  });
}

function asyncSerialArray(arr, func, callback) {
  var index = 0;
  var arrLength = arr.length;

  function next(errors) {
    if (errors && errors.length) {
      callback(errors);
      return;
    }

    var original = index;
    index += 1;

    if (original < arrLength) {
      func(arr[original], next);
    } else {
      callback([]);
    }
  }

  next([]);
}

function flattenObjArr(objArr) {
  var ret = [];
  Object.keys(objArr).forEach(function (k) {
    ret.push.apply(ret, objArr[k]);
  });
  return ret;
}

function asyncMap(objArr, option, func, callback) {
  if (option.first) {
    var _pending = new Promise(function (resolve, reject) {
      var next = function next(errors) {
        callback(errors);
        return errors.length ? reject({
          errors: errors,
          fields: convertFieldsError(errors) }) :
        resolve();
      };

      var flattenArr = flattenObjArr(objArr);
      asyncSerialArray(flattenArr, func, next);
    });

    _pending.catch(function (e) {return e;});

    return _pending;
  }

  var firstFields = option.firstFields || [];

  if (firstFields === true) {
    firstFields = Object.keys(objArr);
  }

  var objArrKeys = Object.keys(objArr);
  var objArrLength = objArrKeys.length;
  var total = 0;
  var results = [];
  var pending = new Promise(function (resolve, reject) {
    var next = function next(errors) {
      results.push.apply(results, errors);
      total++;

      if (total === objArrLength) {
        callback(results);
        return results.length ? reject({
          errors: results,
          fields: convertFieldsError(results) }) :
        resolve();
      }
    };

    if (!objArrKeys.length) {
      callback(results);
      resolve();
    }

    objArrKeys.forEach(function (key) {
      var arr = objArr[key];

      if (firstFields.indexOf(key) !== -1) {
        asyncSerialArray(arr, func, next);
      } else {
        asyncParallelArray(arr, func, next);
      }
    });
  });
  pending.catch(function (e) {return e;});
  return pending;
}

function complementError(rule) {
  return function (oe) {
    if (oe && oe.message) {
      oe.field = oe.field || rule.fullField;
      return oe;
    }

    return {
      message: typeof oe === 'function' ? oe() : oe,
      field: oe.field || rule.fullField };

  };
}

function deepMerge(target, source) {
  if (source) {
    for (var s in source) {
      if (source.hasOwnProperty(s)) {
        var value = source[s];

        if (typeof value === 'object' && typeof target[s] === 'object') {
          target[s] = _objectSpread(_objectSpread({}, target[s]), value);
        } else {
          target[s] = value;
        }
      }
    }
  }

  return target;
}

/**
   *  Rule for validating required fields.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param source The source object being validated.
   *  @param errors An array of errors that this rule may add
   *  validation errors to.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function required(rule, value, source, errors, options, type) {
  if (rule.required && (!source.hasOwnProperty(rule.field) || isEmptyValue(value, type || rule.type))) {
    errors.push(format(options.messages.required, rule.fullField));
  }
}

/**
   *  Rule for validating whitespace.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param source The source object being validated.
   *  @param errors An array of errors that this rule may add
   *  validation errors to.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function whitespace(rule, value, source, errors, options) {
  if (/^\s+$/.test(value) || value === '') {
    errors.push(format(options.messages.whitespace, rule.fullField));
  }
}

/* eslint max-len:0 */

var pattern = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: new RegExp(
  "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
  'i'),

  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i };

var types = {
  integer: function integer(value) {
    return /^(-)?\d+$/.test(value);
  },
  float: function float(value) {
    return /^(-)?\d+(\.\d+)?$/.test(value);
  },
  array: function array(value) {
    return Array.isArray(value);
  },
  regexp: function regexp(value) {
    if (value instanceof RegExp) {
      return true;
    }

    try {
      return !!new RegExp(value);
    } catch (e) {
      return false;
    }
  },
  date: function date(value) {
    return typeof value.getTime === 'function' && typeof value.getMonth === 'function' && typeof value.getYear ===
    'function';
  },
  number: function number(value) {
    if (isNaN(value)) {
      return false;
    }

    // 修改源码，将字符串数值先转为数值
    return typeof +value === 'number';
  },
  object: function object(value) {
    return typeof value === 'object' && !types.array(value);
  },
  method: function method(value) {
    return typeof value === 'function';
  },
  email: function email(value) {
    return typeof value === 'string' && !!value.match(pattern.email) && value.length < 255;
  },
  url: function url(value) {
    return typeof value === 'string' && !!value.match(pattern.url);
  },
  hex: function hex(value) {
    return typeof value === 'string' && !!value.match(pattern.hex);
  } };

/**
        *  Rule for validating the type of a value.
        *
        *  @param rule The validation rule.
        *  @param value The value of the field on the source object.
        *  @param source The source object being validated.
        *  @param errors An array of errors that this rule may add
        *  validation errors to.
        *  @param options The validation options.
        *  @param options.messages The validation messages.
        */

function type(rule, value, source, errors, options) {
  if (rule.required && value === undefined) {
    required(rule, value, source, errors, options);
    return;
  }

  var custom = ['integer', 'float', 'array', 'regexp', 'object', 'method', 'email', 'number', 'date', 'url', 'hex'];
  var ruleType = rule.type;

  if (custom.indexOf(ruleType) > -1) {
    if (!types[ruleType](value)) {
      errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
    } // straight typeof check
  } else if (ruleType && typeof value !== rule.type) {
    errors.push(format(options.messages.types[ruleType], rule.fullField, rule.type));
  }
}

/**
   *  Rule for validating minimum and maximum allowed values.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param source The source object being validated.
   *  @param errors An array of errors that this rule may add
   *  validation errors to.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function range(rule, value, source, errors, options) {
  var len = typeof rule.len === 'number';
  var min = typeof rule.min === 'number';
  var max = typeof rule.max === 'number'; // 正则匹配码点范围从U+010000一直到U+10FFFF的文字（补充平面Supplementary Plane）

  var spRegexp = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  var val = value;
  var key = null;
  var num = typeof value === 'number';
  var str = typeof value === 'string';
  var arr = Array.isArray(value);

  if (num) {
    key = 'number';
  } else if (str) {
    key = 'string';
  } else if (arr) {
    key = 'array';
  } // if the value is not of a supported type for range validation
  // the validation rule rule should use the
  // type property to also test for a particular type

  if (!key) {
    return false;
  }

  if (arr) {
    val = value.length;
  }

  if (str) {
    // 处理码点大于U+010000的文字length属性不准确的bug，如"𠮷𠮷𠮷".lenght !== 3
    val = value.replace(spRegexp, '_').length;
  }

  if (len) {
    if (val !== rule.len) {
      errors.push(format(options.messages[key].len, rule.fullField, rule.len));
    }
  } else if (min && !max && val < rule.min) {
    errors.push(format(options.messages[key].min, rule.fullField, rule.min));
  } else if (max && !min && val > rule.max) {
    errors.push(format(options.messages[key].max, rule.fullField, rule.max));
  } else if (min && max && (val < rule.min || val > rule.max)) {
    errors.push(format(options.messages[key].range, rule.fullField, rule.min, rule.max));
  }
}

var ENUM = 'enum';
/**
                    *  Rule for validating a value exists in an enumerable list.
                    *
                    *  @param rule The validation rule.
                    *  @param value The value of the field on the source object.
                    *  @param source The source object being validated.
                    *  @param errors An array of errors that this rule may add
                    *  validation errors to.
                    *  @param options The validation options.
                    *  @param options.messages The validation messages.
                    */

function enumerable(rule, value, source, errors, options) {
  rule[ENUM] = Array.isArray(rule[ENUM]) ? rule[ENUM] : [];

  if (rule[ENUM].indexOf(value) === -1) {
    errors.push(format(options.messages[ENUM], rule.fullField, rule[ENUM].join(', ')));
  }
}

/**
   *  Rule for validating a regular expression pattern.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param source The source object being validated.
   *  @param errors An array of errors that this rule may add
   *  validation errors to.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function pattern$1(rule, value, source, errors, options) {
  if (rule.pattern) {
    if (rule.pattern instanceof RegExp) {
      // if a RegExp instance is passed, reset `lastIndex` in case its `global`
      // flag is accidentally set to `true`, which in a validation scenario
      // is not necessary and the result might be misleading
      rule.pattern.lastIndex = 0;

      if (!rule.pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    } else if (typeof rule.pattern === 'string') {
      var _pattern = new RegExp(rule.pattern);

      if (!_pattern.test(value)) {
        errors.push(format(options.messages.pattern.mismatch, rule.fullField, value, rule.pattern));
      }
    }
  }
}

var rules = {
  required: required,
  whitespace: whitespace,
  type: type,
  range: range,
  enum: enumerable,
  pattern: pattern$1 };


/**
                         *  Performs validation for string types.
                         *
                         *  @param rule The validation rule.
                         *  @param value The value of the field on the source object.
                         *  @param callback The callback function.
                         *  @param source The source object being validated.
                         *  @param options The validation options.
                         *  @param options.messages The validation messages.
                         */

function string(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'string');

    if (!isEmptyValue(value, 'string')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
      rules.pattern(rule, value, source, errors, options);

      if (rule.whitespace === true) {
        rules.whitespace(rule, value, source, errors, options);
      }
    }
  }

  callback(errors);
}

/**
   *  Validates a function.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function method(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a number.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function number(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (value === '') {
      value = undefined;
    }

    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a boolean.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function _boolean(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates the regular expression type.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function regexp(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a number is an integer.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function integer(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a number is a floating point number.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function floatFn(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates an array.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function array(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'array') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, 'array');

    if (!isEmptyValue(value, 'array')) {
      rules.type(rule, value, source, errors, options);
      rules.range(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates an object.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function object(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

var ENUM$1 = 'enum';
/**
                      *  Validates an enumerable list.
                      *
                      *  @param rule The validation rule.
                      *  @param value The value of the field on the source object.
                      *  @param callback The callback function.
                      *  @param source The source object being validated.
                      *  @param options The validation options.
                      *  @param options.messages The validation messages.
                      */

function enumerable$1(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (value !== undefined) {
      rules[ENUM$1](rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Validates a regular expression pattern.
   *
   *  Performs validation when a rule only contains
   *  a pattern property but is not declared as a string type.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function pattern$2(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, 'string') && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value, 'string')) {
      rules.pattern(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

function date(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);

    if (!isEmptyValue(value)) {
      var dateObject;

      if (typeof value === 'number') {
        dateObject = new Date(value);
      } else {
        dateObject = value;
      }

      rules.type(rule, dateObject, source, errors, options);

      if (dateObject) {
        rules.range(rule, dateObject.getTime(), source, errors, options);
      }
    }
  }

  callback(errors);
}

function required$1(rule, value, callback, source, options) {
  var errors = [];
  var type = Array.isArray(value) ? 'array' : typeof value;
  rules.required(rule, value, source, errors, options, type);
  callback(errors);
}

function type$1(rule, value, callback, source, options) {
  var ruleType = rule.type;
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value, ruleType) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options, ruleType);

    if (!isEmptyValue(value, ruleType)) {
      rules.type(rule, value, source, errors, options);
    }
  }

  callback(errors);
}

/**
   *  Performs validation for any type.
   *
   *  @param rule The validation rule.
   *  @param value The value of the field on the source object.
   *  @param callback The callback function.
   *  @param source The source object being validated.
   *  @param options The validation options.
   *  @param options.messages The validation messages.
   */

function any(rule, value, callback, source, options) {
  var errors = [];
  var validate = rule.required || !rule.required && source.hasOwnProperty(rule.field);

  if (validate) {
    if (isEmptyValue(value) && !rule.required) {
      return callback();
    }

    rules.required(rule, value, source, errors, options);
  }

  callback(errors);
}

var validators = {
  string: string,
  method: method,
  number: number,
  boolean: _boolean,
  regexp: regexp,
  integer: integer,
  float: floatFn,
  array: array,
  object: object,
  enum: enumerable$1,
  pattern: pattern$2,
  date: date,
  url: type$1,
  hex: type$1,
  email: type$1,
  required: required$1,
  any: any };


function newMessages() {
  return {
    default: 'Validation error on field %s',
    required: '%s is required',
    enum: '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid' },

    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s' },

    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters' },

    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s' },

    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length' },

    pattern: {
      mismatch: '%s value %s does not match pattern %s' },

    clone: function clone() {
      var cloned = JSON.parse(JSON.stringify(this));
      cloned.clone = this.clone;
      return cloned;
    } };

}
var messages = newMessages();

/**
                               *  Encapsulates a validation schema.
                               *
                               *  @param descriptor An object declaring validation rules
                               *  for this schema.
                               */

function Schema(descriptor) {
  this.rules = null;
  this._messages = messages;
  this.define(descriptor);
}

Schema.prototype = {
  messages: function messages(_messages) {
    if (_messages) {
      this._messages = deepMerge(newMessages(), _messages);
    }

    return this._messages;
  },
  define: function define(rules) {
    if (!rules) {
      throw new Error('Cannot configure a schema with no rules');
    }

    if (typeof rules !== 'object' || Array.isArray(rules)) {
      throw new Error('Rules must be an object');
    }

    this.rules = {};
    var z;
    var item;

    for (z in rules) {
      if (rules.hasOwnProperty(z)) {
        item = rules[z];
        this.rules[z] = Array.isArray(item) ? item : [item];
      }
    }
  },
  validate: function validate(source_, o, oc) {
    var _this = this;

    if (o === void 0) {
      o = {};
    }

    if (oc === void 0) {
      oc = function oc() {};
    }

    var source = source_;
    var options = o;
    var callback = oc;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    if (!this.rules || Object.keys(this.rules).length === 0) {
      if (callback) {
        callback();
      }

      return Promise.resolve();
    }

    function complete(results) {
      var i;
      var errors = [];
      var fields = {};

      function add(e) {
        if (Array.isArray(e)) {
          var _errors;

          errors = (_errors = errors).concat.apply(_errors, e);
        } else {
          errors.push(e);
        }
      }

      for (i = 0; i < results.length; i++) {
        add(results[i]);
      }

      if (!errors.length) {
        errors = null;
        fields = null;
      } else {
        fields = convertFieldsError(errors);
      }

      callback(errors, fields);
    }

    if (options.messages) {
      var messages$1 = this.messages();

      if (messages$1 === messages) {
        messages$1 = newMessages();
      }

      deepMerge(messages$1, options.messages);
      options.messages = messages$1;
    } else {
      options.messages = this.messages();
    }

    var arr;
    var value;
    var series = {};
    var keys = options.keys || Object.keys(this.rules);
    keys.forEach(function (z) {
      arr = _this.rules[z];
      value = source[z];
      arr.forEach(function (r) {
        var rule = r;

        if (typeof rule.transform === 'function') {
          if (source === source_) {
            source = _objectSpread({}, source);
          }

          value = source[z] = rule.transform(value);
        }

        if (typeof rule === 'function') {
          rule = {
            validator: rule };

        } else {
          rule = _objectSpread({}, rule);
        }

        rule.validator = _this.getValidationMethod(rule);
        rule.field = z;
        rule.fullField = rule.fullField || z;
        rule.type = _this.getType(rule);

        if (!rule.validator) {
          return;
        }

        series[z] = series[z] || [];
        series[z].push({
          rule: rule,
          value: value,
          source: source,
          field: z });

      });
    });
    var errorFields = {};
    return asyncMap(series, options, function (data, doIt) {var
      rule = data.rule;
      var deep = (rule.type === 'object' || rule.type === 'array') && (typeof rule.fields === 'object' || typeof rule.defaultField ===
      'object');
      deep = deep && (rule.required || !rule.required && data.value);
      rule.field = data.field;

      function addFullfield(key, schema) {
        return _objectSpread(_objectSpread({}, schema), {}, { fullField: "".concat(rule.fullField, ".").concat(key) });
      }

      function cb(e) {
        if (e === void 0) {
          e = [];
        }

        var errors = e;

        if (!Array.isArray(errors)) {
          errors = [errors];
        }

        if (!options.suppressWarning && errors.length) {
          Schema.warning('async-validator:', errors);
        }

        if (errors.length && rule.message) {
          errors = [].concat(rule.message);
        }

        errors = errors.map(complementError(rule));

        if (options.first && errors.length) {
          errorFields[rule.field] = 1;
          return doIt(errors);
        }

        if (!deep) {
          doIt(errors);
        } else {
          // if rule is required but the target object
          // does not exist fail at the rule level and don't
          // go deeper
          if (rule.required && !data.value) {
            if (rule.message) {
              errors = [].concat(rule.message).map(complementError(rule));
            } else if (options.error) {
              errors = [options.error(rule, format(options.messages.required, rule.field))];
            } else {
              errors = [];
            }

            return doIt(errors);
          }

          var fieldsSchema = {};

          if (rule.defaultField) {
            for (var k in data.value) {
              if (data.value.hasOwnProperty(k)) {
                fieldsSchema[k] = rule.defaultField;
              }
            }
          }

          fieldsSchema = _objectSpread(_objectSpread({}, fieldsSchema), data.rule.fields);

          for (var f in fieldsSchema) {
            if (fieldsSchema.hasOwnProperty(f)) {
              var fieldSchema = Array.isArray(fieldsSchema[f]) ? fieldsSchema[f] : [fieldsSchema[f]];
              fieldsSchema[f] = fieldSchema.map(addFullfield.bind(null, f));
            }
          }

          var schema = new Schema(fieldsSchema);
          schema.messages(options.messages);

          if (data.rule.options) {
            data.rule.options.messages = options.messages;
            data.rule.options.error = options.error;
          }

          schema.validate(data.value, data.rule.options || options, function (errs) {
            var finalErrors = [];

            if (errors && errors.length) {
              finalErrors.push.apply(finalErrors, errors);
            }

            if (errs && errs.length) {
              finalErrors.push.apply(finalErrors, errs);
            }

            doIt(finalErrors.length ? finalErrors : null);
          });
        }
      }

      var res;

      if (rule.asyncValidator) {
        res = rule.asyncValidator(rule, data.value, cb, data.source, options);
      } else if (rule.validator) {
        res = rule.validator(rule, data.value, cb, data.source, options);

        if (res === true) {
          cb();
        } else if (res === false) {
          cb(rule.message || "".concat(rule.field, " fails"));
        } else if (res instanceof Array) {
          cb(res);
        } else if (res instanceof Error) {
          cb(res.message);
        }
      }

      if (res && res.then) {
        res.then(function () {return cb();}, function (e) {return cb(e);});
      }
    }, function (results) {
      complete(results);
    });
  },
  getType: function getType(rule) {
    if (rule.type === undefined && rule.pattern instanceof RegExp) {
      rule.type = 'pattern';
    }

    if (typeof rule.validator !== 'function' && rule.type && !validators.hasOwnProperty(rule.type)) {
      throw new Error(format('Unknown rule type %s', rule.type));
    }

    return rule.type || 'string';
  },
  getValidationMethod: function getValidationMethod(rule) {
    if (typeof rule.validator === 'function') {
      return rule.validator;
    }

    var keys = Object.keys(rule);
    var messageIndex = keys.indexOf('message');

    if (messageIndex !== -1) {
      keys.splice(messageIndex, 1);
    }

    if (keys.length === 1 && keys[0] === 'required') {
      return validators.required;
    }

    return validators[this.getType(rule)] || false;
  } };


Schema.register = function register(type, validator) {
  if (typeof validator !== 'function') {
    throw new Error('Cannot register a validator by type, validator is not a function');
  }

  validators[type] = validator;
};

Schema.warning = warning;
Schema.messages = messages;var _default =

Schema;
// # sourceMappingURL=index.js.map
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/node-libs-browser/mock/process.js */ 367)))

/***/ }),
/* 367 */
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 368);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),
/* 368 */
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 367)))

/***/ }),
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */
/*!********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-status-bar/props.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {
    bgColor: {
      type: String,
      default: uni.$u.props.statusBar.bgColor } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */
/*!*********************************************************************************!*\
  !*** D:/桌面文件夹/LZ_doctor/uni_modules/uview-ui/components/u-safe-bottom/props.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = {
  props: {} };exports.default = _default;

/***/ })
]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map