const request = require("request");

describe("endpoint unitesting", () => {
    let server;
    let data = {};

    beforeAll(async () => {
        server = require("../app.js");
        // Wrap request.get in a Promise to use async/await
        const response = await new Promise((resolve, reject) => {
            request.get("http://localhost:3000/", (error, res, body) => {
                if (error) reject(error);
                else resolve({ status: res.statusCode, body });
            });
        });
        data.status = response.status;
        data.body = response.body;
    });

    afterAll(() => {
        server.close();
    });

    it("test status code", () => {
        expect(data.status).toEqual(200);
    });

    it("test body", () => {
        expect(data.body).toEqual("hello world");
    });
});