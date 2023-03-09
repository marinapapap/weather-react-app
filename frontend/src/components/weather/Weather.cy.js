import Weather from "./Weather";

describe("weather", () => {
  it("renders the location, temp and feelsLike values in the client", () => {
    cy.mount(
      <Weather
        weatherData={{ main: { temp: 5, feels_like: 4 } }}
        location={"london"}
        renderWeather={true}
      />
    );

    cy.get('[data-cy="results-temp"]').contains("5°C");
    cy.get('[data-cy="results-feelsLike"]').contains("Feels Like: 4°C");
  });

  it("renders the location, temp and feelsLike values in the client", () => {
    cy.mount(<Weather weather={""} location={""} renderWeather={false} />);

    cy.get('[data-cy="results-temp"]').should("not.exist");
    cy.get('[data-cy="results-feelsLike"]').should("not.exist");
  });
});
