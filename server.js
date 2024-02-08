require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const PeopleRouter = require("./controllers/people");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//routs

app.use("/people", PeopleRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listning on server ${PORT}`));
