const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database')
const path = require('path');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri,(err)=>{
    if (err){
        console.log('Not Connect To DATABASE! : ' , err);
    }else{
        console.log("Connect to database : " + config.db);
    }
});

app.use(express.static(__dirname + '/client/dist/'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/index.html'));
  });

// app.get('/*', (req,res) => {
//     res.send('Fuck You!');
// })
  
  app.listen(8000, () => {
      console.log('Listening 8000 port');
  });