// webpack.config.js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // 번들링 모드 development / production
  entry: './src/index.tsx', // 번들링 시작 file
  output: {
    path: path.join(__dirname, '/dist'), // 번들 결과물 위치
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$|tsx/, // .ts 에 한하여 ts-loader를 이용하여 transpiling
        exclude: /node_module/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'], // 모듈 위치
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@Hooks': path.resolve(__dirname, 'src/hooks'),
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Pages': path.resolve(__dirname, 'src/pages'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `./public/index.html`,
      filename: './index.html',
    }),
  ],
  devServer: {
    host: 'localhost',
    historyApiFallback: true,
    hot: true,
    port: 3000,
  },
};
