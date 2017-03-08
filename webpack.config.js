//var webpack=require("gulp-webpack");
var path=require("path");

var ROOT_PATH = path.resolve(__dirname);
/*var APP_PATH = path.resolve(ROOT_PATH, 'src');*/
var BUILD_PATH = path.resolve(ROOT_PATH, 'build/js/');

module.exports={
	/*entry:[ //利用中间件实现热更新，reload=true配置如果热更新失败，强制刷新页面
	 APP_PATH+"/index.js"
	],*/
	output:{
		path: BUILD_PATH,
	    publicPath: '/',
	    filename: 'index.min.js'
	},
	module:{
		loaders:[
		 	{
			 	 test: /\.js[x]?$/,
		         exclude: /node_modules/,
		         loader: 'babel-loader' 
	    	}
		]
	}
}


