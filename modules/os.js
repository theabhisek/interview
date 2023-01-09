const os = require("os")
console.warn(os.arch())
console.log(os.constants);
console.log(os.cpus());
console.log(os.endianness());
console.log(os.EOL)
console.log("numbers of free memory of the system",os.freemem());
console.log("hostname",os.hostname());
console.log("loadavg",os.loadavg());
console.log(os.networkInterfaces());
console.log(os.platform());
console.log(os.release())
console.log(os.tmpdir());
console.log(os.totalmem());
console.log(os.type());
console.log(os.uptime())
console.log(os.userInfo());