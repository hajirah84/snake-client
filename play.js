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
  const stdin = process.stdin;  // create variable to hold the stdin object so we don't have to type process.stdin multiple times
  stdin.setRawMode(true); // Raw Mode allows us to listen for individual keypresses instead of waiting for the user to press enter
  stdin.setEncoding("utf8"); // utf8 encoding is set so that we can read the text data that is input
  stdin.resume(); // resume stdin so the program can listen for input
  stdin.on("data", handleUserInput); 
  const handleUserInput = function (key) {
    if (key === "\u0003") {
      process.exit();
    }
  }
  return stdin;   // return the stdin object so we can use it elsewhere in the program
};
