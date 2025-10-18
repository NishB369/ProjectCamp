import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

console.log("Project Started");
console.log(`Author: ${process.env.author}`);

