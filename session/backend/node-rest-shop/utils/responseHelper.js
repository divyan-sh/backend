exports.OK = (res, result, message = "", status = true) => {
  res.status(200).json({
    status,
    message: message || "",
    result: result || null,
  });
};

exports.ERROR = (res, result, message = "Error", status = false) => {
  res.status(200).json({
    status,
    message: message || "",
    result,
  });
};

exports.UNAUTHORIZED = (res, result, message = "Error", status = false) => {
  res.status(401).json({
    status,
    message: message || "",
    result,
  });
};

exports.BAD = (res, result, message = "Error", status = false) => {
  res.status(400).json({
    status,
    result,
    message: message || "",
  });
};

exports.UNKNOWN = (res, result, message = "Error", status = false) => {
  res.status(500).json({
    status,
    result,
    message: message || "",
  });
};
