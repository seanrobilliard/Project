
//require mongoose and connect to the database by requiring util.js
var mongoose = require("mongoose");
require('./util');

//define model
var commentSchema = mongoose.Schema({
    //text of comment
    text: String,
    //each comment has an author with is an object made up of the user id and the user's name
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    date_created : {type: Date, default: new Date()}
});

//export the schema under the name Comment
module.exports = mongoose.model("Comment", commentSchema);