//require mongoose and connect to the database by requiring util.js
var mongoose = require("mongoose");
require('./util');

var venueSchema = new mongoose.Schema({
    name: String,
    //main image of venue
    image: String,
    //array of other venues
    pictures: [{
        type: String
    }],
    //each venue stores array of comment objects
    comments: [
        {
           type: mongoose.Schema.Types.ObjectId,
           ref: "Comment"
        }
    ],
    //venues will be either pub, late bar or venue
    type: String,
    //each venue will have upvotes and downvotes
    upVotes: {type: Number, default : 0},
    downVotes: {type: Number, default : 0}
});

module.exports = mongoose.model("Venue", venueSchema)