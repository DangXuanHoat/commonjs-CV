const fs = require('fs');
module.exports = app =>{
    
    mapRoutes('./app/route/web',app,'web')
    mapRoutes('./app/route/api',app,'api')
    
    
}
function mapRoutes (path,app,prefix="") {

  fs.readdir(path, (err, files) => {
    files.forEach(file => {
      if(file.split('.').pop() == "js"){
         app.use('/'+prefix,require('./'+prefix+'/'+file))
        console.log('/'+prefix)
        console.log('./'+prefix+'/'+file)
        
      }else
      {
        mapRoutes(path+"/"+file,app,prefix+"/"+file)
      }
       
    });
  });
}