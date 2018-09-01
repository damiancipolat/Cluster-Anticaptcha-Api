const moment = require('moment');
const helper = require('./helper.js');

const getMsgId = ()=>{

  let num       = helper.random(0,100);
  let timestamp = moment().format('YYYYMMDDhhmmssSSS');

  return 'MSG-'+timestamp+'-'+num;

}

const toWorker = (idWorker,typeData,payloadData)=>{
  
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

const baseMsg = (typeParam,payloadParam)=>{

  return {
    type    : typeParam,
    payload : payloadParam
  };

}

module.exports.baseMsg  = baseMsg;
module.exports.toWorker = toWorker;
module.exports.toMaster = toMaster;