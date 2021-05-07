const Category = require("../models/category");
const User = require("../models/user");
const assert = require("assert");


// describe("Delete Tests", () => {
//   let deleter;

//   beforeEach(async () => {
//     deleter = await Category.create({ name: "Deleter" });
//     console.log(deleter);

//   });

//   it("A delete test for deleter", () => {
//     console.log(deleter._id);
//     Category.findByIdAndDelete(deleter._id)
//       .then(() => Category.findOne({ name: "Deleter" }))
//       .then(student => {
//         console.log(student);
//         // assert(student === null);


//       });
//     // Category.findOne(deleter._id)
//     // .then(() => Category.deleteOne({ name: 'Deleter' }))
//     // .then((pokemon) => {
//     //   assert(pokemon === null);
//     //   done();
//     // });
//   });
// });


// describe("Delete Tests", () => {
//   let deleter;

//   beforeEach(done => {
//     deleter = new User({
//       name: "Mina",
//       email: "mina123@gmai.com",
//       password: "mina123",
//       address: "gota",
//       mobile: "7822787155"
//     });
//     deleter.save().then(() => done());
//     console.log(deleter);
//   });

//   it("A delete test for deleter", done => {
//     User.findByIdAndRemove(deleter._id)
//       .then(() => User.findOne({ name: "Mina" }))
//       .then(student => {
//         assert(student === null);
//         done();
//       });
//   });
// });
