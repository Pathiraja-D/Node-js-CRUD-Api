const mongoose = require('mongoose');

module.exports=mongoose.model('User', {
    username: {
        type: String,
        require: true,
        unique: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
},'Users')