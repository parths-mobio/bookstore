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
router.get("/user/viewall",isSignedIn, getAllUsers);
router.put("/user/update",isSignedIn, updateUser);

router.delete("/user/delete", isSignedIn,deleteUser);

module.exports = router;
