import ApiResponse from "../utils/api-response.js";
import asyncHandler from "../utils/asyn-handler.js";

// const healthCheck = (req, res) => {
//   try {
//     res
//       .status(200)
//       .json(new ApiResponse(200, { message: "Server is Running" }));
//   } catch (error) {
//     console.error(error);
//   }
// };

const healthCheck = asyncHandler(async (req, res) => {
  res.status(200).json(new ApiResponse(200, { message: "Server is Running" }));
});

export default healthCheck;
