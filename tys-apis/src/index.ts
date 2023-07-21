import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
const port = 8080;

dotenv.config();

mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() => console.log("DB Conncetion Successful !!"))
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
