const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const logger = require('morgan')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const flash = require('connect-flash')
const models = require("./models");

models.sequelize.sync().then(() => {
    console.log('Nice! Database looks fine')
}).catch((err) => {
    console.log(err, "Something went wrong with the Database Update!")
});

app.use(logger('dev'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use(express.static('../client/build'))

app.use(session({ secret: 'blahdyblahdyblah', saveUninitialized: true, resave: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


require('./config/passport/passport')(passport, models.User); 
require('./routes')(app, passport);
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

const server = app.listen(3000, () => {
	console.log('Stratis is running on port 3000')
})