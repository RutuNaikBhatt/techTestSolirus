/*========================================================================================================
This .js file stores elements corresponding to "Information based on your answer" page.
==========================================================================================================*/
export class infoBasedOnAnswerHomePage {
  verifyinfoBasedOnAnswerPage = () =>
    cy
      .get(".gem-c-title__text.govuk-heading-xl")
      .contains("Information based on your answers");
  verifyStatutoryEntitledHoliday = (option) =>
    cy
      .get(".summary")
      .contains(`The statutory holiday entitlement is ${option} days holiday.`);
}
