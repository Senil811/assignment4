const express = require('express');
const mongoose = require('mongoose');
const productController = require('./src/Controller/ProductController');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = 'mongodb+srv://senil8110:e1D0umTj1gxOmsj8@senil.my0v2wz.mongodb.net/assignment4?retryWrites=true&w=majority&appName=Senil';

// Middleware
app.use(express.json());

// Routes
app.use('/api', productController);

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Start server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => console.error('Error connecting to MongoDB:', err));

