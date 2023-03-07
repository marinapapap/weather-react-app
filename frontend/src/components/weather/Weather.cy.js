import Weather from "./Weather";

describe("weather", () => {
    it("renders the location, temp and feelsLike values in the browser",() => {
        cy.mount(<Weather temp={5} feelsLike={4} location={"london"} renderWeather={true}/>);

        cy.get('[data-cy="results-header"]').contains('Weather in London');
        cy.get('[data-cy="results-temp"]').contains('Temperature: 5°C');
        cy.get('[data-cy="results-feelsLike"]').contains('Feels Like: 4°C');
    });
})