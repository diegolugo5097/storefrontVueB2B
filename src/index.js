const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use(express.static('public'))

// route
app.use('/', require('./routes/index'))

const port = 5000
app.listen(port, () => {
  console.log(`Run server Successfully ${port}`)
})
