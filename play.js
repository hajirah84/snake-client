// const net = require("net");

// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: "localhost",
//     port: 50541
//  });
  

//   // interpret incoming data as text
//   conn.setEncoding("utf8");
  
//   conn.on ("data", (event) => {
//     console.log(event)
//   });
//   return conn;
// };
const connect = require ('./client')
console.log("Connecting ...");
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function (key) {
    if (key === "\u0003") {
      process.exit();
    }
  }

  stdin.on("data", handleUserInput);
  return stdin;
};
