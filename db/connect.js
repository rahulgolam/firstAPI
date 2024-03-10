const mongoose = require('mongoose');




const connectDB = (uri) => {

    console.log('DB Activated');

    return mongoose.connect(uri);
}

module.exports = connectDB;