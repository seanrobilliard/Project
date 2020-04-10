var express     = require("express"),
    app         = express(),
    mongoose    = require("mongoose"),
    bodyParser  = require("body-parser"),
    flash       = require("connect-flash"),
    passport    = require("passport"),
    LocalStrategy = require("passport-local"),
    methodOverride = require("method-override"),
    seedDB = require("./seeds");


//require models
var Venue = require("./models/venues"),
    User  = require("./models/user"),
    Comment  = require("./models/comment")
    

// include routes
var indexRoutes = require("./routes/index")
var userRoutes = require("./routes/users")
var commentRoutes = require("./routes/comments")
var voteRoutes      = require("./routes/votes")

app.use(bodyParser.urlencoded({extended: true}));
//set view engine to ejs
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
//seed the database
seedDB();

// PASSPORT CONFIGURATION
app.use(require("express-session")({
  secret: "Secret",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//set up flash messages
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

//tell app.js to use the various routes
app.use("/", indexRoutes);
app.use("/user", userRoutes);
app.use("/:id/comment", commentRoutes);
app.use("/:id/change", voteRoutes);

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/*
//post
app.post('/api/activities' , function (req , res) { 

Activity.create ({ 
user_name : req.body.user_name, 
comment: req.body.comment , 
up_votes: req.body.up_votes , 
down_votes : req.body.down_votes
}.then(activity => {
res.join(activity)
})); 
}) ; 


//get
app.get (' /api/activities/:activity_id' , function (req , res ) { 
Activity.findById(req.params.activity_id).then(function (err, activity)
{ 
if (err) { 
res.send (err) 
} 
res.json (activity) 
})
}) 

//put
app.put ('/api/activities/:activity_id' , function(req , res ) { 

activity.findOneAndUpdate({ 

user_name : req.body.user_name, 
comment: req.body.comment , 
up_votes: req.body.up_votes , 
down_votes : req.body.down_votes

}.then(activity => { 
re.json(activity)
})); 
}); 

//delete
app.delete ('/api/activities/:activity_id' , function(req , res ) { 

activity.findOneAndRemove({ 

user_name : req.body.user_name, 
comment: req.body.comment , 
up_votes: req.body.up_votes , 
down_votes : req.body.down_votes

}.then(activity => { 
res.json(activity)
})); 
});

*/
module.exports = app;
