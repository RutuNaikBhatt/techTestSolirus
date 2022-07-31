/*====================================================================================================
 * The holidayEntitlement.spec.js page contains step implementation of feature file.
 =====================================================================================================*/

import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import { entitlementHomePage } from "../pageObjects/entitlementHomePage.js";
import { entitlementBasedOnHomePage } from "../pageObjects/entitlementBasedOnHomePage.js";
import { daysWorkedPerWeekHomePage } from "../pageObjects/daysWorkedPerWeekHomePage.js";
import { noOfDaysPerWeekHomePage } from "../pageObjects/noOfDaysPerWeekHomePage";
import { infoBasedOnAnswerHomePage } from "../pageObjects/infoBasedOnAnswerHomePage";

const entitlementPage = new entitlementHomePage();
const entitlementBasedOnPage = new entitlementBasedOnHomePage();
const daysWorkedPerWeekPage = new daysWorkedPerWeekHomePage();
const noOfDaysPerWeekPage = new noOfDaysPerWeekHomePage();
const infoBasedOnAnswerPage = new infoBasedOnAnswerHomePage();

Given("I am on calulate your holiday entitlement page", () => {
  cy.visit("/");
  entitlementPage.acceptAdditionalcookies().click();
  entitlementPage.hideThisMessage().click();
  entitlementPage.verifyLandingPage().should("exist");
});
When("I click on Start now button", () => {
  entitlementPage.startNow().should("exist").click();
  entitlementBasedOnPage.verifyHolidayEntitlmentBasedOnPage().should("exist");
});
And("I select entitlement based on {string} option", (option) => {
  entitlementBasedOnPage.daysWorkedPerWeekLabel(option).should("exist").click();
});
And("I click on continue button", () => {
  entitlementBasedOnPage.continueButton().click();
});
And("I select {string} option", (option) => {
  daysWorkedPerWeekPage.verifydaysWkrdPerPage().should("exist");
  daysWorkedPerWeekPage.forAFullLeaveYear(option).should("exist").click();
});
And("I click on continue button", () => {
  daysWorkedPerWeekPage.continueButton().click();
  daysWorkedPerWeekPage.verifydaysWkrdPerPage().should("exist");
});
And("I enter {string} number of days worked per week", (option) => {
  noOfDaysPerWeekPage.verifyNoOfDaysPerWeekPage().should("exist");
  noOfDaysPerWeekPage.inputText().click({ force: true }).type(option);
});
When("I click on continue button", () => {
  noOfDaysPerWeekPage.continueButton().click();
});
Then("I should see holiday entitlement as {string} days", (option) => {
  infoBasedOnAnswerPage.verifyinfoBasedOnAnswerPage().should("exist");
  infoBasedOnAnswerPage.verifyStatutoryEntitledHoliday(option).should("exist");
});
