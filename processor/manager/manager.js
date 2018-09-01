//Include custom modules.
const helper = require('./helper.js');

//Process planifier.
class Manager{

  constructor(typeParam,ids){

    this.type = typeParam;
    this.list = ids;

  }

  planify(){

    if (this.type=='random')
      return this.random();

    if (this.type=='round-robin')
      return this.roundRobin();

  }

  //Get a Id from the list of worker ids, in random mode.
  random(){

    let ix = helper.random(0,this.list.length-1);
    return this.list[ix];

  }

  //Get a Id, using round robin.
  roundRobin(){

  }

}

module.exports = Manager;