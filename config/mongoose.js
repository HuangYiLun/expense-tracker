
const mongoose = require('mongoose')

//僅在非正式環境時 使用dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
//設定連線到mongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//取得資料庫連線狀態
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('opne', () => {
  console.log('mongodb connected!!!')
})

module.exports = db


