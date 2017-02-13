const del = require('del');
const gulp = require('gulp');
const typescript = require('gulp-typescript');
const flatten = require('gulp-flatten');
const sass = require('gulp-sass');
const tsconfig = require('tsconfig-glob');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const systemjsBuilder = require('systemjs-builder');
const concat = require('gulp-concat');
const merge = require('merge-stream');
const browserSync = require('browser-sync');
const url = require('url');
const proxy = require('proxy-middleware');
const cleanCSS = require('gulp-clean-css');
const seq = require('run-sequence');
const plumber = require('gulp-plumber');
const colors = require('colors');
const conf = require('./gulpfile.config.json');
const tsConfig = require(conf.tsconfig);

// clean the contents of the distribution directory
gulp.task('clean', function () {
  return del(conf.target + "/**/*");
});

//cleans the distribution directory after bundling phase for the release
gulp.task('clean:release', function () {
  return del([
    conf.target + '/app',
    conf.target + '/lib',
    conf.target + '/app.*.js*',
    conf.target + '/main.js*',
    conf.target + '/*.js.map'
  ]);
});

//creates the tsconfig file and keeps it up to date
gulp.task('prep:tsConfig', function () {
  return tsconfig({configPath: ".", indent: 2});
});

// copy dependencies
gulp.task('prep:libs', function () {
  var pipes = [];
  conf.libs.forEach(function (lib) {
    pipes.push(gulp.src([lib.src])
      .pipe(gulp.dest(lib.target)));
  });
  pipes.push(gulp.src(conf.vendor.src)
    .pipe(concat('vendors.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(conf.vendor.target)));

  return merge(pipes);
});

//compiles the typescript
gulp.task('compile:ts', function () {
  var tsProject = typescript.createProject(conf.tsconfig);
  var tsResult = tsProject.src()
    .pipe(sourcemaps.init())
    .pipe(tsProject(typescript.reporter.defaultReporter()));
  return tsResult.js
    .pipe(plumber({
      errorHandler: function (err) {
        console.error('>>> [tsc] Typescript compilation failed'.bold.green);
        this.emit('end');
      }
    }))
    .pipe(sourcemaps.write('.'))
    //.pipe(flatten({subPath: [1]}))
    .pipe(gulp.dest(conf.target));
});

// Compile SCSS to CSS, concatenate, and minify
gulp.task('compile:sass', function () {
  var styles = [];
  conf.styles.forEach(function (style) {
    var g = gulp.src(style.src)
      .pipe(sourcemaps.init({largeFile: true}))
      .pipe(plumber({
        errorHandler: function (err) {
          console.error('>>> [sass] Sass style compilation failed'.bold.green);
          console.error(err.message);
          this.emit('end');
        }
      }))
      .pipe(sass().on('error', sass.logError));
    if (style.file) {
      g.pipe(concat(style.file));
    } else {
      g.pipe(flatten({subPath: [0, 0]}));
    }
    g.pipe(cleanCSS())
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(style.target));
    styles.push(g);
  });

  return styles;
});

//bundle js files
gulp.task('bundle:js', function () {
  var sysJSBuilder = new systemjsBuilder(conf.target, 'src/system.config.js');
  return sysJSBuilder.buildStatic('main.js', conf.target + '/main.min.js');
});

// Minify JS bundle
gulp.task('post:minify:js', function () {
  return gulp
    .src(conf.target + '/main.min.js')
    .pipe(uglify())
    .pipe(gulp.dest(conf.target));
});

// copy static assets - i.e. non TypeScript compiled source
gulp.task('post:copy:assets', function () {
  var pipes = [];
  conf.assets.forEach(function (asset) {
    pipes.push(
      gulp.src(asset.src, {base: './'})
        .pipe(flatten({subPath: asset.flatten}))
        .pipe(gulp.dest(asset.target))
    );
  });
  return pipes;
});


//recompiles typscript and javascript sources for dev environment
gulp.task('dev:compile:js', function (callback) {
  seq('prep:tsConfig', 'compile:ts', 'bundle:js', callback);
});

// starts browsersync and watches scss, html and ts changes
gulp.task('dev:serve', function () {

  var proxyOptions = url.parse(conf.proxy.url);
  proxyOptions.route = conf.proxy.route;

  browserSync({
    server: {
      baseDir: conf.target,
      middleware: [proxy(proxyOptions)]
    }
  });

  gulp.watch(['src/**/*.html', 'assets/**/*'], ['dev:reload:html']);
  gulp.watch(['src/**/*.scss'], ['dev:reload:css']);
  gulp.watch(['src/**/*.ts'], ['dev:reload:js']);
});
//on ts changes
gulp.task('dev:reload:js', ['dev:compile:js'], browserSync.reload);
//on css changes
gulp.task('dev:reload:css', ['compile:sass'], browserSync.reload);
//on html changes
gulp.task('dev:reload:html', ['post:copy:assets'], browserSync.reload);


// Run browsersync for development
gulp.task('serve', function (callback) {
  return seq('build', 'dev:serve', callback);
});
// build the page without minifying the java script
gulp.task('build', function (callback) {
  seq('clean', 'prep:tsConfig', 'prep:libs', 'compile:ts', 'bundle:js', ['compile:sass', 'post:copy:assets'], callback);
});
// build the page with minified java script
gulp.task('release', function (callback) {
  seq('clean', 'prep:tsConfig', 'prep:libs', 'compile:ts', 'bundle:js', 'post:minify:js', ['compile:sass', 'post:copy:assets'], 'clean:release', callback);
});
