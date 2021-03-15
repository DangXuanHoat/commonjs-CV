const {resolve} = require('path');
const {readdir} = require('fs').promises
export function getFiles (dir, files_,prefix_length) {
    files_ = files_ || [];
    var files = fs.readdirSync(dir);
    for (var i in files){
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name, files_,prefix_length);
        } else {
            files_.push(`.${name.substr(prefix_length)}`);
        }
    }
    return files_;
  }