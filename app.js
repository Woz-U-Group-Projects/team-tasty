<<<<<<< HEAD
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
const passport = require("passport");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// index router (not used)
var indexRouter = require("./routes/index");
// users router
var usersRouter = require("./routes/users");
// posts router
var postsRouter = require("./routes/posts");

// include passport config
require("./config/passport.js");

var app = express();
// serve the public folder
app.use(express.static(path.join(__dirname, "public")));
// serve the images folder
app.use("/images", express.static(path.join("public/images")));

// initialize passport
app.use(passport.initialize());

app.use(logger("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({ origin: "http://localhost:4200", credentials: true }));

// cors headers
=======
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');

const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

const app = express();

// var mongoDB = "mongodb://dbuser:password1@ds121730.mlab.com:21730/tasty-database";
// mongoose.connect(mongoDB, { useNewUrlParser: true });
// mongoose.Promise = global.Promise;
// var db = mongoose.connection;
// db.on("connected", () => console.log(`Mongoose connection open to ${mongoDB}`));
// db.on("disconnected", () => console.log("Mongoose connection disconnected"));
// db.on("error", console.error.bind(console, "Mongoose connection error:"));

mongoose
  .connect(
    "mongodb://dbuser:password1@ds121730.mlab.com:21730/tasty-database"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("public/images")));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:4200", credentials: true }));

>>>>>>> origin/ashley
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
<<<<<<< HEAD

// add the routers
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

// mongodb connection string
const mongoURL = "mongodb://dbuser:password1@ds121730.mlab.com:21730/tasty-database";

// establish mongo connection
mongoose
  .connect(mongoURL, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
=======

app.use('/', indexRouter);
app.use('/users', userRouter);
app.use('/posts', postsRouter);
>>>>>>> origin/ashley

module.exports = app;
