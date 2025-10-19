import ApiResponse from "../utils/api-response.js";

const healthCheck = (req, res) => {
  try {
    res
      .status(200)
      .json(new ApiResponse(200, { message: "Server is Running" }));
  } catch (error) {
    console.error(error);
  }
};

export default healthCheck;
