define('ember-select/helpers/searchable-select-highlight-match', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.searchableSelectHighlightMatch = searchableSelectHighlightMatch;

  function searchableSelectHighlightMatch(_ref) {
    var text = _ref[0];
    var matchText = _ref[1];

    if (!matchText || !text) {
      return text;
    }

    var highlightedText = text.replace(new RegExp('(' + matchText + ')', 'i'), '<span class="Searchable-select__matched-text">$1</span>');

    return _ember['default'].String.htmlSafe(highlightedText);
  }

  exports['default'] = _ember['default'].Helper.helper(searchableSelectHighlightMatch);
});