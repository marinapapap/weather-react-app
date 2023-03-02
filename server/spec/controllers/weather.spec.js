const app = require("../../app");
const request = require("supertest");
require("jest-fetch-mock").enableMocks();

describe("/weather", () => {
    beforeEach(() => {
        fetch.resetMocks();

        fetch.mockResponseOnce(
            JSON.stringify({
              weather: "cloudy",
            })
          );
      });

      test("Response code is 200 when given location param", async () =>  {
        const response = await request(app).get("/weather?location=london");

        expect(response.status).toEqual(200);
      });

      test("calls fetch for london weather", async () => {
        const response = await request(app).get("/weather?location=london");

        expect(fetch).toHaveBeenCalledWith(
              expect.stringContaining("http://api.openweathermap.org/data/2.5/weather?units=metric&q=london&appid=")
        );
      });
})