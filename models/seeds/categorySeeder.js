const Category = require('../category')
const db = require('../../config/mongoose')

const CATEGORY = {
  house: "https://fontawesome.com/icons/home?style=solid",
  transport: "https://fontawesome.com/icons/shuttle-van?style=solid",
  entertainment: "https://fontawesome.com/icons/grin-beam?style=solid",
  meals: "https://fontawesome.com/icons/utensils?style=solid",
  others: "https://fontawesome.com/icons/pen?style=solid"
}

const categories = []

db.once('open', () => {

  for (let category in CATEGORY)  {
    categories.push({ name: category, icon: CATEGORY[category]})
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