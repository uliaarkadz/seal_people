require("dotenv").config();
const mongoose = require("mongoose");

const DATABASE_URL = process.env.DATABASE_URL;

mongoose.connect(DATABASE_URL);

mongoose.connection
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected to Mongoose"))
  .on("error", (error) => console.log(error));

module.exports = mongoose;
