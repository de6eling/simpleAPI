var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile('./public/files/movies.txt', 'utf-8', function(err, data){
    if (err) res.send(error);;

    res.send(data);
  });

});

router.post('/', function(req, res, next) {
  fs.readFile('./public/files/movies.txt', 'utf-8', function(err, data){
    if (err) throw err;

    var newValue = JSON.stringify(req.body);
    fs.writeFile('./public/files/movies.txt', newValue, 'utf-8', function (err) {
      if (err) throw err;
      console.log('filelistAsync complete');
    });
  });
  res.send(req.body);
});

module.exports = router;
