const net = require("net");

const connect = function () {
    const conn = net.createConnection({
      host: "localhost",
      port: 50541
   });
    
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
    
    conn.on ("data", (event) => {
      console.log(event)
    });
    conn.on ("connect", (event) => {
        console.log((event),"Successfully connected to game server")
        conn.write("Name: SNK");
      });
      client.setEncoding("utf8"); // interpret data as text
      client.on("data", (data) => {
        console.log("Name: Haj ", data);
      });
    
    return conn;
  };
  module.exports = connect;
