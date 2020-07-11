const mongoose = require('mongoose');

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;

module.exports = db;
//teste
