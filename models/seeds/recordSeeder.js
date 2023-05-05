const Record = require('../record')
const SEED_RECORDS = require('./records.json').restults
const Category = require('../category')
const User = require('../user')
const db = require('../../config/mongoose')
const bcrypt = require('bcryptjs')

//僅在非正式環境時 使用dotenv
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const SEED_USER = {
  name: 'user1',
  email: 'root@root.root',
  password: '12345678'
}

db.once('open', () => {
  bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(SEED_USER.password, salt))
    .then(hash => {
      return User.create({
        name: SEED_USER.name,
        email: SEED_USER.email,
        password: hash
      })
        .then(user => {
          const userId = user._id
          // 取得資料庫內所有的categories
          return Category
            .find()
            .lean()
            .then((categories) => {
              // 取得所有categories 中name 對應的 categories._id
              const categoryIds = {}
              categories.map(category => categoryIds[category.name] = category._id)
              const records = SEED_RECORDS.map(record => {
                return Record.create({
                  name: record.name,
                  date: record.date,
                  number: record.number,
                  userId: userId,
                  categoryId: categoryIds[record.category]
                })
              })
              return Promise.all(records)
            })
        })
    })
    .then(() => {
      console.log('user & records created')
      process.exit()
    })
    .catch(error => console.warn(error))
})