const BasePage = require("./basePage");
const MainPage = require("./mainPage");
const Header = require("./pageComponents/header");
const Footer = require("./pageComponents/footer");
const Search = require("./pageComponents/search");
const ChangeCityPage = require("./changeCityPage");
const ProductsPage = require("./productsPage");
const BasketPage = require("./basketPage");

class PageFactory {
  constructor(page) {
    this.page = page;
    this.basePage = new BasePage(page);
    this.mainPage = new MainPage(page);
    this.header = new Header(page);
    this.footer = new Footer(page);
    this.search = new Search(page);
    this.changeCityPage = new ChangeCityPage(page);
    this.productsPage = new ProductsPage(page);
    this.basketPage = new BasketPage(page);
  }
}

module.exports = PageFactory;
