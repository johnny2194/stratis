var Product = require('../models').Product

module.exports = {
  create(req, res) {
    return Product
      .create({
    	  name: req.body.name,
        category: req.body.category,
        type: req.body.type,
        gender: req.body.gender,
        brand: req.body.brand
      })
      .then(product => res.status(201).send(product))
      .catch(error => res.status(400).send(error));
  },
  index(req, res) {
    return Product
      .findAll()
      .then(products => res.status(200).send(products))
      .catch(error => res.status(400).send(error));
  },
  show(req, res) {
    return Product
      .findById(req.params.productId)
      .then(product => res.status(200).send(product))
      .catch(error => res.status(400).send(error))
  },
  delete(req, res) {
    return Product
      .findById(req.params.productId)
      .then(product => {
        return product
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status.send(400))
      })
      .catch(error => res.status(400).send(error))   
  },
  update(req, res) {
    return Product
      .findById(req.params.productId)
      .then(product => {
        return product
          .update({
            name: req.body.name || product.name,
            category: req.body.category || product.category,
            type: req.body.type || product.type,
            gender: req.body.gender || product.gender,
            brand: req.body.brand || product.brand
          })
          .then(product => res.status(200).send(product))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  }
};