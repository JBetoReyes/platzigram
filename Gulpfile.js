var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

// compiles index.scss
gulp.task('styles',function(){
    gulp
        .src('index.scss')
        .pipe(sass())
        .pipe(rename('app.css'))
        .pipe(gulp.dest('./public'));
});

gulp.task('assets',function(){
    gulp
        .src('assets/*') //glob
        .pipe(gulp.dest('public'));
});

gulp.task('scripts',function(){
        browserify('./src/index.js')
        .transform(babel)
        .bundle()
        .pipe(source('index.js')) //help us to pipe bundle to gulp
        .pipe(rename('app.js'))
        .pipe(gulp.dest('public'));
    }
);

gulp.task('default',['styles','assets','scripts']);


