// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"main.js":[function(require,module,exports) {
var string = "\n*{\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n}\n*::after *::before{\n    box-sizing: border-box;\n}\nbody{\n    min-height: 100vh;\n    background: #fff400;\n}\n\n.nose{\n    border: 3px solid black;\n    background: #fff400;\n    position: relative;\n    width: 46px;\n    height: 114px;\n    left:50%;\n    top: 20px;\n    margin-left: -23px;\n    border-radius:50%/50%;\n    border-bottom: transparent;\n    z-index: 10;\n}\n.eye{\n    height: 170px;\n    width: 340px;\n    left:50%;\n    top: 150px;\n    margin-left: -170px;\n    position: relative;\n}\n .eye-left {\n    position: absolute;\n    border: 5px solid black;\n    width: 170px;\n    height: 170px;\n    border-radius:50%;\n    background: white;\n  }\n .eye-right {\n    position: absolute;\n    border: 5px solid black;\n    width: 170px;\n    height: 170px;\n    border-radius:50%;\n    left:170px;\n    background: white;\n  }\n  .pupil{\n      position: absolute;\n      border:1px solid black;\n      width: 58px;\n      height: 58px;\n      top: 60px;\n      border-radius: 50%;\n      background: #0093DC;\n  }\n  .pupil.left {\n    right: 75px;\n  }\n  .pupil.right {\n    right: 75px;\n  }\n  .iris{\n      display: block;\n      border: 1px solid black;\n      background: black;\n      width: 27px;\n      height: 27px;\n      border-radius: 50%;\n      position: absolute;\n      left: 15px;\n      top: 15px;\n  }\n\n.eye-left-1{\n    position: absolute;\n    width: 8px;\n    height: 38px;\n    background: black;\n    top: -25px;\n    left: 45px;\n    transform: rotate(-12deg);\n}\n.eye-left-2{\n    position: absolute;\n    width: 8px;\n    height: 38px;\n    background: black;\n    top: -35px;\n    left: 75px;\n}\n.eye-left-3{\n    position: absolute;\n    width: 8px;\n    height: 38px;\n    background: black;\n    top: -35px;\n    left: 105px;\n    transform: rotate(12deg);\n}\n\n.eye-right-1{\n    position: absolute;\n    width: 8px;\n    height: 38px;\n    background: black;\n    top: -25px;\n    right: 45px;\n    transform: rotate(12deg);\n}\n.eye-right-2{\n    position: absolute;\n    width: 8px;\n    height: 38px;\n    background: black;\n    top: -35px;\n    right: 75px;\n}\n.eye-right-3{\n    position: absolute;\n    width: 8px;\n    height: 38px;\n    background: black;\n    top: -35px;\n    right: 105px;\n    transform: rotate(-12deg);\n}\n\n.mouth{\n    position:relative;\n    width: 300px;\n    height: 220px;\n    left: 50%;\n    margin-left: -150px;\n    top: -70px;\n    border: 2px solid transparent;\n    border-bottom: 5px solid black;\n    border-radius: 50%;\n}\n\n.mouth-crease-left{\n    position: absolute;\n    width: 90px;\n    height: 60px;\n    top: 160px;\n    border: 2px solid transparent;\n    border-left: 5px solid black;\n    border-radius: 50%;\n    transform: rotate(60deg);\n}\n.mouth-crease-right{\n    position: absolute;\n    width: 90px;\n    height: 60px;\n    right: 0;\n    top: 160px;\n    border: 2px solid transparent;\n    border-right: 5px solid black;\n    border-radius: 50%;\n    transform: rotate(-60deg);\n}\n\n.tooth-1{\n    position: absolute;\n    background: white;\n    width: 30px;\n    height: 40px;\n    left: 50%;\n    margin-left: -40px;\n    bottom:-40px;\n    border: 5px solid black;\n    transform: rotate(5deg);\n}\n\n.tooth-2{\n    position: absolute;\n    background: white;\n    width: 30px;\n    height: 40px;\n    left: 50%;\n    margin-left: 10px;\n    bottom:-40px;\n    border: 5px solid black;\n    transform: rotate(-5deg);\n}\n\n.cheek{\n    position: absolute;\n    width: 100px;\n    height: 50px;\n    border: 2px solid transparent; \n    border-top: 5px solid #D9241C;\n    border-left: 4px solid #D9241C;\n    border-right: 4px solid #D9241C;\n    border-radius: 50%;\n}\n\n.cheek.left{\n    top: 120px;\n    left: -30px;\n    transform: rotate(-20deg);\n}\n\n.cheek.right{\n    top: 120px;\n    right: -30px;\n    transform: rotate(20deg);\n}\n\n\n.dimples{\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    background: #D9241C;\n    border-radius: 50%;\n}\n\n.dimples.left-1{\n    left: 55px;\n    top: 5px;\n}\n.dimples.left-2{\n    left: 15px;\n    top: 5px;\n}\n.dimples.left-3{\n    left: 35px;\n    top: 15px;\n}\n\n.dimples.right-1{\n    right: 55px;\n    top: 5px;\n}\n.dimples.right-2{\n    right: 15px;\n    top: 5px;\n}\n.dimples.right-3{\n    right: 35px;\n    top: 15px;\n}\n.chin::before{\n    position: absolute;\n    top:450px;\n    left: 50%;\n    margin-left: -80px;\n    content: '';\n    height: 90px;\n    width: 90px;\n    border: 2px solid transparent;\n    border-bottom: 8px solid #D9241C;\n    border-radius: 50%;\n    transform: rotate(10deg);\n}\n.chin::after{\n    position: absolute;\n    content: '';\n    height: 90px;\n    width: 90px;\n    top: 450px;\n    left: 50%;\n    margin-left: -10px;\n    border: 2px solid transparent;\n    border-bottom: 8px solid #D9241C;\n    border-radius: 50%;\n    transform: rotate(-10deg);\n}\n";
var n = 1;
var time = 100;

var run = function run() {
  n += 1;

  if (n > string.length) {
    window.clearInterval(id);
    return;
  }

  demo.innerText = string.substr(0, n);
  demo2.innerHTML = string.substr(0, n);
  demo.scrollTop = demo.scrollHeight;
};

var play = function play() {
  return setInterval(run, time);
};

var id = play;

var pause = function pause() {
  window.clearInterval(id);
};

var slow = function slow() {
  pause();
  time = 300;
  id = play();
};

var normal = function normal() {
  pause();
  time = 100;
  id = play();
};

var fast = function fast() {
  pause();
  time = 0;
  id = play();
};

btnPause.onclick = pause();

btnPlay.onclick = function () {
  id = play();
};

btnSlow.onclick = slow;
btnMiddle.onclick = normal;
btnFast.onclick = fast;
document.querySelector('body').addEventListener('mousemove', eyeball);

function eyeball(event) {
  var eyeLeft = document.querySelectorAll('.eye-left');
  var x1 = eyeLeft[0].getBoundingClientRect().left + eyeLeft[0].clientLeft / 2;
  var y1 = eyeLeft[0].getBoundingClientRect().top + eyeLeft[0].clientTop / 2;
  var radian1 = Math.atan2(event.pageX - x1, event.pageY - y1);
  var rot1 = radian1 * (180 / Math.PI) * -1 + 270;
  eyeLeft[0].style.transform = 'rotate(' + rot1 + 'deg)';
  var eyeRight = document.querySelectorAll('.eye-right');
  var x2 = eyeRight[0].getBoundingClientRect().left + eyeRight[0].clientLeft / 2;
  var y2 = eyeRight[0].getBoundingClientRect().top + eyeRight[0].clientTop / 2;
  var radian2 = Math.atan2(event.pageX - x2, event.pageY - y2);
  var rot2 = radian2 * (180 / Math.PI) * -1 + 270;
  eyeRight[0].style.transform = 'rotate(' + rot2 + 'deg)';
}
},{}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51363" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map