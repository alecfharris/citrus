const db = require('../models');

// Defining methods for the recipesController
module.exports = {
  findAll(req, res) {
    db.APIRecipes.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById(req, res) {
    db.APIRecipes.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create(req, res) {
    db.APIRecipes.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // update: function (req, res) {
  //     db.APIRecipes
  //         .findOneAndUpdate({ _id: req.params.id }, req.body)
  //         .then(dbModel => res.json(dbModel))
  //         .catch(err => res.status(422).json(err));
  // },
  remove(req, res) {
    db.APIRecipes.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
};
