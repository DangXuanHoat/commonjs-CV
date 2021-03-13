const express = require('express')
const routers =  express.Router()
const authWebController = require('./../../controler/auth.controller')
routers.get('/auth',authWebController.index)
routers.get('/auth/login',authWebController.index)
routers.get('/auth/resgister/a/b/c',(req,res)=>{
    return res.render('page/login-page',{layout:'layouts/auth-layout'})
})
module.exports = routers