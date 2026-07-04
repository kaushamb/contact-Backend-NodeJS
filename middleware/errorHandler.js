const constant = require("../constants");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.json({ title: "NOT Found", message: err.message, stackTrace: err.stack });
  switch (statusCode) {
    case constant.NOT_FOUND:
      res.json({
        title: "NOT Found",
        message: err.message,
        stackTrace: err.stack,
      });
    case constant.UNATHORIZED:
      res.json({
        title: "Unauthorized",
        message: err.message,
        stackTrace: err.stack,
      });
    case constant.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });
    case constant.SERVER_ERROR:
      res.json({
        title: "Server Error",
        message: err.message,
        stackTrace: err.stack,
      });
    case constant.VALIDATION:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
    default:
        console.log("No Error!")
      break;
  }
};

module.exports = errorHandler;
