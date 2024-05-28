const mongoose = require('mongoose')

async function connectMongoDB(url) {
    // connection 
    return mongoose.connect(url)

}

module.exports = {
    connectMongoDB
}