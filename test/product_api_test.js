let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../app.js");

let should = chai.should();
chai.should();

chai.use(chaiHttp);


describe('Product API', () => {
    /**
     * Test the GET route
     */
    describe("GET /api/product/view", () => {
        it("It should GET all the Products", (done) => {
            chai.request(server)
                .get("/api/product/view")
                .end((err, response) => {
                    console.log(response.text);
                    response.should.have.status(200);
                    response.body.should.have.property('message').eql("Successfully View");
                
                    done();
                });
        });

        it("It should NOT GET all the Products", (done) => {
            chai.request(server)
                .get("/api/productss/view")
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                });
        });

    });


     describe("POST /api/product/create", () => {
    //     it("It should Create a new Product", (done) => {
    //         const product = {
    //             name: "2 states",
    //             description:"lovestory",
    //             author:"chetan",
    //             edition:"1st",
    //             publisher:"om",
    //             price:300,
    //             category:"60927594cde1173c94068841",

    //         };
    //         chai.request(server)
    //             .post("/api/product/create")
    //             .send(product)
    //             .end((err, response) => {
    //                 response.should.have.status(200);
    //                 response.body.should.have.property('message').eql("Successfully Created");
    //                 response.body.data.should.have.property('name');
    //                 response.body.data.should.have.property('description');
    //                 response.body.data.should.have.property('author');
    //                 response.body.data.should.have.property('price');
    //                 response.body.data.should.have.property('category');

    //                 done();
    //             });
    //     });

        // it("It should NOT Create a new Product ", (done) => {
        //     const task = {
        //         name: "5 states",
        //        // description:"lovestory",
        //        // author:"chetan",
        //         edition:"1st",
        //         publisher:"om",
        //         price:300,
        //         category:"60927594cde1173c94068841",
        //     };
        //     chai.request(server)
        //         .post("/api/product/create")
        //         .send(task)
        //         .end((err, response) => {
                  
        //             response.should.have.status(400);
        //             response.body.should.have.property('message').eql("NOT able to save product in DB");
                   
        //             done();
        //         });
        // });

    });

    // describe("PUT /api/Product/update", () => {
    //     it("It should Update an existing product", (done) => {
    //         const productId = "604ef111d8138a16acebed1e";
    //         const product = {
    //             name: "conjuring 2",

    //         };
    //         chai.request(server)
    //             .put("/api/product/update?id=" + productId)
    //             .send(product)
    //             .end((err, response) => {
    //                 console.log(response.text);
    //                 response.should.have.status(200);
    //                 response.body.should.have.property('message').eql("Successfully Update");
    //                 done();
    //             });
    //     });

    //     it("It should NOT Update an existing Product", (done) => {
    //         const productId = "609274327a600b339a8f";
    //         const product = {
    //             name: "conjuring 2"

    //         };
    //         chai.request(server)
    //             .put("/api/product/update?id=" + productId)
    //             .send(product)
    //             .end((err, response) => {
    //                 response.should.have.status(400);
    //                 response.body.should.have.property('message').eql("Failed to update this Product");
    //                 done();
    //             });
    //     });
    // });

    // describe("DELETE /api/Product/delete", () => {
    //     it("It should DELETE an existing Product", (done) => {
    //         const productId = "609387daff972018ace18a1c";
    //         chai.request(server)
    //             .delete("/api/product/delete?id=" + productId)
    //             .end((err, response) => {
    //                 response.should.have.status(200);
    //                 response.body.should.have.property('message').eql('Successfull deleted');
    //                 done();
    //             });
    //     });

    //     it("It should NOT DELETE a Product that is not in the database", (done) => {
    //         const productId = 145;
    //         chai.request(server)
    //             .delete("/api/product/delete?id=" + productId)
    //             .end((err, response) => {
    //                 response.should.have.status(400);
    //                 response.body.should.have.property('message').eql('Failed to delete this product');
    //                 done();
    //             });
    //     });

    // }); 




});
