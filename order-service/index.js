const express = require("express");
var cors = require('cors')
var http = require('http');
const { authMiddlewere } = require('./middleware/authMiddlewere');
const routes = require('./routes/routes');

const PORT = process.env.PORT || 5050
const app = express();

app.use(express.json());

app.use(cors())

var server = http.createServer(app);

app.use('/api', authMiddlewere, routes);


server.listen(PORT, () => {
    console.log(`Order-Service at ${PORT}`);
});

