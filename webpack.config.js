const path = require('path');

module.exports = {
  entry: {
    index: './src/index.ts',
  },
  /*devtool: 'inline-source-map',*/
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [{ loader: 'ts-loader', options: { transpileOnly: true } }],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.mjs', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
