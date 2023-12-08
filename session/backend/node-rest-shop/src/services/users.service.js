const { OK, ERROR } = require("../../utils/responseHelper");
const bcrypt = require("bcrypt");
const UsersModel = require("../models/Users.model");

const createUser = async (doc) => {
  const { name, email, password } = doc;

  const result = await UsersModel.find({ email: email });

  if (result.length > 0) {
    throw new Error("User already exists, Please Sign IN");
  }

  // Hash password:
  const hashedPassword = await bcrypt.hash(password, 10);

  return await UsersModel.create({
    name,
    email,
    password: hashedPassword,
  });
};

const findUser = async ({ email, password }) => {
  const user = await UsersModel.findOne({ email: email });
  if (!user) {
    throw new Error("User not found, please sign-up");
  }
  const isPasswordMatched = await bcrypt.compare(password, user.password);

  if (isPasswordMatched) {
    return user;
  }

  throw new Error("Incorrect password");
};

module.exports = {
  createUser,
  findUser,
};
