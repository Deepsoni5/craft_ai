const passport = require("passport");
require("dotenv").config();
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;
const DiscordStrategy = require('passport-discord').Strategy;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const GITHUB_CLIENT_SECRET=process.env.GITHUB_CLIENT_SECRET;
const DISCORD_CLIENT_ID=process.env.DISOCRD_CLIENT_ID;
const DISOCRD_CLIENT_SECRET = process.env.DISOCRD_CLIENT_SECRET;
var scopes = ['identify', 'email'];
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope:["profile","email"],
  },
  function(accessToken, refreshToken, profile, done) {
      done(null, profile);
  }
));

passport.use(new GitHubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      done(null, profile);
     }
));

passport.use(new DiscordStrategy({
    clientID:DISCORD_CLIENT_ID,
    clientSecret:DISOCRD_CLIENT_SECRET,
    callbackURL: '/auth/discord/callback',
    scope: scopes
},
    function (accessToken, refreshToken, profile, cb) {
      
      cb(null, profile);
     }));

passport.serializeUser((user, done) => {
 
    done(null, user);
});
passport.deserializeUser((user, done) => {
    done(null, user);
});


