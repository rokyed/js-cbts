var gulp = require('gulp');
var watch = require('gulp-watch');
var url = require('url');
var proxy = require('proxy-middleware');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');


function compile(watch) {
    var bundler = watchify(browserify('./src/js-cbts.js', {debug: true}).transform(babel));

   	return bundler.bundle()
	.on('error', function(err) {
        console.error(err);
        this.emit('end');
    })
	.pipe(source('js-cbts.js'))
	// .pipe(buffer()).pipe(sourcemaps.init({loadMaps: true}))
	// .pipe(sourcemaps.write('./')).on('error', console.log)
	.pipe(gulp.dest('./dist')).on('error', console.log);
}

function taskWatch(which) {
    switch(which) {
        case "js":
            compile(true).pipe(browserSync.stream());
            break;
        default:
            compile(true).pipe(browserSync.stream());
    }
};

gulp.task('build', function() {
    compile();
});

gulp.task('watch', function() {
	// example
	var proxyOptions = url.parse('http://localhost:4000/server/app');
	proxyOptions.route = '/server/app';

	browserSync.init({
		server: {
			baseDir: ['./'],
			middleware: [proxy(proxyOptions)]
		}
	});

	watch('./src/*.js', function() {
        taskWatch('js');
	});

    taskWatch();
});

gulp.task('default', ['watch']);
