require('./config/config');
require('./models/db');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require ('cors');
var app = express();
 
app.use(bodyParser.json());
app.use(cors());
app.listen(process.env.Port ,()=>console.log('server started at port :  ${process.env.Port}'));
