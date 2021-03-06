const Purchase = require('../models').Purchase
const models = require('../models')

Purchase.belongsTo(models.Order, {
  foreignKey: 'orderId',
  as: 'order'
})
Purchase.belongsTo(models.Stock_details, {
  foreignKey: 'stock_detailsId',
  as: 'stock_details'
})

module.exports = {
  create(req, res) {
    return Purchase
      .create({
        quantity: req.body.quantity,
    	  orderId: req.body.orderId,
        stock_detailsId: req.body.productId
      })
      .then(purchase => res.status(201).send(purchase))
      .catch(error => res.status(400).send(error));
  },
  index(req, res) {
    return Purchase
      .findAll({
        include: [{
          model: models.Stock_details,
          as: 'stock_details'
        }, {
          model: models.Order,
          as: 'order'
        }]
      })
      .then(orders => res.status(200).send(orders))
      .catch(error => res.status(400).send(error));
  },
  show(req, res) {
    return Purchase
      .findById(req.params.purchaseId)
      .then(purchase => res.status(200).send(purchase))
      .catch(error => res.status(400).send(error))
  },
  delete(req, res) {
    return Purchase
      .findById(req.params.purchaseId)
      .then(purchase => {
        return purchase
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status.send(400))
      })
      .catch(error => res.status(400).send(error))   
  },
  update(req, res) {
    return Purchase
      .findById(req.params.purchaseId)
      .then(purchase => {
        return purchase
          .update({
            quantity: req.body.quantity || purchase.quantity,
            orderId: req.body.orderId || purchase.orderId,
            stock_detailsId: req.body.productId || purchase.productId
          })
          .then(purchase => res.status(200).send(purchase))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  }
};