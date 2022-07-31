/*========================================================================================================
This .js file stores elements corresponding to "Days worked per week" page.
==========================================================================================================*/
export class daysWorkedPerWeekHomePage {
  verifydaysWkrdPerPage = () =>
    cy
      .get(".govuk-fieldset__heading.gem-c-radio__heading-text")
      .contains("Do you want to work out holiday");
  forAFullLeaveYear = (option) =>
    cy.get(".gem-c-label.govuk-label.govuk-radios__label").contains(option);
  continueButton = () => cy.get('button[type="submit"]').contains("Continue");
}
