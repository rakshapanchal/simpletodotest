//Import Config

const config = require('./config');
const bodyParser = require('body-parser')
const express = require("express");
const mongoose = require('mongoose');
// init express app
const app = express();
const morgan = require('morgan');
const cors = require('cors')
app.use(cors())
mongoose.connect(config.URL)
app.use(morgan('combined'))
app.use(bodyParser.json())

// attach the routes to the app
require("./route")(app);

// start server
app.listen(config.port, () => {
    console.info(`Express server listening on ${config.port}`);
});