const moment = require('moment');

const getRandomInt = (min, max)=>{

  return Math.floor(Math.random() * (max - min + 1) + min);

}

const getMsgId = ()=>{

  let num       = getRandomInt(0,100);
  let timestamp = moment().format('YYYYMMDDhhmmssSSS');

  return 'MSG-'+timestamp+'-'+num;

}

const toChildren = (idWorker,typeData,payloadData)=>{
  
  return {
    id      : getMsgId(),
    type    : typeData, 
    payload : payloadData,
    origin  : idWorker
  };

}

const toMaster = (replyId,typeData,payloadData)=>{

  return {
    replyTo : replyId,
    type    : typeData, 
    payload : payloadData
  };

}

module.exports.toChildren   = toChildren;
module.exports.toMaster     = toMaster;
module.exports.getRandomInt = getRandomInt;