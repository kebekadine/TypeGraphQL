const mongo = require('mongoose');
const db = require("./models/dbConfig");
const LivreSchema = require('./models/LivreSchema');
const livres = mongo.model('livreSchema', LivreSchema);
