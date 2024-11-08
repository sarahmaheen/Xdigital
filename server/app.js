// app.js
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/dbConnect.js';
import authRoutes from './routes/auth.js';

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json()); // for parsing application/json

// Routes
app.use('/api', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
