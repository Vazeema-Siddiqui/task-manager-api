const mongoose = require('mongoose')
require('dotenv').config() 

mongoose.set('debug', true);

mongoose.connect(process.env.MONGO_URI, {})