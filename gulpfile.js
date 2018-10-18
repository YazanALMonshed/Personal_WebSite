var gulp = require('gulp'),
    image= require('gulp-image'); 



// function Default

gulp.task('gulp', function() {
    
    console.log('here gulp');
});

//Function Min 
 
gulp.task('min', function() {
    
    gulp.src('img/*')
    .pipe(image())
    .pipe(gulp.dest('img/min'));
    
});



// call here 

gulp.task('default',['min']);
