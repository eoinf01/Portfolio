const express = require('express')

const db = require("./configs/db.config")
const router = require("./routes/portfolioRoutes")
const app = express()
const cors = require("cors")
const path = __dirname + '/dist/'
const port = 3000 || process.env.PORT


var corsOptions = {
    origin: 'http://127.0.0.1:5173',
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
app.use(express.static('../client/dist/'))

app.listen(port, ()=>{
    console.log("Server running on port ", port)
})

module.exports = app