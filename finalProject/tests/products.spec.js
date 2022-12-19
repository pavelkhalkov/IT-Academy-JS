const { test, expect } = require("@playwright/test");

const PageFactory = require("../pageObjects/pageFactory.js");
const BaseElements = require("../helpers/baseElements");

test.describe("Test scenarios for Lamoda application to check adding products and filtering", () => {
  test.beforeEach(async ({ page }) => {
    const p = new PageFactory(page);
    await p.basePage.navigate("https://www.lamoda.ru/");
  });

  //++
  test("Сheck message that item is added to the basket", async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.mainPage.menSectionBanner);
    await I.click(element.header.accessoriesMenubarTab);
    await I.click(element.productsPage.backpackButton);
    await I.click(element.productsPage.productСard);
    await I.click(element.productsPage.addToBasketButton);
    await expect(
      page.locator(element.productsPage.titleOfAddedItemsToBasketWindow)
    ).toHaveText("Товар добавлен в корзину");
  });

  // //-
  test("Check the opening of the basket ", async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.mainPage.menSectionBanner);
    await I.click(element.header.accessoriesMenubarTab);
    await I.click(element.productsPage.backpackButton);
    await I.click(element.productsPage.productСard);
    await I.click(element.productsPage.addToBasketButton);
    await I.click(element.basketPage.goToBasketButton);
    await expect(
      page.locator(element.productsPage.titleBasketWindow)
    ).toHaveText("Корзина");
  });

  //++
  test("Сheck that shopping cart window closes after clicking continue shopping button", async ({
    page,
  }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.mainPage.menSectionBanner);
    await I.click(element.header.accessoriesMenubarTab);
    await I.click(element.productsPage.backpackButton);
    await I.click(element.productsPage.productСard);
    await I.click(element.productsPage.addToBasketButton);
    await I.click(element.productsPage.continueShoppingButton);
    await expect(
      page.locator(element.productsPage.windowAddedItemsToBasket)
    ).toBeHidden();
  });

  // ++
  test("Сheck that the number of items in the basket has increased after clicking the add button", async ({
    page,
  }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.mainPage.menSectionBanner);
    await I.click(element.header.accessoriesMenubarTab);
    await I.click(element.productsPage.backpackButton);
    await I.click(element.productsPage.productСard);
    await I.click(element.productsPage.addToBasketButton);
    await I.click(element.basketPage.goToBasketButton);
    await I.click(element.productsPage.addItemButton);
    await expect(
      page.locator(element.basketPage.numberOfAddedItems)
    ).toHaveText("2");
  });
 
  //++
  test("Check that new items are sorted using the filter new products", async ({
    page,
  }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.mainPage.menSectionBanner);
    await I.click(element.header.accessoriesMenubarTab);
    await I.click(element.productsPage.popularFilterButton);
    await I.click(element.productsPage.searchPopularField);
    await expect(
      page.locator(element.productsPage.searchPopularField)
    ).toContainText("По новинкам");
  });

  //++
  test("Сheck that adding a product to favorites requires a login", async ({
    page,
  }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.mainPage.menSectionBanner);
    await I.click(element.header.accessoriesMenubarTab);
    await I.click(element.productsPage.productСard);
    await I.click(element.productsPage.favoritesButton);
    await expect(page.locator(element.productsPage.loginWindow)).toBeVisible();
  });

  //++
  test("Check validation of the promo code", async ({
    page,
  }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.mainPage.menSectionBanner);
    await I.click(element.header.accessoriesMenubarTab);
    await I.click(element.productsPage.backpackButton);
    await I.click(element.productsPage.productСard);
    await I.click(element.productsPage.addToBasketButton);
    await I.click(element.basketPage.goToBasketButton);
    await I.fill(element.basketPage.promoCodeInputField, "2HPV2022");
    await expect(page.locator(element.basketPage.promoCodeButton)).toContainText('Акция не найдена');
  });
});