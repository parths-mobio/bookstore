// let chai = require("chai");
// let chaiHttp = require("chai-http");
// let server = require("../app.js");

// let should = chai.should();
// chai.should();

// chai.use(chaiHttp);


// describe('Category API', () => {
//     /**
//      * Test the GET route
//      */
//     describe("GET /api/category/view", () => {
//         it("It should GET all the Category", (done) => {
//             chai.request(server)
//                 .get("/api/category/view")
//                 .end((err, response) => {
//                     console.log(response.text);
//                     response.should.have.status(200);
//                     // response.body.should.be.a('array');
//                     // response.body.length.should.be.eq(3);
//                     done();
//                 });
//         });

//         it("It should NOT GET all the tasks", (done) => {
//             chai.request(server)
//                 .get("/api/categorys/view")
//                 .end((err, response) => {
//                     response.should.have.status(404);
//                     done();
//                 });
//         });

//     });


//     describe("POST /api/category/create", () => {
//         it("It should Create a new Category", (done) => {
//             const task = {
//                 name: "lovestory"

//             };
//             chai.request(server)
//                 .post("/api/category/create")
//                 .send(task)
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                     response.body.should.have.property('message').eql("Successfully Created");

//                     done();
//                 });
//         });

//         it("It should NOT Create a new Category ", (done) => {
//             const task = {
//                 name: "D"
//             };
//             chai.request(server)
//                 .post("/api/category/create")
//                 .send(task)
//                 .end((err, response) => {
//                     response.should.have.status(400);
//                     response.body.should.have.property('message').eql("NOT able to save category in DB");
//                     done();
//                 });
//         });

//     });

//     describe("PUT /api/Category/update", () => {
//         it("It should Update an existing category", (done) => {
//             const taskId = "6092750972f98421980d329e";
//             const task = {
//                 name: "action",

//             };
//             chai.request(server)
//                 .put("/api/category/update?id=" + taskId)
//                 .send(task)
//                 .end((err, response) => {
//                     console.log(response.text);
//                     response.should.have.status(200);
//                     response.body.should.have.property('message').eql("Successfully Update");
//                     done();
//                 });
//         });

//         it("It should NOT Update an existing Category", (done) => {
//             const taskId = "609274327a600b33989a8f";
//             const task = {
//                 name: "sports"

//             };
//             chai.request(server)
//                 .put("/api/category/update?id=" + taskId)
//                 .send(task)
//                 .end((err, response) => {
//                     response.should.have.status(400);
//                     response.body.should.have.property('message').eql("Failed to update this Category");
//                     done();
//                 });
//         });
//     });

//     describe("DELETE /api/Category/delete", () => {
//         it("It should DELETE an existing Category", (done) => {
//             const taskId = "60926bacf22d992c2433c9e7";
//             chai.request(server)
//                 .delete("/api/category/delete?id=" + taskId)
//                 .end((err, response) => {
//                     response.should.have.status(200);
//                     done();
//                 });
//         });

//         it("It should NOT DELETE a category that is not in the database", (done) => {
//             const taskId = 145;
//             chai.request(server)
//                 .delete("/api/category/delete?id=" + taskId)
//                 .end((err, response) => {
//                     response.should.have.status(400);
//                     response.body.should.have.property('message').eql('failed to delete this category');
//                     done();
//                 });
//         });

//     }); 




// });
