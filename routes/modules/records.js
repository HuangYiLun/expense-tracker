const express = require('express')
const router = express.Router()

const Category = require('../../models/category')

//定義首頁路由
router.get('/', async (req, res) => {
  try {

    const categories = await Category.find().lean().sort({ _id: 'asc' })

    res.render('new', { categories })

  } catch (error) {
    console.warn(`routes/modules/records/get:${error}`)
  }

})

module.exports = router