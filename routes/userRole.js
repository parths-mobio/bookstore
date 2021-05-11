const express = require("express");
const router = express.Router();
const {
  createRole,
  getAllRoles,
  updateRoles,
  removeRole,
} = require("../controllers/userRole");

const { isSignedIn } = require("../controllers/auth");

router.get("/role/allroles",  getAllRoles);

router.post("/role/create", createRole);

router.put("/role/update",  updateRoles);

router.delete("/role/delete",  removeRole);

module.exports = router;