let mongoose = require('mongoose')
require('dotenv').config()


let connnectToDb = async () => {
    let checkConnection = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })


    try {
        if (checkConnection) {
            console.log('connected to db')
        }

        if (!checkConnection) {
            console.log(`failed to connect`)
        }
    } catch (err) {
        throw err
    }
}


module.exports = connnectToDb