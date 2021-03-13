const fs = require('fs');
module.exports = app =>{
    fs.readdir('./app/route/api/', (err, files) => {
        files.forEach(file => {
          if(file.split('.').pop() == "js"){
            app.use('api/',require('./api/'+file))
          }
           
        });
      });
      fs.readdir('./app/route/web/', (err, files) => {
          files.forEach(file => {
            if(file.split('.').pop() == "js"){
              app.use('/',require('./web/'+file)) 
            }
          });
      });
}
function mapRoutes (path,app,prefix="") {
  fs.readdir(path, (err, files) => {
    files.forEach(file => {
      if(file.split('.').pop() == "js"){
        app.use('api/'+prefix,require('./api/'+file))
      }
      if(fs.lstatSync(file).isDirectory()){
        mapRoutes(path+"/"+file,app,file)
      }
       
    });
  });
}