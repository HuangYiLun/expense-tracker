const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    require: true
  },
  amount: {
    type: Number,
    require: true
  },
  userId: {//加入關聯設定
    type: Schema.Types.ObjectId,
    ref: 'User',
    index: true,
    require: true
  },
  categoryId: {//加入關聯設定
    type: Schema.Types.ObjectId,
    ref: 'Category',
    index: true,
    require: true
  }
})

module.exports = mongoose.model('Record', recordSchema)