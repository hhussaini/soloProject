const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    
    mode: process.env.NODE_ENV,
    entry: {
        bundle: './src/index.js'
    },
   
    output: {
      path: path.resolve(__dirname, 'build'),
      clean: true,
      filename: 'bundle.js',
    },
    module:{
      rules: [
          {
              test: /\.jsx?/,
              exclude: /node_modules/,
              use: {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env', '@babel/preset-react']
                  }
              },
          }
      ]
  },
  devServer:{
      static: {
          directory: path.resolve(__dirname, 'build')
      },
      port: 8080,
      open: true,
      hot: true,
      compress: true,
      liveReload:true,
      proxy: {
        '/apitest': 'http://localhost:3000/'
      },
  },
  plugins: [
      new HtmlWebpackPlugin({
          title: 'Webpack Dev',
          filename: 'index.html',
          template: 'src/index.html'
      })
  ]
  
//devServer
      //static:
        //{ directory: path.resolve(__dirname, publicPath: '/')}
      //proxy
        // {'/api': 'http://localhost3000'}
        

}