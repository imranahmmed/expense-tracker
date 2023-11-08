const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB Connected")
    } catch (error) {
        console.log("DB Connection Failed")
    }
}

module.exports = dbConnection