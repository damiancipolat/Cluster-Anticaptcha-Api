const imageBase64 = (body)=>{

  return (body.img);

}

const recaptcha = (body)=>{

  return ((body.url)&&(body.key));

}

module.exports.image       = imageBase64;
module.exports.recaptcha   = recaptcha;