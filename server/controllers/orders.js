const Order = require('../models').Order
const models = require('../models')

Order.hasMany(models.Purchase, {
  foreignKey: 'orderId',
  as: 'purchases'
})
Order.belongsTo(models.User, {
  foreignKey: 'userId',
  as: 'user'
})

module.exports = {
  create(req, res) {
    return Order
      .create({
    	  userId: req.body.userId
      })
      .then(order => res.status(201).send(order))
      .catch(error => res.status(400).send(error));
  },
  index(req, res) {
    return Order
      .findAll()
      .then(orders => res.status(200).send(orders))
      .catch(error => res.status(400).send(error));
  },
  show(req, res) {
    return Order
      .findById(req.params.orderId)
      .then(order => res.status(200).send(order))
      .catch(error => res.status(400).send(error))
  },
  delete(req, res) {
    return Order
      .findById(req.params.orderId)
      .then(order => {
        return order
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status.send(400))
      })
      .catch(error => res.status(400).send(error))   
  },
  update(req, res) {
    return Order
      .findById(req.params.orderId)
      .then(order => {
        return order
          .update({
            userId: req.body.userId || order.userId
          })
          .then(order => res.status(200).send(order))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  }
};