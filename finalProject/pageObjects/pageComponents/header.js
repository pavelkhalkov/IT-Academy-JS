const BasePage = require("../BasePage");

class Header extends BasePage {
  get lamodaLogo() {
    return "._root_8m6xk_2";
  }

  get MenubarTab() {
    return "._bottomRow_ruiv4_20";
  }

  get clothesMenubarTab() {
    return "._root_jcagj_2.undefined:nth-child(3)";
  }

  get accessoriesMenubarTab() {
    return "._root_jcagj_2.undefined:nth-child(5)";
  }

  get sportMenubarTab() {
    return "._root_jcagj_2.undefined:nth-child(8)";
  }

  get menSection() {
    return "._link_1o7df_16._link_1o7df_16:nth-child(2)";
  }

  get cityСonfigurationButton() {
    return "._message_kn91o_11";
  }

  get loginToApplicationButton() {
    return "._root_1gjtp_2>a:nth-child(1)";
  }

  get loginButton() {
    return ".x-button_intrinsic-width._submit_3z173_25";
  }

  // get loginInputField() {
  //   return '.input__group.input__group_default-theme';
  // }

  // get passwordInputField() {
  //   return '//div[@class="input__group input__group_default-theme"]//input[@name="password"]';
  // }

  // div[@class='_icon_ny4g9_13']//*[text()="Ничего не нашли по запросу"]
}

module.exports = Header;
