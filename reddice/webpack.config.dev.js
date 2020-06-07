import path from 'path';

export default {
  devtool: 'eval-source-map',
  mode: 'development',
  entry: path.join(__dirname, '/client/index.js'),
  output: {
    path: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, 'client'),
        loaders: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
};
