const mongoose = require('mongoose');


async function dbConnection() {

    try {
        await mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/shopee_clone',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connect successfully...')
        
    } catch (error) {
        console.log('connect error!!!')
    }

}

module.exports = { dbConnection }
