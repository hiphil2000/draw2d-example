const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ProvidePlugin} = require("webpack");

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
	entry: "./src/index.js",
	mode: 'development',
	devtool: 'inline-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
	module: {
		rules: [
			{ test: /\.ts?$/, loader: 'ts-loader' },
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
    devServer: {
    },
	plugins: [
		new ProvidePlugin({
			$: "jquery",
			jQuery: "jquery",
			"window.jQuery": "jquery"
		}),
		new HtmlWebpackPlugin({
			template: "index.html",
		}),
	]
}