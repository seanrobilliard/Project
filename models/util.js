//connect to the db and set mongoose accordinly
var mongoose = require('mongoose');
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
var connection =
mongoose.connect('mongodb://mongodb5480gd:li6pek@danu7:8717/mongodb5480', { useNewUrlParser: true });

exports.connection = connection;
