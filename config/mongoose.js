
const mongoose = require('mongoose')

//僅在非正式環境時 使用dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

//設定連線到mongoDB
mongoose.connect(process.env.MONGODB_URI, options)
//取得資料庫連線狀態
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected!!!')
})

module.exports = db


