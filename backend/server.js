// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// Load environment variables from .env file
dotenv.config();

// Initialize the Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('tiny'));

// Database connection
mongoose.connect(process.env.MONGO_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define a simple route
app.get('/', (req, res) => {
    res.send('Welcome to the HobbyConnect API!');
});

// Sample route for user registration (to be expanded)
app.post('/api/register', (req, res) => {
    // Handle user registration logic
    res.send('User registration endpoint');
});

// Sample route for user login (to be expanded)
app.post('/api/login', (req, res) => {
    // Handle user login logic
    res.send('User login endpoint');
});

// Define the port number from environment variables or default to 5000
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
