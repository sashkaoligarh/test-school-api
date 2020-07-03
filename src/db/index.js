const mongoose = require('mongoose'),
    path = require('path'),
    config = require(path.resolve('src/config/config'));


exports.init = (cb) => {
    mongoose.connect(config.mongoUrl, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }, (err) => {
        mongoose.Promise = global.Promise;
        cb();
    }).then(console.log('Connected to db!'));
}