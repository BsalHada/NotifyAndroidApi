const auth = require("./auth");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const express = require("express");
var app = express();
const morgan = require("morgan");
const dotenv = require("dotenv").config();
const cors = require("cors");
const registerRoute = require("./routes/register_route");
const uploadRouter = require('./routes/upload_route');
const eventRouter = require('./routes/events');
const notificationRouter = require('./routes/notifications');
const scheduleRouter = require('./routes/schedule');

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(morgan("tiny"));
app.use(express.json());
app.options("*", cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
require("./db/connection");
app.use(express.json());
//app.use(registerRoute);

app.use("/register", registerRoute);
app.use('/upload', uploadRouter);
app.use('/event', eventRouter);
app.use('/notification', notificationRouter);
app.use('/schedule', scheduleRouter);

app.use(auth.verifyUser);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.statusCode = 500;
  res.json({ status: err.message });
});
app.listen(process.env.PORT, () => {
  console.log(`App is running at localhost:${process.env.PORT}`);
});
