var gulp = require('gulp'),
    babel = require('gulp-babel'),
    //webpack=require("gulp-webpack"),
    rollup = require("gulp-rollup"),
    concat = require('gulp-concat'),
    rename = require("gulp-rename"),
    inject = require('gulp-inject'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    autoprefixer = require("gulp-autoprefixer");

var filePath = require("../config.js");

gulp.task('optimize-js', function() {
    return gulp.src([filePath.entry, filePath.JSPath + "/*.js"])
        //.pipe(webpack(require('./webpack.config.js')))
        //也可以使用webpack对文件进行处理，通过webpack中的babel-loader跟output就可以省去下面的所有处理流程
        //选用rollup插件处理模块化
        .pipe(rollup({
            entry: filePath.entry,
            format: 'iife'
        }))
        .pipe(babel())
        .pipe(gulp.dest(filePath.build + '/js'))

});

gulp.task('optimize-css', function() {
    return gulp.src(filePath.CSSPath + "/*.css")
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concat('index.css'))
        .pipe(gulp.dest(filePath.build + '/css'))
        .pipe(reload({ stream: true }));
});

//如果模板路径变动，请在此处修改 入口&&出口
gulp.task('inject-js-css',['optimize-js','optimize-css','compress-img'], function() {
    var target = gulp.src('index.html'); //模板入口资源
    // It's not necessary to read the files (will speed up things), we're only after their paths: 
    var sources = gulp.src([filePath.build + '/js/*.js', filePath.build + '/css/*.css'], { read: false });
    return target.pipe(inject(sources))
        .pipe(gulp.dest('./')); //模版输出路径
});


// 创建一个任务确保JS任务完成之前能够继续响应
// 浏览器重载
gulp.task('watch-js', ['optimize-js'], browserSync.reload);

// 静态服务器 + 监听 scss/html 文件
gulp.task('watch-build-task', ['inject-js-css'], function() {
    browserSync.init({
        port: 8000,
        server: {
            baseDir: ''
        }
    });
    gulp.watch([filePath.entry, filePath.JSPath + '/*.js'], ['watch-js']);
    gulp.watch(filePath.CSSPath + '/*.css', ['optimize-css']);
    gulp.watch(['*.html', filePath.HTMLPath + '/*.html']).on('change', reload);
});