const express = require('express');
const router  = express.Router();

//Custom modules.
const messages = require('../../processor/manager/messages.js');

//Receive base64 captcha request.
router.post('/img',(req,res)=>{

  let master = global.master;
  
  //Send to the worker the message and payload.  
  master.sendToWorker(res,messages.baseMsg('anticaptcha-img',req.body));

});

module.exports = router;