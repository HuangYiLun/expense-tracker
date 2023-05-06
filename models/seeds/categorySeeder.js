const Category = require('../category')
const db = require('../../config/mongoose')

const CATEGORY = {
  house: "fa-solid fa-house-chimney",
  transport: "fa-solid fa-van-shuttle",
  entertainment: "fa-solid fa-face-grin-beam",
  meals: "fa-solid fa-utensils",
  others: "fa-solid fa-pen"
}

const categories = []

db.once('open', () => {

  for (let category in CATEGORY) {
    categories.push({ name: category, icon: CATEGORY[category] })
  }

  Promise.all(
    categories.map(category => Category.create(category))
  ).then(() => {
    console.log('category done')
    process.exit()
  }).catch(error => {
    console.warn(error)
  })
})