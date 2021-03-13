const express = require('express')
const routers =  express.Router()
routers.get('/auth',(req,res)=>{
    return res.render('page/login-page',{layout:'layouts/auth-layout'})
})
routers.get('/auth/login',(req,res)=>{
    return res.render('page/login-page',{layout:'layouts/auth-layout'})
})
routers.get('/auth/resgister/a/b/c',(req,res)=>{
    return res.render('page/login-page',{layout:'layouts/auth-layout'})
})
module.exports = routers