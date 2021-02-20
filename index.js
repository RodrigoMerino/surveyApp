const express = require("express");
const passport= require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const key = require("./config/keys")
const app = express();

// app.get('/',(req,res) =>{
//     res.send({'hi':'there'})
// })
//add a coment here
passport.use(
    new GoogleStrategy(
        {
    clientID: key.googleClientID,
    clientSecret: key.googleClientSecret,
    callbackURL: "/auth/google/callback"
  },
  (accessToken) => {
     console.log(accessToken)
    }));


    app.get('/auth/google',
  passport.authenticate('google',
  { scope: ['profile','email'] }));

const PORT = process.env.PORT || 5000;
app.listen(PORT);