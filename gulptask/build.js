var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  cleanCss = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  imagemin = require('gulp-imagemin'),
  pngquant = require('imagemin-pngquant'), //png图片压缩插件
  tinypng = require('gulp-tinypng-compress');
//引入文件路径配置
var filePath = require("../config.js");

gulp.task('uglify-js', ['optimize-js'], function() {
  return gulp.src(filePath.build + "/js/*.js")
  .pipe(uglify())//不需要压缩请注释掉本行
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest(filePath.publicPath + "/js/"))

});

gulp.task('uglify-css', ['optimize-sass'], function() {
  return gulp.src(filePath.build + "/css/*.css")
  .pipe(cleanCss())//不需要压缩请注释掉本行
  .pipe(rename({suffix: '.min'}))
  .pipe(gulp.dest(filePath.publicPath + "/css/"))
});

// gulp.task('compress-img', function() {
//   return gulp.src(filePath.IMGPath + "/*")
//   .pipe(imagemin([
//     imagemin.gifsicle({interlaced: true}),
//     imagemin.jpegtran({progressive: true}),
//     imagemin.optipng({optimizationLevel: 1}),
//     imagemin.svgo({plugins: [{removeViewBox: true}]})
// ]))
//   .pipe(gulp.dest(filePath.publicPath + "/img3/"))
// });
gulp.task('compress-img', function() {
  return gulp.src(filePath.IMGPath + "/*")
  .pipe(tinypng({
      key: '0XHvqwY7DaNks2UFbAOR7wh4KLns_hbV',
      sigFile: '',
      log: true
    }))
  .pipe(gulp.dest(filePath.publicPath + "/img/"))
});

gulp.task('build-task', ['uglify-js', 'uglify-css', 'compress-img']);
