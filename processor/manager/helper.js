//Get random integer between two numbers.
const getRandomInt = (min, max)=>{

  return Math.floor(Math.random() * (max - min + 1) + min);

}

module.exports.random = getRandomInt;
