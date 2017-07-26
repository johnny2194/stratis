const path = require('path')

module.exports = {
	logout(req, res) {
    req.session.destroy((err) => res.redirect('/')); 
	},
	returnUser(req, res) {
		res.send(req.user)
	},
	profile(req, res) {
		res.sendFile(path.join(__dirname, '../../client/build/index.html'))
	},
	checkValidation(req, res) {
		if (req.isAuthenticated()) {
			res.send(req.user)
		} else {
			res.send(null)
		}

	}
}