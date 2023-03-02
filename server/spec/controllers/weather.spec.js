const app = require("../../app");
const request = require("supertest");
require("jest-fetch-mock").enableMocks();

describe("/weather", () => {
    let response;
    beforeEach(async () => {
        fetch.resetMocks();

        fetch.mockResponseOnce(
            JSON.stringify({
              weather: "cloudy",
            })
          );

        response = await request(app).get("/weather?location=london");
      });

      test("Response code is 200 when given location param", async () =>  {
        expect(response.status).toEqual(200);
      });

      test("calls fetch for london weather", async () => {
        expect(fetch).toHaveBeenCalledWith(
              expect.stringContaining("http://api.openweathermap.org/data/2.5/weather?units=metric&q=london&appid=")
        );
      });
})