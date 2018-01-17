"use strict";

const client_account = require('../models').client_account;

exports.list = function (req, res) {
  client_account.findAll().then(client_account => {
    res.jsonp(client_account);
  });
};

exports.create = function (req, res) {
  res.jsonp(client_account.create(req.body));
};

exports.findById = function (req, res) {
  let id = req.params.id;
  client_account.findById(id).then(client_account => {
    res.jsonp(client_account);
  });
};
exports.findAccount = function (req, res) {
  let username = req.params.username;
  client_account.findAccount(username).then(client_account => {
    res.jsonp(client_account);
  });
};

exports.delete = function (req, res) {
  let id = req.params.id;
  client_account.findById(req.params.id)
    .then(client_account => {
      if (!client_account) {
        return res.status(400).send({
          message: 'client_account Not Found',
        });
      }
      return client_account
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};

exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  client_account.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d client_account', numberAffected);
      return res.send(202);
  });
}