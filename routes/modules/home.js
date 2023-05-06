const express = require('express')
const router = express.Router()

const Records = require('../../models/record')
const Category = require('../../models/category')

//定義首頁路由
router.get('/', async (req, res) => {
  try {
    //等login功能完成後修改
    const userId = req.user._id
    
    let totalAmount = 0

    const categories = await Category.find().lean().sort({ _id: 'asc' })
    const records = await Records.find({ userId }).populate('categoryId').lean().sort({ _id: 'asc' })

    //計算總金額
    records.forEach(record => {
      totalAmount += record.number
    })

    res.render('index', { records, categories, totalAmount })

  } catch (error) {
    console.warn(`routes/modules/home/get:${error}`)
  }

})

module.exports = router