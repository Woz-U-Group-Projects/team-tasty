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
app.use("/images", express.static(path.join("/images")));

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

// add the routers
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/posts", postsRouter);

module.exports = app;
