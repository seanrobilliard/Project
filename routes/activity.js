var express = require('express');
var router = express.Router();
const Activity = require ('../models/activity'); 

router.post('/' , (req , res , next ) => { 

const Activity = new activity ({
    user_name : req.body.user_name, 
    comment: req.body.comment , 
    up_votes: req.body.up_votes , 
    down_votes : req.body.down_votes
 }); 

Activity.save().then(result=> {console.log(result)}).catch(err => console.log(err))
})
