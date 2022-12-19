Feature: WebdriverIO web testing 

Background:
    Given I navigate "https://webdriver.io/" home page

Scenario: Home page
    When I should see ".navbar.navbar--fixed-top" navbar
    And I should see ".svg_Eu_K" the main image
    Then I should see ".hero__subtitle" a page title "Next-gen browser and mobile automation test framework for Node.js"

Scenario Outline: Check navigation menu
    Then I expect element <number> "//a[@class='navbar__item navbar__link']" should be equal "<linkText>"

 Examples:
    |number  | linkText   | 
    |1       | Docs       | 
    |2       | API        |
    |3       | Blog       |   
    |4       | Contribute |
    |5       | Community  | 
    |6       | v8         | 

Scenario: Blog page
    When I go "//*[@class="navbar navbar--fixed-top"]//*[contains(text(), "Blog")]" Blog page
    And Every Post has ".title_f1Hy" Title
    And Every Post has ".container_mt6G.margin-vert--md" Date and reading Time
    Then I should see "//*[@class='title_f1Hy']/*[contains(text(), 'IO v8')]" Blog page title "WebdriverIO v8 Released"

Scenario: Contribute page
    When I go "//*[@class='navbar navbar--fixed-top']//*[contains(text(),'Contribute')]" Contribute page
    And Every Post has "//h2[@class='anchor anchorWithStickyNavbar_LWe7']" header
    Then I should see ".ytp-cued-thumbnail-overlay-image" video tutorial

Scenario: Switcher between light and dark  mode

    When I should see ".lightToggleIcon_pyhR" light mode
    Then I should see ".darkToggleIcon_wfgR" dark mode

Scenario: Search component test

    When I click ".DocSearch-Button-Placeholder" search button
    And I enter "Google" into ".DocSearch-Input" search bar
    Then I choose ".DocSearch-Hit-title" any valid value