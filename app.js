const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const path = require('path');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

const app = express();

var mongoDB = "mongodb://dbuser:password1@ds121730.mlab.com:21730/tasty-database";
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("connected", () => console.log(`Mongoose connection open to ${mongoDB}`));
db.on("disconnected", () => console.log("Mongoose connection disconnected"));
db.on("error", console.error.bind(console, "Mongoose connection error:"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("public/images")));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:4200", credentials: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

module.exports = app;
