var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers : data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
    
});

//api call to insert row in burger table
router.post("/api/burger", function(req, res) {
    console.log(req.body.name);
    burger.insertOne(["burger_name","devoured"],[req.body.name, false],function(result){
        res.json({id: result.insertId});
    })
});

//api call for updating the devoured
router.put("/api/burger/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
      }, condition, function(result) {
        if (result.changedRows == 0) {
          // If no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }
      });  
});  

// Export routes for server.js to use.
module.exports = router;
