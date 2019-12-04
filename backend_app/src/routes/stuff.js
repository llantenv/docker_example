var express = require('express');
var router = express.Router();
var utils = require('../helpers/utils');
var request = require("request");

var models = require('../models');

router.get('/', function (req, res, next) {
  
    var options = { 
        method: 'GET',
        url: `https://swapi.co/api/people/${utils.getRandomInt(1,88)}/`,
        json:true
    };

    return request(options, function (error, response, body) {
        if (error) {
          return utils.jsonResponse(res, false, {}, 'REQUEST ERROR', 500);
        }else{
          models.People.create(body).then(function (success) {
            if (success) {
              return utils.jsonResponse(res, true, "process ok");
            } else {
              return utils.jsonResponse(res, false, {}, 'INSERT ERROR', 500);
            }
          }).catch(function(){
            return utils.jsonResponse(res, false, {}, 'INSERT ERROR', 500);
          })
        }

    });



});

module.exports = router;
