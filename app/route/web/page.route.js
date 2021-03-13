const express = require('express')
const routers =  express.Router()
routers.get('/page',(req,res)=>{
    return res.render('page/landing-page')
})
module.exports = routers