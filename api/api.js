//Include api modules.
const http       = require('http');
const express    = require('express');
const bodyParser = require('body-parser');

//Include config file.
const config     = require('../config/config.json');

//Include custom modules.
const apiEvents  = require('./api-events.js');
const routes     = require('./routes/routes.js');

//Start Express-js
const app    = express();
const server = http.createServer(app);

//Add bodyparser and CORS.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(apiEvents.CORS);

//Start api-rest server.
const start = async (master)=>{

  //Set the master process.
  global.master = master;

  //Anticaptcha endpoint.
  app.use('/anticaptcha/',routes.anticaptcha);

  //No route match.
  app.get('*',(req,res) => res.status(400).json({"error":"bad request"}));

  try{

    //Start listen mode.
    return await app.listen(config.server.port,config.server.ip,apiEvents.onListen);

  } catch(err){
    return err;
  }

}

//Handle process server.
process.on('SIGTERM', apiEvents.onClose);
process.on('SIGINT',  apiEvents.onClose)
process.on('uncaughtException', apiEvents.onError);

module.exports = start ;