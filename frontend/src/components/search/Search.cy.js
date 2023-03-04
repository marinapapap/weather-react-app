import Search from "./Search";

describe("Search", () => {
    it("has location text input field", () => {
        cy.mount(<Search/>);
        
        cy.get('[data-cy="location-search"]')
            .invoke("attr", "type")
            .should("eq", "text");
      });
})