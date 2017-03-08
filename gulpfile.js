var gulp=require('gulp'),
   uglify = require('gulp-uglify'),
   browserSync= require('browser-sync'),
   minifycss = require('gulp-clean-css'),
   babel=require('gulp-babel'),
   webpack=require("gulp-webpack"),
   concat=require('gulp-concat'),
   autoprefixer = require("gulp-autoprefixer");

gulp.task('scripts', function() {
  return gulp.src(["./src/index.js","./src/static/js/*.js"])
    //.pipe(webpack(require('./webpack.config.js')))
    //也可以使用webpack对文件进行处理，通过webpack中的babel-loader跟output就可以省去下面的所有处理流程
    .pipe(babel())
    //gulp-babel只是把es6转为commonjs方式，(import=>require), 模块化仍然无法被浏览器识别
    //引入webpack可以，但是实时打包会比较慢（待调研）
    .pipe(concat('index.min.js'))
    .pipe(gulp.dest('build/js/'));

});

gulp.task('css', function() {
  return gulp.src("./src/static/css/*.css")
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(minifycss())
    .pipe(concat('index.min.css'))
    .pipe(gulp.dest('build/css/'));
});
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: ''
    },
  })
});

gulp.task('default', function() {
    gulp.start('scripts');
    gulp.start('css');
});

gulp.task('watch', ['browserSync'], function (){
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('./view/*.html', browserSync.reload);
  gulp.watch('./src/static/**/*.js', browserSync.reload);
  gulp.watch('./src/static/css/*.css', browserSync.reload);
});