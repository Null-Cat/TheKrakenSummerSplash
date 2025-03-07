const compression = require('compression')
const express = require('express')
const app = express()

const port = process.env.PORT || 8000

app.use(compression())
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
