const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'build');
const PUBLIC_DIR = path.resolve(__dirname, 'public');

module.exports = {
  entry: './src/example.js',
  output: {
    filename: 'example.js',
    path: BUILD_DIR,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['stage-2', 'react']
          },
        },
      },
    ],
  },
  devtool: 'cheap-source-map',
  devServer: {
    contentBase: [BUILD_DIR, PUBLIC_DIR],
    inline: true,
  },
};
