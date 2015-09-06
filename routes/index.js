var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/abc', function(req, res, next) {
  res.send('The time is ' + new Date().toString());
});

router.all('/user/:username', function(req, res,next) { 
		next();
});

router.get('/user/:username', function(req, res) { 
	res.send('user333: ' + req.params.username);
});


router.get('/userlist', function(db) {
    return function(req, res) {
        var collection = db.get('usercollection');
        collection.find({},function(e,docs){
            res.render('userlist', {
                "userlist" : docs
            });
        });
    };
});

