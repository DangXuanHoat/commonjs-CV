const mongoose = require('mongoose')
const uri = process.env.DB_URI || "mongodb+srv://dbDangHoat:MiChau98@dbmyproject.hmbhh.mongodb.net/dbCVProject?retryWrites=true&w=majority"
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(uri,options)
let db = mongoose.connection;
db.on('error',(err)=>{
    console.log(err)
})
db.once('open',()=>{
    console.log(`Open connect database ${process.env.DB_USERNAME} at : ${new Date(Date.now()).toUTCString()}`)
})