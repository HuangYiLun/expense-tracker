const express = require('express')
const router = express.Router()

const Category = require('../../models/category')
const Record = require('../../models/record')

//定義首頁路由
router.get('/new', async (req, res) => {
  try {

    const categories = await Category.find().lean().sort({ _id: 'asc' })

    res.render('new', { categories })

  } catch (error) {
    console.warn(`routes/modules/records/get:${error}`)
  }

})

router.get('/:records_id/edit', async (req, res) => {
  const _id = req.params.records_id

  try {
    const categories = await Category.find().lean().sort({ _id: 'asc' })

    const record = await Record.findOne({ _id })
      .lean()
      .populate('categoryId')

    record.date = record.date.toLocaleDateString('zu-Za')

    res.render('edit', { record, categories })

  } catch (error) {
    console.warn(`routes/modules/records/edit:${error}`)
  }

})

module.exports = router