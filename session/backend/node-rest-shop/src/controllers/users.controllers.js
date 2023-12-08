const { createUser, findUser } = require("../services/users.service");
const { OK, ERROR } = require("../../utils/responseHelper");
const jwt = require("jsonwebtoken");

const createUserController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const result = await createUser({
      name,
      email,
      password,
    });
    return OK(res, result, "User Create successfully");
  } catch (error) {
    return ERROR(res, null, error.message);
  }
};

const getUserController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const data = await findUser({ email, password });
    const token = jwt.sign(
      {
        email: data.email,
        userId: data._id,
      },
      process.env.JWTSECRET
    );
    return OK(
      res,
      {
        ...data,
        token,
      },
      "User logged in successfully"
    );
  } catch (error) {
    return ERROR(res, null, error.message);
  }
};

module.exports = { createUserController, getUserController };
