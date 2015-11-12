var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

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
       port: 3000,
       server: {
          baseDir: './build'
       }, 
       ghostMode: {
         clicks: true,
         location: true,
         forms: true,
         scroll: true
       },
       injectChanges: true,
       logFileChanges: true,
       logLevel: 'info',
       logPrefix: 'es6-practice',
       notify: true,
       reloadDelay: 1000
    });

    gulp.watch(['src/index.html', 'src/**/*.js'], {
        debounceDelay: 400
    }, function() {
        runSequence('babelIt', 'copyIndex', function(){
          browserSync.reload();
        });
    });

});

// gulp.task("watchFiles", function(){
//    gulp.watch('src/index.html', ['copyIndex']);
//    gulp.watch('src/**/*.js', ['babelIt','copyIndex']);
// });

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

// gulp.task("default", ["copyIndex", "babelIt" ,"browserSync", "watchFiles"]);
gulp.task("default", ["copyIndex", "babelIt" ,"browserSync"]);
