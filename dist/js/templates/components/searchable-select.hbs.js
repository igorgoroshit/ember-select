define("ember-select/templates/components/searchable-select", ["exports", "ember"], function (exports, _ember) {
  "use strict";

  exports["default"] = _ember["default"].HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 2
            },
            "end": {
              "line": 12,
              "column": 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "Searchable-select__selected-label");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["inline", "searchable-select-get", [["get", "_selected", ["loc", [null, [10, 30], [10, 39]]]], ["get", "optionLabelKey", ["loc", [null, [10, 40], [10, 54]]]]], [], ["loc", [null, [10, 6], [10, 56]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 15,
                "column": 4
              },
              "end": {
                "line": 26,
                "column": 4
              }
            }
          },
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "Searchable-select__selected-pill");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "class", "Searchable-select__selected-pill-text");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "class", "Searchable-select__selected-pill-clear");
            var el3 = dom.createTextNode("\n          ×\n        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element4 = dom.childAt(fragment, [1]);
            var element5 = dom.childAt(element4, [3]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(dom.childAt(element4, [1]), 1, 1);
            morphs[1] = dom.createElementMorph(element5);
            return morphs;
          },
          statements: [["inline", "searchable-select-get", [["get", "selectedOption", ["loc", [null, [18, 34], [18, 48]]]], ["get", "optionLabelKey", ["loc", [null, [18, 49], [18, 63]]]]], [], ["loc", [null, [18, 10], [18, 65]]]], ["element", "action", ["removeOption", ["get", "selectedOption", ["loc", [null, [22, 34], [22, 48]]]]], ["bubbles", false], ["loc", [null, [22, 10], [22, 64]]]]],
          locals: ["selectedOption"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 2
            },
            "end": {
              "line": 27,
              "column": 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "_selected", ["loc", [null, [15, 12], [15, 21]]]]], [], 0, null, ["loc", [null, [15, 4], [26, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 29,
              "column": 2
            },
            "end": {
              "line": 31,
              "column": 2
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "Searchable-select__prompt");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "prompt", ["loc", [null, [30, 44], [30, 54]]]]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 46,
                "column": 4
              },
              "end": {
                "line": 56,
                "column": 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "Searchable-select__clear");
            dom.setAttribute(el1, "tabindex", "-1");
            dom.setAttribute(el1, "data-enter-key-action", "clear");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "class", "Searchable-select__icon Searchable-select__icon--clear");
            var el3 = dom.createTextNode("\n          ×\n        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createElementMorph(element1);
            morphs[1] = dom.createMorphAt(element1, 3, 3);
            return morphs;
          },
          statements: [["element", "action", ["clear"], ["bubbles", false], ["loc", [null, [50, 8], [50, 40]]]], ["content", "clearLabel", ["loc", [null, [54, 8], [54, 22]]]]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 58,
                "column": 4
              },
              "end": {
                "line": 65,
                "column": 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "Searchable-select__add-new");
            dom.setAttribute(el1, "tabindex", "-1");
            dom.setAttribute(el1, "data-enter-key-action", "addNew");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode(" ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("em");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(3);
            morphs[0] = dom.createElementMorph(element0);
            morphs[1] = dom.createMorphAt(element0, 1, 1);
            morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 0, 0);
            return morphs;
          },
          statements: [["element", "action", ["addNew"], ["bubbles", false], ["loc", [null, [62, 6], [62, 39]]]], ["content", "addLabel", ["loc", [null, [63, 6], [63, 18]]]], ["content", "_searchText", ["loc", [null, [63, 23], [63, 38]]]]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 67,
                "column": 4
              },
              "end": {
                "line": 71,
                "column": 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "Searchable-select__info");
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["content", "noResultsMessage", ["loc", [null, [69, 6], [69, 26]]]]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 73,
                "column": 4
              },
              "end": {
                "line": 106,
                "column": 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "Searchable-select__info");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment(" Loading SVG by Sam Herbert (@sherb), More @ http://goo.gl/7AJzbL ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.setNamespace("http://www.w3.org/2000/svg");
            var el2 = dom.createElement("svg");
            dom.setAttribute(el2, "width", "12");
            dom.setAttribute(el2, "height", "12");
            dom.setAttribute(el2, "viewBox", "0 0 40 40");
            dom.setAttribute(el2, "xmlns", "http://www.w3.org/2000/svg");
            dom.setAttribute(el2, "stroke", "#9a9a9a");
            dom.setAttribute(el2, "class", "Searchable-select__loader");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("g");
            dom.setAttribute(el3, "fill", "none");
            dom.setAttribute(el3, "fill-rule", "evenod  d");
            var el4 = dom.createTextNode("\n            ");
            dom.appendChild(el3, el4);
            var el4 = dom.createElement("g");
            dom.setAttribute(el4, "transform", "translate(2 2)");
            dom.setAttribute(el4, "stroke-width", "4");
            var el5 = dom.createTextNode("\n              ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("circle");
            dom.setAttribute(el5, "stroke-opacity", ".6");
            dom.setAttribute(el5, "cx", "18");
            dom.setAttribute(el5, "cy", "18");
            dom.setAttribute(el5, "r", "18");
            dom.setAttribute(el5, "class", "Searchable-select__loader-circle");
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n              ");
            dom.appendChild(el4, el5);
            var el5 = dom.createElement("path");
            dom.setAttribute(el5, "d", "M36 18c0-9.94-8.06-18-18-18");
            dom.setAttribute(el5, "class", "Searchable-select__loader-spinner");
            var el6 = dom.createTextNode("\n                ");
            dom.appendChild(el5, el6);
            var el6 = dom.createElement("animateTransform");
            dom.setAttribute(el6, "attributeName", "transform");
            dom.setAttribute(el6, "type", "rotate");
            dom.setAttribute(el6, "from", "0 18 18");
            dom.setAttribute(el6, "to", "360 18 18");
            dom.setAttribute(el6, "dur", "0.8s");
            dom.setAttribute(el6, "repeatCount", "indefinite");
            dom.appendChild(el5, el6);
            var el6 = dom.createTextNode("\n              ");
            dom.appendChild(el5, el6);
            dom.appendChild(el4, el5);
            var el5 = dom.createTextNode("\n            ");
            dom.appendChild(el4, el5);
            dom.appendChild(el3, el4);
            var el4 = dom.createTextNode("\n          ");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            dom.setNamespace(null);
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "class", "Searchable-select__loader-text");
            var el3 = dom.createTextNode("\n          ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 5]), 1, 1);
            return morphs;
          },
          statements: [["content", "loadingMessage", ["loc", [null, [103, 10], [103, 28]]]]],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 110,
                  "column": 6
                },
                "end": {
                  "line": 118,
                  "column": 6
                }
              }
            },
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["inline", "searchable-select-option", [], ["option", ["subexpr", "@mut", [["get", "option", ["loc", [null, [112, 17], [112, 23]]]]], [], []], "selected", ["subexpr", "@mut", [["get", "_selected", ["loc", [null, [113, 19], [113, 28]]]]], [], []], "searchText", ["subexpr", "@mut", [["get", "_searchText", ["loc", [null, [114, 21], [114, 32]]]]], [], []], "optionLabelKey", ["subexpr", "@mut", [["get", "optionLabelKey", ["loc", [null, [115, 25], [115, 39]]]]], [], []], "optionDisabledKey", ["subexpr", "@mut", [["get", "optionDisabledKey", ["loc", [null, [116, 28], [116, 45]]]]], [], []], "select-item", ["subexpr", "action", ["selectItem"], [], ["loc", [null, [117, 22], [117, 43]]]]], ["loc", [null, [111, 8], [117, 46]]]]],
            locals: ["option"],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 108,
                "column": 4
              },
              "end": {
                "line": 120,
                "column": 4
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("ul");
            dom.setAttribute(el1, "class", "Searchable-select__options-list");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("    ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
            return morphs;
          },
          statements: [["block", "each", [["get", "_filteredContent", ["loc", [null, [110, 14], [110, 30]]]]], [], 0, null, ["loc", [null, [110, 6], [118, 15]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 34,
              "column": 0
            },
            "end": {
              "line": 123,
              "column": 0
            }
          }
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "Searchable-select__menu");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "Searchable-select__search");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element2 = dom.childAt(fragment, [1]);
          var element3 = dom.childAt(element2, [1]);
          var morphs = new Array(7);
          morphs[0] = dom.createElementMorph(element3);
          morphs[1] = dom.createMorphAt(element3, 1, 1);
          morphs[2] = dom.createMorphAt(element2, 3, 3);
          morphs[3] = dom.createMorphAt(element2, 5, 5);
          morphs[4] = dom.createMorphAt(element2, 7, 7);
          morphs[5] = dom.createMorphAt(element2, 9, 9);
          morphs[6] = dom.createMorphAt(element2, 11, 11);
          return morphs;
        },
        statements: [["element", "action", ["noop"], ["bubbles", false], ["loc", [null, [36, 43], [36, 74]]]], ["inline", "input", [], ["class", "Searchable-select__input", "type", "text", "placeholder", ["subexpr", "@mut", [["get", "searchPrompt", ["loc", [null, [40, 20], [40, 32]]]]], [], []], "key-up", "updateSearch", "tabindex", -1, "bubbles", false], ["loc", [null, [37, 6], [43, 23]]]], ["block", "if", [["get", "_isShowingClear", ["loc", [null, [46, 10], [46, 25]]]]], [], 0, null, ["loc", [null, [46, 4], [56, 11]]]], ["block", "if", [["get", "_isShowingAddNew", ["loc", [null, [58, 10], [58, 26]]]]], [], 1, null, ["loc", [null, [58, 4], [65, 11]]]], ["block", "if", [["get", "_isShowingNoResultsMessage", ["loc", [null, [67, 10], [67, 36]]]]], [], 2, null, ["loc", [null, [67, 4], [71, 11]]]], ["block", "if", [["get", "isLoading", ["loc", [null, [73, 10], [73, 19]]]]], [], 3, null, ["loc", [null, [73, 4], [106, 11]]]], ["block", "if", [["get", "_hasResults", ["loc", [null, [108, 10], [108, 21]]]]], [], 4, null, ["loc", [null, [108, 4], [120, 11]]]]],
        locals: [],
        templates: [child0, child1, child2, child3, child4]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 123,
            "column": 7
          }
        }
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("a");
        dom.setAttribute(el1, "href", "#");
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element6 = dom.childAt(fragment, [0]);
        var morphs = new Array(6);
        morphs[0] = dom.createAttrMorph(element6, 'class');
        morphs[1] = dom.createElementMorph(element6);
        morphs[2] = dom.createMorphAt(element6, 1, 1);
        morphs[3] = dom.createMorphAt(element6, 3, 3);
        morphs[4] = dom.createMorphAt(element6, 5, 5);
        morphs[5] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["Searchable-select__label\n    ", ["subexpr", "if", [["get", "_isShowingMenu", ["loc", [null, [3, 9], [3, 23]]]], "Searchable-select__label--menu-open"], [], ["loc", [null, [3, 4], [3, 63]]]], "\n    ", ["subexpr", "if", [["get", "multiple", ["loc", [null, [4, 9], [4, 17]]]], "Searchable-select__label--multiple"], [], ["loc", [null, [4, 4], [4, 56]]]], "\n    ", ["subexpr", "if", [["get", "_hasMultipleSelection", ["loc", [null, [5, 9], [5, 30]]]], "Searchable-select__label--multiple-selected"], [], ["loc", [null, [5, 4], [5, 78]]]]]]], ["element", "action", ["toggleMenu"], [], ["loc", [null, [6, 2], [6, 25]]]], ["block", "if", [["get", "_hasSingleSelection", ["loc", [null, [8, 8], [8, 27]]]]], [], 0, null, ["loc", [null, [8, 2], [12, 9]]]], ["block", "if", [["get", "_hasMultipleSelection", ["loc", [null, [14, 8], [14, 29]]]]], [], 1, null, ["loc", [null, [14, 2], [27, 9]]]], ["block", "unless", [["get", "_hasSelection", ["loc", [null, [29, 12], [29, 25]]]]], [], 2, null, ["loc", [null, [29, 2], [31, 13]]]], ["block", "if", [["get", "_isShowingMenu", ["loc", [null, [34, 6], [34, 20]]]]], [], 3, null, ["loc", [null, [34, 0], [123, 7]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});