/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const CompressionPlugin = require('compression-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { SourceMapDevToolPlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const TARGET = ['chrome64', 'edge79', 'firefox67', 'safari11.1']

const isProd = process.env.NODE_ENV === 'production'
// const isAnalyze = typeof process.env.BUNDLE_ANALYZE !== 'undefined'

const plugins = [
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    chunksSortMode: 'auto',
  }),
  new CleanWebpackPlugin(),
  isProd
    ? new SourceMapDevToolPlugin({ filename: '[file].map' })
    : new CompressionPlugin({
        test: /\.js(\?.*)?$/i,
        algorithm: 'gzip',
        filename: '[path][base].gz',
      }),
  // isAnalyze && new BundleAnalyzerPlugin(),
]

// eslint-disable-next-line functional/immutable-data
module.exports = {
  entry: {
    app: './src/index.tsx',
  },
  mode: isProd ? 'production' : 'development',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'js/[name]-web-[contenthash].js',
    chunkFilename: 'js/[name].[chunkhash].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|\.webpack)/,
        use: {
          loader: 'esbuild-loader',
          options: {
            loader: 'tsx',
            target: TARGET,
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: [/\.webm$/, /\.png$/i, /\.jpg$/i, /\.jpeg$/i, /\.svg$/i],
        use: ['file-loader'],
      },
    ],
  },
  plugins,
  devServer: {
    port: 3000,
    open: true,
    https: true,
    hot: true,
    historyApiFallback: true,
  },
}
