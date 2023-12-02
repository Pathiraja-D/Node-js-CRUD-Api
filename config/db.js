const mongoose = require('mongoose');
const dbUri = 'mongodb+srv://pathiraja:Password%40123@traveljournal.bqhxkrh.mongodb.net/Travel_Journal?retryWrites=true&w=majority';

mongoose.set('strictQuery',false);

module.exports = () => {
    return mongoose.connect(dbUri,{useNewUrlParser:true,useUnifiedTopology:true})
}