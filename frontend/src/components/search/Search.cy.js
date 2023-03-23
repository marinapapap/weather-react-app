import Search from "./Search";

describe("Search", () => {
  beforeEach(() => {
    cy.mount(<Search />);
  });

  it("has location text input field and submit button", () => {
    cy.get('[data-cy="location-search"]');
    cy.get('[data-cy="submit-location"]')
      .invoke("attr", "type")
      .should("eq", "submit");
  });

  it("request is sent when form is submitted with valid location input", () => {
    cy.intercept("GET", "/weather?location=london").as("weatherRequest");

    cy.get('[data-cy="location-search"]').type("london");
    cy.get('[data-cy="submit-location"]').click();

    cy.wait("@weatherRequest");
  });

  it("if no location is given, an alert is rendered", () => {
    cy.intercept("GET", "/weather?location=").as("weatherRequest");

    cy.get('[data-cy="location-search"]');
    cy.get('[data-cy="submit-location"]').click();

    cy.get('[data-cy="location-alert').contains(
      "Oops, you need to enter a valid location..."
    );
  });

  it("if invalid location is given, an alert is rendered", () => {
    cy.intercept("GET", "/weather?location=").as("weatherRequest");

    cy.get('[data-cy="location-search"]').type("newy#ork");
    cy.get('[data-cy="submit-location"]').click();

    cy.get('[data-cy="location-alert').contains(
      "Oops, you need to enter a valid location..."
    );
  });
});
