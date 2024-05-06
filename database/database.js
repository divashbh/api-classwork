// write a function
// imporing package
// Always export the function

//1. Importing the package
const mongoose = require('mongoose');

// 2. Creating a function
const connectDB = () => {
    mongoose.connect(process.env.MONGODB_CLOUDURL).then(()=>{
        console.log("Database Connected Successfully")
    })
}

// 3. Exporting the function
module.exports = connectDB;