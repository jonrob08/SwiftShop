const { default: mongoose } = require('mongoose')
mongoose.set('strictQuery', true);

const dbConnect = () => {
    try {
        const connection = mongoose.connect(process.env.MONGO_CONNECTION_STRING)
        console.log("Connected to SwiftShop DB")
    } catch (error) {
        console.log("DB error: ", error)
    }
}

module.exports = dbConnect;