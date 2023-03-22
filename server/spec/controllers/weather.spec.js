const app = require("../../app");
const request = require("supertest");
require("jest-fetch-mock").enableMocks();

describe("/weather", () => {
  describe("Good request made", () => {
    let response;

    beforeEach(async () => {
      fetch.resetMocks();
      fetch.mockResponseOnce(
        JSON.stringify({
          cod: 200,
          weather: "cloudy",
        })
      );
      response = await request(app).get("/weather?location=london");
    });

    test("Response code is 200 when given location param", async () => {
      expect(response.status).toEqual(200);
      expect(response.body.message).toEqual("ok");
    });

    test("calls fetch for london weather", async () => {
      expect(fetch).toHaveBeenCalledWith(
        expect.stringContaining(
          "http://api.openweathermap.org/data/2.5/weather?units=metric&q=london&appid="
        )
      );
    });
  });

  describe("Bad request made", () => {
    beforeEach(async () => {
      fetch.resetMocks();
    });

    test("Response code is 400 when no location is given", async () => {
      const response = await request(app).get("/weather?location=");

      expect(response.status).toEqual(400);
      expect(response.body.message).toEqual("No location provided.");
    });

    test("Response code is 400 if location is not found", async () => {
      fetch.mockResponseOnce(
        JSON.stringify({
          cod: 400,
          message: "city not found",
        })
      );
      const response = await request(app).get("/weather?location=notacity");

      expect(response.status).toEqual(400);
      expect(response.body.message).toEqual("city not found");
    });
  });
});
