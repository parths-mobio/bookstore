const Category = require("../models/category");
const User = require("../models/user");
const assert = require("assert");


// describe("Update Tests", () => {
//   let updater;
//   beforeEach(done => {
//     updater = new Category({ name: "Updater" });
//     updater.save().then(() => done());
//   });
//   it("Set n Save test", () => {
//     updater.set("name", "Uppdater");
//     updater
//       .save()
//       .then(() => Category.find({}))
//       .then(students => {
//         // assert(students[0].name !== "UpUpdater");
//         assert(students[0].name === "UpUpdater");
//       });
//   });
// });

// describe("Update Tests", () => {
//   let updater;
//   beforeEach(done => {
//     updater = new User({
//       name: "rita",
//       email: "nita123@gmai.com",
//       password: "nita123",
//       address: "vatva",
//       mobile: "7878787255"
//     });
//     updater.save().then(() => done());
//     console.log(updater);
//   });
//   it("Set n Save test", () => {
//     updater.set("name", "nita");
//     updater
//       .save()
//       .then(() => User.find({ name: "rita" }))
//       .then(users => {
//         assert(users[0].name !== "rita");
//         assert(users[0].name === "nita");
//       });
//   });
// });