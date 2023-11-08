const express = require("express")
const cors = require("cors")
const dbConnection = require("./config/dbConnection")
const app = express()
require("dotenv").config()
const routes =require("./routes")
const PORT = process.env.PORT

// middlewares
app.use(express.json())
app.use(cors())
app.use(routes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const server = () => {
  dbConnection()
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  })
}

server()