<<<<<<< HEAD
var express = require("express");
var router = express.Router();
const passport = require("passport");
const userModel = require("../models/user");
var jwt = require("jsonwebtoken");

// singup will look for the user and create them if not found
// the user schema is set to encrypt the password
router.post("/signup", function(req, res, next) {
  userModel.findOne({ userName: req.body.username }, function(err, user) {
    if (user) {
      res.send("this user already exists");
    } else {
      const newUser = new userModel({
        //firstName: req.body.firstName,
        //lastName: req.body.lastName,
        email: req.body.email,
        userName: req.body.username,
        password: req.body.password
      });
      newUser.save().then(result => res.send("User Created"));
    }
  });
});

// login uses the local passport strategy, which will find the user
// and compare the passwords
// if successful, create a jwt and attach it as a cookie to the response
// passport gives us the user as req.user
router.post("/login", passport.authenticate("local"), function(req, res, next) {
  console.log(req.user);
  const token = jwt.sign({ id: req.user.id }, "secretkey", { expiresIn: "1h" });
  res.cookie("jwt", token);
  res.send("user logged in");
});

// profile(for testing)
// reads the jwt from the request and validates it for authentication
// attaches the decrypted token as req.user
// req.user.id will be the mongodb user id field
router.get("/profile", passport.authenticate("jwt"), function(req, res, next) {
  console.log(req.user);
  res.send("profile");
});

// logging out is simply removing the jtw cookie
router.get("/logout", function(req, res) {
  res.cookie("jwt", "", { expires: new Date(0) });
  res.send("logged out");
=======
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

const User = require('../models/users')

router.post("/signup", (req, res, next) => {
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          message: "Invalid authentication"
        });
      });
  });
});

router.post("/login", (req, res, next) => {
  let fetchedUser;
  User.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Invalid Authentication"
      });
    });
>>>>>>> origin/ashley
});

module.exports = router;
