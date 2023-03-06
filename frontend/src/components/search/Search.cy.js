import Search from "./Search";

describe("Search", () => {
    it("has location text input field and submit button", () => {
        cy.mount(<Search/>);
        cy.get('[data-cy="location-search"]');
        cy.get('[data-cy="submit-location"]')
            .invoke("attr", "type")
            .should("eq", "submit");
    });
})