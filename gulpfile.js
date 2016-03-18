var gulp = require('gulp');
var path = require('path');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
    return browserify({entries: './app/index.js', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react', "stage-0"]})
        .transform({
          global: true,
          sourcemap: false,
          ignore: [
            '**/node_modules/*',
          ]
        }, 'uglifyify')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('public'))
});

gulp.task('watch:js', function() {
  gulp.watch(['app/**/*.js', 'app/**/*.jsx'], ['build'])
});

gulp.task('default', ['build','watch:js']);