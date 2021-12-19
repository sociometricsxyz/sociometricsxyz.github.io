module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("hUgY");


/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "284h":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "40lu":
/***/ (function(module, exports) {

module.exports = require("styled-components-breakpoint");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
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


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "ANpm":
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "KNus":
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "KSsN":
/***/ (function(module, exports) {

module.exports = require("react-error-boundary");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await resolvePromiseWithTimeout(this.whenEntrypoint(route), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)));
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "TqRt":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XY2r":
/***/ (function(module, exports) {

var raw = "<svg viewBox=\"0 0 1920 105\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path opacity=\".25\" d=\"M0 54.005L142.29 30.16a2047.998 2047.998 0 01676.921 0L961.5 54.004l189.19 27.211a2047.962 2047.962 0 00583.12 0L1923 54.005\" stroke=\"#274171\" stroke-width=\"4\" stroke-linecap=\"round\"/></svg>"; module.exports = raw; exports.default = raw;

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "YVQ8":
/***/ (function(module, exports) {

module.exports = require("nextjs-progressbar");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "efsx":
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "ewTs":
/***/ (function(module, exports) {



/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__("6D7l");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "hUgY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-components-breakpoint"
var external_styled_components_breakpoint_ = __webpack_require__("40lu");
var external_styled_components_breakpoint_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_breakpoint_);

// CONCATENATED MODULE: ./src/shared/Footer/FooterStyle.ts


const Container = external_styled_components_default.a.footer`
    width: 100%;
    padding: 3rem 1rem;
`;
const Inner = external_styled_components_default.a.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    max-width: 1200px;
    margin: auto;

    & > svg {
        width: 100%;
    }

    ${external_styled_components_breakpoint_default()("xs", "md")`
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`;
const Logo = external_styled_components_default.a.a`
    ${external_styled_components_breakpoint_default()("xs", "md")`
        margin-bottom: 2rem;
    `}

    svg {
        height: 2rem;
        width: auto;
    }
`;
const DesktopNavElement = external_styled_components_default.a.a`
    font-weight: ${({
  theme
}) => theme.fontWeight.primary.regular};
    color: ${({
  theme
}) => theme.colors.primary};
    font-weight: 1.25rem;

    ${external_styled_components_breakpoint_default()("xs", "md")`
        &:not(:last-child) {
            margin-bottom: 1rem;
        }
    `}

    ${external_styled_components_breakpoint_default()("md")`
        &:not(:last-child) {
            margin-right: 1.5rem;
        }
    `}

    &:last-child {
        padding: 0.75rem 1rem;
        border-radius: 2rem;
        border: 1px solid ${({
  theme
}) => theme.colors.primary};
        transition: 0.2s ease-out;

        &:hover {
            text-decoration: unset;
            background: ${({
  theme
}) => theme.colors.primary};
            color: ${({
  theme
}) => theme.colors.primaryLight};
        }
    }
`;
const DesktopNav = external_styled_components_default.a.div`
    display: flex;
    align-items: center;

    ${external_styled_components_breakpoint_default()("xs", "md")`
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `}
`;
// CONCATENATED MODULE: ./src/shared/Footer/FooterView.tsx






const Footer = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Container, {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Inner, {
      dangerouslySetInnerHTML: {
        __html: __webpack_require__("XY2r")
      }
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Inner, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Logo, {
        dangerouslySetInnerHTML: {
          __html: __webpack_require__("qtZQ")
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(DesktopNav, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/polityka-prywatnosci.pdf",
          passHref: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DesktopNavElement, {
            children: "Polityka prywatno\u015Bci"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/statut.pdf",
          passHref: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DesktopNavElement, {
            children: "Statut"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "#brands",
          passHref: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DesktopNavElement, {
            children: "Nasze marki"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "#contact",
          passHref: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(DesktopNavElement, {
            children: "Kontakt"
          })
        })]
      })]
    })]
  });
};

/* harmony default export */ var FooterView = (Footer);
// CONCATENATED MODULE: ./src/shared/Footer/index.ts

// CONCATENATED MODULE: ./src/shared/Header/HeaderStyle.ts


const HeaderStyle_Container = external_styled_components_default.a.header`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
`;
const HeaderStyle_Inner = external_styled_components_default.a.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    width: 100%;
    margin: auto;
    max-width: 1200px;
    position: relative;

    ${external_styled_components_breakpoint_default()("md")`
        padding: 3rem 1rem;
    `}
`;
const HeaderStyle_Logo = external_styled_components_default.a.a`
    display: flex;
    position: relative;
    height: 1.5rem;

    ${external_styled_components_breakpoint_default()("md")`
        height: 2rem;
    `}

    svg {
        height: 1.5rem;
        width: auto;
        position: absolute;
        top: 0;

        ${external_styled_components_breakpoint_default()("md")`
            font-size: 2rem;
        `}
    }
`;
const HeaderStyle_DesktopNavElement = external_styled_components_default.a.a`
    font-weight: ${({
  theme
}) => theme.fontWeight.primary.regular};
    color: ${({
  theme
}) => theme.colors.primary};
    font-weight: 1.25rem;

    &:hover {
        text-decoration: underline;
    }

    &:not(:last-child) {
        margin-right: 1rem;

        ${external_styled_components_breakpoint_default()("md")`
            margin-right: 1.5rem;
        `}
    }

    &:last-child {
        padding: 0.5rem 0.75rem;
        border-radius: 2rem;
        border: 1px solid ${({
  theme
}) => theme.colors.primary};
        transition: 0.2s ease-out;

        ${external_styled_components_breakpoint_default()("md")`
            padding: 0.75rem 1rem;
        `}

        &:hover {
            text-decoration: unset;
            background: ${({
  theme
}) => theme.colors.primary};
            color: ${({
  theme
}) => theme.colors.primaryLight};
        }
    }
`;
const HeaderStyle_DesktopNav = external_styled_components_default.a.div`
    display: flex;
    align-items: center;
`;
// CONCATENATED MODULE: ./src/shared/Header/HeaderView.tsx






const Header = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderStyle_Container, {
    children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeaderStyle_Inner, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderStyle_Logo, {
        className: "hide-full-xs",
        dangerouslySetInnerHTML: {
          __html: __webpack_require__("qtZQ")
        }
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeaderStyle_DesktopNav, {
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "/statut.pdf",
          passHref: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderStyle_DesktopNavElement, {
            children: "Statut"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "#brands",
          passHref: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderStyle_DesktopNavElement, {
            children: "Nasze marki"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(link_default.a, {
          href: "#contact",
          passHref: true,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderStyle_DesktopNavElement, {
            children: "Kontakt"
          })
        })]
      })]
    })
  });
};

/* harmony default export */ var HeaderView = (Header);
// CONCATENATED MODULE: ./src/shared/Header/index.ts

// CONCATENATED MODULE: ./src/theme/breakpoints.ts
const breakpoints = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440
};
/* harmony default export */ var theme_breakpoints = (breakpoints);
// CONCATENATED MODULE: ./src/theme/index.ts

const theme = {
  fontFamily: {
    primary: "Baloo2"
  },
  fontWeight: {
    primary: {
      regular: 400,
      bold: 600
    }
  },
  colors: {
    primary: '#274171',
    primaryLight: '#E9EEF8',
    yellow: '#FFCB66',
    red: '#FF9899',
    blue: '#61C0F9',
    teal: '#02B4C1'
  },
  shadows: {},
  breakpoints: theme_breakpoints
};
/* harmony default export */ var src_theme = (theme);
// EXTERNAL MODULE: external "react-error-boundary"
var external_react_error_boundary_ = __webpack_require__("KSsN");

// CONCATENATED MODULE: ./src/layout/globalStyles.ts


const GlobalStyle = external_styled_components_["createGlobalStyle"]`
    html {
        scroll-behavior: smooth;
    }
    
    body {
    font-family: ${({
  theme
}) => theme.fontFamily.primary}, sans-serif;
    background: #FFF;
    color: ${({
  theme
}) => theme.colors.primary};
    font-weight: ${({
  theme
}) => theme.fontWeight.primary.bold};
    line-height: normal;
      font-size: 16px;
  }
  
  h1, h2, h3, h4, h5 {
    margin: 0;
  }
  
    a {
      color: inherit;
      text-decoration: none;
    }
    
    * {
      box-sizing: border-box;
    }
    
    @font-face {
      font-family: "Baloo2";
      src: url("/static/fonts/Baloo2/Baloo2-Regular.ttf");
      font-style: normal;
      font-weight: 400;
      font-display: swap;
    }
    
    @font-face {
      font-family: "Baloo2";
      src: url("/static/fonts/Baloo2/Baloo2-Bold.ttf");
      font-style: normal;
      font-weight: 600;
      font-display: swap;
    }

  .container {
    max-width: ${({
  theme
}) => theme.breakpoints.xl}px;
    margin: 0 0.5rem;
    position: relative;
    width: calc(100% - 1rem);
  
    ${external_styled_components_breakpoint_default()("xl")`
      margin: auto;
    `};
  }
  
  .fade-enter {
    opacity: 0;
    }
    
    .fade-enter-active {
        opacity: 1;
        transition: opacity 200ms;
    }
    
    .fade-exit {
        opacity: 1;
    }
    
    .fade-exit-active {
        opacity: 0;
        transition: opacity 200ms;
    }
`;
/* harmony default export */ var globalStyles = (GlobalStyle);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@use-cookie-consent/core"
var core_ = __webpack_require__("mRRH");

// CONCATENATED MODULE: ./src/layout/Head/HeadCookie.tsx




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const HeadCookie_scripts = {};
const scriptsConsent = {
  marketing: [],
  necessary: [],
  statistics: []
};
const HeadCookie_Container = external_styled_components_default.a.div`
  position: fixed;
  left: 1rem;
  bottom: 1rem;
  max-width: 35rem;
  padding: 1.5rem;
  margin-right: 1rem;
  border-radius: 0.5rem;
  background: #E9EEF8;
  border: 1px solid rgba(204, 208, 217, 0.1);
  z-index: 1000;
  font-weight: 500;

  h1 {
    font-size: 1.2rem;
    line-height: 1.2;
  }

  p {
    color: #274171;
    opacity: 0.75;
  }

  .more {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    line-height: 1.5;

    label {
      cursor: pointer;
      color: #274171;
      opacity: 0.75;
    }

    h2 {
      font-size: 1rem;
      color: #274171;
      margin-bottom: 0.25rem;
    }
  }

  button {
    background: #274171;
    color: #fff;
    font-weight: 600;
    padding: 0.75rem;
    border: 0;
    border-radius: 0.25rem;
    cursor: pointer;

    &:last-child {
      margin-left: 0.5rem;
      background: transparent;
      color: #274171;
      border: 1px solid #274171;
    }
  }
`;

const HeadCookie = () => {
  const {
    consent: currentConsent,
    acceptAllCookies,
    acceptCookies
  } = Object(core_["useCookieConsent"])();
  const {
    0: showMore,
    1: setShowMore
  } = Object(external_react_["useState"])(false);
  const scripts = Object.entries(scriptsConsent).filter(([k, v]) => currentConsent[k]).map(([k, v]) => v.flat()).flat();
  const {
    0: consents,
    1: setConsents
  } = Object(external_react_["useState"])({
    marketing: false,
    necessary: true,
    statistics: false
  });
  const showModal = Object.keys(currentConsent).length === 0;
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(head_default.a, {
      children: scripts
    }), showModal && /*#__PURE__*/Object(jsx_runtime_["jsxs"])(HeadCookie_Container, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h1", {
        children: "Akceptacja plik\xF3w cookie"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
        children: "Strona korzysta z plik\xF3w cookie. Zar\xF3wno z tych niezb\u0119dnych - umo\u017Cliwiaj\u0105cych korzystanie z serwisu oraz z dodatkowych, wspieraj\u0105cych analityk\u0119 i marketing. Kliknij, aby zaakceptowa\u0107 wybrane pliki cookie."
      }), showMore && /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "more",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
          children: "Wybierz cookie do akceptacji"
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            type: "checkbox",
            disabled: true,
            checked: consents.necessary,
            onChange: e => setConsents(_objectSpread(_objectSpread({}, consents), {}, {
              necessary: e.target.checked
            }))
          }), ' ', "Funkcjonalne"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            type: "checkbox",
            checked: consents.statistics,
            onChange: e => setConsents(_objectSpread(_objectSpread({}, consents), {}, {
              statistics: e.target.checked
            }))
          }), ' ', "Analityczne"]
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("label", {
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("input", {
            type: "checkbox",
            checked: consents.marketing,
            onChange: e => setConsents(_objectSpread(_objectSpread({}, consents), {}, {
              marketing: e.target.checked
            }))
          }), ' ', "Marketingowe"]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: "buttons",
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: showMore ? () => acceptCookies(consents) : acceptAllCookies,
          children: "Akceptuj cookie"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("button", {
          onClick: () => setShowMore(!showMore),
          children: "Wybierz cookie"
        })]
      })]
    })]
  });
};

/* harmony default export */ var Head_HeadCookie = (HeadCookie);
// EXTERNAL MODULE: external "ramda"
var external_ramda_ = __webpack_require__("ANpm");

// CONCATENATED MODULE: ./src/layout/Head/HeadFonts.tsx




const fontsPreloadPaths = ["Baloo2/Baloo2-Regular.ttf", "Baloo2/Baloo2-Bold.ttf"];

const HeadFonts = () => {
  const toFontPreloadLink = path => /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
    rel: "preload",
    as: "font",
    crossOrigin: "",
    href: `/static/fonts/${path}`
  }, path);

  const fontsPreload = external_ramda_["map"](toFontPreloadLink, fontsPreloadPaths);
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(jsx_runtime_["Fragment"], {
    children: fontsPreload
  });
};

/* harmony default export */ var Head_HeadFonts = (HeadFonts);
// CONCATENATED MODULE: ./src/layout/Head/HeadManifest.tsx





const HeadManifest = () => /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
  children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
    rel: "apple-touch-icon",
    sizes: "76x76",
    href: "/apple-touch-icon.png"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
    rel: "icon",
    type: "image/png",
    sizes: "32x32",
    href: "/favicon-32x32.png"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
    rel: "icon",
    type: "image/png",
    sizes: "16x16",
    href: "/favicon-16x16.png"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
    rel: "manifest",
    href: "/site.webmanifest"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
    rel: "mask-icon",
    href: "/safari-pinned-tab.svg",
    color: "#5bbad5"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    name: "msapplication-TileColor",
    content: "#2b5797"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    name: "theme-color",
    content: "#ffffff"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  })]
});

/* harmony default export */ var Head_HeadManifest = (HeadManifest);
// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__("KNus");
var config_default = /*#__PURE__*/__webpack_require__.n(config_);

// CONCATENATED MODULE: ./src/constants.ts

const {
  publicRuntimeConfig
} = config_default()();
const BASE_PATH = false ? undefined : publicRuntimeConfig.BASE_PATH || "https://sociometrics.xyz/";
const paths = {
  home: "/"
};
const titleTemplate = "%s | Sociometrics";
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// CONCATENATED MODULE: ./src/utils/hooks/useCanonicalUrl.ts



const useCanonicalUrl = defaultPath => {
  const {
    asPath
  } = Object(router_["useRouter"])();
  const path = defaultPath || asPath.split("?")[0];
  return {
    url: `${BASE_PATH}/${path}`
  };
};

/* harmony default export */ var hooks_useCanonicalUrl = (useCanonicalUrl);
// EXTERNAL MODULE: external "next-seo"
var external_next_seo_ = __webpack_require__("efsx");

// CONCATENATED MODULE: ./src/layout/Head/HeadSEO.tsx






const HeadSEO = () => {
  const {
    url
  } = hooks_useCanonicalUrl();
  return /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_next_seo_["DefaultSeo"], {
    title: "Sociometrics",
    description: "Tworzymy odpowiedzialne spo\u0142ecznie rozwi\u0105zania",
    canonical: url,
    openGraph: {
      url,
      type: "website",
      site_name: "Sociometrics",
      description: "Tworzymy odpowiedzialne społecznie rozwiązania",
      locale: 'pl_PL',
      images: [{
        url: `${BASE_PATH}/static/thumbnail.png`,
        width: 1200,
        height: 630,
        alt: "Sociometrics thumbnail"
      }]
    }
  });
};

/* harmony default export */ var Head_HeadSEO = (HeadSEO);
// CONCATENATED MODULE: ./src/layout/Head/HeadView.tsx










const Head = () => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])(head_default.a, {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Head_HeadFonts, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Head_HeadManifest, {})]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Head_HeadSEO, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Head_HeadCookie, {})]
  });
};

/* harmony default export */ var HeadView = (Head);
// CONCATENATED MODULE: ./src/layout/Head/index.ts

// CONCATENATED MODULE: ./src/layout/index.tsx












const Layout = ({
  children
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(HeadView, {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(external_styled_components_["ThemeProvider"], {
      theme: src_theme,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(globalStyles, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_error_boundary_["ErrorBoundary"], {
        fallback: null,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(HeaderView, {})
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        children: children
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(FooterView, {})]
    })]
  });
};

/* harmony default export */ var layout = (Layout);
// EXTERNAL MODULE: ./node_modules/modern-normalize/modern-normalize.css
var modern_normalize = __webpack_require__("ewTs");

// EXTERNAL MODULE: external "nextjs-progressbar"
var external_nextjs_progressbar_ = __webpack_require__("YVQ8");
var external_nextjs_progressbar_default = /*#__PURE__*/__webpack_require__.n(external_nextjs_progressbar_);

// CONCATENATED MODULE: ./src/pages/_app.tsx




function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const App = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])(jsx_runtime_["Fragment"], {
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(layout, {
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(Component, _app_objectSpread({}, pageProps))
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_nextjs_progressbar_default.a, {})]
  });
};

/* harmony default export */ var _app = __webpack_exports__["default"] = (App);

/***/ }),

/***/ "mRRH":
/***/ (function(module, exports) {

module.exports = require("@use-cookie-consent/core");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("284h");

var _interopRequireDefault = __webpack_require__("TqRt");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "qtZQ":
/***/ (function(module, exports) {

var raw = "<svg viewBox=\"0 0 261 49\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><style/><path class=\"full\" d=\"M71.017 28.75c0 1.642-.61 2.926-1.83 3.85-1.22.924-2.986 1.386-5.297 1.386-.986 0-1.895-.09-2.726-.269-.83-.154-1.545-.36-2.142-.616-.571-.282-1.025-.59-1.363-.924-.311-.36-.467-.72-.467-1.078 0-.309.078-.604.233-.886.182-.283.442-.527.78-.732.7.514 1.518.976 2.453 1.386.934.386 1.999.578 3.193.578 2.7 0 4.05-.898 4.05-2.695 0-1.464-.895-2.414-2.687-2.85l-3.232-.847c-1.584-.411-2.74-1.001-3.466-1.772-.727-.795-1.09-1.81-1.09-3.042 0-.667.13-1.309.389-1.925a4.511 4.511 0 011.285-1.617c.571-.462 1.272-.822 2.103-1.079.857-.282 1.856-.423 2.999-.423 1.817 0 3.284.27 4.4.808 1.117.514 1.675 1.117 1.675 1.81 0 .334-.09.63-.273.886-.155.257-.376.45-.662.578-.467-.308-1.129-.642-1.986-1.002-.856-.359-1.87-.539-3.037-.539-1.169 0-2.103.219-2.804.655-.675.436-1.013 1.053-1.013 1.848 0 .59.195 1.091.584 1.502.39.41 1.039.719 1.947.924l2.688.655c1.765.436 3.09 1.091 3.972 1.964.883.847 1.324 2.002 1.324 3.466zm19.673-4.16c0 1.438-.208 2.735-.623 3.89-.416 1.155-1.013 2.143-1.792 2.965a7.441 7.441 0 01-2.765 1.887c-1.09.436-2.31.654-3.66.654s-2.571-.218-3.661-.654a7.808 7.808 0 01-2.804-1.887c-.78-.822-1.377-1.81-1.792-2.965-.415-1.155-.623-2.452-.623-3.89 0-1.437.208-2.733.623-3.889.441-1.155 1.052-2.143 1.83-2.965a7.808 7.808 0 012.805-1.886c1.09-.437 2.297-.655 3.621-.655 1.324 0 2.532.218 3.622.655a7.442 7.442 0 012.765 1.886c.779.822 1.376 1.81 1.792 2.965.44 1.156.662 2.452.662 3.89zm-8.84-6.854c-1.766 0-3.155.604-4.168 1.81-1.012 1.207-1.519 2.888-1.519 5.045 0 2.182.494 3.876 1.48 5.083 1.013 1.18 2.415 1.771 4.206 1.771 1.792 0 3.18-.603 4.167-1.81.987-1.206 1.48-2.888 1.48-5.044 0-2.157-.506-3.838-1.519-5.045-.986-1.206-2.362-1.81-4.128-1.81zm20.045.039c-.883 0-1.7.154-2.453.462a5.01 5.01 0 00-1.947 1.31c-.546.564-.974 1.283-1.286 2.156-.311.847-.467 1.822-.467 2.926 0 2.208.558 3.902 1.675 5.083 1.116 1.155 2.609 1.733 4.478 1.733 1.091 0 1.999-.141 2.726-.424a11.54 11.54 0 001.948-1.04c.285.155.519.347.701.578.181.231.272.514.272.848 0 .359-.143.693-.428 1-.286.309-.688.578-1.208.81-.493.23-1.09.41-1.791.538a9.983 9.983 0 01-2.22.231c-1.35 0-2.596-.192-3.738-.577-1.143-.385-2.13-.963-2.96-1.733-.831-.77-1.48-1.733-1.947-2.888-.468-1.18-.701-2.567-.701-4.159 0-1.566.246-2.926.74-4.082.493-1.18 1.155-2.169 1.986-2.965a7.884 7.884 0 012.92-1.771 10.62 10.62 0 013.622-.616c.805 0 1.545.077 2.22.23.701.13 1.298.322 1.792.578.493.257.869.552 1.129.886.286.308.428.63.428.963 0 .308-.091.578-.272.808a1.833 1.833 0 01-.701.54 10.764 10.764 0 00-1.87-1.002c-.675-.282-1.557-.423-2.648-.423zm12.016 15.634c-.13.051-.325.103-.584.154-.26.077-.545.115-.857.115-1.116 0-1.675-.462-1.675-1.386v-16.52c.13-.05.325-.102.585-.154a3.42 3.42 0 01.895-.115c1.091 0 1.636.475 1.636 1.425v16.48zm-3.583-23.336c0-.539.182-.988.545-1.347.39-.385.883-.578 1.48-.578s1.078.193 1.441.578c.364.359.545.808.545 1.347 0 .54-.181 1.002-.545 1.387-.363.36-.844.539-1.441.539-.597 0-1.09-.18-1.48-.54a1.95 1.95 0 01-.545-1.386zm24.426 14.517c0 1.438-.207 2.735-.623 3.89-.415 1.155-1.012 2.143-1.791 2.965a7.446 7.446 0 01-2.765 1.887c-1.091.436-2.311.654-3.661.654s-2.57-.218-3.661-.654a7.813 7.813 0 01-2.804-1.887c-.779-.822-1.376-1.81-1.791-2.965-.416-1.155-.623-2.452-.623-3.89 0-1.437.207-2.733.623-3.889.441-1.155 1.051-2.143 1.83-2.965a7.813 7.813 0 012.804-1.886c1.091-.437 2.298-.655 3.622-.655 1.324 0 2.531.218 3.622.655a7.446 7.446 0 012.765 1.886c.779.822 1.376 1.81 1.791 2.965.442 1.156.662 2.452.662 3.89zm-8.84-6.854c-1.765 0-3.154.604-4.167 1.81-1.013 1.207-1.519 2.888-1.519 5.045 0 2.182.493 3.876 1.48 5.083 1.013 1.18 2.415 1.771 4.206 1.771 1.791 0 3.18-.603 4.167-1.81.987-1.206 1.48-2.888 1.48-5.044 0-2.157-.506-3.838-1.519-5.045-.986-1.206-2.362-1.81-4.128-1.81zm40.881 15.711a7.726 7.726 0 01-1.129.193 9.622 9.622 0 01-1.558.115c-1.168 0-2.012-.18-2.531-.539-.494-.385-.74-1.116-.74-2.195v-9.55c0-.847-.234-1.463-.701-1.848-.468-.41-1.104-.616-1.909-.616-.519 0-1.012.09-1.479.27-.442.18-.844.41-1.208.693.026.128.039.257.039.385.026.128.039.257.039.385v12.707a7.726 7.726 0 01-1.129.193 9.622 9.622 0 01-1.558.115c-1.168 0-2.012-.18-2.531-.539-.494-.385-.74-1.116-.74-2.195v-9.55c0-.847-.26-1.463-.779-1.848-.519-.41-1.156-.616-1.908-.616-.546 0-1.039.09-1.48.27a7.628 7.628 0 00-1.091.462v13.708a6.532 6.532 0 01-1.09.193 9.622 9.622 0 01-1.558.115c-1.168 0-2.012-.18-2.531-.539-.52-.385-.779-1.116-.779-2.195V19.123c0-.668.143-1.207.428-1.618.286-.41.688-.796 1.207-1.155.857-.59 1.909-1.065 3.155-1.425a14.515 14.515 0 013.972-.539c1.091 0 2.116.154 3.077.462a8.008 8.008 0 012.687 1.348 11.469 11.469 0 012.648-1.27c.987-.36 2.155-.54 3.505-.54 1.013 0 1.973.129 2.882.385a6.236 6.236 0 012.453 1.194c.701.54 1.26 1.258 1.675 2.156.441.873.662 1.939.662 3.197v12.13zm7.899-6.777c.363 1.078.999 1.848 1.908 2.31.909.437 1.96.655 3.155.655 1.09 0 2.115-.141 3.076-.423.961-.308 1.74-.642 2.337-1.002.389.257.714.59.973 1.002.26.41.39.86.39 1.347 0 .59-.182 1.104-.545 1.54-.364.437-.87.81-1.519 1.117-.623.283-1.376.488-2.259.617a16.12 16.12 0 01-2.843.23c-1.532 0-2.947-.205-4.245-.616-1.298-.436-2.414-1.065-3.349-1.887-.935-.847-1.675-1.9-2.22-3.157-.519-1.258-.779-2.734-.779-4.428 0-1.643.26-3.068.779-4.275.545-1.206 1.259-2.207 2.142-3.003a8.488 8.488 0 013.077-1.733 11.373 11.373 0 013.583-.578c1.324 0 2.531.206 3.621.616 1.117.385 2.064.937 2.843 1.656a7.45 7.45 0 011.87 2.58c.441 1.001.662 2.092.662 3.273 0 .822-.221 1.438-.662 1.849-.442.41-1.065.68-1.87.808l-10.125 1.502zm3.699-7.932c-1.116 0-2.051.346-2.803 1.04-.727.667-1.156 1.642-1.286 2.926l7.439-1.194c-.052-.667-.351-1.296-.896-1.887-.545-.59-1.363-.885-2.454-.885zm16.784 8.625c0 .719.234 1.245.701 1.579.468.308 1.117.462 1.947.462.39 0 .805-.038 1.247-.115a7.419 7.419 0 001.129-.347c.234.257.428.552.584.886a2.7 2.7 0 01.234 1.155c0 .898-.364 1.643-1.091 2.233-.701.565-1.934.847-3.699.847-2.181 0-3.882-.487-5.102-1.463-1.22-1-1.83-2.618-1.83-4.852v-17.29a11.94 11.94 0 011.129-.23 7.074 7.074 0 011.519-.155c1.142 0 1.96.206 2.453.617.52.385.779 1.103.779 2.156v2.503h5.375c.129.257.259.59.389 1.001.13.385.195.796.195 1.232 0 .822-.195 1.412-.584 1.772-.364.36-.844.539-1.441.539h-3.934v7.47zm14.083 6.084c-.26.077-.624.142-1.091.193a9.613 9.613 0 01-1.558.115c-1.168 0-2.012-.18-2.531-.539-.519-.385-.779-1.116-.779-2.195V19.277c0-.72.182-1.335.545-1.849.364-.513.87-.962 1.519-1.348.857-.513 1.882-.91 3.077-1.193a15.532 15.532 0 013.816-.462c2.7 0 4.05.898 4.05 2.695 0 .437-.065.835-.194 1.194a5.16 5.16 0 01-.429.924c-.597-.128-1.324-.192-2.181-.192a9.7 9.7 0 00-2.258.27 8.164 8.164 0 00-1.986.73v13.401zm14.77 0c-.26.077-.623.142-1.09.193a9.622 9.622 0 01-1.558.115c-1.169 0-2.012-.18-2.532-.539-.493-.385-.74-1.116-.74-2.195V15.195c.26-.077.624-.154 1.091-.231a9.625 9.625 0 011.558-.116c1.168 0 1.999.193 2.492.578.519.385.779 1.117.779 2.195v15.826zM217.76 9.65c0-.873.299-1.618.896-2.234.623-.616 1.428-.924 2.414-.924.987 0 1.779.308 2.376.924.623.616.934 1.361.934 2.234 0 .898-.311 1.656-.934 2.272-.597.616-1.389.924-2.376.924-.986 0-1.791-.308-2.414-.924-.597-.616-.896-1.374-.896-2.272zm19.917 9.396c-1.402 0-2.597.449-3.583 1.347-.987.873-1.48 2.17-1.48 3.89 0 1.72.467 3.003 1.402 3.85.96.848 2.168 1.271 3.622 1.271.83 0 1.557-.103 2.181-.308a12.879 12.879 0 001.635-.693c.442.334.779.693 1.013 1.078.259.36.389.809.389 1.348 0 .975-.519 1.758-1.558 2.349-1.038.59-2.479.886-4.322.886-1.558 0-2.986-.206-4.284-.617-1.272-.41-2.363-1.027-3.272-1.848-.908-.821-1.609-1.835-2.103-3.042-.493-1.232-.74-2.657-.74-4.274 0-1.669.273-3.12.818-4.352.546-1.232 1.285-2.259 2.22-3.08a9.31 9.31 0 013.271-1.849 12.493 12.493 0 013.934-.616c1.791 0 3.193.321 4.206.963 1.038.642 1.558 1.45 1.558 2.426a2.4 2.4 0 01-.351 1.27 3.722 3.722 0 01-.779 1.002 9.337 9.337 0 00-1.674-.693c-.624-.206-1.324-.308-2.103-.308zm22.644 9.01c0 1.9-.714 3.389-2.141 4.467-1.428 1.053-3.531 1.579-6.309 1.579-1.091 0-2.09-.077-2.999-.231-.883-.154-1.649-.385-2.298-.693-.649-.308-1.155-.693-1.519-1.155a2.543 2.543 0 01-.545-1.618c0-.565.117-1.04.351-1.425.233-.41.532-.744.895-1 .753.436 1.61.82 2.571 1.155.96.333 2.077.5 3.349.5 1.843 0 2.765-.513 2.765-1.54 0-.436-.169-.77-.506-1.001-.312-.231-.857-.437-1.636-.616l-1.558-.347c-2.129-.436-3.713-1.104-4.751-2.002-1.039-.925-1.558-2.208-1.558-3.851 0-1.823.74-3.26 2.22-4.313 1.506-1.078 3.518-1.617 6.036-1.617.935 0 1.818.077 2.649.23.83.13 1.544.335 2.142.617.597.282 1.064.642 1.402 1.078.363.41.545.899.545 1.463 0 .514-.104.976-.312 1.387-.208.385-.48.706-.818.962-.207-.128-.519-.27-.934-.423a12.571 12.571 0 00-2.765-.732c-.52-.077-1-.115-1.441-.115-.909 0-1.623.128-2.142.385-.494.23-.74.59-.74 1.078 0 .36.143.642.428.847.286.205.805.398 1.558.578l1.48.346c2.362.514 4.05 1.258 5.063 2.234 1.012.975 1.518 2.233 1.518 3.773z\" fill=\"#274171\"/><path class=\"full\" d=\"M26.465 32.765a5.598 5.598 0 11-11.196 0 5.598 5.598 0 0111.196 0z\" fill=\"#61C0F9\"/><path class=\"full\" d=\"M15.269 16.388a5.598 5.598 0 1111.196 0 5.598 5.598 0 01-11.196 0z\" fill=\"#FF9899\"/><path class=\"full\" d=\"M7.233 48.187c-.634.566-1.612.514-2.137-.155a23.92 23.92 0 01.056-29.588c.527-.667 1.505-.715 2.137-.146l5.442 4.9c.632.57.675 1.539.181 2.231a13.517 13.517 0 00-.029 15.647c.491.694.445 1.663-.19 2.23l-5.46 4.88z\" fill=\"#02B4C1\"/><path class=\"full\" d=\"M34.5.965c.633-.565 1.61-.515 2.136.155a23.92 23.92 0 01-.055 29.588c-.528.667-1.506.715-2.137.146L29 25.954c-.632-.57-.675-1.54-.181-2.232a13.516 13.516 0 00.03-15.646c-.492-.695-.445-1.664.189-2.23l5.46-4.88z\" fill=\"#FFCB66\"/><path class=\"signet\" d=\"M26.465 32.69a5.598 5.598 0 11-11.197 0 5.598 5.598 0 0111.197 0z\" fill=\"#61C0F9\"/><path class=\"signet\" d=\"M15.269 16.312a5.598 5.598 0 1111.196 0 5.598 5.598 0 01-11.196 0z\" fill=\"#FF9899\"/><path class=\"signet\" d=\"M7.233 48.11c-.634.567-1.612.515-2.137-.154a23.92 23.92 0 01.056-29.588c.527-.667 1.505-.715 2.137-.146l5.442 4.9c.632.57.675 1.539.181 2.231A13.517 13.517 0 0012.883 41c.491.694.445 1.663-.19 2.23l-5.46 4.88z\" fill=\"#02B4C1\"/><path class=\"signet\" d=\"M34.5.89c.634-.567 1.612-.515 2.136.154a23.92 23.92 0 01-.055 29.588c-.527.667-1.505.715-2.137.146L29 25.878c-.632-.57-.675-1.539-.181-2.231A13.516 13.516 0 0028.85 8c-.492-.694-.445-1.663.189-2.23l5.46-4.88z\" fill=\"#FFCB66\"/></svg>"; module.exports = raw; exports.default = raw;

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });