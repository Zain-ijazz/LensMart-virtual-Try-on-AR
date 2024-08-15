const mongoose = require('mongoose');

// Connection URI
const uri = 'mongodb+srv://zantek:comsats@cluster0.nphbau9.mongodb.net/';

// Database and Collection names
const dbName = 'comsats';
const collectionName = 'products';

// Sample data schema
const dataSchema = new mongoose.Schema({
  title: String,
  price: Number,
  descrp: String,
  image: String,
});

const DataModel = mongoose.model(collectionName, dataSchema);

// Sample data to be inserted
const newData = {
  title: 'black mamba Glasses',
  price: 2100,
  descrp: 'ok glsses',
  image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vintage-vc-s15797-c2-sunglasses_g_8580_16_08_2023.jpg',
};

// Connect to MongoDB and insert the data
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');

    // Create and save the new data
    const newDataInstance = new DataModel(newData);
    newDataInstance.save()
      .then(() => {
        console.log('Data inserted successfully');
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        // Close the connection
        mongoose.connection.close();
      });
  })
  .catch((err) => {
    console.error(err);
  });



 


