const BasePage = require("../BasePage");

class Footer extends BasePage {
  get displayFooter() {
    return ".x-footer-inner";
  }

  get helpDesk() {
    return ".x-footer__item:nth-child(1)";
  }

  get paymentMethod() {
    return ".x-footer__item:nth-child(3)";
  }

  get subscriptionDiscount() {
    return "._premiumTheme_1ud0a_62";
  }

  get menFooterButton() {
    return ".x-footer-seo-menu-tab-title:nth-child(3)";
  }

  get menClothesFooterButton() {
    return ".x-footer-seo-menu-tab-title:nth-child(3)";
  }

  get clothesFooterButton() {
    return '.x-footer-seo-menu-tab-links a[href*="clothes-muzhskaya-odezhda"]';
  }

  get changeCountryFooterButton() {
    return "._description_ue1al_51";
  }

  get changedByCountryFooterButton() {
    return '//a[@href="https://www.lamoda.by"]';
  }

  get emailInputField() {
    return ".input__group_premium-theme .input__input";
  }

  get forHimFooterButton() {
    return ".x-button_intrinsic-width._button_1ud0a_11:nth-child(2)";
  }

  get forHerFooterButton() {
    return ".x-button_intrinsic-width._button_1ud0a_11:nth-child(1)";
  }

  get discounMessageLabel() {
    return '//*[text()="Письмо с промокодом уже на почте"]';
  }

  get discounNotValidEmail() {
    return ".input__validation-message.input__validation-message_premium-theme";
  }

  get telegramSocialFotterButton() {
    return '//a[@href="https://t.me/lamoda_na_svyazi?from=footer"]';
  }

  get ressetButton() {
    return ".icon_reset.icon_direction-down.icon_16";
  }
}

module.exports = Footer;
