"use strict";
import dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(9090, () => {
  console.log("Server is running on port 9090!");
});
