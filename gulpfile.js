const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const pug = require('gulp-pug');

// SASS
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});



// PUG