const path = require('path');
 const dirname = process.cwd();
 
module.exports = {
    file_path:  path.join(dirname).replace(/webpack$/, ''), 
    webpack_dir: this.file_path + 'webpack/',
    dist_dir : this.file_path +  'dist',
    MODE: 'development', 

   
}

 