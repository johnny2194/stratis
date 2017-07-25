const usersController = require('../controllers').users
const productsController = require('../controllers').products
const stock_detailsController = require('../controllers').stock_details
const ordersController = require('../controllers').orders
const purchasesController = require('../controllers').purchases

function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated()) return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = (app, passport) => {
	// AUTHENTICATION ROUTES
	app.get('/login', function(req, res) {
    res.send({ message: 'login' })
  });
  app.get('/signup', function(req, res) {
		res.send({ message: 'signup' })
  });



	// USER ROUTES
	app.post('/api/users', usersController.create)
	app.get('/api/users', usersController.index)
	app.get('/api/users/:userId', usersController.show)
	app.delete('/api/users/:userId', usersController.delete)
	app.patch('/api/users/:userId', usersController.update)

	// ORDER ROUTES
	app.post('/api/orders', ordersController.create)
	app.get('/api/orders', ordersController.index)
	app.get('/api/orders/:orderId', ordersController.show)
	app.delete('/api/orders/:orderId', ordersController.delete)
	app.patch('/api/orders/:orderId', ordersController.update)

	// PURCHASE ROUTES
	app.post('/api/purchases', purchasesController.create)
	app.get('/api/purchases', purchasesController.index)
	app.get('/api/purchases/:purchaseId', purchasesController.show)
	app.delete('/api/purchases/:purchaseId', purchasesController.delete)
	app.patch('/api/purchases/:purchaseId', purchasesController.update)

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