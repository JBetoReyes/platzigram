var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

function compile(watch){
    var bundle = watchify(browserify('./src/index.js'));

    function rebundle(){
        bundle
            .transform(babel)
            .bundle()
            .on('error', function(err){
                console.log(err);
                this.emit('end');
            })
            .pipe(source('index.js')) //help us to pipe bundle to gulp
            .pipe(rename('app.js'))
            .pipe(gulp.dest('public'));
    }

    if(watch){
        bundle.on('update',function(){ // listen for any change in the files
            console.log('--> Bundling...');
            rebundle();
        })       
    }

    rebundle();
}

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

gulp.task('build',function(){
    return compile();
});

gulp.task('watch',function(){
    return compile(true);
});

gulp.task('default',['styles','assets','build']);


