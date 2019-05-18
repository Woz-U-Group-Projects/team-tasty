const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JWTStrategy = require("passport-jwt").Strategy;
const bcrypt = require("bcryptjs");

const userModel = require("../models/user");

passport.use(
  "local",
  new LocalStrategy(function(username, password, done) {
    userModel.findOne({ userName: username }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false);
      }
      if (user.validPassword(password)) {
        console.log("correct user");
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

passport.use(
  "jwt",
  new JWTStrategy(
    {
      jwtFromRequest: req => req.cookies.jwt,
      secretOrKey: "secretkey"
    },
    (jwtPayload, done) => {
      if (Date.now() > jwtPayload.expires) {
        return done("jwt expired");
      }

      return done(null, jwtPayload);
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});

passport.deserializeUser((id, cb) => {
  userModel.findOne({ _id: id }, function(err, user) {
    if (err) {
      cb(err);
    } else {
      cb(null, user);
    }
  });
});
