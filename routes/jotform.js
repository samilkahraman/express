var express = require("express");
var router = express.Router();
var cors = require('cors');
var request = require('request');
const axios = require('axios');
// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});
router.use(cors());
// define the home page route
router.get("/", function(req, res) {
  res.header("Access-Control-Allow-Headers","*");
  res.send("prices");
});

var createCategory = async (req,res) => {
    console.log(req.params)
    var result =  await createCategoryWithName(req.params.category)
    res.send(result)
    }

router.get("/create-new-category/:category", [createCategory]);



async function createCategoryWithName(name){
    let resp = "-.-"
    var options = {
        'method': 'POST',
        'url': 'https://api.jotform.com/form?apikey=c47b317e13a455fd869b360b993c5198',
        'headers': {
          'Content-Type': 'application/json'
        },
        formData: {
          'questions[1][type]': 'control_textbox',
          'questions[1][text]':  name
        }
      };
      await axios.post('https://api.jotform.com/form?apikey=c47b317e13a455fd869b360b993c5198',   {"formData": {
        'questions[1][type]': 'control_textbox',
        'questions[1][text]':  name
      }});
      return resp;

}
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
