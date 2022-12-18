const express = require('express')
const dbConnect = require('./config/dbConnect')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3002
dbConnect();
const authRouter = require('./routes/auth')
app.use('/', (req, res) => {
    console.log('Hello from the server!')
})

app.use('/api/user', authRouter)





app.listen(PORT, () => {
    console.log(`You are now listening to the smooth sounds of PORT ${PORT}`)
})