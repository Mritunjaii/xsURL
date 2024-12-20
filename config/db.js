const mongoose = require('mongoose');

function connectToDb() {
    const dbUrl = process.env.MONGO_URL.replace('<db_password>', process.env.DB_PASSWORD);
    mongoose
        .connect(dbUrl)
        .then(() => {
            console.log("Connected to the database successfully");
        })
        .catch((error) => {
            console.error("Error connecting to the database:", error.message);
        });
}

module.exports = connectToDb;
