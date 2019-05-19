import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config = {
  entry: [path.join(__dirname, '../', 'src', 'index')],

  output: {
    path: path.join(__dirname, '../', 'dist'),
    filename: 'js/[name]_[hash].js',
    publicPath: '/'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /src\/styles\/vendor/],
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(jpe?g|gif|ttf|eot|svg|png|woff(2)?)(\?[a-z0-9=&.]*)?$/,
        use: {
          loader: 'file-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
}

export default config
