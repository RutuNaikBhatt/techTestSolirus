/*========================================================================================================
This .js file stores elements corresponding to "Statutory Leave and time off" page.
==========================================================================================================*/
export class entitlementHomePage {
  acceptAdditionalcookies = () =>
    cy.get('button[type="submit"]').contains("Accept additional cookies");
  hideThisMessage = () =>
    cy
      .get(".govuk-button-group .gem-c-cookie-banner__hide-button.govuk-button")
      .contains("Hide this message");
  verifyLandingPage = () =>
    cy
      .get(".gem-c-title__text.govuk-heading-xl")
      .contains("Calculate holiday entitlement");
  startNow = () => cy.get("a.gem-c-button.govuk-button.govuk-button--start");
}
