describe("User search function", () => {
  beforeEach(() => {});

  it("user succesfully searches the weather for a particular city", () => {
    cy.intercept("GET", "/weather?location=london", (req) => {
      req.reply({
        body: {
          message: "ok",
          results: {
            main: {
              temp: 3.4,
              feels_like: 3.2,
            },
            weather: [{ icon: "icon" }],
          },
        },
      });
    }).as("getWeather");

    cy.visit("/");
    cy.get('[data-cy="location-search"]').type("london");
    cy.get('[data-cy="submit-location"]').click();

    cy.wait("@getWeather").then(() => {
      cy.get('[data-cy="results-temp"]').should("contain.text", "3.4°C");
      cy.get('[data-cy="results-feelsLike"]').should("contain.text", "3.2°C");
    });
  });
});
