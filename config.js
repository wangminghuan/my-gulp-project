//项目路径设置
var path=require('path');
var __path={
	entry: path.resolve(__dirname,"app/index.js"),//入口js
	build: path.resolve(__dirname,"build"),//构建目录
	HTMLPath:path.resolve(__dirname,"view"),//html目录
	StaticPath:path.resolve(__dirname,"app/static/"),//所有资源目录
	JSPath:path.resolve(__dirname,"app/static/js"),//js目录
	CSSPath:path.resolve(__dirname,"app/static/css"),//css目录
	IMGPath:path.resolve(__dirname,"app/static/img"),//image目录
};
module.exports=__path;
