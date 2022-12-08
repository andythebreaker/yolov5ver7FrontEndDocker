var express = require('express');
var router = express.Router();
var cmd=require('node-cmd');
    
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
  const syncClone=cmd.runSync('python3 hel.py');
  console.log(syncClone);
  res.render('index', { title: '<3 <3 Express' });
});


module.exports = router;
