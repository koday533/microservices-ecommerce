const express = require("express");
var cors = require('cors')
var http = require('http');
const routes = require('./routes/routes');

const PORT = process.env.PORT || 7070
const app = express();

app.use(express.json());

app.use(cors())

var server = http.createServer(app);

app.use('/api', routes);


server.listen(PORT, () => {
    console.log(`Auth-Service at ${PORT}`);
});