const express = require('express');
const mongoose = require('mongoose');
const addressesRouter = require('./routes/addresses');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3003;

// Middleware
app.use(express.json());
app.use(cors()); // Enable CORS

// Connect to MongoDB
mongoose.connect(process.env.DB_URI, {
    dbName: "gsgtest",
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error.message);
  });

// Routes
app.use('/api/addresses', addressesRouter);

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
