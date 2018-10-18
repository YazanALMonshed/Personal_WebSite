/* global, Global, function */

// varibles here 

var gulp   = require('gulp'),
    image  = require('gulp-image'),       // Comporss images
    uglify = require('gulp-uglify'),     // Compress JavaScript 
    clean  = require('gulp-clean-css'), // Compress Css
    rename = require('gulp-rename');    // Rename Files compress from style.css To style.min.css Like That 
   
// function Default

gulp.task('gulp', function() {
    
    console.log('here gulp');
});

// End Function Default    
 
//Function Min 
 
// Function Minfy 
gulp.task('min', function() {
    
    gulp.src('img/*')
    .pipe(image())
    .pipe(gulp.dest('img/min'));
    
});

//End Function Minify


// End Function Min 
gulp.task('compress', function() {
    gulp.src('js/*')
    .pipe(uglify())
    .pipe(rename({suffix:'.min'})) // Rename Name Js 
    .pipe(gulp.dest('js/minify'));
});

gulp.task('clean', function () {
    
    gulp.src('css/*.css')
    .pipe(clean())
    .pipe(rename({suffix:'.min'}))  // Rename Name Css 
    .pipe(gulp.dest('css/css-min'));
});



// Call here 

gulp.task('default',['min','compress','clean']);


// End Call      