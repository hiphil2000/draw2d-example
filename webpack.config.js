const {resolve} = require("path");
const {ProvidePlugin} = require("webpack");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: resolve(__dirname, "dist"),
		publicPath: "dist/"
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				use: [
					{
						loader: "file-loader",
						options:{
						  name:'[name].[ext]',
						  outputPath:'assets/images/'
						}
					}
				]
			}
		]
	},
	plugins: [
		new ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		})
	]
}