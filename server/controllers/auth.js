const path = require('path')

module.exports = {
	logout(req, res) {
    req.session.destroy((err) => res.redirect('/')); 
	},
	signup(req, res) {
		res.send(req.user)
	},
	profile(req, res) {
		res.sendFile(path.join(__dirname, '../../client/build/index.html'))
	}
}