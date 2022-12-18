const bodyParser = require('body-parser')
const express = require('express')
const dbConnect = require('./config/dbConnect')
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3002
const authRouter = require('./routes/auth')
const app = express()

dbConnect();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/user', authRouter)



app.listen(PORT, () => {
    console.log(`You are now listening to the smooth sounds of PORT ${PORT}`)
})