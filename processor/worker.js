const cluster    = require('cluster');
const processObj = require('process');

//Include custom modules.
const lib = require('../lib/lib.js');

//Include commands.
const anticaptcha = require('./commands/anticaptcha.js');

//Worker process.
class Worker{

  run(){

    console.log('> worker STARTED',processObj.pid);  
    process.on('message',this.onMasterMsg);

  }

  //Send msg to master.
  sendToMaster(id,type,result){
    
    process.send(lib.toMaster(msg.id,'response',result));

  }

  //When receive the data.
  onMasterMsg(msg){

    //Process captacha reqeuest.
    if (msg.type=='anticaptcha-img'){

      //Handle async.
      anticaptcha.Image(msg.payload.img)
        .then((result) => process.send(lib.toMaster(msg.id,'response',result)))
        .catch((err)   => process.send(lib.toMaster(msg.id,'response-error',err)));

    }

    //Process recaptacha reqeuest.
    if (msg.type=='anticaptcha-recaptcha'){

      //Handle async.
      anticaptcha.Recaptcha(msg.payload)
        .then((result) => process.send(lib.toMaster(msg.id,'response',result)))
        .catch((err)   => process.send(lib.toMaster(msg.id,'response-error',err)));

    }    

  }  

}

module.exports = new Worker();