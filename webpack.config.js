const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const sass = require('node-sass');

/**
 * This handy function converts JS values to Sass values,
 * such as an JSON object to a Sass map, making it possible
 * to use the values from our JS in our Sass
 */
const sassUtils = require('node-sass-utils')(sass);

const sassVars = require(__dirname + '/theme.config.js');

// Convert js strings to dimensions
const convertStringToSassDimension = function(result) {
	// Only attempt to convert strings
	if (typeof result !== "string") {
	  return result;
	}
  
	const cssUnits = [
	  "rem",
	  "em",
	  "vh",
	  "vw",
	  "vmin",
	  "vmax",
	  "ex",
	  "%",
	  "px",
	  "cm",
	  "mm",
	  "in",
	  "pt",
	  "pc",
	  "ch"
	];
	const parts = result.match(/[a-zA-Z]+|[0-9]+/g);
	const value = parts[0];
	const unit = parts[parts.length - 1];
	if (cssUnits.indexOf(unit) !== -1) {
	  result = new sassUtils.SassDimension(parseInt(value, 10), unit);
	}
  
	return result;
};

const getSassKey = function(keys) {
	keys = keys.getValue().split(".");
	let result = sassVars;
	let i;
	for (i = 0; i < keys.length; i++) {
	  result = result[keys[i]];
	  // Convert to SassDimension if dimenssion
	  if (typeof result === "string") {
			result = convertStringToSassDimension(result);
	  } else if (typeof result === "object") {
			Object.keys(result).forEach((key) => {
				let value = result[key];
				result[key] = convertStringToSassDimension(value);
			});
	  }
	}
	result = sassUtils.castToSass(result);
	return result;
};

module.exports = (env, argv) => {
	// 环境
	const isUat = argv.isuat === 'true' ? true : false;
	const isPro = !isUat && argv.mode === 'production';
	const cdn = process.env.PUBLIC_PATH || null;
	return {
		context: path.resolve(__dirname, 'src'),
		entry: ['./core/polyfill.js', './index.js'],
		output: {
			path: path.resolve(__dirname, 'build'),
			publicPath: cdn ? `${cdn}/` : './',
			filename: isPro ? 'bundle.[hash:6].js' : 'bundle.js',
			chunkFilename: isPro ? '[name].[contenthash:6].js' : '[name].js'
		},
		resolve: {
			extensions: ['.jsx', '.js', '.json', '.less', '.scss', '.css'],
			modules: [
				path.resolve(__dirname, 'src/lib'),
				path.resolve(__dirname, 'node_modules'),
				'node_modules'
			],
			alias: {
				components: path.resolve(__dirname, 'src/components'), // used for tests
				style: path.resolve(__dirname, 'src/style'),
				core: path.resolve(__dirname, 'src/core'),
				'~': path.resolve(__dirname, 'src'), // root
				react: 'preact-compat',
				'react-dom': 'preact-compat'
			}
		},
		optimization: {
			splitChunks: {
				cacheGroups: {
					commons: {
						chunks: 'initial',
						name: 'commons',
						minChunks: 2,
						maxInitialRequests: 5, // The default limit is too small to showcase the effect
						minSize: 0 // This is example is too small to create commons chunks
					},
					vendor: {
						test: /node_modules/,
						chunks: 'initial',
						name: 'vendor',
						priority: 10,
						enforce: true
					}
				}
			},
			minimizer: [
				new OptimizeCssAssetsPlugin({
					// css压缩
					cssProcessor: require('cssnano'),
					cssProcessorPluginOptions: {
						preset: ['default', { discardComments: { removeAll: true } }]
					},
					canPrint: true
				}),
				new UglifyJsPlugin({
					uglifyOptions: {
						output: {
							comments: false
						},
						compress: {
							unsafe_comps: true,
							properties: true,
							keep_fargs: false,
							pure_getters: true,
							collapse_vars: true,
							unsafe: true,
							warnings: false,
							sequences: true,
							dead_code: true,
							drop_debugger: true,
							comparisons: true,
							conditionals: true,
							evaluate: true,
							booleans: true,
							loops: true,
							unused: true,
							hoist_funs: true,
							if_return: true,
							join_vars: true,
							drop_console: isPro
						}
					}
				})
			]
		},
		module: {
			rules: [
				{
					test: /\.(jsx|js)?$/,
					exclude: path.resolve(__dirname, 'src'),
					enforce: 'pre',
					use: 'source-map-loader'
				},
				{
					test: /\.(jsx|js)?$/,
					exclude: /node_modules/,
					use: 'babel-loader'
				},
				{
					test: /\.(sa|sc|c)ss$/,
					exclude: [path.resolve(__dirname, 'src/style')],
					use: [
						!isPro ? 'style-loader' : MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								modules: true,
								sourceMap: !isPro,
								importLoaders: 1,
								minimize: true
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: !isPro
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: !isPro,
								data: '@import "variables.scss";',
								includePaths: [path.resolve(__dirname, 'src/style')],
								functions: {
									"get($keys)" : getSassKey
							  }
							}
						}
					]
				},
				{
					test: /\.(sa|sc|c)ss$/,
					include: [path.resolve(__dirname, 'src/style')],
					use: [
						!isPro ? 'style-loader' : MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								sourceMap: !isPro,
								importLoaders: 1,
								minimize: true
							}
						},
						{
							loader: 'postcss-loader',
							options: {
								sourceMap: !isPro
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: !isPro,
								data: '@import "variables.scss";',
								includePaths: [path.resolve(__dirname, 'src/style')],
								functions: {
									  "get($keys)" : getSassKey
								}
							}
						}
					]
				},
				{
					test: /\.json$/,
					loader: 'json-loader',
					type: 'javascript/auto'
				},
				{
					test: /\.(xml|html|txt|md)$/,
					use: 'raw-loader'
				},
				{
					test: /\.(svg|woff2?|ttf|eot)(\?.*)?$/i,
					use: isPro ? 'file-loader' : 'url-loader'
				},
				{
					test: /\.(jpe?g|png|gif)$/,
					use: isPro ? { loader: 'url-loader?limit=10000' } : { loader: 'url-loader' }
				}
			]
		},
		plugins: [
			new webpack.NoEmitOnErrorsPlugin(),
			new HtmlWebpackPlugin({
				title: '项目标题',
				template: './index.ejs',
				minify: { collapseWhitespace: true },
				favicon: './favicon.ico'
			}),
			new MiniCssExtractPlugin({
				// Options similar to the same options in webpackOptions.output
				// both options are optional
				filename: !isPro ? '[name].css' : '[name].[hash:6].css',
				chunkFilename: !isPro ? '[id].css' : '[id].[hash:6].css'
			}),
			new webpack.DefinePlugin({
				__UI_WIDTH__: JSON.stringify(sassVars.width),
				__UI_BASEFONT__: JSON.stringify(sassVars.basefont),
				__UAT__: isUat,
				__PRO__: isPro,
				__PUBLICKPATH__: JSON.stringify(cdn ? `${cdn}/` : './')
			}),
			new CopyWebpackPlugin([
				{ from: './assets', to: './assets' }
			])
		]
			.concat(argv.report ? [new BundleAnalyzerPlugin()] : []),
		devtool: isPro || isUat ? 'source-map' : 'cheap-module-eval-source-map',
		devServer: {
			port: process.env.PORT || 8080,
			host: 'localhost', // host: '0.0.0.0',
			publicPath: '/',
			contentBase: './src',
			historyApiFallback: true,
			open: false,
			// openPage: '',
			proxy: {
				'/common': {
					target: 'http://wx-test.by-health.com',
					changeOrigin: true
				}
			}
		}
	};
};