var express = require('express');
var router = express.Router();
var ctrlAPI = require("../controllers/API");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*Métodos para a ultilização da API*/ 
/*POST*/ 
router.post('/API/save', ctrlAPI.printFromJSON);
router.post('/API/insertCS', ctrlAPI.insertChallengeStats);
/*GET*/


module.exports = router;
