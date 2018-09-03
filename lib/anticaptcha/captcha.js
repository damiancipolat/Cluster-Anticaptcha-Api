//Include config file.
const config      = require('../../config/config.json');

//Include anticaptcha lib.
const anticaptcha = require('./anticaptcha')(config.library.anticaptcha.key);

//Get anticaptcha balance.
const getCaptchaBalance = () =>{

  return new Promise((resolve,reject)=>{

    //Chech balance.
    anticaptcha.getBalance((err, balance)=>{

      if (err)
        reject(err);
      else{

        if (balance>0)
          resolve(balance);
        else
          reject({err:"balance 0"});

      }

    });

  });

}

//Retrieve task solution.
const getTaskSolution = (taskId)=>{

  return new Promise((resolve,reject)=>{

    anticaptcha.getTaskSolution(taskId,(err, taskSolution)=>{

      if (err)
        reject(err);
      else
        resolve(taskSolution)

    });

  });

}

//Get img text.
const getImgText = (dataImg)=>{

  return new Promise((resolve,reject)=>{

    let body = {case: true, body: dataImg};

    //Send a image and recive the text.
    anticaptcha.createImageToTextTask(body,(err,taskId)=>{

      if (err)
        reject(err);
      else 
        resolve(taskId);

    });   

  });

}

//Create task.
const createTask = ()=>{

  return new Promise((resolve,reject)=>{

    anticaptcha.createTask((err, taskId)=>{

      if (err)
        reject(err);
      else
        resolve(taskId);

    });

  });

}

//Send the captcha request.
const getCaptchaSimple = (dataImg)=>{

  return new Promise((resolve,reject)=>{

    getImgText(dataImg).then((taskId)=>{

      getTaskSolution(taskId)
        .then((result) => resolve(result))
        .catch((err)   => reject(err));

    }).catch((err) => reject(err));

  });

}

// Params:
/*

proxy list
https://free-proxy-list.net/anonymous-proxy.html
proxy checker:
http://www.checker.freeproxy.ru/checker/

*/


//Send the recaptcha request.
const getRecaptcha = (params)=>{

  return new Promise((resolve,reject)=>{

    //Define site data.
    anticaptcha.setWebsiteURL(params.url);
    anticaptcha.setWebsiteKey(params.key);

    //Define parameters to the request.    
    anticaptcha.setProxyType("http");
    anticaptcha.setProxyAddress(config.library.anticaptcha.url);
    anticaptcha.setProxyPort(config.library.anticaptcha.port);
    anticaptcha.setUserAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116");

    //Create task.
    createTask().then((taskId)=>{

      getTaskSolution(taskId)
        .then((result) => resolve(result))
        .catch((err)   => reject(err));

    }).catch((err) => reject(err));

  });  

}

module.exports.getRecaptcha      = getRecaptcha;
module.exports.getCaptchaSimple  = getCaptchaSimple;
module.exports.getImgText        = getImgText;
module.exports.getTaskSolution   = getTaskSolution;
module.exports.getCaptchaBalance = getCaptchaBalance;