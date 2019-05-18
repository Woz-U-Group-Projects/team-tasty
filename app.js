var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const passport = require("passport");
const mongoose = require("mongoose");

// index router (not used)
var indexRouter = require("./routes/index");
// users router
var usersRouter = require("./routes/users");
// posts router
var postsRouter = require("./routes/posts");

// include passport config
require("./config/passport.js");

var app = express();
app.use(cookieParser());
// serve the public folder
app.use(express.static(path.join(__dirname, "public")));
// serve the images folder
app.use("/images", express.static(path.join("public/images")));

// initialize passport
app.use(passport.initialize());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// add the routers
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

// mongodb connection string
const mongoURL = "mongodb://dbuser:password1@ds221416.mlab.com:21416/tasty";

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

module.exports = app;
