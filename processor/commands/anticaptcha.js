//Get captcha module.
const captcha = require('../../lib/anticaptcha/captcha.js');

//Retrieve base64 data and get the response from the api. 
const imageProcess = async (data64)=>{

  try {

    return await captcha.getCaptcha(data64);

  } catch(err){
    throw new Error(err);
  }

}

module.exports.Image = imageProcess;
