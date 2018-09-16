define('ember-select/components/searchable-select', ['exports', 'ember', '../templates/components/searchable-select'], function (exports, _ember, _templatesComponentsSearchableSelect) {
  'use strict';

  /* global $ */

  exports['default'] = _ember['default'].Component.extend({
    layout: _templatesComponentsSearchableSelect['default'],
    classNames: ['Searchable-select'],
    classNameBindings: ['_isShowingMenu:Searchable-select--menu-open', 'multiple:Searchable-select--multiple'],

    content: null,
    selected: null,
    optionLabelKey: 'title',
    optionDisabledKey: null,
    sortBy: null,
    limitSearchToWordBoundary: false,
    multiple: false,
    closeOnSelection: true,

    prompt: 'Select an option',
    searchPrompt: 'Type to search',
    noResultsMessage: 'No matching results',

    isClearable: true,
    clearLabel: 'Clear',

    addLabel: 'Add',

    isLoading: false,
    loadingMessage: 'Searching...',

    _searchText: '',
    _isShowingMenu: false,
    _hasSelection: _ember['default'].computed.notEmpty('_selected'),
    _isShowingClear: _ember['default'].computed.and('isClearable', '_hasSelection'),
    _hasNoResults: _ember['default'].computed.empty('_filteredContent'),
    _hasResults: _ember['default'].computed.not('_hasNoResults'),
    _isNotLoading: _ember['default'].computed.not('isLoading'),
    _isSingleSelect: _ember['default'].computed.not('multiple'),
    _hasMultipleSelection: _ember['default'].computed.and('multiple', '_hasSelection'),
    _hasSingleSelection: _ember['default'].computed.and('_isSingleSelect', '_hasSelection'),
    _isShowingAddNew: _ember['default'].computed.and('_canAddNew', '_hasNoMatchedKeys', '_searchText'),
    _isShowingNoResultsMessage: _ember['default'].computed.and('_searchText', '_hasNoResults', '_isNotLoading'),
    _canAddNew: _ember['default'].computed.bool('on-add'),
    _hasOnSearchAction: _ember['default'].computed.bool('on-search'),
    _isFilterActive: _ember['default'].computed.not('_hasOnSearchAction'),

    'on-change': null,
    'on-add': null,
    'on-search': null,
    'on-close': null,
    'on-open': null,

    // Make the passed in `selected` a one-way binding.
    // `Ember.computed.oneWay` won't pick up on upstream
    // changes after the prop gets set internally.

    // TODO [brenna]: refactor into two CP's, one for single _selected,
    // one for _multiselected
    _selected: _ember['default'].computed('selected', 'selected.[]', {
      get: function get() {
        if (this.get('multiple') && !this.get('selected')) {
          // coerce null multiple selections to an empty array
          return _ember['default'].A([]);
        } else if (this.get('multiple') && !Array.isArray(this.get('selected'))) {
          throw new Error('Searchable select: passed in multiple selection must be an array');
        } else {
          return this.get('selected');
        }
        return this.get('selected');
      },
      set: function set(key, value) {
        return value;
      }
    }),

    _sortArray: _ember['default'].computed('sortBy', function () {
      if (this.get('sortBy')) {
        return this.get('sortBy').replace(' ', '').split(',');
      }
      return [];
    }),

    _sortedContent: _ember['default'].computed.sort('content', '_sortArray'),

    _filterRegex: _ember['default'].computed('limitSearchToWordBoundary', '_searchText', function () {
      var searchText = this.get('_searchText');

      if (searchText) {
        var regex = this.get('limitSearchToWordBoundary') ? '\\b' + searchText : searchText;
        return new RegExp(regex, 'i');
      }
    }),

    _filteredContent: _ember['default'].computed('_sortedContent.[]', 'optionLabelKey', '_filterRegex', '_isFilterActive', function () {
      var _this = this;

      var filterRegex = this.get('_filterRegex');
      var content = this.get('_sortedContent');

      if (filterRegex && this.get('_isFilterActive')) {
        return _ember['default'].A(content.filter(function (item) {
          return filterRegex.test(_ember['default'].get(item, _this.get('optionLabelKey')));
        }));
      } else {
        return content;
      }
    }),

    _filteredKeys: _ember['default'].computed('_filteredContent', 'optionLabelKey', function () {
      var optKey = this.get('optionLabelKey');
      return _ember['default'].A(this.get('_filteredContent').mapBy(optKey));
    }),

    _hasMatchedKey: _ember['default'].computed('_filteredKeys', '_searchText', function () {
      // let regex = new RegExp('^' + this.get('_searchText') + '$', 'i');
      var regex = new RegExp('^' + this.get('_searchText') + '$', 'i');

      return this.get('_filteredKeys').filter(function (key) {
        return regex.test(key);
      }).length;
    }),

    _hasNoMatchedKeys: _ember['default'].computed.not('_hasMatchedKey'),

    _setup: _ember['default'].on('didInsertElement', function () {
      var _this2 = this;

      // keyboard controls

      this.$().on('keydown', function (e) {
        _this2._handleKeyboardControls(e);
      });
    }),

    _teardown: _ember['default'].on('willDestroyElement', function () {
      this._unbindOutsideClicks();
    }),

    _bindOutsideClicks: function _bindOutsideClicks() {
      var component = this;
      var componentElem = this.get('element');
      $(window).on('click.' + component.elementId, function (e) {
        if (!$.contains(componentElem, e.target)) {
          component.send('hideMenu');
          component.$('.Searchable-select__label').blur();
        }
      });
    },

    _unbindOutsideClicks: function _unbindOutsideClicks() {
      var component = this;
      $(window).off('click.' + component.elementId);
    },

    _handleKeyboardControls: function _handleKeyboardControls(e) {
      var $focussable = this.$('[tabindex]');
      var i = $focussable.index(e.target);

      if (e.keyCode === 40) {
        // down arrow
        e.preventDefault();
        $focussable.eq(i + 1).focus();

        if ($(e.target).is('.Searchable-select__label')) {
          this.send('showMenu');
        }
      } else if (e.keyCode === 38) {
        // up arrow
        e.preventDefault();
        if (i > 0) {
          $focussable.eq(i - 1).focus();
        }
      } else if (e.keyCode === 27 || e.keyCode === 9) {
        // escape key or tab key
        this.send('hideMenu');
      } else if (e.keyCode === 13) {
        // enter key
        e.preventDefault();
        var action = $(e.target).attr('data-enter-key-action');

        if (action) {
          this.send(action);
        }
      }
    },

    _toggleSelection: function _toggleSelection(item) {
      if (item === null) {
        this.set('_selected', _ember['default'].A([]));
      } else if (_ember['default'].A(this.get('_selected')).contains(item)) {
        this.removeFromSelected(item);
      } else {
        this.addToSelected(item);
      }
    },

    // non-mutating adding and removing to/from the _selected array
    removeFromSelected: function removeFromSelected(item) {
      var selected = this.get('_selected');
      var i = selected.indexOf(item);
      var newSelection = selected.slice(0, i).concat(selected.slice(i + 1));
      this.set('_selected', _ember['default'].A(newSelection));
    },
    addToSelected: function addToSelected(item) {
      this.set('_selected', _ember['default'].A(this.get('_selected').concat([item])));
    },

    // verify passed in functions are functions, if not use a no-op in their place
    checkForFunction: function checkForFunction(attr) {
      if (typeof attr === 'function') {
        return attr;
      } else {
        return function () {};
      }
    },

    actions: {
      updateSearch: function updateSearch(text) {
        this.set('_searchText', text);
        this.checkForFunction(this.get('on-search')).call(this, text);
      },
      selectItem: function selectItem(item) {
        var disabledKey = this.get('optionDisabledKey');

        if (item && disabledKey && _ember['default'].get(item, disabledKey)) {
          // item is disabled, do nothing
          return;
        }

        if (this.get('multiple')) {
          // add or remove item from selection
          this._toggleSelection(item);
        } else {
          // replace selection
          this.set('_selected', item);
        }

        this.checkForFunction(this.get('on-change')).call(this, this.get('_selected'));

        if (this.get('closeOnSelection')) {
          this.send('hideMenu');
        }
      },
      toggleMenu: function toggleMenu() {
        if (this.get('_isShowingMenu')) {
          this.send('hideMenu');
        } else {
          this.send('showMenu');
        }
      },
      showMenu: function showMenu() {
        this.set('_isShowingMenu', true);

        this.checkForFunction(this.get('on-open')).call(this);

        _ember['default'].run.scheduleOnce('afterRender', this, function () {
          // focus search input
          this.$('.Searchable-select__input').focus();
        });

        _ember['default'].run.next(this, function () {
          this._bindOutsideClicks();
        });
      },
      hideMenu: function hideMenu() {
        this.set('_isShowingMenu', false);
        this._unbindOutsideClicks();
        this.set('_searchText', '');
        this.$('.Searchable-select__label').focus();
        this.checkForFunction(this.get('on-close')).call(this);
      },
      clear: function clear() {
        this.send('selectItem', null);
      },
      removeOption: function removeOption(option) {
        this.removeFromSelected(option);
        this['on-change'].call(this, this.get('_selected'));
      },
      addNew: function addNew() {
        this.get('on-add')(this.get('_searchText'));
        if (this.get('closeOnSelection')) {
          this.send('hideMenu');
        }
      },
      noop: function noop() {
        // need an action to able to attach bubbles:false to an elem
      }
    }

  });
});