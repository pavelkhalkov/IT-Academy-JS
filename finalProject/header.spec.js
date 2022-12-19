const { test, expect } = require("@playwright/test");

const PageFactory = require("../pageObjects/pageFactory.js");
const BaseElements = require("../helpers/baseElements");

test.describe("Test scenarios for Lamoda application to check the navigation", () => {
  test.beforeEach(async ({ page }) => {
    const p = new PageFactory(page);
    await p.basePage.navigate("https://www.lamoda.ru/");
  });

  //++
  test("Check that city in the header is updated after selecting another city", async ({
    page,
  }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.header.cityСonfigurationButton);
    await I.click(element.changeCityPage.selectCityButton);
    await I.click(element.changeCityPage.goToPurchasesButton);
    await expect(
      page.locator(element.header.cityСonfigurationButton)
    ).toContainText("г. Санкт-Петербург");
  });

  //++
  test('Check that displayed brand matches the search query in the search field', async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.mainPage.menSectionBanner);
    await I.click(element.search.searchButton);
    await I.fill(element.search.searchInputField, 'calvin klein');
    await I.click(element.search.searchButton);
    await expect(page.locator(element.mainPage.titleOfBrand)).toContainText('Calvin Klein');
  });

  //++
  test("Check that login is not possible without entering valid email or phone number", async ({
    page,
  }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.header.loginToApplicationButton);
    await I.click(element.header.loginButton);
    await expect(page.locator(element.mainPage.windowLoginArea)).toContainText(
      "Упс! Что-то пошло не так, попробуйте обновить страницу или повторите позднее"
    );
  });

  //++
  test("Check that the number of items in the basket is displayed on the main page", async ({
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
      page.locator(element.basketPage.numberOfItemsBasket)
    ).toHaveText("1 товар");
  });

  //++
  test("Check the correct text display for nothing found", async ({ page }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.mainPage.menSectionBanner);
    await I.click(element.search.searchButton);
    await I.fill(element.search.searchInputField, "test1234");
    await I.click(element.search.searchButton);
    await expect(
      page.locator(element.mainPage.emptySearchWindow)
    ).toContainText("Ничего не нашли по запросу «test1234»");
  });

});
