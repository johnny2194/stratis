const path = require('path')

module.exports = {
	logout(req, res) {
    req.session.destroy((err) => res.redirect('/')); 
	},
	profile(req, res) {
		res.sendFile(path.join(__dirname, '../../client/build/index.html'))
	}
}