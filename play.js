
const connect = require ('./client')
const { setupInput } = require("./input");
console.log("Connecting ...");
connect();
setupInput(connection);
const connection = connect();
setupInput(connection);


