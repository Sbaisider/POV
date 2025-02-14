const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
require('dotenv').config();

const app = express();

connectDB();

app.use(express.json({ extended: false }));

app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

module.exports = app;