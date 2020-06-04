const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

/*
 * We've enabled MiniCssExtractPlugin for you. This allows your app to
 * use css modules that will be moved into a separate CSS file instead of inside
 * one of your module entries!
 *
 * https://github.com/webpack-contrib/mini-css-extract-plugin
 *
 */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/*
 * We've enabled TerserPlugin for you! This minifies your app
 * in order to load faster and run less javascript.
 *
 * https://github.com/webpack-contrib/terser-webpack-plugin
 *
 */

const TerserPlugin = require('terser-webpack-plugin');

const workboxPlugin = require('workbox-webpack-plugin');

module.exports = {
	mode: 'development',
	output: {
		// options related to how webpack emits results
		path: path.resolve(__dirname, "../backend/static/dist"), // string
		// the target directory for all output files
		// must be an absolute path (use the Node.js path module)
		filename: "main.js", // string
		// the filename template for entry chunks
		publicPath: "/assets/", // string
		// the url to the output directory resolved relative to the HTML page
		library: "MyLibrary", // string,
		// the name of the exported library
		libraryTarget: "umd", // universal module definition
		// the type of the exported library
		/* Advanced output configuration (click to show) */
		/* Expert output configuration (on own risk) */
	},
	watch: true,
	plugins: [
		new webpack.ProgressPlugin(),
		new MiniCssExtractPlugin({ filename: 'main.[chunkhash].css' }),
		new workboxPlugin.GenerateSW({
			swDest: 'sw.js',
			clientsClaim: true,
			skipWaiting: false
		}),
		new HtmlWebpackPlugin()
	],

	module: {
		rules: [
			{
				test: /.(js|jsx)$/,
				include: [],
				loader: 'babel-loader'
			},
			{
				test: /\.svg$/,
				loader: 'svg-inline-loader'
			},
			{
				test: /.(scss|css)$/,

				use: [
					{
						loader: MiniCssExtractPlugin.loader
					},
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',

						options: {
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',

						options: {
							sourceMap: true
						}
					}
				]
			}
		]
	},

	optimization: {
		minimizer: [new TerserPlugin()],

		splitChunks: {
			cacheGroups: {
				vendors: {
					priority: -10,
					test: /[\\/]node_modules[\\/]/
				}
			},

			chunks: 'async',
			minChunks: 1,
			minSize: 30000,
			name: true
		}
	}
};
