var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
    return gulp.src('./src/scss/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./markup/css/'));
});

gulp.task('watch', function(){
    gulp.watch('./src/scss/**/*.scss', ['sass']);
});