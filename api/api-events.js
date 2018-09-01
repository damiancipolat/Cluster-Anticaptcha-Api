const processObj = require('process');
const config     = require('../config/config.json');

//On detect sigkill signal.
const onClose = ()=>{

  console.log('> Closing');
  process.exit();

}

//When producess an unhandled error.
const onError = (err)=>{

  console.log(err);
  process.exit();
  
}

//onListen event.
const onListen = ()=>{

  //Logeo arranque del server.
  console.log('Restaurant API');
  console.log('> Listenig in ip: '+config.server.ip+':'+config.server.port);
  console.log('> Process Id:',processObj.pid);
  console.log('');

}

//Add CORS to middleware.
const cors = (req, res, next)=>{

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // Intercepts OPTIONS method
  if ('OPTIONS' === req.method)      
    res.sendStatus(200);
  else
    next();

}

module.exports.onClose  = onClose;
module.exports.onError  = onError;
module.exports.onListen = onListen;
module.exports.CORS     = cors;