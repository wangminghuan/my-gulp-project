var gulp=require('gulp');
var path=require('path');
//加载task任务
var requireDir = require('require-dir');

//加载所有gulp任务
requireDir('./gulp_task');

//压缩资源
gulp.task('build', ['build-task']);

//开启web服务，编译+自动刷新
gulp.task('watch', ['watch-task']);

//开启web服务模式B，监听src原始文件，自动刷新，但不编译
gulp.task('watch-b', ['watch-b-task']);

//雪碧图合成
gulp.task('sprite', ['sprite-task']);

//模拟数据，如果需要请添加mock即可，会开启