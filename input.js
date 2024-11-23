let connection;
const setupInput = (conn) => {
    connection = conn;
  };
const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding("utf8");
    stdin.resume();
  
    const handleUserInput = function (key) {
      if (key === "\u0003") {
        process.exit();
      }
    }
    stdin.on("data", (key) => {
    if (key === "w") {
        connection.write ("Move: up");
    } 
    else if (key === "a") {
        connection.write ("Move: left");
    } else if (key === "s") {
          connection.write ("Move: down");
    } else if (key === "d") {
          connection.write ("Move: right");
        }
        if (key === "1") connection.write("Say: Let's get started!");
        if (key === "2") connection.write("Say: You won't be able to beat me now!");
        if (key === "3") connection.write("Say: Oh you need practice");
    
    stdin.on("data", handleUserInput);
    return stdin;
  });

  module.exports = {
    setupInput,
  }