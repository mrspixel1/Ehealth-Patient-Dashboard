const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyparser= require("body-parser");

const app = express();
app.use(cors());
app.use(bodyparser.json());
mongoose.connect("mongodb+srv://max:cqrvgaYv5mg9GqEd@cluster0-lgcwy.mongodb.net/node-angular")
.then(() => {
  console.log('Connected to database!')
})
.catch(() => {
  console.log('Connection failed!')
});
const userRoutes = require("./routes/user");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});


app.use("/api/user", userRoutes)

module.exports = app;
