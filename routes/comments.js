var express = require("express");
var router  = express.Router({mergeParams: true});
var Venue = require("../models/venues");
var Comment = require("../models/comment");
var middleware = require("../middleware");

//create new comment
//use middle ware to check if they are logged in
router.post("/new",middleware.isLoggedIn,function(req, res){
    Venue.findById(req.params.id, function(err, venue){
        //error, go back to venue page
        if(err){
            res.redirect("/"+ req.params.id);
        }
        //no error, create the comment
        else {
         Comment.create(req.body.comment, function(err, comment){
             //display error message
            if(err){
                req.flash("error", "Something went wrong");
            } else {
                //add username and id to comment
                comment.author.id = req.user._id;
                comment.author.username = req.user.username;
                //save comment
                comment.save();
                //add the comment to the venue
                venue.comments.push(comment);
                venue.save();
                //display success message
                req.flash("success", "Successfully added comment");
                res.redirect('/' + req.params.id);
            }
         });
        }
    });
 });

 //display the edit comment page
router.get("/:comment_id/edit", function(req, res){
    //find the comment
    Comment.findById(req.params.comment_id, function(err, foundComment){
        //error, go back a page
        if(err){
            res.redirect("back");
        } 
        //render the edit page with info on the comment
        else {
          res.render("edit", {venue: req.params.id, comment: foundComment});
        }
     });
})

//find the comment and update the comments text
router.put("/:comment_id", function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
        if(err){
            res.redirect("/");
        } else {
            res.redirect("/");
        }
     });
})

//delete comment route
router.delete("/:comment_id/delete", function(req, res){
    //find the comment and remove it
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
        //if there is an error go back
        if(err){
            res.redirect("back");
        } 
        //no error, send message to say comment was deleted and redirect to venue page again
        else {
            req.flash("success", "Comment deleted");
            res.redirect("/" + req.params.id);
        }
     });
})

 module.exports = router;