import gulp from 'gulp'
import gutil from 'gulp-util'
import source from 'vinyl-source-stream'
import browserify from 'browserify'
import watchify from 'watchify'
import babelify from 'babelify'
import notify from 'gulp-notify'
import connect from 'gulp-connect'

const compile = () => {
  const props = {
    entries: 'src/app.js',
    cache: {},
    packageCache: {},
    transform: [babelify],
    debug: true
  }
  const compiler = watching ? watchify(browserify(props)) : browserify(props)
  const recompile = () => {
    const stream = compiler.bundle()
    return stream
            .on('error', notify.onError("Error: <%= error.message %>"))
            .pipe(source('bundle.js'))
            .pipe(gulp.dest('dist'))
  }
  compiler
    .on('update', () => recompile())
    .on('bundle', () => gutil.log('Start bundle'))
    .on('log', (message) => gutil.log('Complete bundle '+message))
  return recompile()
}

let watching = false
gulp.task('enable-watch-mode', () => watching = true)
gulp.task('build', () => compile())
gulp.task('connect', () => connect.server({livereload: true}))
gulp.task('watch', ['connect','enable-watch-mode', 'build'])
