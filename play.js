const net = require("net");

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
