Feature: Holiday Entiltement page E2E

    Background: Entitled Holiday
        Given I am on calulate your holiday entitlement page

    Scenario: Ensure user is able to get the number of holidays entitled for days worked per week for a full year
        When I click on Start now button
        And I select entitlement based on "days worked per week" option
        And I click on continue button
        And I select "for a full leave year" option
        And I click on continue button
        And I enter "2.5" number of days worked per week
        When I click on continue button
        Then I should see holiday entitlement as "14" days