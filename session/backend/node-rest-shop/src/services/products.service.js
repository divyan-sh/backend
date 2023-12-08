const ProductModel = require("../models/Product.models");

const getAllProducts = async () => {
  const data = await ProductModel.find();
  return data;
};

const createProduct = async (name, price, productImage) => {
  const product = await ProductModel.findOne({ name });

  if (product) {
    throw new Error("Product is already in our inventory");
  }

  const data = await ProductModel.create({
    name,
    price,
    productImage,
  });

  return data;
};

const searchProduct = async (name, id, price, operator) => {
  let query = {};
  if (id) {
    query["_id"] = `${id}`;
  } else {
    if (name) {
      query.name = { $regex: `${name}`, $options: "i" };
    }
    if (price) {
      const opt = operator === "gt" ? "$gt" : operator === "lt" ? "$lt" : "$eq";
      query.price = { [opt]: price };
    }
  }

  const data = await ProductModel.find(query);

  return data;
};

const findProductAndUpdate = async (
  searchName,
  searchPrice,
  searchId,
  searchOperator,
  updatedPayload,
  isUpdateAll = false
) => {
  const data = await searchProduct(
    searchName,
    searchId,
    searchPrice,
    searchOperator
  );

  if (data.length === 0) {
    throw new Error("No Product find to update");
  } else if (isUpdateAll) {
    const allIds = data.map((item) => item._id);

    const data2 = await ProductModel.updateMany(
      { _id: { $in: allIds } },
      updatedPayload
    );

    return data2;
  }
  const data3 = await ProductModel.updateOne(
    { _id: data[0]._id },
    updatedPayload
  );
  return data3;
};

const findProductAndDelete = async (
  searchName,
  searchPrice,
  searchId,
  searchOperator,
  isDeleteAll = false
) => {
  const data = await searchProduct(
    searchName,
    searchId,
    searchPrice,
    searchOperator
  );

  if (data.length === 0) {
    throw new Error("No Product find to delete");
  } else if (isDeleteAll) {
    const allIds = data.map((item) => item._id);

    const data2 = await ProductModel.deleteMany({ _id: { $in: allIds } });

    return data2;
  }
  const data3 = await ProductModel.deleteOne({ _id: data[0]._id });
  return data3;
};

module.exports = {
  getAllProducts,
  createProduct,
  searchProduct,
  findProductAndUpdate,
  findProductAndDelete,
};
