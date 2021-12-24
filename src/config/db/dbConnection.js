const mongoose = require('mongoose');

async function dbConnection() {

    try {
        await mongoose.connect('mongodb://localhost:27017/shopee_clone')
        console.log('connect successfully...')
        
    } catch (error) {
        console.log('connect error!!!')
    }

}

module.exports = { dbConnection }