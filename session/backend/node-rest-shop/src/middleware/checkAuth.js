const jwt = require("jsonwebtoken");
const { ERROR } = require("../../utils/responseHelper");

const checkAuth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWTSECRET);
    req.userData = decoded;
    next();
  } catch (error) {
    return ERROR(res, null, error.message);
  }
};

module.exports = { checkAuth };
