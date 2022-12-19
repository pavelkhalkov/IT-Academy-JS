const BasePage = require("./BasePage");

class ChangeCityPage extends BasePage {
  get cityСonfigurationModalWindow() {
    return ".d-modal__content_paddings.d-modal__content_geo-chooser";
  }

  get selectCityButton() {
    return '//*[text()="г. Санкт-Петербург"]';
  }

  get goToPurchasesButton() {
    return ".x-button.x-button_primaryFilledWeb7184.x-button_32.x-button_intrinsic-width";
  }
}

module.exports = ChangeCityPage;
