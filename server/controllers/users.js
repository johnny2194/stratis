var User = require('../models').User

module.exports = {
  create(req, res) {
  	if (req.body) console.log('req is present')
    return User
      .create({
    	  first_name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        last_name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false
        },
        gender: {
          type: Sequelize.STRING,
          allowNull: false
        }
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  index(req, res) {
  	console.log(req)
    return User
      .findAll()
      .then(users => res.status(201).send(users))
      .catch(error => res.status(400).send(error));
  }
};