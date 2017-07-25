const Stock_details = require('../models').Stock_details
const models = require('../models')

Stock_details.belongsTo(models.Product, {
  foreignKey: 'productId',
  as: 'product'
})
Stock_details.hasMany(models.Purchase, {
  foreignKey: 'stock_detailsId',
  as: 'purchase'
})

module.exports = {
  create(req, res) {
    return Stock_details
      .create({
        color: req.body.color,
        size: req.body.size,
        price: req.body.price,
        stock_level: req.body.stock_level,
        productId: req.body.productId,
        discount: req.body.discount
      })
      .then(stock_details => res.status(201).send(stock_details))
      .catch(error => res.status(400).send(error));
  },
  index(req, res) {
    return Stock_details
      .findAll({
        include: [{
          model: models.Product,
          as: 'product'
        }]
      })
      .then(products => res.status(200).send(products))
      .catch(error => res.status(400).send(error));
  },
  show(req, res) {
    return Stock_details
      .findById(req.params.stock_detailsId, {
        include: [{
          model: models.Product,
          as: 'product'
        }]
      })
      .then(stock_details => res.status(200).send(stock_details))
      .catch(error => res.status(400).send(error))
  },
  delete(req, res) {
    return Stock_details
      .findById(req.params.stock_detailsId)
      .then(stock_details => {
        return stock_details
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status.send(400))
      })
      .catch(error => res.status(400).send(error))   
  },
  update(req, res) {
    return Stock_details
      .findById(req.params.stock_detailsId)
      .then(stock_details => {
        return stock_details
          .update({
            color: req.body.color || stock_details.color,
            size: req.body.size || stock_details.size,
            price: req.body.price || stock_details.price,
            stock_level: req.body.stock_level || stock_details.stock_level,
            productId: req.body.productId || stock_details.productId,
            discount: req.body.discount || stock_details.discount
          })
          .then(stock_details => res.status(200).send(stock_details))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  }
};