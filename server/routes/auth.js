//authentication routes
const express = require('express');
const router = express.Router(); 
const session = require('express-session');//for user stayes logged in  
const passport = require('passport');
require('dotenv').config();

const app = express();
const user = require('../models/User');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
  }
));


//Google login route
router.get('/auth/google',
passport.authenticate('google', { scope: ['Email','profile'] }));


//Recieving the google data
router.get('/google/callback', 
passport.authenticate('google', 
{ failureRedirect: '/login-failure',
successRedirect: '/dashboard'
}
),
);

//Router if something goes fails to login

router.get('/login-failure', (req, res) => {
    res.send('Failed to login');
}); 

//persists user data after successful authentication
passport.serializeUser(function(user, done) {
    done(null, user);
  });
//retrieve user data from the session
[passport.deserializeUser(function(id, done) {
    user.findById(id, function(err, user) {
      done(err, user);
    });
  } 
  )];
module.exports = router; 