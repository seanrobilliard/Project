var express = require("express");
var router  = express.Router();
var passport = require("passport");


var User = require("../models/user");

//get the register page
router.get("/register", function(req, res){
  res.render("register");
});

//create new user route
//uses passport functions
router.post("/register", function(req, res){
  //save the new user's name to a variable
  var newUser = new User({username: req.body.username});
    User.register(newUser, req.body.password, function(err, user){
      //if user is unable to be created render the page again with the error message
      if(err){
        return res.render("register", {"error": err.message});
      }
      //if there is no error create the user and redirect to main page
      else{
        passport.authenticate("local")(req, res, function(){
          req.flash("success", "User Created");
          res.redirect("/"); 
        });
      }
    });
})

//get the log in page
router.get("/login", function(req, res){
  res.render("login");
});

//login route
//use passport to authenticate user
router.post("/login", passport.authenticate("local", 
    {   //if there is no error redirect to main page
        successRedirect: "/",
        //if there is an error render the login page again
        failureRedirect: "/login"
    }), function(req, res){
});

//log out route
router.get("/logout", function(req, res){
  //request a lot out
  req.logout();
  //display message indicating you've been logged out
  req.flash("success", "Logged out")
  //redirect to the main page
  res.redirect("/");
});

module.exports = router;
