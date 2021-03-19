import 'babel-polyfill'
const request = require("supertest");
const server = require("../server/index");
describe('Server Test', () => {
        test("response '/'", async () => {
          const response = await request(server).get("/");
          expect(response.statusCode).toBe(200);
        });
})
