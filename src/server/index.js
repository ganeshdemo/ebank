const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const path = require('path');

const app = express();
const webpackConfig = require('./webpack.config');
const compiler = webpack(webpackConfig);

app.use('/images', express.static(path.join(__dirname, 'images')));

if (webpackConfig.mode === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  
} else {
  app.use(middleware(compiler));
  app.use(hotMiddleware(compiler));

  require('node-hot').configure({
    exclude: [/[\/\\]node_modules[\/\\]/]
  });

 
}

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
