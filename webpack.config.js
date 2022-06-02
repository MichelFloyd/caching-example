var nodeExternals = require('webpack-node-externals');
var webpack = require('webpack');
var path = require('path');

var webpack_opts = {
  entry: './src/server.js',
  target: 'node',
  mode: 'development',
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['node_modules', 'src'],
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        test: /\.ts$/,
        ts: {
          compiler: 'typescript',
          configFileName: 'tsconfig.json',
        },
        tslint: {
          emitErrors: true,
          failOnHint: true,
        },
      },
    }),
  ],
  devtool: 'source-map',
  externals: [nodeExternals()],
};

module.exports = webpack_opts;
