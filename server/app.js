const express = require('express')

const db = require("./configs/db.config")
const router = require("./routes/portfolioRoutes")
const app = express()
const cors = require("cors")
const path = __dirname + '/dist/'
const port = 3000 || process.env.PORT

const origins = process.env.ORIGIN_URL || ""

var corsOptions = {
    origin: origins.split(',').map(newOrigin=>newOrigin),
  }


app.use(cors(corsOptions))

db.mongoose.connect(db.url)
.then(()=>{
    console.log("Database connection ")
})
.catch((err)=>{
    console.log(err)
})

app.use('/',router)

app.listen(port, ()=>{
    console.log("Server running on port ", port)
})

module.exports = app