var gulp = require('gulp');
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

var clean = require('gulp-clean');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var plumber = require('gulp-plumber'); // I have a question: how to use plumber to handle babel error

var useref = require('gulp-useref');


//handler babel error https://gist.github.com/Fishrock123/8ea81dad3197c2f84366
//This url gives us a solution, but we need change `this.end()` to `this.emit('end')`
//you can refer to use-gulp project's  https://csspod.com/error-management-in-gulp/

var gutil = require('gulp-util');
var chalk = require('chalk');

function map_error(err) {
    if (err.fileName) {
        // regular error
        gutil.log(chalk.red(err.name)
            + ': '
            + chalk.yellow(err.fileName.replace(__dirname + '/src/js/', ''))
            + ': '
            + 'Line '
            + chalk.magenta(err.lineNumber)
            + ' & '
            + 'Column '
            + chalk.magenta(err.columnNumber || err.column)
            + ': '
            + chalk.blue(err.description))
    } else {
        // browserify error..
        gutil.log(chalk.red(err.name)
            + ': '
            + chalk.yellow(err.message))
    }

    this.emit('end');
}

gulp.task("copyIndex", function () {

    gulp.src("src/index.html")
        .pipe(useref())
        .pipe(gulp.dest("./build"))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('browserSync', function () {
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
    }, function () {
        runSequence('babelIt', 'copyIndex', function () {
            browserSync.reload();
        });
    });

});

// gulp.task("watchFiles", function(){
//    gulp.watch('src/index.html', ['copyIndex']);
//    gulp.watch('src/**/*.js', ['babelIt','copyIndex']);
// });

//upgrade the babelify to new

gulp.task("babelIt", function () {
    browserify({
        entries: 'src/index.js',
        debug: true
    })
        .transform(babelify, {presets: ["es2015"]}) //babel 6.0  https://github.com/babel/babelify
        .bundle().on("error", map_error)
        .pipe(source('index.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task("clean", function () {
    gulp.src("./build", {read: false})
        .pipe(clean());
});

// gulp.task("default", ["copyIndex", "babelIt" ,"browserSync", "watchFiles"]);
gulp.task("default", ["copyIndex", "babelIt", "browserSync"]);
