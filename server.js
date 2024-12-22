require('dotenv').config()

const express = require('express')
const connectToDB = require ('./database/db')
const bookRoutes = require('./routes/book-routes.js')

const app = express()
const PORT  = process.env.PORT||3000

connectToDB()

app.use(express.json())

app.use('/api/books',bookRoutes)

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})