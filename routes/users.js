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
});

module.exports = router;
