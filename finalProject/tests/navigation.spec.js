const { test, expect } = require("@playwright/test");

const PageFactory = require("../pageObjects/pageFactory.js");
const BaseElements = require("../helpers/baseElements");

test.describe("Test scenarios for Lamoda application to check the navigation", () => {
  test.beforeEach(async ({ page }) => {
    const p = new PageFactory(page);
    await p.basePage.navigate("https://www.lamoda.ru/");
  });

  //++
  test("Check that main page is opened after clicking Lamoda label at the top of the page", async ({
    page,
  }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.header.sportMenubarTab);
    await I.click(element.productsPage.clothesForHall);
    await I.click(element.header.lamodaLogo);
    await expect(page).toHaveURL("https://www.lamoda.ru/");
  });

  //++
  test("Check that a particular section can be opened from the footer ", async ({
    page,
  }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.footer.menFooterButton);
    await I.click(element.footer.clothesFooterButton);
    await expect(page.locator(element.productsPage.titleOfBrand)).toContainText(
      "Мужская одежда"
    );
    await expect(page).toHaveURL(
      "https://www.lamoda.ru/c/477/clothes-muzhskaya-odezhda/"
    );
  });

  //++
  test("Check that page can be switched to the main page using breadcrumbs", async ({
    page,
  }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.header.menSection);
    await I.click(element.header.clothesMenubarTab);
    await I.click(element.mainPage.mainBreadcrumbsButton);
    await expect(page).toHaveURL("https://www.lamoda.ru/");
  });
});
