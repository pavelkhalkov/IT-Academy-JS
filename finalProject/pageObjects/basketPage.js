const BasePage = require("./BasePage");

class BasketPage extends BasePage {
  get cartDisplay() {
    return "._package_1jov2_49";
  }

  get numberOfItems() {
    return '//*[text()="2 товара на сумму"]'; 
  }//._quantity_1jnpu_56

  get priceOfItems() {
    return "._price_194o5_102";
  }

  get totalpriceOfItems() {
    return "._root_1f8ev_2";
  }

  get gotoPay() {
    return ".x-button.x-button_primaryPremium";
  }

  get goToBasketButton() {
    return '//a[@class="x-button x-button_primaryFilledWeb7184 x-button_32 x-button_link x-button_link_32 x-button_intrinsic-width"]';
  }

  get numberOfAddedItems() {
    return '._quantity_1jnpu_56';
  }

  //span[@class="_dHeader_1m4fo_29"]
  
  get removeItemButton() {
    return '//*[text()="Убрать из корзины"]';
  }

  get emptyBasketWindow() {
    return '//*[text()="В корзине нет товаров"]';
  }

  get makingOrderButton() {
    return ".x-button_intrinsic-width._button_9lwbi_6";
  }

  get makingOrderWindow() {
    return '//form[@id="checkoutMultistepForm"]';
  }

  get promoCodeInputField() {
    return '.input-material__input-wrapper';
  } ////div[@class="input__group input__group_default-theme"]//input[@id="coupon_code"]

  //.input-material__input-user-agent.input-material__input_checkout
  get promoCodeButton() {
    return '._button_zgnvk_41._buttonAlignEnd_zgnvk_47';
  }

  get numberOfItemsBasket() {
    return "._count_1kpa7_11";
  }
}

module.exports = BasketPage;
