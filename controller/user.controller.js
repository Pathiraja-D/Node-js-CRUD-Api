const express = require('express');
const router = express.Router();


const User = require('../model/user.model');
const {generateCrudMethods} = require('../services');
const userCrud = generateCrudMethods(User)
const {validateDbId,raiseRecord404Error} = require('../middleware');


router.get('/',validateDbId,(req,res)=>{
    userCrud.getAll().then(data => res.send(data)).catch(err=>console.log(err))
})

router.get('/:id',(req,res)=>{
            userCrud.findById(req.params.id).
            then(data => {
            if(data)
            {
                res.send(data)
            }
            else
            {
                raiseRecord404Error(req, res)
        }
    })
    .catch(err=>console.log(err))
    })

router.post('/',(req,res)=>{
    userCrud.create(req.body).then(data => res.status(201).json(data)).catch(err=>console.log(err))
});

router.put('/:id',validateDbId,(req,res)=>{
    userCrud.update(req.params.id,req.body).then(data=>{
        if(data) res.send(data)
        else raiseRecord404Error(req, res)
    })
})

router.delete('/:id',validateDbId,(req,res)=>{
    userCrud.delete(req.params.id).then(data=>{
        if(data) res.send(data)
        else raiseRecord404Error(req, res)
    })
})

module.exports = router;