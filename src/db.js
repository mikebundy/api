//require mongoose library
const mongoose = require('mongoose');

module.exports = {
    connect: DB_HOST => {
        //use Mongo driver's updated URL string parser
        mongoose.set('useNewUrlParser', true);
        //Use findOneAndUPdate() in plae of findAndModify()
        mongoose.set('useFindAndModify', false);
        //use createIndex() in place in place of ensureIndex()
        mongoose.set('useCreateIndex', true);
        //use the new server discovery and monitoring engine
        mongoose.set('useUnifiedTopology', true);
        //connect to the db
        mongoose.connect(DB_HOST);
        //log an error if we fail to connect
        mongoose.connection.on('error', err => {
            console.error(err);
            console.log(
                'MongoDB connection error. Please make sure MongoDB is running'
            );
            process.exit();
        });
    },

    close: () => {
        mongoose.connection.close();
    }
};