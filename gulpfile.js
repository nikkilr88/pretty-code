const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', () => {
    gulp.src('public/css/styles.css')
    .pipe(autoprefixer({
        browsers: ['last 24 versions']
    }))
    .pipe(gulp.dest('public/dist'));
});

gulp.task('watchstyles', () => {
    gulp.watch('public/css/styles.css', ['styles']);
});