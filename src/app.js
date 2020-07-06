const express = require('express')
const http = require('http')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require(path.resolve('./db'));
const app = express(); 
const lecturesRouter = require("./routes/lecturesRoute");
const config = require('./config/config')
const auth = require('./middleware/authorization')

const server = http.createServer(app)
const port = config.port

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/lectures", auth, lecturesRouter);

async function start() {
    try{
      await mongoose.init(() => {
        server.listen(port, () => console.log(`Listening on http://localhost:${port}`));
      })
    }
    catch (e){
      console.log(e);
    }
    
  }
  start()