const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  eamil: {
    type: String,
    require:true
  },
  password: {
    type: String,
    require: true
  },
  crateAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', userSchema)