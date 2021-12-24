const express = require('express')
const app = express()
const path = require('path')
const handlebars = require('express-handlebars')
const route = require('./routers')
const db = require('./config/db/dbConnection')
const methodOverride = require('method-override')
const session = require('express-session')
const passport = require('passport')
const flash = require('connect-flash')
const passportStrategy = require('./config/passport')
const port = 3000

// Overriding method
app.use(methodOverride('_method'))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json());

// Express handlebars
app.engine('hbs', handlebars.engine({
    extname: '.hbs',
    helpers: {
      checkEmptyString(params) {
        return params.length !== 0 ? true : false
      },
      checkSignSlug(slug) {
        return slug === 'sign-up' ? true : false
      },
      checkErrorLogin(error) {
        return error !== '' ? true : false
      },
    },
}));

//Authentication
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

//Passport function
passportStrategy(passport)

// Connect mongoDB
db.dbConnection()

//Static files
app.use(express.static(path.join(__dirname, 'public'))) 

app.set('view engine', 'hbs');
app.set("views", "./src/resources/views");

route(app)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})