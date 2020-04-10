var express = require("express");
var router  = express.Router({mergeParams: true});
var Venue = require("../models/venues");

//route used to inncrement upvotes fo a venue
router.post("/upvote", function(req, res){
    //find the id of the venue and update upVotes by increasing it by 1
    Venue.findByIdAndUpdate(req.params.id, {$inc: {upVotes: 1}}, function(err, venue){
        //redirect to the venue page after
        if(err){
            res.redirect("/" + req.params.id);
        } else {
            res.redirect("/" + req.params.id);
        }
    });
 });

 //route used to inncrement downvotes fo a venue
 router.post("/downvote", function(req, res){
     //find the id of the venue and update downVotes by increasing it by 1
    Venue.findByIdAndUpdate(req.params.id, {$inc: {downVotes: 1}}, function(err, venue){
        //redirect to the venue page after
        if(err){
            res.redirect("/" + req.params.id);
        } else {
            res.redirect("/" + req.params.id);
        }
    });
 });

 module.exports = router;