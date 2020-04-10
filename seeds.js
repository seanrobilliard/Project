//set up the database
var mongoose = require("mongoose");
var Venue = require("./models/venues");

var data = [
    {
        name: "Hole in the Wall",
        image: "https://galwaybayfm.ie/wp-content/uploads/2019/06/cropped-hole-in-the-wall.jpg",
        pictures: [
                    "https://scontent.fdub5-1.fna.fbcdn.net/v/t1.0-9/s960x960/70929359_536740157161683_3436873443469950976_o.jpg?_nc_cat=104&_nc_sid=110474&_nc_ohc=r8af4M8m0jAAX9LYxt-&_nc_ht=scontent.fdub5-1.fna&_nc_tp=7&oh=29939993d7a8d8e331dd6e336966aa99&oe=5EAF4462",
                    "https://scontent.fdub5-1.fna.fbcdn.net/v/t1.0-9/p960x960/83916708_641992256636472_1485377614272004096_o.jpg?_nc_cat=111&_nc_sid=dd9801&_nc_ohc=Li08_EnpQzIAX9G0XWM&_nc_ht=scontent.fdub5-1.fna&_nc_tp=6&oh=b74fd7deb1a1023d97d0ca32bbf582d9&oe=5EAFF239"
        ],
        type: "Pub"
    },
    {
        name: "Barr an Chaladh",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/06/f2/f7/7c/barr-an-chaladgh.jpg",
        type: "Pub"
    },
    {
        name: "The Front door",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/09/19/92/b0/the-front-door-sonny.jpg",
        type: "Pub"
    },
    {
        name: "Roisin Dubh",
        image: "https://pbs.twimg.com/profile_images/843844533930532864/8EIQ8Gy7_400x400.jpg",
        type: "Pub"
    }
]

function seedDB(){
    //Remove all venues from database
    
    Venue.deleteMany({}, function(err){
        if(err){
            console.log(err)
        }
        console.log("removed venues")
    })

    //add databases again
    data.forEach(function(seed){
        Venue.create(seed, function(err, venue){
            if(err){
                console.log(err)
            }
            else{
                console.log("added venue")
            }
        })
    })
}

//export the function seedDB
module.exports = seedDB