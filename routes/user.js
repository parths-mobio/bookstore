const express = require("express");
const router = express.Router();

const {
  getUserById,
  getUser,
  updateUser,
  getAllUsers,
  deleteUser,
} = require("../controllers/user");
const { isSignedIn } = require("../controllers/auth");

router.param("userId", getUserById);

router.get("/user/view/:userId", getUser);
router.get("/user/viewall", getAllUsers);
router.put("/user/update", updateUser);

router.delete("/user/delete", deleteUser);

module.exports = router;
