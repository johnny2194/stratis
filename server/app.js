const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const logger = require('morgan')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static('../client/build'))
app.use(logger('dev'))

require('./routes')(app);
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

const server = app.listen(3000, () => {
	console.log('Stratis is running on port 3000')
})