const Shipping_details = require('../models').Shipping_details

Shipping_details.belongsTo(models.User, {
  foreignKey: 'userId',
  as: 'user'
})

module.exports = {}