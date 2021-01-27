/**
 * The Gulpfile is the file that tells the task runner, Gulp, what to do.
 *
 * The file is split up into a series of tasks. The task named 'default' will
 * be executed when the command 'gulp' is run on the command line. The NPM
 * script 'build' (defined in package.json) will run gulp to build the project.
 *
 * Gulp.js: https://gulpjs.com/
 */

const gulp = require("gulp")
const del = require("del")
const postcss = require("gulp-postcss")

/**
 * Removes any previous builds from the distribution directory.
 */
gulp.task('clean', async done => {
  await del("./dist/")
  done()
})

/**
 * Copies legacy pre-built CSS files from older versions of the codebase
 * directly to the distribution directory.
 */
gulp.task('legacy', () => {
  return gulp.src("./legacy/*.css").pipe(gulp.dest("./dist/css/min/"))
})

/**
 * Takes CSS files, minifies them, and outputs them to dist/.
 *
 * This task uses PostCSS, which is a CSS plugin that can be configured to do
 * many different things. PostCSS is configured in postcss.config.js.
 *
 * PostCSS: https://postcss.org/
 * PostCSS plugins: https://www.postcss.parts/
 */
gulp.task('css', () => {
  return gulp
    .src("./src/**/*.css")
    .pipe(postcss())
    .pipe(gulp.dest("./dist/"))
})

/**
 * Copies other files from src/ to dist/, which makes them available for
 * deployment.
 */
gulp.task('files', () => {
  return gulp
    .src(["./src/**/*", "!./src/**/*.css"])
    .pipe(gulp.dest("./dist/"))
})

/**
 * Runs all tasks in order.
 */
gulp.task('default', gulp.series('clean', 'files', 'legacy', 'css'))
