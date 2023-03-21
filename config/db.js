const mongoose = require("mongoose");

const connection = mongoose.createConnection("mongodb://localhost:27017/pSystemsTaller").on('open',()=>{
    console.log("MongoDB exito");
}).on('error',()=>{
    console.log('MongoDB connection error');
});

module.exports = connection;