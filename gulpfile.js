const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const pug = require('gulp-pug');

// STYLES
gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

// VIEWS
gulp.task('views', function buildHTML() {
  return gulp.src('./src/views/**/*.pug')
  .pipe(plumber())
  .pipe(pug({}))
  .pipe(gulp.dest('./dist/'))
});