require("dotenv").config();
const {logger} = require('./utilis/logger/logger') 
//Convert console.log in logger.info 
//console.log = (...args) => logger.info.call(logger, ...args); 


const http = require('http');
const app = require('./app');

const cors = require("cors");

app.use(cors());

const port = process.env.PORT || 5000;
const server = http.createServer(app);

server.listen(port, console.log(`Server is running on port ${port}...`));