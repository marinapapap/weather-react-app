import Weather from "./Weather";

describe("weather", () => {
  it("renders the location, temp and feelsLike values in the client", () => {
    cy.mount(
      <Weather
        temp={5}
        feelsLike={4}
        location={"london"}
        renderWeather={true}
      />
    );

    cy.get('[data-cy="results-temp"]').contains("Temperature: 5°C");
    cy.get('[data-cy="results-feelsLike"]').contains("Feels Like: 4°C");
  });

  it("renders the location, temp and feelsLike values in the client", () => {
    cy.mount(
      <Weather temp={""} feelsLike={""} location={""} renderWeather={false} />
    );

    cy.get('[data-cy="results-temp"]').should("not.exist");
    cy.get('[data-cy="results-feelsLike"]').should("not.exist");
  });
});
