var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'), //png图片压缩插件
    spriter = require('gulp-css-spriter'),
    spritesmith = require('gulp.spritesmith');

//引入文件路径配置
var filePath = require("../config.js");

gulp.task('uglify-js', function() {
    return gulp.src(filePath.build + "/js/*.js")
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(filePath.build + "/js/"))

});

gulp.task('uglify-css', function() {
    return gulp.src(filePath.build + "/css/*.css")
        .pipe(cleanCss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(filePath.build + "/css/"))
});

gulp.task('compress-img', function() {
    return gulp.src(filePath.build + "/img/*.{png,jpg,gif}")
        .pipe(imagemin({
            progressive: true, //无损压缩
            use: [pngquant()] //使用pngquant来压缩png图片
        }))
        .pipe(gulp.dest(filePath.build + "/img-min/"))
});

gulp.task('build-task', ['uglify-js', 'uglify-css', 'compress-img']);
