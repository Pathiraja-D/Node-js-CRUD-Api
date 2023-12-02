const ObjectId = require('mongoose').Types.ObjectId;

const validateDbId = (req,res,next)=>{
    if(ObjectId.isValid(req.params.id)===false)
        res.status(400).json({
        error:`Given ObjectId (${req.params.id}) is not a valid ObjectId`})
    else{
        next();
    }
}

const raiseRecord404Error = (req, res)=>{
    res.status(404).json({
        error: 'No record found with given id :' + req.params.id
    })
}

module.exports = {validateDbId,raiseRecord404Error,}