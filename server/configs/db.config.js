const mongoose = require('mongoose')
const db = {}
db.mongoose = mongoose;
db.url = process.env.MONGO_URI
module.exports = db;
