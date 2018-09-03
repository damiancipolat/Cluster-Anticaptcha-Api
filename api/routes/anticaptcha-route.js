const express = require('express');
const router  = express.Router();

//Custom modules.
const messages  = require('../../processor/manager/messages.js');
const validator = require('../validator.js');

//Receive base64 captcha request.
router.post('/img',(req,res)=>{

  let master = global.master;

  //Validate request.
  if (validator.image(req.body)){

    console.log('> Image base64 decode request');

    //Send to the worker the message and payload.  
    master.sendToWorker(res,messages.baseMsg('anticaptcha-img',req.body));

  } else {

    console.log('> Image base64 decode request');
    res.status(400).json({error:"Bad parameter."});

  } 

});

//Receive Recaptcha request.
router.post('/recaptcha',(req,res)=>{

  let master = global.master;

  //Validate request.
  if (validator.recaptcha(req.body)){

    console.log('> Recaptcha decode request');
    
    //Send to the worker the message and payload.  
    master.sendToWorker(res,messages.baseMsg('anticaptcha-recaptcha',req.body));

  } else {

    console.log('> Image base64 decode request');
    res.status(400).json({error:"Bad parameter."});

  }

});

module.exports = router;