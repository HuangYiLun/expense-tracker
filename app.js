const express = require('express')
const exhbs = require('express-handlebars')

const routes = require('./routes')
require('./config/mongoose')

const app = express()

app.engine('hbs', exhbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(routes)

app.listen(3000, () => {
  console.log('app is running on http:localhost:3000')
})