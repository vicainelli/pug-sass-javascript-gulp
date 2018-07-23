const gulp = require("gulp");
const concat = require("gulp-concat");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const pug = require('gulp-pug');

// SCRIPTS
gulp.task('scripts', () => {
  return gulp.src(['./src/js/app.js', './src/js/components/*.js'])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('./dist/js'));
});

// STYLES
gulp.task('styles', () => {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

// VIEWS
gulp.task('views', () => {
  return gulp.src('./src/views/**/*.pug')
  .pipe(plumber())
  .pipe(pug({}))
  .pipe(gulp.dest('./dist/'))
});

// WATCH
gulp.task('watch', function () {
  gulp.watch("./src/views/**/*.pug", ["views"]);
  gulp.watch("./src/sass/*.scss", ["styles"]);
});

// BUILD
gulp.task('build', ['views', 'styles']);