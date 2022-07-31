/*========================================================================================================
This .js file stores elements corresponding to "Number of days per week" page.
==========================================================================================================*/
export class noOfDaysPerWeekHomePage {
  verifyNoOfDaysPerWeekPage = () =>
    cy
      .get(".gem-c-label.govuk-label.govuk-label--l")
      .contains("Number of days worked per week?");
  inputText = () => cy.get("#response");
  continueButton = () =>
    cy
      .get(".gem-c-button.govuk-button.gem-c-button--bottom-margin")
      .contains("Continue");
}
