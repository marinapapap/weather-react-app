import Search from "./Search";

describe("Search", () => {
    it("has location text input field and submit button", () => {
        cy.mount(<Search/>);
        cy.get('[data-cy="location-search"]');
        cy.get('[data-cy="submit-location"]')
            .invoke("attr", "type")
            .should("eq", "submit");
    });

    it("request is sent when form is submitted with valid location input", () => {
        cy.mount(<Search/>);

        cy.intercept("GET", "/weather?location=london")
        .as("weatherRequest");
        
        cy.get('[data-cy="location-search"]').type("london");
        cy.get('[data-cy="submit-location"]').click();

        cy.wait("@weatherRequest");
    });
})