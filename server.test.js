const request = require("supertest");
const app = require("./server");

describe("GET /api/hello", () => {
  it("responds with status 200", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});