const express = require('express')
const http = require('http')
const path = require('path')
const bodyParser = require('body-parser')
const port = process.env.PORT || 4002;
const mongoose = require(path.resolve('./src/db'));
const app = express(); 

const server = http.createServer(app)


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

async function start() {
    try{
      await mongoose.init(() => {
        server.listen(port, () => console.log(`Listening on port ${port}`));
      })
    }
    catch (e){
      console.log(e);
    }
    
  }
  start()