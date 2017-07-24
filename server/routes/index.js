var usersController = require('../controllers').users

module.exports = (app) => {
	app.post('/api/users', usersController.create)
	app.get('/api/users', usersController.index)
	app.get('/api/users/:userId', usersController.show)
	app.delete('/api/users/:userId', usersController.delete)
	app.patch('/api/users/:userId', usersController.update)
};