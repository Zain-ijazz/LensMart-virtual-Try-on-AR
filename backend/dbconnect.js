

const mongoose = require('mongoose');
const connection_url = "mongodb+srv://zantek:comsats@cluster0.nphbau9.mongodb.net/";


mongoose.connect(connection_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Successfully connected to the Database!");
  })
  .catch((err) => {
    console.error("Failed to connect to the database. Error:", err);
  });

module.exports = mongoose;


