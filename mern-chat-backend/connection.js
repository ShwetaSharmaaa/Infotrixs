// const mongoose = require('mongoose');
// require('dotenv').config();

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.0xtuhde.mongodb.net/Chatapp?retryWrites=true&w=majority`, () =>{
//     console.log('Connected to Mongodb');
// })

const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.0xtuhde.mongodb.net/chatApp?retryWrites=true&w=majority`)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
});
