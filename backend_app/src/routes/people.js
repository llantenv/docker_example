var express = require('express');
var router = express.Router();
var utils = require('../helpers/utils');

var models = require('../models');

router.get('/:people_id(\\d+)?', function (req, res, next) {
  var where = {}
  if(req.params.people_id){
    where = {
      id: req.params.people_id,
    }
  }
  models.People.findAll({ where: where }).then(
    (success) => {
      return utils.jsonResponse(res, true, success);
    }, (err) => {
      return utils.jsonResponse(res, false, {} ,'ERROR', 500 );
    });
});

module.exports = router;
