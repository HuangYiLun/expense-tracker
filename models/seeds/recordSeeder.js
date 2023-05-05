const Record = require('../record')
const Category = require('../category')
const User = require('../user')
const db = require('../../config/mongoose')

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
  User.create({
    name: SEED_USER.name,
    email: SEED_USER.email,
    password: SEED_USER.password
  })
  .then(user => {
    console.log('User Created!')
    const userId = user._id
  })


} )