// all the middleare goes here
var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
    //check if the user is signed in
    if(req.isAuthenticated()){
        //user is logged in, continue with route
        return next();
    }
    //user isnt logged in display error and redirect to the log in page
    req.flash("error", "You need to be logged in to do that");
    res.redirect("/user/login");
}

//export the middleware
module.exports = middlewareObj;