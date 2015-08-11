var gulp = require('gulp');
var browserSync = require('browser-sync');

var clean = require('gulp-clean');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task("copyIndex", function(){
  gulp.src("src/index.html")
   .pipe(gulp.dest("./build"))
   .pipe(browserSync.reload({stream: true}));
});

gulp.task('browserSync', function(){
    browserSync({
       server: {
          baseDir: './build'
       } 
    });
});

gulp.task("watchFiles", function(){
   gulp.watch('src/index.html', ['copyIndex']);
   gulp.watch('src/**/*.js', ['babelIt','copyIndex']);
});

gulp.task("babelIt", function(){
    browserify({
      entries: 'src/index.js',
      debug: true
    })
    .transform(babelify)
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest('./build'));
});

gulp.task("clean", function(){
    gulp.src("./build",{read: false})
     .pipe(clean());
});

gulp.task("default", ["copyIndex", "babelIt" ,"browserSync", "watchFiles"]);
