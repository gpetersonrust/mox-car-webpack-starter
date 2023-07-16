const gulp = require('gulp');
const browserSync = require('browser-sync');
const { file_path } = require('./library/constants/global');
const find_files_recursively = require('./library/utilities/find_files_recursively');
let files = find_files_recursively(file_path, [], 'node_modules|dist|.git', '.php$|.html$|.js$|.scss$', []);
let proxy = 'http://cornerstone.local/';
function watch(done) {
  browserSync.init({
    proxy,
    port: 800,
  });

  gulp.watch(files, function() {
    browserSync.reload();
  });

  done();
}

gulp.task('watch', watch);

exports.default = gulp.series(watch);