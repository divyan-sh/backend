const { ERROR, OK } = require("../../utils/responseHelper");
const {
  getAllProducts,
  createProduct,
  searchProduct,
  findProductAndUpdate,
  findProductAndDelete,
} = require("../services/products.service");

async function getAllProductsController(req, res) {
  try {
    let result = {};
    const data = await getAllProducts();
    result.count = data.length;
    result.data = data;

    return OK(
      res,
      data,
      result.count > 0
        ? "Product List fetched successfully"
        : "No Products available"
    );
  } catch (error) {
    return ERROR(res, null, error.message);
  }
}

async function createProductController(req, res) {
  const { name, price } = req.body;
  try {
    const data = await createProduct(
      name,
      +price,
      `/uploads/${req.file.filename}`
    );
    return OK(res, data, "Product created successfully");
  } catch (error) {
    return ERROR(res, null, error.message);
  }
}

async function searchProductController(req, res) {
  const { name, id, price, operator } = req.query;
  try {
    const data = await searchProduct(name, id, price, operator);
    let result = {};
    result.count = data.length;
    result.data = data;

    return OK(
      res,
      result,
      result.count > 0 ? "Product fetched successfully" : "No Products found"
    );
  } catch (error) {
    return ERROR(res, null, error.message);
  }
}

async function updateProductController(req, res) {
  const {
    searchName,
    searchPrice,
    searchId,
    searchOperator,
    name,
    price,
    isUpdateAll,
  } = req.body;

  const updatedPayload = {};

  if (name) updatedPayload.name = name;
  if (price) updatedPayload.price = price;
  if (req.file) updatedPayload.productImage = `/uploads/${req.file.filename}`;

  try {
    const data = await findProductAndUpdate(
      searchName,
      searchPrice,
      searchId,
      searchOperator,
      updatedPayload,
      Boolean(+isUpdateAll)
    );
    return OK(res, data, "Data updated successfully");
  } catch (error) {
    return ERROR(res, null, error.message);
  }
}

async function deleteProductController(req, res) {
  const { searchName, searchPrice, searchId, searchOperator, isDeleteAll } =
    req.body;

  try {
    const data = await findProductAndDelete(
      searchName,
      searchPrice,
      searchId,
      searchOperator,
      Boolean(+isDeleteAll)
    );
    return OK(res, data, "Data deleted successfully");
  } catch (error) {
    return ERROR(res, null, error.message);
  }
}

module.exports = {
  getAllProductsController,
  createProductController,
  searchProductController,
  updateProductController,
  deleteProductController,
};
