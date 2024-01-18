const mongoose = require('mongoose');
require('dotenv').config()

const serverConnection = mongoose.connect(process.env.SERVER_ADDRESS)

module.exports = serverConnection

