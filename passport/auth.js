const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
//const GOOGLE_URL = 'http://localhost:3000/auth/google/callback';
//const GOOGLE_URL = 'https://anhdw-mp3-api.herokuapp.com/auth/google/callback';
const GOOGLE_URL = 'https://anhdw-mp3-api.vercel.app/auth/google/callback';

passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: GOOGLE_URL,
        passReqToCallback: true
    },
    function(request, accessToken, refreshToken, profile, done) {
        return done(null, profile);
    }
));

passport.serializeUser(function(user, done) {
    done(null, user)
})

passport.deserializeUser(function(user, done) {
    done(null, user)
})