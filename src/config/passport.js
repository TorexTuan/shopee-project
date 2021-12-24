
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')
const users = require('../app/model/users')

function passportStrategy(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id)
    })

    passport.deserializeUser(function(id, done) {
        users.findById(id, (err, user) => {
            done(err, user)
        })
    })

    passport.use(new LocalStrategy(
        {
            usernameField: 'email'
        },
        function(email, password, done) {
            users.findOne({ email: email }, (err, user) => {
                if(err) return done(err)
                if(!user) return done(null, false, {message: 'Invalid Email'})

                bcrypt.compare(password, user.password, (err, result) => {
                    if(err) return done(err)
                    if(!result) return done(null, false, {message: 'Incorrect password'})
                    return done(null, user)
                })
            })
               
        }
    ))

}

module.exports = passportStrategy

