// DEPENDENCIES
const express = require('express');
const cors = require('cors');
const app = express();
const { sequelize } = require('sequelize');
const path = require('path');

// MIDDLEWARE
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// LISTEN
app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});