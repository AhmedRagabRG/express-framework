export const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;

  if (process.env.NODE_ENV === "development") {
    sendErrorDevMode(err, res);
  } else if (process.env.NODE_ENV == "production") {
    sendErrorProdMode(err, res);
  }
};

const sendErrorDevMode = (err, res) => {
  res.status(err.statusCode).json({
    OK: err.statusCode,
    msg: err.message,
    stack: err.stack,
  });
};

const sendErrorProdMode = (err, res) => {
  res.status(err.statusCode).json({
    OK: err.statusCode,
    msg: err.message,
  });
};

