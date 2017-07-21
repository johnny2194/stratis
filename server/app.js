const express = require('express')
const app = express()

app.use(express.static('../client/build'))

app.get('*', (req, res) => {
	res.sendFile(__dirname + '../client/build/index.html')
})

const server = app.listen(3000, () => {
	console.log('Stratis is running on port 3000')
})