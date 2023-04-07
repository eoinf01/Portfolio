const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const db = {}
db.mongoose = mongoose;
db.url = process.env.MONGO_URI
module.exports = db;
