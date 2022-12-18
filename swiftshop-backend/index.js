const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const PORT = process.env.PORT || 3002

app.listen(PORT, () => {
    console.log(`You are now listening to the smooth sounds of PORT ${PORT}`)
})