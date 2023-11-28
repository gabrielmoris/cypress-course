# with this I can run this spec by calling the script:
# npx cypress-tags run -e TAGS="@regression" --headed chrome
# It seems that cucumber is not compatible with the latest versions of cypress, so it wont work

@regression
Feature: WebdriverUniversity Login page

    # This is the simple way

    Scenario: Login using valid credentials
        Given I access the WebdriverUniversity Login Portal page
        When I enter a username webdriver
        And I enter a password webdriver123
        And I click on the login button
        Then I should be presented with the following message validation succeeded

    Scenario: Login using NOT valid credentials
        Given I access the WebdriverUniversity Login Portal page
        When I enter a username webdriver
        And I enter a password webdriver
        And I click on the login button
        Then I should be presented with the following message validation failed

    # This way reuses the same test and adds the variables at the end to follow the DRY principle

    Scenario Outline: Test login via WebdriverUni Login Portal
        Given I access the WebdriverUniversity Login Portal page
        When I enter a username <username>
        And I enter a password <password>
        And I click on the login button
        Then I should be presented with the following message <message>


        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver    | validation failed    |