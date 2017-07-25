var User = require('../models').User

module.exports = {
  create(req, res) {
    return User
      .create({
    	  first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        gender: req.body.gender
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  index(req, res) {
    return User
      .findAll()
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },
  show(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => res.status(200).send(user))
      .catch(error => res.status(400).send(error))
  },
  delete(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch(error => res.status.send(400))
      })
      .catch(error => res.status(400).send(error))   
  },
  update(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        return user
          .update({
            first_name: req.body.first_name || user.first_name,
            last_name: req.body.last_name || user.last_name,
            email: req.body.email || user.email,
            password: req.body.password || user.password,
            gender: req.body.gender || user.gender
          })
          .then(user => res.status(200).send(user))
          .catch(error => res.status(400).send(error))
      })
      .catch(error => res.status(400).send(error))
  }
};