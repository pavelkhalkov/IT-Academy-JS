const BasePage = require("./BasePage");

class ProductsPage extends BasePage {
  get clothesForHall() {
    return "._rightBanner_2qil0_92:nth-child(1)";
  }

  get productСard() {
    return ".grid__catalog >div:nth-child(1)";
  }

  get gridproductСard() {
    return "._font_normal_vy7x8_2:nth-child(3)";
  }

  get titleOfBrand() {
    return '//h1[@class="_titleText_641wy_15 ui-catalog-search-head-title"]';
  }

  get gotoSelectedSize() {
    return ".icon_direction-down.icon_24._arrow_1pcah_76";
  }

  get selectedSizeButton() {
    return "._placeholder_1pcah_51._placeholderSelected_1pcah_94";
  }

  get addToCartButton() {
    return "._root_1gjtp_2>a:nth-child(2)";
  }

  get windowAddedItemsToBasket() {
    return ".d-modal__content_paddings";
  }

  get logoOfBrand() {
    return ".tn-atom__img";
  }

  get addToBasketButton() {
    return ".x-button_48._cartButton_lky3q_11";
  }

  get titleBasketWindow() {
    return '//span[text()="Корзина"]';
  }

  get addItemButton() {
    return '.icon_incrementor-plus-simple.icon_direction-down.icon_24';
  } ////div[@class="_button_1jnpu_20"][2]


  get titleOfAddedItemsToBasketWindow() {
    return '//*[text()="Товар добавлен в корзину"]';
  }

  get continueShoppingButton() {
    return ".x-button_intrinsic-width._continue_it3s5_16";
  }

  get windowAddedItemsToBasket() {
    return ".d-modal__content.d-modal__content_paddings.d-modal__content_default";
  }

  get subscribeButton() {
    return ".icon_subscribe.icon_direction-down.icon_16";
  }

  get favoritesButton() {
    return ".icon_heart-product.icon_direction-down.icon_44";
  }

  get loginWindow() {
    return ".input__group.input__group_default-theme";
  }

  get outerClothesButton() {
    return '//div[@class="_fullWidth_ki68p_31"]//a[@href="/c/479/clothes-muzhskaya-verkhnyaya-odezhda/"]';
  }

  get sunGlassesButton() {
    return '//div[@class="_fullWidth_ki68p_31"]//a[@href="/c/2396/accs_ns-ochki-myzskie/"]';
  }

  get backpackButton() {
    return '//div[@class="_fullWidth_ki68p_31"]//a[@href="/c/595/bags-muzhskie-ryukzaki/"]';
  }

  get menWathButton() {
    return '//div[@class="_fullWidth_ki68p_31"]//a[@href="/c/799/accs-muzhskie-chasy/"]';
  }
  

  get popularFilterButton() {
    return '//div[@class="_content_2zwbo_16"]//*[text()="По популярности"]';
  }

  get searchPopularField() {
    return '//span[text()="По новинкам"]';
  }

  get searchFilterButton() {
    return '//div[@class="_content_2zwbo_16"]//*[text()="Test"]';
  }
}

module.exports = ProductsPage;
