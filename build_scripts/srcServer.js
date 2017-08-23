import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev.js';
/* eslint-disable no-console */
const port = 3333;
const app = express();
const compiler = webpack(config);
// use of web pack middleware withconfig file and path setup
app.use(require('webpack-dev-middleware')(compiler,{
  noInfo: true,
  publicPath: config.output.publicPath
}));

//Setting path for index file
app.get('/', function(req, res){
  res.sendFile(path.join(__dirname,'../src/index.html'));
});
//app listen on specified port.
app.listen(port , function(err){
  if(err){
    console.log("error!!");
  }else{
    open('http://localhost:'+port);
  }
});
