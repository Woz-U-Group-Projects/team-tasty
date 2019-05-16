var GithubStrategy = require('passport-github').Strategy;
var models = require('../models');
const passport = require('passport');

passport.use(
  'github',
  new GithubStrategy(
    {
      clientID: '09b022da4b2cc31a13ac',
      clientSecret: 'd1e5e039da0714f5bccc52e811fcbece76ee7b16',
      callbackURL: 'http://localhost:3000/users/login/github/callback'
    },

    function(access_token, refresh_token, profile, done) {
      models.users
        .findOne({
          where: {
            AuthId: profile.id
          }
        })
        .then(user => {
          let name = profile.displayName;
          let [firstName, ...lastName] = name.split(' ');
          lastName = lastName.join(' ');
          if (!user) {
            return models.users
              .create({
                AuthId: profile.id,
                FirstName: firstName,
                LastName: lastName
              })
              .then(user => {
                done(null, user);
              });
          } else {
            done(null, user);
          }
        })
        .catch(err => {
          if (err) {
            console.log('error');
            return done(err);
          }
        });
    }
  )
);