function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n<div style=\"height: auto; width: 100%;\">\n\n  <!-- <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark fixed-top\">  \n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#experience\">Section 1</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#education\">Section 2</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#projects\">Section 3</a>\n      </li>\n    </ul>\n  </nav> -->\n  \n\n  <div id=\"particles-js\" class=\"particle-container\">\n    <app-home></app-home>\n  </div>\n\n  <div id=\"experience\" class=\"ctr-projects\">\n    <app-experience></app-experience>\n  </div>\n\n  <div id=\"education\" class=\"ctr-education\">\n  <app-education></app-education>\n  </div>\n\n  <div id= \"projects\" class=\"ctr-projects\">\n  <app-projects></app-projects>\n  </div>\n\n  <div id=\"skills\" class=\"ctr-education\">\n    <app-skills></app-skills>\n  </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/education.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/education.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEducationEducationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parent-main\">\n    <div class=\"main-container\">\n        <p class=\"title\">Education</p>\n        <div class=\"card-parent\">\n            <div *ngFor=\"let item of educationJSON; let elementIndex=index;\">\n\n                <mat-card *ngIf=\"elementIndex % 2 == 0\" class=\"card\" data-aos=\"fade-left\" data-aos-duration=\"2000\">\n                    <mat-card-title>{{item.name}}</mat-card-title>\n                    <img mat-card-lg-image src=\"{{item.logo}}\">\n                    <!-- style=\"height: 120px; width: 140px;\" -->\n                    <!-- <mat-card-content>{{item.course}}</mat-card-content> -->\n                    <mat-card-content style=\"font-weight: bold; margin-top: 10px; font-size: 18px;\">{{item.grade}}</mat-card-content>\n                </mat-card>\n\n                <mat-card *ngIf=\"elementIndex % 2 == 1\" class=\"card\" data-aos=\"fade-right\" data-aos-duration=\"2000\">\n                    <mat-card-title>{{item.name}}</mat-card-title>\n                    <img mat-card-lg-image src=\"{{item.logo}}\">\n                    <!-- style=\"height: 120px; width: 140px;\" -->\n                    <!-- <mat-card-content>{{item.course}}</mat-card-content> -->\n                    <mat-card-content style=\"font-weight: bold; margin-top: 10px; font-size: 18px;\">{{item.grade}}</mat-card-content>\n                </mat-card>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/experience/experience.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/experience/experience.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsExperienceExperienceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parent-main\">\n    <div class=\"main-container\">\n        <p class=\"title\">Experience</p>\n        <div class=\"card-parent\">\n                <div *ngFor=\"let experience of experienceJSON; let elementIndex=index;\">\n                <mat-card *ngIf=\"elementIndex % 2 == 0\" class=\"card\" data-aos=\"fade-left\" data-aos-duration=\"2000\">\n                    <mat-card-title>{{experience.name}}</mat-card-title>\n                    <img mat-card-lg-image src=\"{{experience.logo}}\">\n                    <div class=\"card-content\">\n                        <mat-card-content style=\"font-weight: bold; text-align: center; font-size: 20px; margin-top: 20px;\">\n                            {{experience.role}}\n                        </mat-card-content>                         \n                        <mat-card-content>\n                            <ul>\n                                <li *ngFor=\"let line of experience.description\" style=\"font-size: 17px;\">{{line}} </li>\n                            </ul>\n                        </mat-card-content>\n                    </div>\n                </mat-card>\n                <mat-card *ngIf=\"elementIndex % 2 == 1\" class=\"card\" data-aos=\"fade-right\" data-aos-duration=\"2000\">\n                    <mat-card-title>{{experience.name}}</mat-card-title>\n                    <img mat-card-lg-image src=\"{{experience.logo}}\">\n                    <div class=\"card-content\">\n                        <mat-card-content style=\"font-weight: bold; text-align: center; font-size: 20px; margin-top: 20px;\">\n                            {{experience.role}}\n                        </mat-card-content>                         \n                        <mat-card-content>\n                            <ul>\n                                <li *ngFor=\"let line of experience.description\" style=\"font-size: 17px;\">{{line}} </li>\n                            </ul>\n                        </mat-card-content>\n                    </div>\n                </mat-card>\n\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main-container noselect\">\n    <img src=\"../../../assets/icon-transparent.png\" height=\"100px\" width=\"100px\" class=\"animated bounce\">\n    <div class=\"name \">\n        Sarthak Dadhakar\n    </div>\n    <span #story id='story' class=\"sub-name\" ></span>\n    <div>\n        <a href=\"https://www.linkedin.com/in/dadhakar/\" target=\"_blank\"> <i class=\"fab fa-linkedin-in icon-style\"></i> </a>\n        <a href=\"https://github.com/sarthakdadhakar/\" target=\"_blank\"> <i class=\"fab fa-github icon-style\"></i> </a>\n        <a href=\"https://drive.google.com/open?id=1k7JPz7Ujgjz52ZByCtSYS4dwrEs4QekM\" target=\"_blank\"> <i class=\"far fa-file icon-style\"></i> </a>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parent-main\">\n<div class=\"main-container\">\n    <p class=\"title\">Projects & Research</p>\n        <div class = \"card-parent\">\n            <div class=\"card-div card-group\" *ngFor=\"let projectGroup of projectJSON\">\n            <ng-container *ngFor=\"let project of projectGroup; let elementIndex=index;\">\n                <mat-card *ngIf=\"elementIndex % 2 == 0\" class=\"card\"  data-aos=\"fade-right\" data-aos-duration=\"2000\" (click)=\"redirectToProject(project.link)\">\n                    <mat-card-title>{{project.title}}</mat-card-title>\n                    <div class=\"card-content\">\n                        <mat-card-content> \n                            <ul> \n                            <li *ngFor=\"let line of project.description\" style=\"font-size: 17px;\">{{line}} </li>\n                            </ul>\n                        </mat-card-content>\n                        <mat-card-content style=\"font-weight: bold; text-align: center; font-size: 17px;\">{{project.technologies}}</mat-card-content>\n                    </div>\n                </mat-card>\n\n                <mat-card class=\"card\" *ngIf=\"elementIndex % 2 == 1\" data-aos=\"fade-left\" data-aos-duration=\"2000\" (click)=\"redirectToProject(project.link)\">\n                    <mat-card-title>{{project.title}}</mat-card-title>\n                    <div class=\"card-content\">\n                        <mat-card-content> \n                            <ul> \n                            <li *ngFor=\"let line of project.description\" style=\"font-size: 17px;\">{{line}} </li>\n                            </ul>\n                        </mat-card-content>\n                        <mat-card-content style=\"font-weight: bold; text-align: center; font-size: 17px;\">{{project.technologies}}</mat-card-content>\n                    </div>\n                </mat-card>\n            </ng-container>\n            </div>\n        </div>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skills/skills.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/skills/skills.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSkillsSkillsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"parent-main\">\n  <div class=\"main-container\">\n      <p class=\"title\">Skills</p>\n  <div id=\"demo\" className=\"carousel slide\" data-ride=\"carousel\">\n     \n\n      <div id=\"carouselExampleFade\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n          <div class=\"carousel-item\" *ngFor=\"let skill of skillsJSON let i = index\" [ngClass]=\"{'active' : i == 0}\">\n\n            <mat-card class=\"card\" data-aos=\"fade-left\" data-aos-duration=\"2000\">\n              <mat-card-title>{{skill.domain}}</mat-card-title>\n              <div class=\"card-content container\">\n                  <mat-card-content> \n                 \n                        <img *ngFor=\"let image of skill.images\" src={{base_url}}{{image}} style=\"height: 150px; width: 150px; margin: 50px 50px 20px 20px\">\n                \n                  </mat-card-content>\n                </div>\n                <a class=\"carousel-control-prev\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"prev\">\n                  <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                  <span class=\"sr-only\">Previous</span>\n                </a>\n                <a class=\"carousel-control-next\" href=\"#carouselExampleFade\" role=\"button\" data-slide=\"next\">\n                  <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                  <span class=\"sr-only\">Next</span>\n                </a>\n            </mat-card> \n          \n          </div>\n        </div>\n       \n      </div>\n\n  </div>\n</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css?family=Ubuntu\");\n.particle-container {\n  color: #33FE33;\n  text-align: center;\n  height: 100vh;\n  width: 100%;\n  background-color: black;\n  z-index: 0;\n}\n.ctr-education {\n  min-height: 100vh;\n  width: 100%;\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #f5f5f5c5;\n}\n.ctr-projects {\n  min-height: 100vh;\n  width: 100%;\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: white;\n}\nh2 {\n  text-transform: lowercase;\n  font-size: 4em;\n  margin-bottom: 20px;\n}\nh3 {\n  font-weight: 300;\n  font-size: 2.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXENvZGluZ1xcV2ViIERldlxcYW5ndWxhcl9wcm9qZWN0c1xccHJvalxcc2FydGhha2RhZGhha2FyLmdpdGh1Yi5pby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNkRBQUE7QUFFUjtFQUNFLGNBQUE7RUFFQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FDRkY7QURLQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDJCQUFBO0FDRkY7QURLQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHVCQUFBO0FDRkY7QURVQTtFQUNDLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDUEQ7QURVQTtFQUNDLGdCQUFBO0VBQ0EsZ0JBQUE7QUNQRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9VWJ1bnR1Jyk7XHJcblxyXG4ucGFydGljbGUtY29udGFpbmVye1xyXG4gIGNvbG9yOiAjMzNGRTMzO1xyXG4gIC8vIGNvbG9yOiAjMzM3QUZGO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB3aWR0aDogMTAwJTsgXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgei1pbmRleDogMDtcclxufVxyXG5cclxuLmN0ci1lZHVjYXRpb257XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNWM1O1xyXG59XHJcblxyXG4uY3RyLXByb2plY3Rze1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuLy8gc2VjdGlvbiB7IFxyXG4vLyBcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gfVxyXG5cclxuaDIge1xyXG5cdHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcblx0Zm9udC1zaXplOiA0ZW07XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuaDMge1xyXG5cdGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0Zm9udC1zaXplOiAyLjhlbTtcclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1VYnVudHVcIik7XG4ucGFydGljbGUtY29udGFpbmVyIHtcbiAgY29sb3I6ICMzM0ZFMzM7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICB6LWluZGV4OiAwO1xufVxuXG4uY3RyLWVkdWNhdGlvbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1YzU7XG59XG5cbi5jdHItcHJvamVjdHMge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbmgyIHtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbiAgZm9udC1zaXplOiA0ZW07XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmgzIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyLjhlbTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'githubio-sarthak';
      }

      _createClass(AppComponent, [{
        key: "function_particlejs",
        value: function function_particlejs() {
          var getDispl = localStorage.getItem("particles");

          if (getDispl == null) {
            var particles = true;
            localStorage.setItem("particles", 'true');
            getDispl = localStorage.getItem("particles");
          }

          if (getDispl != 'false') {
            var value = 40;
            var linkWidth = 2;
            var dotRad = 5;
            var linkMax = 200;

            if (window.innerWidth > 900 && window.innerWidth > window.innerHeight) {
              value = 150;
              linkWidth = 1.5;
              dotRad = 3;
              linkMax = 150;
            } //console.log(value);


            particlesJS("particles-js", {
              "particles": {
                "number": {
                  "value": value,
                  "density": {
                    "enable": false,
                    "value_area": 800
                  }
                },
                "color": {
                  "value": "#00ff69" // "value" : "#337AFF"

                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 6
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.5,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": dotRad,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": linkMax,
                  "color": "#00ff2d",
                  // "color" : "#337AFF",
                  "opacity": 0.4,
                  "width": linkWidth
                },
                "move": {
                  "enable": true,
                  "speed": 6,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": true,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "window",
                "events": {
                  "onhover": {
                    "enable": true,
                    "mode": "repulse"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 140,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
            });
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.function_particlejs();
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/home/home.component */
    "./src/app/components/home/home.component.ts");
    /* harmony import */


    var angular_particle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-particle */
    "./node_modules/angular-particle/index.js");
    /* harmony import */


    var _components_education_education_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/education/education.component */
    "./src/app/components/education/education.component.ts");
    /* harmony import */


    var _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/projects/projects.component */
    "./src/app/components/projects/projects.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/experience/experience.component */
    "./src/app/components/experience/experience.component.ts");
    /* harmony import */


    var _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/skills/skills.component */
    "./src/app/components/skills/skills.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _components_education_education_component__WEBPACK_IMPORTED_MODULE_7__["EducationComponent"], _components_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"], _components_experience_experience_component__WEBPACK_IMPORTED_MODULE_12__["ExperienceComponent"], _components_skills_skills_component__WEBPACK_IMPORTED_MODULE_13__["SkillsComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], angular_particle__WEBPACK_IMPORTED_MODULE_6__["ParticlesModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/education/education.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/education/education.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEducationEducationComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".parent-main {\n  height: auto;\n  width: 100%;\n}\n\n.main-container {\n  margin-top: 20px;\n  width: 100%;\n  position: relative;\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n}\n\n.card {\n  margin-top: 10px;\n  margin-left: 1.5%;\n  margin-right: 1.5%;\n  z-index: 1;\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 20px;\n}\n\n.card-div {\n  width: 100%;\n  text-align: center;\n  align-content: center;\n}\n\n.card-parent {\n  margin-top: 50px !important;\n  margin-left: 4% !important;\n  margin-right: 4% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZHVjYXRpb24vRDpcXENvZGluZ1xcV2ViIERldlxcYW5ndWxhcl9wcm9qZWN0c1xccHJvalxcc2FydGhha2RhZGhha2FyLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xcZWR1Y2F0aW9uXFxlZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO0FDQUo7O0FEVUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUNQRjs7QURVQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FDUEY7O0FEVUE7RUFDRSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7QUNQRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnQtbWFpbntcclxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWFpbi1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLy8gLnRpdGxle1xyXG4vLyAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbi8vICAgZm9udC1zaXplOiA1MHB4O1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4vLyB9XHJcblxyXG4uY2FyZHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjUlO1xyXG4gIG1hcmdpbi1yaWdodDogMS41JTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWRpdntcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1wYXJlbnR7XHJcbiAgbWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1sZWZ0OiA0JSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogNCUgIWltcG9ydGFudDtcclxufSIsIi5wYXJlbnQtbWFpbiB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMS41JTtcbiAgbWFyZ2luLXJpZ2h0OiAxLjUlO1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG5cbi5jYXJkLWRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNhcmQtcGFyZW50IHtcbiAgbWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiA0JSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/education/education.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/education/education.component.ts ***!
    \*************************************************************/

  /*! exports provided: EducationComponent */

  /***/
  function srcAppComponentsEducationEducationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
      return EducationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _assets_educationJSON_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../assets/educationJSON.json */
    "./src/assets/educationJSON.json");

    var _assets_educationJSON_json__WEBPACK_IMPORTED_MODULE_2___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../../assets/educationJSON.json */
    "./src/assets/educationJSON.json", 1);
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! aos */
    "./node_modules/aos/dist/aos.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);

    var EducationComponent =
    /*#__PURE__*/
    function () {
      function EducationComponent() {
        _classCallCheck(this, EducationComponent);

        this.educationJSON = _assets_educationJSON_json__WEBPACK_IMPORTED_MODULE_2__.education;
      }

      _createClass(EducationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          aos__WEBPACK_IMPORTED_MODULE_3__["init"]();
          this.educationJSON = _assets_educationJSON_json__WEBPACK_IMPORTED_MODULE_2__.education;
        }
      }]);

      return EducationComponent;
    }();

    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-education',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./education.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/education/education.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./education.component.scss */
      "./src/app/components/education/education.component.scss")).default]
    })], EducationComponent);
    /***/
  },

  /***/
  "./src/app/components/experience/experience.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/experience/experience.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsExperienceExperienceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".parent-main {\n  height: auto;\n  width: 100%;\n}\n\n.main-container {\n  margin-top: 20px;\n  width: 100%;\n  position: relative;\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n}\n\n.card {\n  margin-top: 10px;\n  margin-left: 1.5%;\n  margin-right: 1.5%;\n  z-index: 1;\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 20px 20px 20px 20px !important;\n  -webkit-filter: drop-shadow(10x, 10px, 10px, #c7c7c7c7) !important;\n          filter: drop-shadow(10x, 10px, 10px, #c7c7c7c7) !important;\n  background-color: #f5f5f5c5 !important;\n}\n\n.card-content {\n  text-align: left;\n  padding-left: 20px !important;\n}\n\n.card-parent {\n  margin-top: 50px !important;\n  margin-left: 4% !important;\n  margin-right: 4% !important;\n}\n\n.mat-card-lg-image {\n  width: 200px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlL0Q6XFxDb2RpbmdcXFdlYiBEZXZcXGFuZ3VsYXJfcHJvamVjdHNcXHByb2pcXHNhcnRoYWtkYWRoYWthci5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGV4cGVyaWVuY2VcXGV4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsWUFBQTtFQUNBLFdBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURXQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGtFQUFBO1VBQUEsMERBQUE7RUFDQSxzQ0FBQTtBQ1JGOztBRFlBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtBQ1RGOztBRFdBO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDUkY7O0FEV0E7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ1JGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9leHBlcmllbmNlL2V4cGVyaWVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFyZW50LW1haW57XHJcbiAgLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICAvLyBtYXJnaW4tdG9wOiA4MHB4O1xyXG59XHJcbi5tYWluLWNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLy8gLnRpdGxle1xyXG4vLyAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JyAhaW1wb3J0YW50O1xyXG4vLyAgIGZvbnQtc2l6ZTogNTBweDtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuLy8gfVxyXG5cclxuLmNhcmR7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogMS41JTtcclxuICBtYXJnaW4tcmlnaHQ6IDEuNSU7XHJcbiAgei1pbmRleDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMjBweCAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxMHgsIDEwcHgsIDEwcHgsICNjN2M3YzdjNykgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1YzUgIWltcG9ydGFudDtcclxuIFxyXG59XHJcblxyXG4uY2FyZC1jb250ZW50e1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQtcGFyZW50e1xyXG4gIG1hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogNCUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDQlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC1sZy1pbWFnZXtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbiIsIi5wYXJlbnQtbWFpbiB7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmNhcmQge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMS41JTtcbiAgbWFyZ2luLXJpZ2h0OiAxLjUlO1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAyMHB4IDIwcHggIWltcG9ydGFudDtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxMHgsIDEwcHgsIDEwcHgsICNjN2M3YzdjNykgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNWM1ICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQtcGFyZW50IHtcbiAgbWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiA0JSAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNhcmQtbGctaW1hZ2Uge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogYXV0bztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/experience/experience.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/experience/experience.component.ts ***!
    \***************************************************************/

  /*! exports provided: ExperienceComponent */

  /***/
  function srcAppComponentsExperienceExperienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
      return ExperienceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _assets_experience_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../assets/experience.json */
    "./src/assets/experience.json");

    var _assets_experience_json__WEBPACK_IMPORTED_MODULE_2___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../../assets/experience.json */
    "./src/assets/experience.json", 1);
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! aos */
    "./node_modules/aos/dist/aos.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);

    var ExperienceComponent =
    /*#__PURE__*/
    function () {
      function ExperienceComponent() {
        _classCallCheck(this, ExperienceComponent);

        this.experienceJSON = _assets_experience_json__WEBPACK_IMPORTED_MODULE_2__.experience;
      }

      _createClass(ExperienceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          aos__WEBPACK_IMPORTED_MODULE_3__["init"]();
        }
      }]);

      return ExperienceComponent;
    }();

    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-experience',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./experience.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/experience/experience.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./experience.component.scss */
      "./src/app/components/experience/experience.component.scss")).default]
    })], ExperienceComponent);
    /***/
  },

  /***/
  "./src/app/components/home/home.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/home/home.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHomeHomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".name {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 50px;\n  text-align: center;\n}\n\n.sub-name {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\n  font-size: 30px;\n  margin-top: 30px;\n  text-align: center;\n}\n\n.main-container {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  width: 100%;\n  height: 100px;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n\n.noselect {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Old versions of Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n     supported by Chrome, Opera and Firefox */\n}\n\n.icon-style {\n  font-size: 30px;\n  margin: 15px;\n  color: #33FE33;\n}\n\n#icon-style a:link .fa, #socialMediaIcons a:visited .fa {\n  color: #33FE33;\n}\n\n.animated {\n  -webkit-animation-duration: 2s;\n  animation-duration: 2s;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n  }\n  40% {\n    -webkit-transform: translateY(-30px);\n  }\n  60% {\n    -webkit-transform: translateY(-15px);\n  }\n}\n\n@keyframes bounce {\n  0%, 20%, 50%, 80%, 100% {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n  }\n  40% {\n    -webkit-transform: translateY(-30px);\n            transform: translateY(-30px);\n  }\n  60% {\n    -webkit-transform: translateY(-15px);\n            transform: translateY(-15px);\n  }\n}\n\n.bounce {\n  -webkit-animation-name: bounce;\n  animation-name: bounce;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0Q6XFxDb2RpbmdcXFdlYiBEZXZcXGFuZ3VsYXJfcHJvamVjdHNcXHByb2pcXHNhcnRoYWtkYWRoYWthci5naXRodWIuaW8vc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0lBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDQTtFQUNJLHdJQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNFSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQ0FBQTtBQ0VKOztBREFBO0VBQ0ksMkJBQUE7RUFBNkIsZUFBQTtFQUMzQix5QkFBQTtFQUEyQixXQUFBO0VBQ0EsbUJBQUE7RUFDeEIsc0JBQUE7RUFBd0IsNEJBQUE7RUFDdkIscUJBQUE7RUFBdUIsMkJBQUE7RUFDbkIsaUJBQUE7RUFBbUI7NkNBQUE7QUNVakM7O0FEUEE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNVSjs7QURMQTtFQUNJLGNBQUE7QUNRSjs7QURKQTtFQUNJLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0FDT0o7O0FESkM7RUFDRztJQUF5QixnQ0FBQTtFQ1EzQjtFRFBFO0lBQUssb0NBQUE7RUNVUDtFRFRFO0lBQUssb0NBQUE7RUNZUDtBQUNGOztBRFZDO0VBQ0c7SUFBeUIsZ0NBQUE7WUFBQSx3QkFBQTtFQ2EzQjtFRFpFO0lBQUssb0NBQUE7WUFBQSw0QkFBQTtFQ2VQO0VEZEU7SUFBSyxvQ0FBQTtZQUFBLDRCQUFBO0VDaUJQO0FBQ0Y7O0FEZkM7RUFDRyw4QkFBQTtFQUNBLHNCQUFBO0FDaUJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFtZXtcclxuICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgJ09wZW4gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnN1Yi1uYW1le1xyXG4gICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgJ1NlZ29lIFVJJywgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCAnT3BlbiBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluLWNvbnRhaW5lcntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAgXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4ubm9zZWxlY3Qge1xyXG4gICAgLXdlYmtpdC10b3VjaC1jYWxsb3V0OiBub25lOyAvKiBpT1MgU2FmYXJpICovXHJcbiAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xyXG4gICAgICAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lOyAvKiBLb25xdWVyb3IgSFRNTCAqL1xyXG4gICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBPbGQgdmVyc2lvbnMgb2YgRmlyZWZveCAqL1xyXG4gICAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXHJcbiAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VwcG9ydGVkIGJ5IENocm9tZSwgT3BlcmEgYW5kIEZpcmVmb3ggKi9cclxuICB9XHJcbi5pY29uLXN0eWxle1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyBcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGNvbG9yOiAjMzNGRTMzO1xyXG4gICAgLy8gY29sb3I6ICMzMzdBRkY7XHJcbiAgICAvLyBmaWxsOiAjMzM3QUZGOztcclxufVxyXG5cclxuI2ljb24tc3R5bGUgYTpsaW5rIC5mYSwgI3NvY2lhbE1lZGlhSWNvbnMgYTp2aXNpdGVkIC5mYSAge1xyXG4gICAgY29sb3I6ICMzM0ZFMzM7XHJcbiAgICAvLyBjb2xvcjogIzMzN0FGRjtcclxufVxyXG5cclxuLmFuaW1hdGVkIHsgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzOyBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDsgXHJcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoOyBcclxuIH1cclxuIFxyXG4gQC13ZWJraXQta2V5ZnJhbWVzIGJvdW5jZSB7IFxyXG4gICAgMCUsIDIwJSwgNTAlLCA4MCUsIDEwMCUgey13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO30gXHJcbiAgICA0MCUgey13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zMHB4KTt9IFxyXG4gICAgNjAlIHstd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTVweCk7fSBcclxuIH0gXHJcbiBcclxuIEBrZXlmcmFtZXMgYm91bmNlIHsgXHJcbiAgICAwJSwgMjAlLCA1MCUsIDgwJSwgMTAwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO30gXHJcbiAgICA0MCUge3RyYW5zZm9ybTogdHJhbnNsYXRlWSgtMzBweCk7fSBcclxuICAgIDYwJSB7dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTt9IFxyXG4gfVxyXG4gXHJcbiAuYm91bmNlIHsgXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBib3VuY2U7IFxyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZTsgXHJcbiB9IiwiLm5hbWUge1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXCJPcGVuIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN1Yi1uYW1lIHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIFwiT3BlbiBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYWluLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4ubm9zZWxlY3Qge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC8qIGlPUyBTYWZhcmkgKi9cbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogU2FmYXJpICovXG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogS29ucXVlcm9yIEhUTUwgKi9cbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLyogT2xkIHZlcnNpb25zIG9mIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBJbnRlcm5ldCBFeHBsb3Jlci9FZGdlICovXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICAvKiBOb24tcHJlZml4ZWQgdmVyc2lvbiwgY3VycmVudGx5XG4gICAgIHN1cHBvcnRlZCBieSBDaHJvbWUsIE9wZXJhIGFuZCBGaXJlZm94ICovXG59XG5cbi5pY29uLXN0eWxlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW46IDE1cHg7XG4gIGNvbG9yOiAjMzNGRTMzO1xufVxuXG4jaWNvbi1zdHlsZSBhOmxpbmsgLmZhLCAjc29jaWFsTWVkaWFJY29ucyBhOnZpc2l0ZWQgLmZhIHtcbiAgY29sb3I6ICMzM0ZFMzM7XG59XG5cbi5hbmltYXRlZCB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAycztcbiAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgYm91bmNlIHtcbiAgMCUsIDIwJSwgNTAlLCA4MCUsIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICB9XG4gIDYwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZSB7XG4gIDAlLCAyMCUsIDUwJSwgODAlLCAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIH1cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTMwcHgpO1xuICB9XG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KTtcbiAgfVxufVxuLmJvdW5jZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGJvdW5jZTtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/home/home.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/home/home.component.ts ***!
    \***************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppComponentsHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! typed.js */
    "./node_modules/typed.js/lib/typed.js");
    /* harmony import */


    var typed_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @fortawesome/fontawesome-free */
    "./node_modules/@fortawesome/fontawesome-free/js/fontawesome.js");
    /* harmony import */


    var _fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(_fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_3__);

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.faLinkedin = _fortawesome_fontawesome_free__WEBPACK_IMPORTED_MODULE_3__["faLinkedin"];
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var story = document.getElementById('story');
          self = this;
          self.userName = "Sarthak Dadhakar";
          self.callMe();
        }
      }, {
        key: "callMe",
        value: function callMe() {
          document.getElementById('story').innerHTML = '';
          var typed = new typed_js__WEBPACK_IMPORTED_MODULE_2___default.a(this.story.nativeElement, {
            strings: ["Android Development", "Web Development", "Machine Learning", "Deep Learning", "Natural Language Processing", ""],
            typeSpeed: 120,
            loop: true,
            cursorChar: '_',
            onComplete: function onComplete() {
              document.getElementById('story').innerHTML = '';
            }
          });
        }
      }]);

      return HomeComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('story', {
      static: true
    })], HomeComponent.prototype, "story", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.scss */
      "./src/app/components/home/home.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ../../../../node_modules/@fortawesome/fontawesome-free/css/all.min.css */
      "./node_modules/@fortawesome/fontawesome-free/css/all.min.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/components/projects/projects.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/projects/projects.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProjectsProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".parent-main {\n  height: auto;\n  width: 100%;\n}\n\n.main-container {\n  margin-top: 20px;\n  width: 100%;\n  position: relative;\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 10px;\n}\n\n.card {\n  margin-top: 1%;\n  z-index: 1;\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: auto;\n  width: vw/2;\n  margin-left: 1% !important;\n  margin-right: 1% !important;\n  border-radius: 20px 20px 20px 20px !important;\n  -webkit-filter: drop-shadow(10x, 10px, 10px, #c7c7c7c7) !important;\n          filter: drop-shadow(10x, 10px, 10px, #c7c7c7c7) !important;\n  background-color: #f5f5f5c5;\n}\n\n.card:hover {\n  cursor: pointer;\n  background-color: lightgray;\n}\n\n.card-div {\n  width: 100%;\n  text-align: center;\n  align-content: center;\n}\n\n.card-content {\n  text-align: left;\n  padding-left: 20px !important;\n}\n\n.card-parent {\n  margin-top: 50px !important;\n  margin-left: 4% !important;\n  margin-right: 4% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9qZWN0cy9EOlxcQ29kaW5nXFxXZWIgRGV2XFxhbmd1bGFyX3Byb2plY3RzXFxwcm9qXFxzYXJ0aGFrZGFkaGFrYXIuZ2l0aHViLmlvL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwcm9qZWN0c1xccHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxZQUFBO0VBQ0EsV0FBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtBQ0FGOztBRFdBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2Q0FBQTtFQUNBLGtFQUFBO1VBQUEsMERBQUE7RUFFQSwyQkFBQTtBQ1RGOztBRFlBO0VBQ0UsZUFBQTtFQUNBLDJCQUFBO0FDVEY7O0FEYUE7RUFHSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ1pKOztBRGVBO0VBQ0UsZ0JBQUE7RUFDQSw2QkFBQTtBQ1pGOztBRGNBO0VBQ0UsMkJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0FDWEYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhcmVudC1tYWlue1xyXG4gIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gbWFyZ2luLXRvcDogODBweDtcclxufVxyXG4ubWFpbi1jb250YWluZXJ7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuXHJcbi8vIC50aXRsZXtcclxuLy8gICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4vLyAgIGZvbnQtc2l6ZTogNTBweDtcclxuLy8gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuLy8gfVxyXG5cclxuLmNhcmR7XHJcbiAgbWFyZ2luLXRvcDogMSU7XHJcbiAgei1pbmRleDogMTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IHZ3LzI7XHJcbiAgbWFyZ2luLWxlZnQ6IDElICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxJSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAyMHB4IDIwcHggIWltcG9ydGFudDtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDEweCwgMTBweCwgMTBweCwgI2M3YzdjN2M3KSAhaW1wb3J0YW50O1xyXG4gIFxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjVjNTtcclxufVxyXG5cclxuLmNhcmQ6aG92ZXJ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuXHJcbi5jYXJkLWRpdntcclxuICAgIC8vIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAvLyBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC1jb250ZW50e1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQtcGFyZW50e1xyXG4gIG1hcmdpbi10b3A6IDUwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogNCUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IDQlICFpbXBvcnRhbnQ7XHJcbn1cclxuIiwiLnBhcmVudC1tYWluIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1haW4tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIG1hcmdpbi10b3A6IDElO1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IHZ3LzI7XG4gIG1hcmdpbi1sZWZ0OiAxJSAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDElICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMjBweCAyMHB4IDIwcHggIWltcG9ydGFudDtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygxMHgsIDEwcHgsIDEwcHgsICNjN2M3YzdjNykgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNWM1O1xufVxuXG4uY2FyZDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4uY2FyZC1kaXYge1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHggIWltcG9ydGFudDtcbn1cblxuLmNhcmQtcGFyZW50IHtcbiAgbWFyZ2luLXRvcDogNTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tbGVmdDogNCUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiA0JSAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/projects/projects.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/projects/projects.component.ts ***!
    \***********************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppComponentsProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _assets_projectsJSON_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../assets/projectsJSON.json */
    "./src/assets/projectsJSON.json");

    var _assets_projectsJSON_json__WEBPACK_IMPORTED_MODULE_2___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../../assets/projectsJSON.json */
    "./src/assets/projectsJSON.json", 1);
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! aos */
    "./node_modules/aos/dist/aos.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_3__);

    var ProjectsComponent =
    /*#__PURE__*/
    function () {
      function ProjectsComponent() {
        _classCallCheck(this, ProjectsComponent);

        var i = 0;
        var temp = [];
        this.projectJSON = [];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _assets_projectsJSON_json__WEBPACK_IMPORTED_MODULE_2__.projects[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var project = _step.value;

            if (i != 0 && i % 2 == 0) {
              this.projectJSON.push(temp);
              temp = [];
            }

            temp.push(project);
            i++;
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        this.projectJSON.push(temp);
        console.log(this.projectJSON);
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // this.projectJSON = projectJSONFile.projects;
          aos__WEBPACK_IMPORTED_MODULE_3__["init"]();
        }
      }, {
        key: "redirectToProject",
        value: function redirectToProject(url) {
          console.log(url);
          var win = window.open(url, '_blank');
          win.focus();
        }
      }]);

      return ProjectsComponent;
    }();

    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/projects/projects.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.scss */
      "./src/app/components/projects/projects.component.scss")).default]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/components/skills/skills.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/skills/skills.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSkillsSkillsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\n  margin-top: 2%;\n  z-index: 1;\n  text-align: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: auto;\n  width: vw/2;\n  margin-left: 5% !important;\n  margin-right: 5% !important;\n  border-radius: 20px 20px 20px 20px !important;\n  -webkit-filter: drop-shadow(10x, 10px, 10px, #c7c7c7c7) !important;\n          filter: drop-shadow(10x, 10px, 10px, #c7c7c7c7) !important;\n}\n\n.item {\n  text-align: center;\n  display: block;\n  margin-right: 10px;\n  margin-bottom: 1px;\n  float: left;\n}\n\n.carousel-control-next-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\");\n}\n\n.carousel-control-prev-icon {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9za2lsbHMvRDpcXENvZGluZ1xcV2ViIERldlxcYW5ndWxhcl9wcm9qZWN0c1xccHJvalxcc2FydGhha2RhZGhha2FyLmdpdGh1Yi5pby9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2tpbGxzXFxza2lsbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrRUFBQTtVQUFBLDBEQUFBO0FDQ0o7O0FER0U7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksK01BQUE7QUNBSjs7QURHQTtFQUNJLCtNQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogdncvMjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDIwcHggMjBweCAhaW1wb3J0YW50O1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygxMHgsIDEwcHgsIDEwcHgsICNjN2M3YzdjNykgIWltcG9ydGFudDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLml0ZW17XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgICBmbG9hdDpsZWZ0O1xyXG4gIH1cclxuXHJcbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9J2JsYWNrJyB2aWV3Qm94PScwIDAgOCA4JyUzRSUzQ3BhdGggZD0nTTIuNzUgMGwtMS41IDEuNSAyLjUgMi41LTIuNSAyLjUgMS41IDEuNSA0LTQtNC00eicvJTNFJTNDL3N2ZyUzRVwiKTtcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgZmlsbD0nYmxhY2snIHZpZXdCb3g9JzAgMCA4IDgnJTNFJTNDcGF0aCBkPSdNNS4yNSAwbC00IDQgNCA0IDEuNS0xLjUtMi41LTIuNSAyLjUtMi41LTEuNS0xLjV6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG59IiwiLmNhcmQge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgei1pbmRleDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiB2dy8yO1xuICBtYXJnaW4tbGVmdDogNSUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXJpZ2h0OiA1JSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMjBweCAyMHB4ICFpbXBvcnRhbnQ7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMTB4LCAxMHB4LCAxMHB4LCAjYzdjN2M3YzcpICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb24ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9J2JsYWNrJyB2aWV3Qm94PScwIDAgOCA4JyUzRSUzQ3BhdGggZD0nTTIuNzUgMGwtMS41IDEuNSAyLjUgMi41LTIuNSAyLjUgMS41IDEuNSA0LTQtNC00eicvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSdibGFjaycgdmlld0JveD0nMCAwIDggOCclM0UlM0NwYXRoIGQ9J001LjI1IDBsLTQgNCA0IDQgMS41LTEuNS0yLjUtMi41IDIuNS0yLjUtMS41LTEuNXonLyUzRSUzQy9zdmclM0VcIik7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/skills/skills.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/skills/skills.component.ts ***!
    \*******************************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppComponentsSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _assets_skills_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../assets/skills.json */
    "./src/assets/skills.json");

    var _assets_skills_json__WEBPACK_IMPORTED_MODULE_2___namespace =
    /*#__PURE__*/
    __webpack_require__.t(
    /*! ../../../assets/skills.json */
    "./src/assets/skills.json", 1);

    var SkillsComponent =
    /*#__PURE__*/
    function () {
      function SkillsComponent() {
        _classCallCheck(this, SkillsComponent);

        this.skillsJSON = _assets_skills_json__WEBPACK_IMPORTED_MODULE_2__.skills;
        this.base_url = "../../../assets/skills_logos/";
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.skillsJSON = _assets_skills_json__WEBPACK_IMPORTED_MODULE_2__.skills;
        }
      }]);

      return SkillsComponent;
    }();

    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-skills',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./skills.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/skills/skills.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skills.component.scss */
      "./src/app/components/skills/skills.component.scss")).default]
    })], SkillsComponent);
    /***/
  },

  /***/
  "./src/assets/educationJSON.json":
  /*!***************************************!*\
    !*** ./src/assets/educationJSON.json ***!
    \***************************************/

  /*! exports provided: education, default */

  /***/
  function srcAssetsEducationJSONJson(module) {
    module.exports = JSON.parse("{\"education\":[{\"name\":\"Viterbi School of Engineering - University of Southern California\",\"course\":\"Master of Science - Computer Science\",\"logo\":\"../../../assets/USC.png\",\"grade\":\"GPA 3.68/4\"},{\"name\":\"Vivekanand Education Society's Institute of Technology - University of Mumbai\",\"course\":\"Bachelor of Engineering - Computer Engineering\",\"logo\":\"../../../assets/VESIT.png\",\"grade\":\"CGPI: 9.47/10\"},{\"name\":\"Government Polytechnic Mumbai\",\"course\":\"Diploma in Computer Engineering\",\"logo\":\"../../../assets/GPM.png\",\"grade\":\"Aggregate Percentage: 92.96%\"}]}");
    /***/
  },

  /***/
  "./src/assets/experience.json":
  /*!************************************!*\
    !*** ./src/assets/experience.json ***!
    \************************************/

  /*! exports provided: experience, default */

  /***/
  function srcAssetsExperienceJson(module) {
    module.exports = JSON.parse("{\"experience\":[{\"name\":\"Beckman Coulter Inc.\",\"role\":\"Software Development Intern - Software R&D\",\"logo\":\"../../../assets/beckman_logo.svg\",\"duration\":\"May 2020 - August 2020\",\"description\":[\"Developed and deployed an Automated Event Auditing system in a CI/CD environment to track user activities to help maintain a common log across all the applications in the environment.\",\"Built a REST API using MySQL, Spring Boot, Hibernate for the Auditing System.\",\"Designed a Graph User Interface for Data Visualization of medical devices data by leveraging React JS, Webpack, Babel using JavaScript based Libraries like d3.js and Plotly.js.\"]},{\"name\":\"IEEE Student Chapter VESIT\",\"role\":\"Jr. Web Developer\",\"logo\":\"../../../assets/ieee.png\",\"duration\":\"August 2017 - April 2018\",\"description\":[\"Developed Web Apps using Angular, HTML, CSS, JS, MySQL, PHP for themed events not only limited to Online Treasure Hunt - Web Based Game, Quizzard - Multi player Tech quiz\",\"Developed Android Applications and worked with REST APIs and Firebase for event registeration, managing and keeping track of the members enrolled in the IEEE-VESIT society..\",\"Conducted 4 Android and Firebase Workshops involving around 60 students and covered topics right from scratch like building UI to using Firebase Google Sign in.\"]}]}");
    /***/
  },

  /***/
  "./src/assets/projectsJSON.json":
  /*!**************************************!*\
    !*** ./src/assets/projectsJSON.json ***!
    \**************************************/

  /*! exports provided: projects, default */

  /***/
  function srcAssetsProjectsJSONJson(module) {
    module.exports = JSON.parse("{\"projects\":[{\"title\":\"Dyscalculia Detection Using Machine Learning\",\"technologies\":\"Technnologies Used: Python, Scikit-learn, Flask, Angular\",\"description\":[\"Developed an AI based system to assist doctors in detection of dyscalculia, a learning disability.\",\"Collaborated with Department of Psychiatry, T.N.M.C and B.Y.L. Nair Ch. Hospital.\",\"Developed a dataset and generated decision tree using Random Forest Algorithm to achieve 99.87% accuracy.\"],\"link\":\"https://doi.org/10.1007/978-3-030-34869-4_13\"},{\"title\":\"Meetify\",\"technologies\":\"Technnologies Used: IBM-Watson, Android\",\"description\":[\"Implemented a smart assistant AI – Meetify, which keeps track of the meeting.\",\" It continuously listens to conversation and performs voice diarization and returns the transcript along with sentimental analysis using IBM Watson.\"],\"link\":\"https://github.com/sarthakdadhakar/CampusConnect-KJ\"},{\"title\":\"Dialog Act Tagger for Sequence Labelling\",\"technologies\":\"Technnologies Used: Python, PyCRF suite\",\"description\":[\"Implemented a n-gram based Conditional Random Field model to predict the dialog act tag on Switchboard SWBD-DAMSL data which consists of telephone conversations.\",\"Researched several papers and annotation manual to implement the dialog tagger to achieve 78% accuracy.\"],\"link\":\"https://github.com/sarthakdadhakar/CSCI-544-Applied-NLP\"},{\"title\":\"Robotic Arm Simulation\",\"technologies\":\"Technnologies Used: Tensorflow, Unreal Engine 4\",\"description\":[\"Developed an object detection module using Tensorflow for Robotic Arm Simulation in Unreal Engine 4 to train a neural network to use a robotic arm and grab objects of interest.\"],\"link\":\"https://github.com/sarthakdadhakar/\"},{\"title\":\"Instant Identifier\",\"technologies\":\"Technnologies Used: Node.js, Google Cloud Platform-Vision API, JS, HTML, CSS\",\"description\":[\"Created a Chrome Plugin detects face/people/objects instantly and returns the description of matched identity with a short blurb from Wikipedia right within browser.\",\"Presented the project Err_404 State Level Hackathon, Mumbai sponsored by Intel to secure 3rd place.\"],\"link\":\"https://github.com/sarthakdadhakar/Instant-Identifier\"},{\"title\":\"Personal Chef \",\"technologies\":\"Technnologies Used: Android, API.AI, Node.js\",\"description\":[\"Created an Android based AI Personal Assistant Chatbot who does not let you waste food by recommending recipes along with details like nutrition content and ratings provided by users.\",\"Secured 2nd runner up place at Mumbai Hackathon 2017 for this project.\"],\"link\":\"https://github.com/sarthakdadhakar/Personal-Chef\"}]}");
    /***/
  },

  /***/
  "./src/assets/skills.json":
  /*!********************************!*\
    !*** ./src/assets/skills.json ***!
    \********************************/

  /*! exports provided: skills, default */

  /***/
  function srcAssetsSkillsJson(module) {
    module.exports = JSON.parse("{\"skills\":[{\"domain\":\"Languages\",\"image\":\"../../../assets/usc.png\",\"values\":[\"Java\",\"Python\",\"C++\",\"C\"],\"images\":[\"java.png\",\"python.png\",\"cpp.png\",\"c.png\"]},{\"domain\":\"Web Development\",\"image\":\"../../../assets/usc.png\",\"values\":[\"JavaScript\",\"HTML\",\"CSS\",\"Bootstrap\",\"React.js\",\"Angular\",\"Node.js\",\"Flask\",\"Webpack\",\"PHP\"],\"images\":[\"js.png\",\"html.png\",\"react.png\",\"angular.png\",\"nodejs.jpg\",\"webpack.png\",\"flask.png\",\"php.jpg\"]},{\"domain\":\"Databases\",\"image\":\"../../../assets/usc.png\",\"values\":[\"MySQL\",\"PostgreSQL\",\"MongoDB\",\"Firebase\",\"SQLite\",\"Oracle 11g\"],\"images\":[\"mysql.png\",\"postgresql.png\",\"mongodb.png\",\"firebase.png\",\"sqlite.png\",\"sql.png\"]},{\"domain\":\"Data Visualization\",\"image\":\"../../../assets/usc.png\",\"values\":[\"D3.js\",\"Plotly.js\",\"Tableau\"],\"images\":[\"d3.png\",\"plotly.png\",\"tableau.jpg\"]},{\"domain\":\"Data Science\",\"image\":\"../../../assets/usc.png\",\"values\":[\"Keras\",\"Tensorflow\",\"Scikit-learn\",\"Microsoft CNTK\",\"NLTK\",\"OpenCV\"],\"images\":[\"keras.png\",\"tensorflow.png\",\"scikit.png\",\"nltk.png\",\"opencv.png\"]},{\"domain\":\"Mobile Technologies\",\"image\":\"../../../assets/usc.png\",\"values\":[\"Android\"],\"images\":[\"android.jpg\"]},{\"domain\":\"Other Technologies\",\"image\":\"../../../assets/usc.png\",\"values\":[\"Google Cloud Platform\",\"Amazon Web Services\",\"Tomcat\",\"Git\"],\"images\":[\"gcp.png\",\"aws.jpg\",\"git.png\",\"tomcat.png\"]}]}");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Coding\Web Dev\angular_projects\proj\sarthakdadhakar.github.io\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map