const Category = require("../models/category");
const User = require("../models/user");
const assert = require("assert");




// describe("Read Tests", () => {
//   let reader;
//   beforeEach(done => {
//     reader = new Category({ name: "Drink" });
//     reader.save().then(() => {
//       done();
//     });
//   });

//   it("Read a Category: Drink", done => {
//     Category.find({ name: "Drink" }).then(students => {
//       //id is a BSON value
//       assert(reader._id.toString() === students[0]._id.toString());
//       done();
//     });
//   });
// });


// describe("Read Tests", () => {
//   let reader;
//   beforeEach(done => {
//     reader = new User({
//       name: "lina",
//       email: "lina123@gmai.com",
//       password: "lina123",
//       address: "motera",
//       mobile: "7878787155"
//     });

//     reader.save().then(() => {
//       done();
//     });
//   });

//   it("Read a user: Reader", done => {
//     User.find({ name: "lina" }).then(users => {
//       //id is a BSON value
//       assert(reader._id.toString() === users[0]._id.toString());
//       console.log(users);
//       done();
//     });
//   });
// });
