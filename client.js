const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
    const conn = net.createConnection({
      host: IP,
      port: PORT
   });
    
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
    
    conn.on ("data", (event) => {
      console.log(event)
    });
    conn.on ("connect", (event) => {
        console.log((event),"Successfully connected to game server")
        conn.write("Name: Haj");
        // conn.write("Move: up");
      });

      
    
    return conn;
  };
  module.exports = connect;
