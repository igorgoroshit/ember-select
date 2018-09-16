define('ember-select/helpers/searchable-select-get', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.searchableSelectGet = searchableSelectGet;

  function searchableSelectGet(_ref) {
    var object = _ref[0];
    var path = _ref[1];

    if (!path) {
      return;
    }

    return _ember['default'].get(object, path);
  }

  exports['default'] = _ember['default'].Helper.helper(searchableSelectGet);
});