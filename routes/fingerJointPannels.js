var express = require("express");
var router = express.Router();
var prices = require("../public/price-list.json")
var cors = require('cors');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});
router.use(cors());
// define the home page route
router.get("/", function(req, res) {
  res.header("Access-Control-Allow-Headers","*");
  res.send(prices);
});

router.use(express.static('public'))

var cb0 = function(req, res, next) {
    if (req.params.woodName && req.params.woodName == "cam") {
       
        res.send(prices.cam);
    }

    next();
  };
  
  var cb1 = function(req, res, next) {
    console.log("CB1");
    next();
  };
  
  var cb2 = function(req, res) {
    console.log("cb2")
    res.end()
  };
// define the about route
router.get("/pannels/:woodName/quality/:quality/thickness/:thickness/:solid", [
  cb0,
  cb1,
  cb2
]);



module.exports = router;
