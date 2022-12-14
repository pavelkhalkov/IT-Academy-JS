//C помощью selenium-webdriver написать тест:
// 1) зайти на сайт https://chromedriver.chromium.org/home
// 2) проверить текст основного тайтла "ChromeDriver"
// 3) кликнуть в хедере на пункт "Chrome Extencions"
// 4) сделать хайлайт для нового основного тайтла
// 5) проверить что новый тайтл стал "Chrome Extencions"
// 6. Перейти на страницу поиска
// 7. Ввести driver в поиск
// 8. Проверить что первая ссылка содержит слово driver
// 9. Открыть в меню "Дополнительно"
// 10. Нажать "Mobile Emulation"
// 11. Проверить что url содержит /mobile-emulation
// Задание оценивается из 9 баллов

const { Builder, By, Key, until} = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();
const chai = require("chai");
const assert = chai.assert;

const homePageTitleText = "ChromeDriver - WebDriver for Chrome";
const chromeExtensionsPageTitleText = "ChromeDriver - WebDriver for Chrome - Chrome Extensions";

//chech title of a page
async function checkPageTitle(expectTitle) {
  const title = await driver.getTitle();
  assert.equal(title, expectTitle);
}

//check text of an element
async function checkElementText(element, expectedText){
  // находим элемент получаем текст элемента
  let elementText = await driver.findElement(By.xpath(element)).getText();
  // выведем текст в консоль для отладки теста
  console.log(elementText, expectedText);
  // проверим текст на соответствие
  assert.equal(elementText, expectedText);
}

describe.only("lesson 17 homework", function () {

  before(async () => {
    // 1) зайти на сайт https://chromedriver.chromium.org/home
    await driver.get("https://chromedriver.chromium.org/home");
    // развернуть окно
    await driver.manage().window().maximize();
  });

  // проверяем тайтл страницы
  it("Page title should be equivalent to ChromeDriver - WebDriver for Chrome", async () => {
    await checkPageTitle(homePageTitleText);
  });

  // 2) проверить текст основного тайтла "ChromeDriver"
  it("Page h1 element should have text 'ChromeDriver'", async () => {
    const h1Element = "//h1/span";
    await checkElementText(h1Element,"ChromeDriver");
  });

//  3) кликнуть в хедере на пункт "Chrome Extensions"
  it("Click Chrome Extensions link in the nav should lead to the '/extensions' page", async () => {
    const dropdown = await driver.findElement(By.css('.oXBWEc > .PsKE7e [jscontroller="yUHiM"]'));
    const extensionsLink = await driver
      .findElement(By.xpath('//*[@class="PsKE7e qV4dIc Qrrb5 YSH9J"]//a[text()="Chrome Extensions"]'));
    await driver.actions().click(dropdown).perform();
    await driver.actions().click(extensionsLink).perform();
    await driver.wait(until.urlContains('/extensions'), 10000);
  });

  // проверяем тайтл страницы
  it("Page title should be equivalent to ChromeDriver - WebDriver for Chrome - Chrome Extensions", async () => {
    await checkPageTitle(chromeExtensionsPageTitleText);
  });

  // 4) сделать хайлайт для нового основного тайтла
  it("HighLight new page Title", async () => {
    const title = await driver.findElement(By.css(".jXK9ad-SmKAyb .Rn3Z1b"));
    driver.executeScript("arguments[0].style.backgroundColor = 'green'", title);
    await driver.sleep(2000);
  });

  // 5) проверить что новый тайтл стал "Chrome Extencions"
  it("Page h1 element should have text \"Chrome Extensions\"", async () => {
    const h1Element = "//h1/span";
    await checkElementText(h1Element, "Chrome Extensions");
  });

  it('The first link "driver" search contains "driver"', async () => {
    // 6. Перейти на страницу поиска
    await  driver.get("https://chromedriver.chromium.org/_/search");
    const sershField = await driver.findElement(By.css('[type="search"]'));
    // 7. Ввести driver в поиск
    await sershField.sendKeys("driver", Key.ENTER);
    await driver.sleep(1000);
    // 8. Проверить, что первая ссылка содержит слово driver
    const firstResult = await driver.findElement(By.xpath('//*[@class="lZsZxe"]//a[1]'));
    const link = await firstResult.getAttribute("href");
    const linkInnerText = "driver";
    // выведем линк в консоль для отладки теста
    console.log(link);
    assert.isTrue(link.includes(linkInnerText));
  });

  //9. Перейдем в меню "Дополнительно"
  it ('Go to More and check the URL', async() =>{
  await driver.get('https://chromedriver.chromium.org/');
  const addTab = await driver.findElement(By.xpath("//*[text()='More']"));
  await driver.actions().move({origin: addTab}).perform();
  const dropdownsElements = await driver.findElement(By.xpath('//li[@class=\'ijMPi\']//div[@class=\'I35ICb\']//a[text()="Mobile Emulation"]'));
  await driver.wait(until.elementIsVisible(dropdownsElements));
  await dropdownsElements.click();
  await driver.wait(until.urlContains('/mobile-emulation'), 10000);

});
});

