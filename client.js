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
    return conn;
  };
  module.exports = connect;
