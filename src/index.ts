import { logger } from './utils'
const path = require('path')
const express = require('express')

const PORT = process.env.PORT || 5000

const app = express()
  .set('port', PORT)
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')

// Static public files
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.send('')
})

app.get('/api/id/:id', function (req, res) {
  const id = parseInt(req.params.id).toString()
  const data = { id }

  res.send(data)
})

app.listen(app.get('port'), function () {
  console.log('Node app is running on port', app.get('port'))
})
