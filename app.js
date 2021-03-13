'use strict'
const express =  require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require("body-parser")
const dotenv = require('dotenv')
const path = require('path')
const { use } = require('chai')
const app = express()

/**
 * Config
 */
dotenv.config()
const PORT = process.env.PORT || 3000
app.use(morgan("dev"))
app.set('view engine', 'ejs');
app.set('views',__dirname + '/resources/views')
// app.set('layout', 'layouts');
// app.use(ejs_layouts)
app.use(express.static('public'))
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