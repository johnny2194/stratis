const usersController = require('../controllers').users
const productsController = require('../controllers').products
const stock_detailsController = require('../controllers').stock_details

module.exports = (app) => {
	// USER ROUTES
	app.post('/api/users', usersController.create)
	app.get('/api/users', usersController.index)
	app.get('/api/users/:userId', usersController.show)
	app.delete('/api/users/:userId', usersController.delete)
	app.patch('/api/users/:userId', usersController.update)

	// PRODUCT ROUTES
	app.post('/api/products', productsController.create)
	app.get('/api/products', productsController.index)
	app.get('/api/products/:productId', productsController.show)
	app.delete('/api/products/:productId', productsController.delete)
	app.patch('/api/products/:productId', productsController.update)

	// STOCK_DETAILS ROUTES
	app.post('/api/stock_details', stock_detailsController.create)
	app.get('/api/stock_details', stock_detailsController.index)
	app.get('/api/stock_details/:stock_detailsId', stock_detailsController.show)
	app.delete('/api/stock_details/:stock_detailsId', stock_detailsController.delete)
	app.patch('/api/stock_details/:stock_detailsId', stock_detailsController.update)
};