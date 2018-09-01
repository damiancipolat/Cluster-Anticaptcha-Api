const cluster  = require('cluster');

//Include custom modules.
const Master   = require('./processor/master.js');
const Worker   = require('./processor/worker.js');

//Switch between master and worker.
if (cluster.isMaster)
 Master.run(cluster);
else
  Worker.run();