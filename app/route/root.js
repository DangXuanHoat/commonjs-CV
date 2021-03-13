const fs = require('fs');
module.exports = app =>{
    fs.readdir('./app/route/api', (err, files) => {
        files.forEach(file => {
          app.use('api/',require('./api/'+file)) 
        });
      });
      fs.readdir('./app/route/web/', (err, files) => {
          files.forEach(file => {
            app.use('/',require('./web/'+file)) 
          });
      });
}
