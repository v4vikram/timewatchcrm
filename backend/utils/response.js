export const successResponse = (res, data = {}, message = "Success", code = 200) => {
  return res.status(code).json({
    success: true,
    message,
    data,
  });
};

export const errorResponse = (res, errors={}, statusCode = 500) => {
  // Only pick safe parts of the error
  // const errorMessage = errors || "Something went wrong";
  // const errorStack = process.env.NODE_ENV === "development" ? errors.stack : undefined;

  return res.status(statusCode).json({
    // success: false,
    errors: errors,
    // stack: errorStack, // optional
  });
};

