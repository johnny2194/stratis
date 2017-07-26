const bcrypt = require('bcrypt-nodejs')

module.exports = (passport, user) => {
  var User = user;
  var LocalStrategy = require('passport-local').Strategy;

  passport.use('local-signup', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true // allows us to pass back the entire request to the callback
    },
    (req, email, password, done) => {
      console.log('here is the beautiful request object',req.body);
      var generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);     
      };

      User.findOne({
          where: {
              email: email
          }
      }).then(function(user) {     
        if (user) {
          return done(null, false, { message: 'That email is already taken' });
        } else {
          var userPassword = generateHash(password);
   
          var data = {
            email: email,
            password: userPassword,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            gender: req.body.gender
          };
   
          User.create(data).then((newUser, created) => {
              if (!newUser) return done(null, false);
              if (newUser) return done(null, newUser);     
          });
        }      
      });
    } 
  ));

  passport.use('local-signin', new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback: true
    },
 
 
    function(req, email, password, done) {
      var User = user;

      var isValidPassword = function(userpass, password) {
        return bcrypt.compareSync(password, userpass);
      }

      User.findOne({
        where: { email: email }
      }).then(function(user) {

        if (!user) return done(null, false, { message: 'Email does not exist'});

        if (!isValidPassword(user.password, password)) {
          return done(null, false, { message: 'Incorrect password.'});
        }

        var userinfo = user.get();
        return done(null, userinfo);
          
      }).catch(function(err) {
        console.log("Error:", err);
        return done(null, false, { message: 'Something went wrong with your Signin' });
      });
    }
  ));

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(function(id, done) {
    User.findById(id).then(function(user) {
      if (user) {
        done(null, user.get());
      } else {
        done(user.errors, null);
      }
    });  
  });
}
