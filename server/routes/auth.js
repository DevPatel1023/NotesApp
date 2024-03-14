//authentication routes
const express = require('express');
const router = express.Router(); 
const session = require('express-session');//for user stayes logged in  
const passport = require('passport');
require('dotenv').config();

const app = express();


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

//below code is for google authentication
router.get('/auth/google',
  passport.authenticate('google', { scope: ['email','profile'] })); // Removed the unnecessary semicolon here

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/'
  ,successRedirect: '/dashboard'
}),
);

//Router if something goes wrong
router.get('/login/failure',(req,res)=>{
    res.send('Failed to login');
});


module.exports = router; 