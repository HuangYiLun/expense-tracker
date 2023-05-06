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

//新增支出
router.post('/', async (req, res) => {
  const userId = req.user._id
  const { name, date, category, amount } = req.body
  try {
    const mongoCategory = await Category.findOne({ name: category }).lean().sort({ _id: 'asc' })

    await Record.create({
      name,
      date,
      amount,
      userId,
      categoryId: mongoCategory._id,
    })
    res.redirect('/')

  } catch (error) {
    console.warn(error)
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

router.put('/:records_id', async (req, res) => {
  const userId = req.user._id
  const _id = req.params.records_id
  const { name, date, category, amount } = req.body

  try {
    const mongoCategory = await Category.findOne({ name: category }).lean().sort({ _id: 'asc' })

    const update = { name, date, amount, categoryId: mongoCategory._id, userId }

    await Record.findOneAndUpdate({ _id, userId }, update, { new: true })

    res.redirect('/')

  } catch (error) {
    console.warn(error)
  }


})

module.exports = router