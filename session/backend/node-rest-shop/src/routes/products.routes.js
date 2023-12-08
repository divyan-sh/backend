const express = require("express");
const {
  getAllProductsController,
  createProductController,
  searchProductController,
  updateProductController,
  deleteProductController,
} = require("../controllers/products.controllers");
const multerMiddleware = require("../middleware/formDataParser");

const router = express.Router();

router.get("/get-all-products", getAllProductsController);

router.get("/search-products", searchProductController);

router.post(
  "/create-product",
  multerMiddleware.single("productImage"),
  createProductController
);

router.patch(
  "/update-product",
  multerMiddleware.single("productImage"),
  updateProductController
);

router.delete("/delete-product", deleteProductController);

// @another way
// router.post(
//   "/create-product",
//   multer({ dest: path.join(__dirname, "../../public/uploads") }).single(
//     "productImage"
//   ),
//   createProductController
// );

module.exports = router;
