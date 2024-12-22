const mongoose = require('mongoose')

const connectToDB = async()=>{
    try{
        await mongoose.connect(
         'mongodb://localhost:27017/bookstore',
         console.log("Connection successfull")   
        )

    }catch(error){
        console.error("Connection failed",error)
         process.exit(1)
    }
}

module.exports = connectToDB