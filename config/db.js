const mongoose = require('mongoose');

const dbUri = 'mongodb+srv://pathirajadnew:Password%40123@mydatabases.vo4eo4v.mongodb.net/NewAppDb?retryWrites=true&w=majority'


module.exports = () => {
    return mongoose.connect(dbUri);
}