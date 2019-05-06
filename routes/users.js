var express = require('express');
var router = express.Router();
const sqlite = require('sqlite3').verbose();
var models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// router.get('/signup', function(req, res, next) {
//   res.render('signup');
// });

router.post('/signup', function(req, res, next) {
  models.users
    .findOrCreate({
      where: {
        FirstName: req.body.firstName,
        LastName: req.body.lastName,
        Email: req.body.email,
        Username: req.body.username,
        Password: req.body.password
      }
    })
    .spread(function(result, created) {
      if (created) {
        //res.redirect('profile/' + result.UserId);
        res.send('user created');
      } else {
        res.send('this user already exists');
      }
    });
});

router.get('/profile/:id', function(req, res, next) {
  models.users
    .find({
      where: {
        UserId: req.params.id
      }
    })
    .then(user => {
      res.render('profile', {
        FirstName: user.FirstName,
        LastName: user.LastName,
        Email: user.Email,
        UserId: user.UserId,
        Username: user.Username
      });
    });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  models.users
    .findOne({
      where: {
        Username: req.body.username
      }
    })
    .then(user => {
      //res.redirect('profile/' + user.UserId);
      res.send(user.UserId);
    });
});
module.exports = router;


