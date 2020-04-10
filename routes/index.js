var express = require("express");
var router  = express.Router();
var Venue = require("../models/venues");
var mongoose = require("mongoose")

//root route
router.get("/", function(req, res){
    //find all the venues and render the main page with info on all the venues
    Venue.find({}, function(err, allVenues){
        if(err){
            console.log(err)
        }
        else{
            res.render("main", {venues: allVenues})
        }
    })
});

//view venue page
router.get("/:id", function(req, res){
    //find the venue, populate the venues comments and send info on the venue to the show page
    Venue.findById(req.params.id).populate("comments").exec(function(err, foundVenue){
        if(err){
            console.log(err);
        } else {
            res.render("show", {venue: foundVenue});
        }
    });
});

module.exports = router;