var gulp=require('gulp');
var path=require('path');
//加载task任务
var requireDir = require('require-dir');

//加载所有gulp任务
requireDir('./gulp_task');

//压缩资源
gulp.task('build', ['build-task']);

//本地服务+自动刷新
gulp.task('watch', ['watch-task']);

//雪碧图合成
gulp.task('sprite', ['sprite-task']);

