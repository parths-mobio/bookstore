let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app.js");

let should = chai.should();
chai.should();

chai.use(chaiHttp);


describe('User API', () => {
    /**
     * Test the GET route
     */
    describe("GET /api/user/viewall", () => {
        it("It should GET all the Users", (done) => {
            chai.request(server)
                .get("/api/user/viewall")
                .end((err, response) => {
                    console.log(response.text);
                    response.should.have.status(200);
                    response.body.should.have.property('message').eql("Successfully View");
                
                    done();
                });
        });

        it("It should NOT GET all the Users", (done) => {
            chai.request(server)
                .get("/api/userss/view")
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                });
        });

    });

    describe("POST /api/Auth/SignIn", () => {
            it("User SignIn Successfully", (done) => {
                const user = {
                    email:"parth123@gmail.com",
                    password:"parth123",
                  };
                chai.request(server)
                    .post("/api/auth/signin")
                    .send(user)
                    .end((err, response) => {
                        console.log(response.body);
                        response.should.have.status(200);
                        response.body.should.have.property('message').eql("SignIn Successfully");
                        response.body.should.have.property('token');
                        response.body.user.should.have.property('email');
                        done();
                    });
            });
    
            it("Email And Password are required ", (done) => {
                const user = {
                    email:"",
                    password:"",
                };
                chai.request(server)
                    .post("/api/auth/signin")
                    .send(user)
                    .end((err, response) => {
                       
                        response.should.have.status(422);
                        response.body.should.have.property('error').eq('email is required');
                       
                        done();
                    });
            });

            it("Email Does not Exists ", (done) => {
                const user = {
                    email:"parth@gmail.com",
                    password:"parth123",
                };
                chai.request(server)
                    .post("/api/auth/signin")
                    .send(user)
                    .end((err, response) => {
                       
                        response.should.have.status(400);
                        response.body.should.have.property('message').eq('USER email does not exists');
                       
                        done();
                    });
            });

            it("Email and password do not match ", (done) => {
                const user = {
                    email:"parth123@gmail.com",
                    password:"part23",
                };
                chai.request(server)
                    .post("/api/auth/signin")
                    .send(user)
                    .end((err, response) => {
                       
                        response.should.have.status(401);
                        response.body.should.have.property('message').eq('Email and password do not match');
                       
                        done();
                    });
            }); 
    
        });



     describe("POST /api/user/createuser", () => {
    //     it("It should Create a new User", (done) => {
    //         const user = {
    //             name: "fenil",
    //             email:"fenil123@gmail.com",
    //             address:"paldi",
    //             mobile:7865454534,
    //             password:"fenil123",
              

    //         };
    //         chai.request(server)
    //             .post("/api/user/createuser")
    //             .send(user)
    //             .end((err, response) => {
    //                 console.log(response.body);
    //                 response.should.have.status(200);
    //                 response.body.should.have.property('message').eql("Successfully Created");
    //                 response.body.user.should.have.property('name');
    //                 response.body.user.should.have.property('email');
    //                 response.body.user.should.have.property('address');
                   

    //                 done();
    //             });
    //     });

        // it("It should NOT Create a new User ", (done) => {
        //     const user = {
        //         name: "keyur",
        //         email:"keyur123gmail.com",
        //         address:"paldi",
        //         mobile:78654545,
        //         password:"feni",
        //     };
        //     chai.request(server)
        //         .post("/api/user/createuser")
        //         .send(user)
        //         .end((err, response) => {
        //             console.log(response.body);
        //             response.should.have.status(400);
        //             response.body.should.have.property('error');
                   
        //             done();
        //         });
        // });

    });

    // describe("PUT /api/user/update", () => {
    //     it("It should Update the user", (done) => {
    //         const userId = "608b9ebc537d192808f27fb6";
    //         const user = {
    //             address: "Sola",

    //         };
    //         chai.request(server)
    //             .put("/api/user/update?id=" + userId)
    //             .send(user)
    //             .end((err, response) => {
    //                 console.log(response.text);
    //                 response.should.have.status(200);
    //                 response.body.should.have.property('message').eql("Successfully Updated");
    //                 done();
    //             });
    //     });

    //     it("It should NOT Update an existing User", (done) => {
    //         const userId = "609274327a600b9a8f";
    //         const user = {
    //             name: "memnagar"

    //         };
    //         chai.request(server)
    //             .put("/api/user/update?id=" + userId)
    //             .send(user)
    //             .end((err, response) => {
    //                 response.should.have.status(400);
    //                 response.body.should.have.property('message').eql("failed to update this user");
    //                 done();
    //             });
    //     });
    //  });

    // describe("DELETE /api/user/delete", () => {
    //     it("It should DELETE an existing User", (done) => {
    //         const userId = "6093dd229e6e560d1c35c339";
    //         chai.request(server)
    //             .delete("/api/user/delete?id=" + userId)
    //             .end((err, response) => {
    //                 response.should.have.status(200);
    //                 response.body.should.have.property('message').eql('Successfully deleted');
    //                 done();
    //             });
    //     });

    //     it("It should NOT DELETE a User that is not in the database", (done) => {
    //         const userId = 145;
    //         chai.request(server)
    //             .delete("/api/user/delete?id=" + userId)
    //             .end((err, response) => {
    //                 response.should.have.status(400);
    //                 response.body.should.have.property('message').eql('Failed to delete the User');
    //                 done();
    //             });
    //     });

    // }); 




});
