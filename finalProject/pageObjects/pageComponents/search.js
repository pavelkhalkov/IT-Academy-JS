const BasePage = require("../BasePage");

class Search extends BasePage {
  get searchButton() {
    return ".x-button_32._button_xf7ng_11";
  }

  get searchInputField() {
    return "._root_lw8ys_2 ._input_xf7ng_19._inputShown_xf7ng_43";
  }
}

module.exports = Search;
// ._inputShown_xf7ng_43<input autocomplete="off" type="text" maxlength="128" placeholder="Поиск" class="_input_xf7ng_19">
