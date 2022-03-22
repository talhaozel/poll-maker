var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
  return gulp.src("./scss/main.scss")
    .pipe(sass())
    .pipe(autoprefixer({
      // browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});
// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function () {
  browserSync.init({
    server: "./"
  });
  gulp.watch("./scss/main.scss", gulp.series('sass'));
  gulp.watch("./*.html").on('change', browserSync.reload);
  gulp.watch("./js/*.js").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));
