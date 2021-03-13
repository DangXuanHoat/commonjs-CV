const express = require('express')
const routers =  express.Router()
const cors = require('cors')
routers.get('/page',(req,res)=>{
    return res.render('layouts/page')
})
module.exports = routers