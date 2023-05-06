// DEPENDENCIES
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const jwt = require('json-web-token');
const bcrypt = require('bcrypt');
const cors = require('cors');
const path = require('path');
const { User } = require('./models');
const { Workout } = require('./models');

// MIDDLEWARE
require('dotenv').config();
// allow cross-origin requests
app.use(cors({ origin: '*', credentials: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// const usersRouter = require('./controllers/users_controller.js');
// const workoutsRouter = require('./controllers/workouts_controller.js');
// app.use('/api/workouts', workoutsRouter);

// app.use('/api/users', usersRouter);

// CONTROLLERS
const usersController = require('./controllers/users_controller.js');
app.use('/api/users', usersController);

// const workoutsController = require('./controllers/workouts_controller.js');
// app.use('/api/workouts', workoutsController);

// LISTEN
app.listen(8080, () => {
    console.log(`Server is running on port 8080`);
});

