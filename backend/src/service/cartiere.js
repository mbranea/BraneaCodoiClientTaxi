"use strict";

const cartiere = require('../models').cartiere;

exports.list = function (req, res) {
  cartiere.findAll().then(cartiere => {
    res.jsonp(cartiere);
  });
};

exports.create = function (req, res) {
  res.jsonp(cartiere.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  cartiere.findById(id).then(cartiere => {
    res.jsonp(cartiere);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  cartiere.findById(req.params.id)
    .then(cartiere => {
      if (!cartiere) {
        return res.status(400).send({
          message: 'cartiere Not Found',
        });
      }
      return cartiere
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  cartiere.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d cartiere', numberAffected);
      return res.send(202);
  });
}