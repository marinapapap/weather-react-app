import Search from "./Search";

describe("Search", () => {
    beforeEach(() => {
        cy.mount(<Search/>);
    });

    it("has location text input field and submit button", () => {
        cy.get('[data-cy="location-search"]');
        cy.get('[data-cy="submit-location"]')
            .invoke("attr", "type")
            .should("eq", "submit");
    });

    it("request is sent when form is submitted with valid location input", () => {
        cy.intercept("GET", "/weather?location=london")
        .as("weatherRequest");
        
        cy.get('[data-cy="location-search"]').type("london");
        cy.get('[data-cy="submit-location"]').click();

        cy.wait("@weatherRequest");
    });

    it("if no location is given, request not sent", () => {
        cy.intercept("GET", "/weather?location=")
        .as("weatherRequest");

        cy.get('[data-cy="location-search"]')
        cy.get('[data-cy="submit-location"]').click();

        cy.wait(2000);
        cy.get('@weatherRequest.all').then((interceptions) => {
            expect(interceptions).to.have.length(0);
        });
    })

    it("if no location is given, an alert is rendered", () => {
        cy.intercept("GET", "/weather?location=")
        .as("weatherRequest");

        cy.get('[data-cy="location-search"]')
        cy.get('[data-cy="submit-location"]').click();

        cy.get('[data-cy="location-alert').contains("You need to enter a location...");
    })
})