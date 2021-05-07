const express = require("express");
const router = express.Router();
const {
  createProduct,
  getAllProduct,
  updateProduct,
  removeProduct

} = require("../controllers/product");

const { isSignedIn } = require("../controllers/auth");

router.get("/product/view", getAllProduct);

router.post("/product/create",  createProduct);

router.put("/product/update",  updateProduct);

router.delete("/product/delete",  removeProduct);

// router.param("settingId", getSettingById);

// router.get("/setting/view/:settingId", isSignedIn,getSetting);

module.exports = router;
