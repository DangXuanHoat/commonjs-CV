'use strict'
const express =  require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require("body-parser")
const dotenv = require('dotenv')
const session = require('express-session') 
const expressLayouts  = require('express-ejs-layouts')
const app = express()

/**
 * Config
 */
dotenv.config()
const PORT = process.env.PORT || 3000
app.use(morgan("dev"))
app.set('view engine', 'ejs');
app.set('views',__dirname + '/resources/views')
app.use(express.static(__dirname+'/public'))
app.use(expressLayouts)
app.set('layout', 'layouts/page-layout');
/***
 * Session config
 */
app.use(session({
    resave: true, 
    saveUninitialized: true, 
    secret: 'bluedragon1998', 
    cookie: { maxAge: 60000 }}));
/**
 * define
 */

/**
 * Set config
 */

app.set('port', PORT)
app.use(cors())
//set request
app.use(express.json())
// for parsing application/json
app.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// for parsing multipart/form-data
// ======================================== //

module.exports = app