const mongoose = require('mongoose');

module.exports = mongoose.model('User',{
    userName:{type:"string",required:"true"},
    email:{type:"string",required:"true",},
},'Users')