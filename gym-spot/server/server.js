const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create a new Express app
const app = express();

// Enable CORS
app.use(cors());

// Parse incoming request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error(error);
});

// Mount the authentication router
app.use('/auth', authRouter);

// Start the server
const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

