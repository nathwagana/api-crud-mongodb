const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/product', {useMongoClient: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;