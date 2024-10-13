const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');  // Import routes correctly
const userRoutes = require('./routes/userRoutes');  // Import routes correctly
const { protect, managerOnly } = require('./middleware/authMiddleware');

dotenv.config();

console.log('Environment Variables:');
console.log('MONGO_URI:', process.env.MONGO_URI); // Log the MongoDB URI
console.log('JWT_SECRET:', process.env.JWT_SECRET);


const app = express();

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI,)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

// Routes
app.use('/api/auth', authRoutes);  // Properly imported and used as middleware
app.use('/api/users', protect, userRoutes);  // Properly imported and used as middleware

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  

