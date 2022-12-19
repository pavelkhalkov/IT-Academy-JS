const BasePage = require("./BasePage");

class MainPage extends BasePage {
  get menSectionBanner() {
    return ".js-ibanner-bg-image:nth-child(3)";
  }

  get generalBrand() {
    return ".main-trend-style__wrapper";
  }

  get mobileApplic() {
    return ".mobile-bannerii__container.js-ibanner-bg-image";
  }

  get menGoodsButton() {
    return "._shadow_rywrs_6";
  }

  get mainBreadcrumbsButton() {
    return ".swiper-slide._slide_ul8d6_13.swiper-slide-active";
  }

  get titleOfBrand() {
    return "._titleText_641wy_15.ui-catalog-search-head-title";
  }

  get windowLoginArea() {
    return ".d-modal__content_paddings.d-modal__content_default";
  }

  get emptySearchWindow() {
    return '//h1[@class="_title_ny4g9_24"]';

  }
}

module.exports = MainPage;
