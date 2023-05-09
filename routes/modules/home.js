const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')

//定義首頁路由
router.get('/', async (req, res) => {
  try {
    //等login功能完成後修改
    const userId = req.user._id

    let totalAmount = 0

    const categories = await Category.find().lean().sort({ _id: 'asc' })
    const records = await Record.find({ userId }).populate('categoryId').lean().sort({ _id: 'asc' })

    //計算總金額
    records.forEach(record => {
      totalAmount += record.amount
    })

    res.render('index', { records, categories, totalAmount })

  } catch (error) {
    console.warn(`routes/modules/home/get:${error}`)
  }

})

//篩選類別
router.get('/filter', async (req, res) => {
  const userId = req.user._id
  const { selectedCategory } = req.query
  let totalAmount = 0

  if (selectedCategory == 'all') {

    try {
      const categories = await Category.find().lean().sort({ _id: 'asc' })

      const records = await Record.find({ userId }).populate('categoryId').lean().sort({ _id: 'asc' })
      records.forEach(record => {
        totalAmount += record.amount
      })
      return res.render('index', { records, categories, totalAmount, selectedCategory })

    } catch (error) {
      console.warn(`routes/modules/home/get:${error}`)
    }
  }
  try {

    const categories = await Category.find().lean().sort({ _id: 'asc' })

    const categoryIds = {}
    categories.map((category) => categoryIds[category.name] = category._id)
    const selectedCategoryId = categoryIds[selectedCategory]

    const records = await Record.find({ categoryId: selectedCategoryId, userId }).populate('categoryId').lean().sort({ _id: 'asc' })

    records.forEach(record => {
      totalAmount += record.amount
    })

    res.render('index', { records, categories, totalAmount, selectedCategory })
  } catch (error) {
    console.warn(error)
  }

})


module.exports = router