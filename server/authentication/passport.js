const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy((email, password, done) => {
    User.findOne({ where: {email: email} }, function (err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'This email hasn\'t been registered' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }
));

module.exports = passport