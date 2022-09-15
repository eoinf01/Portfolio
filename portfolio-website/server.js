const express = require('express')
const app = express()
const path = __dirname + '/dist/'
app.use(express.static(path))
app.listen(3000)