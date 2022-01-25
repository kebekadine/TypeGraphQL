import { Int } from "type-graphql";

const mongoose = require('mongoose');
const dbase = require("./dbConfig");

const livreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'nom']
  },
  nbPage: {
    type: Number,
    required: [true, 'nbPage']
  }
})

module.exports = livreSchema