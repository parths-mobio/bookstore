const express = require("express");
const router = express.Router();
const {
  createCategory,
  getAllCategory,
  updateCategory,
  removeCategory

} = require("../controllers/category");

//const { isSignedIn } = require("../controllers/auth");

router.get("/category/view",  getAllCategory);

router.post("/category/create",  createCategory);

router.put("/category/update",  updateCategory);

router.delete("/category/delete",  removeCategory);

// router.param("settingId", getSettingById);

// router.get("/setting/view/:settingId", isSignedIn,getSetting);

module.exports = router;
