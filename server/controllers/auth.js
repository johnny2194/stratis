module.exports = {
	signup(req, res) {
		res.send('signup');
	},
	login(req, res) {
		res.send('login');
	},
	logout(req, res) {
    req.session.destroy((err) => res.redirect('/')); 
	},
	profile(req, res) {
		
	}
}