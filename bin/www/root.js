const app = require('../../app.js')
const fs =require('fs')
const crypto = require('crypto')
const { isBuffer } = require('util')
const { use } = require('../../app.js')
const isHttps = process.env.HTTPS

const http =  (function(){
   if(isHttps == "TRUE"){
       return require('https')
   }
   return require('http')
})()
/**
 * Create server
 */

const server = http.createServer(app)
/**
 * handler route
 */
require('../../app/route/root.js')(app)
server.listen(app.get("port"), () => {
    console.log(`Listening port : ${app.get("port")}`);
});

