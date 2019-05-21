import webpack from 'webpack'
import baseConfig from './base'

export default {
  ...baseConfig,
  mode: 'development',

  devtool: '#inline-source-map',

  plugins: [...baseConfig.plugins, new webpack.HotModuleReplacementPlugin()],

  devServer: {
    inline: true,
    hot: true,
    port: '8000'
  }
}
