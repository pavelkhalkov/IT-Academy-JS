const { test, expect } = require("@playwright/test");

const PageFactory = require("../pageObjects/pageFactory.js");
const BaseElements = require("../helpers/baseElements");

test.describe("Test scenarios for Lamoda application from the footer", () => {
  test.beforeEach(async ({ page }) => {
    const p = new PageFactory(page);
    await p.basePage.navigate("https://www.lamoda.ru/");
  });
  //+
  test("Сheck that country in the footer is updated after selecting another country", async ({
    page,
  }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.click(element.footer.changeCountryFooterButton);
    await I.click(element.footer.changedByCountryFooterButton);
    await expect(page).toHaveURL("https://www.lamoda.by/");
  });
  //+
  test("Check that discount email is sent after entering a valid email", async ({
    page,
  }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.fill(element.footer.emailInputField, "xessosello@mail.com");
    await I.click(element.footer.forHimFooterButton);
    await expect(
      page.locator(element.footer.discounMessageLabel)
    ).toContainText("Письмо с промокодом уже на почте");
  });

  //+
  test("Check that discount email is not sent after entering a not valid email", async ({
    page,
  }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.fill(element.footer.emailInputField, "xessosello@mail..com");
    await expect(page.locator(element.footer.discounNotValidEmail)).toHaveText(
      "Пожалуйста, проверьте, правильно ли указан адрес электронной почты."
    );

    await expect(
      page.locator(element.footer.forHerFooterButton)
    ).toBeDisabled();
    await expect(
      page.locator(element.footer.forHimFooterButton)
    ).toBeDisabled();
  });

  //+
  test("Check deletion of text in the email line", async ({
    page,
    context,
  }) => {
    const element = new PageFactory(page);
    const I = new BaseElements(page);
    await I.fill(element.footer.emailInputField, "greosello@mail.com");
    await I.click(element.footer.ressetButton);
    await expect(page.locator(element.footer.emailInputField)).toBeVisible();
  });

  //+
  test("Сheck that Telegram page is opened from the footer", async ({
    page,
    context,
  }) => {
    const element = new PageFactory(page);
    const [TelegramPage] = await Promise.all([
      context.waitForEvent("page"),
      page.locator(element.footer.telegramSocialFotterButton).click(),
    ]);
    await expect(TelegramPage).toHaveURL(
      "https://t.me/lamoda_na_svyazi?from=footer"
    );
  });
});
