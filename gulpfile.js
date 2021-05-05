const gulp = require('gulp'),
  concat = require('gulp-concat'),
  clean = require('gulp-clean'),
  htmlReplace = require('gulp-html-replace'),
  uglify = require('gulp-uglify'),
  usemin = require('gulp-usemin'),
  cssmin = require('gulp-cssmin'),
  htmlmin = require('gulp-htmlmin');

gulp.task('clean', function () {
  console.log('clean');
  return gulp.src('dist')
    .pipe(clean());
});

gulp.task('copy', gulp.series('clean', function () {
  console.log('copy');
  return gulp.src('src/**/*')
    .pipe(gulp.dest('dist'));
}));

gulp.task('usemin', function () {
  return gulp.src('dist/**/*.html')
    .pipe(usemin({
      css: [cssmin()],
      critical: [cssmin()],
      js: [uglify()]
    }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('copy', 'usemin', function (done) {
  done();
}));