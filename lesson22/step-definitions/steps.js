const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('chai');

Given(/^I navigate "(.*)" home page$/, async (url) => {
  await browser.url(url);
});

When(/^I should see "(.*)" navbar$/, async (selector) => {
  await $(selector).isDisplayed();
});

When(/^I should see "(.*)" the main image$/, async (selector) => {
  await $(selector).isDisplayed();
});

Then(/^I should see "(.*)" a page title "(.*)"$/, async (selector, message) => {
  expect(await $(selector).getText()).to.equal(message);
});

Then('I expect element {int} {string} should be equal {string}', async (number, element, text) => {
  number -= 1;
  expect(await $$(element)[number].getText()).to.equal(text);
});

When(/^I go "(.*)" Blog page$/, async (selector) => {
  await $(selector).click();
});

When(/^Every Post has "(.*)" Title$/, async (selector) => {
  await $(selector).isExisting();
});

When(/^Every Post has "(.*)" Date and reading Time$/, async (selector) => {
  await $(selector).isExisting();
});

Then(/^I should see "(.*)" Blog page title "(.*)"$/, async (selector, message) => {
  expect(await $(selector).getText()).to.equal(message);
});

When(/^I go "(.*)" Contribute page$/, async (selector) => {
  await $(selector).click();
});

When(/^Every Post has "(.*)" header$/, async (selector) => {
  await $(selector).isExisting();
});

Then(/^I should see "(.*)" video tutorial$/, async (selector) => {
  expect(await $(selector).isDisplayed());
});

When(/^I should see "(.*)" light mode$/, async (selector) => {
  await $(selector).isDisplayed();
});

Then(/^I should see "(.*)" dark mode$/, async (selector) => {
  expect(await $(selector).isDisplayed());
});

When(/^I click "(.*)" search button$/, async (selector) => {
  await $(selector).click();
});

When(/^I enter "Google" into "(.*)" search bar$/, async (selector) => {
  await $(selector).setValue('Google');
});

Then(/^I choose "(.*)" any valid value$/, async (selector) => {
  expect(await $(selector).isSelected());
});