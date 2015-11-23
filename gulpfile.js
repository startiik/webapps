/**
 * testing
 */
var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');

/* loading plugins */
var plugins = gulpLoadPlugins();

/* target folder of the test process */
var testFolder = './test';

/* testing */


gulp.task('runTests', function () {
   return gulp.src(testFolder + '/*.js').pipe(plugins.mocha());
});