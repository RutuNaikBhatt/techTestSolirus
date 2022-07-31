/*========================================================================================================
This .js file stores elements corresponding to "Is the holiday entitlement based on:" page.
==========================================================================================================*/
export class entitlementBasedOnHomePage {
  verifyHolidayEntitlmentBasedOnPage = () =>
    cy
      .get(".govuk-fieldset__heading.gem-c-radio__heading-text")
      .contains("Is the holiday entitlement based on:");
  daysWorkedPerWeekLabel = (option) =>
    cy.get(".gem-c-label.govuk-label.govuk-radios__label").contains(option);
  continueButton = () =>
    cy
      .get(".gem-c-button.govuk-button.gem-c-button--bottom-margin")
      .contains("Continue");
}
