let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app.js");

let should = chai.should();
chai.should();

chai.use(chaiHttp);


//describe('User Roles API', () => {
    /**
     * Test the GET route
     */
    // describe("GET /api/role/allroles", () => {
    //     it("It should GET all the Roles", (done) => {
    //         chai.request(server)
    //             .get("/api/role/allroles")
    //             .end((err, response) => {
    //                 console.log(response.text);
    //                 response.should.have.status(200);
    //                 done();
    //             });
    //     });

    //     it("It should NOT GET all the Roles", (done) => {
    //         chai.request(server)
    //             .get("/api/role/roles")
    //             .end((err, response) => {
    //                 response.should.have.status(404);
    //                 done();
    //             });
    //     });

    // });


    // describe("POST /api/role/create", () => {
    //     it("It should Create a new Roles", (done) => {
    //         const role = {
    //             name: "user"

    //         };
    //         chai.request(server)
    //             .post("/api/role/create")
    //             .send(role)
    //             .end((err, response) => {
    //                 response.should.have.status(200);
    //                 response.body.should.have.property('message').eql("Successfully Created");

    //                 done();
    //             });
    //     });

    //     it("It should NOT Create a new Role ", (done) => {
    //         const role = {
    //             name: "u"
    //         };
    //         chai.request(server)
    //             .post("/api/role/create")
    //             .send(role)
    //             .end((err, response) => {
    //                 response.should.have.status(400);
    //                 response.body.should.have.property('message').eql("NOT able to save Role in DB");
    //                 done();
    //             });
    //     });

    // });

    // describe("PUT /api/role/update", () => {
    //     it("It should Update an existing Role", (done) => {
    //         const RoleId = "60992297adffe12c289254ab";
    //         const role = {
    //             name: "admin",

    //         };
    //         chai.request(server)
    //             .put("/api/role/update?id=" + RoleId)
    //             .send(role)
    //             .end((err, response) => {
    //                 console.log(response.text);
    //                 response.should.have.status(200);
    //                 response.body.should.have.property('message').eql("Successfully Updated");
    //                 done();
    //             });
    //     });

    //     it("It should NOT Update an existing Category", (done) => {
    //         const RoleId = "60992297adffe1289254ab";
    //         const role = {
    //             name: "ad"

    //         };
    //         chai.request(server)
    //             .put("/api/role/update?id=" + RoleId)
    //             .send(role)
    //             .end((err, response) => {
    //                 response.should.have.status(400);
    //                 response.body.should.have.property('message').eql("Failed to update this role");
    //                 done();
    //             });
    //     });
    // });

    // describe("DELETE /api/role/delete", () => {
    //     it("It should DELETE an existing Role", (done) => {
    //         const roleId = "60926bacf22d992c2433c9e7";
    //         chai.request(server)
    //             .delete("/api/role/delete?id=" + RoleId)
    //             .end((err, response) => {
    //                 response.should.have.status(200);
    //                 done();
    //             });
    //     });

    //     it("It should NOT DELETE a Role that is not in the database", (done) => {
    //         const roleId = 145;
    //         chai.request(server)
    //             .delete("/api/role/delete?id=" + roleId)
    //             .end((err, response) => {
    //                 response.should.have.status(400);
    //                 response.body.should.have.property('message').eql('failed to delete this role');
    //                 done();
    //             });
    //     });

    //}); 




//});
