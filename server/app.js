const express = require('express')
const app = express()
const path = require('path')

app.use(express.static('../client/build'))

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

const server = app.listen(3000, () => {
	console.log('Stratis is running on port 3000')
})