const express = require("express");
const router = express.Router();
const fakeStoreController = require("../controllers/fakeStoreController"); // Adjust path

router.get("/products", fakeStoreController.getAllProducts);

router.get("/products/categories", fakeStoreController.getProductCategories);

// needed?
router.get(
  "/products/category/:category",
  fakeStoreController.getProductsByCategory
);

module.exports = router;
