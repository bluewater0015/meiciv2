//webpack.config.js
var webpack = require("webpack");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
module.exports = {
	entry: [
		"webpack-dev-server/client?http://localhost:8080/",
		"./src/js/index.js",
		"./src/js/tab.js"
	],
	output: {
		path: __dirname + "/dist/",
		filename: "bundle.js"
	},
	devServer:{
		historyApiFallback:true,
		hot:true,
		inline:true,
		//progress:true,//报错无法识别，删除后也能正常刷新
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.less$/,
				loader: "style-loader!css-loader!less-loader"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader"
				// query: {
				// 	"presets": ["es2015"]
				// }
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
    	new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
    	new webpack.ProvidePlugin({
	      $:"jquery",
	      jQuery:"jquery",
	      "window.jQuery":"jquery"
	    })
  	]
}