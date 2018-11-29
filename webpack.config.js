const path = require('path')
const webpack = require('webpack')

const APP_DIR = path.join(__dirname, 'src')
const BUILD_DIR = path.join(__dirname, 'dist')


const moduleLoader = {

}

const CSSModuleLoader = {
  loader: 'css-loader',
  options: {
    modules: true,
    sourceMap: true,
    localIdentName: '[local]__[hash:base64:5]',
    minimize: true
  }
}
const StyleLoader = {
  loader: 'style-loader',
  options: {
    hmr: true,
  }
}

const CSSLoader = {
  loader: 'css-loader',
  options: {
    modules: false,
    sourceMap: true,
    minimize: true
  }
}


const config = {
  devServer: {
    contentBase: './dist',
    hot: true,
    filename: 'bundle.dev.js',
    port: 9002,
    proxy: {
      "/api": "http://localhost:9001"
    },
    publicPath: '/'
  },
  entry: [
    APP_DIR + '/index.tsx'
  ],
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'tslint-loader',
        test: /\.(js|jsx|ts|tsx)$/
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {loader: "url-loader"}
        ]
      },
      {
        test: /\.scss$/,
        exclude: /\.module\.scss$/,
        use: [StyleLoader, CSSLoader, 'sass-loader']
      },
      {
        test: /\.module\.scss$/,
        use: [StyleLoader, CSSModuleLoader,  'sass-loader']
      },
      {
        exclude: /node_modules/,
        include: APP_DIR,
        test: /\.(js|jsx|ts|tsx)$/,
        use: [
          {loader: "babel-loader"}
        ]
      }
    ]
  },
  output: {
    filename: process.env.NODE_ENV === 'development' ? 'bundle.dev.js' : '[name].prod.js',
    path: BUILD_DIR
  },
  plugins: [
    new webpack.DefinePlugin({"process.env": {NODE_ENV: JSON.stringify('development')}}),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src', 'components'),
      stores: path.resolve(__dirname, 'src', 'stores'),
      models: path.resolve(__dirname, 'src', 'models'),
      views: path.resolve(__dirname, 'src', 'views'),
      theme: path.resolve(__dirname, 'src', 'theme'),
      src: path.resolve(__dirname, 'src')
    },
    extensions: ['.scss','.css', '.js', '.jsx', '.json', '.scss', '.ts', '.tsx'],
    modules: ['node_modules']
  }
}

module.exports = config
