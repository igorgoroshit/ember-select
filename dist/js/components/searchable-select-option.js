define('ember-select/components/searchable-select-option', ['exports', 'ember', '../templates/components/searchable-select-option'], function (exports, _ember, _templatesComponentsSearchableSelectOption) {
  'use strict';

  exports['default'] = _ember['default'].Component.extend({
    layout: _templatesComponentsSearchableSelectOption['default'],
    tagName: 'li',
    classNameBindings: [':Searchable-select__option', 'isDisabled:Searchable-select__option--disabled', 'isSelected:Searchable-select__option--selected'],
    attributeBindings: ['tabindex'],

    option: null,
    optionLabelKey: 'title',
    optionDisabledKey: null,
    selected: null,
    searchText: '',

    isDisabled: _ember['default'].computed('option', 'optionDisabledKey', function () {
      if (this.get('optionDisabledKey')) {
        return _ember['default'].get(this.get('option'), this.get('optionDisabledKey'));
      }
    }),
    isSelected: _ember['default'].computed('option', 'selected', 'selected.[]', function () {
      if (Array.isArray(this.get('selected'))) {
        return _ember['default'].A(this.get('selected')).contains(this.get('option'));
      } else {
        return this.get('selected') === this.get('option');
      }
    }),
    tabindex: _ember['default'].computed('isDisabled', function () {
      if (!this.get('isDisabled')) {
        return -1;
      }
    }),

    keyDown: function keyDown(event) {
      // enter key selects item
      if (event.keyCode === 13) {
        this.send('selectItem');
      }
    },

    click: function click() {
      this.send('selectItem');
    },

    actions: {
      selectItem: function selectItem() {
        this.attrs['select-item'](this.get('option'));
      }
    }
  });
});