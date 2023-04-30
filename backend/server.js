// // DEPENDENCIES
// const express = require('express');
// const cors = require('cors');
// const app = express();
// const { sequelize } = require('sequelize');
// const path = require('path');

// // MIDDLEWARE
// require('dotenv').config();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));



// const workoutsController = require('./controllers/workouts_controller.js');
// app.use('/api/workouts', workoutsController);

// // LISTEN
// app.listen(4000, () => {
//     console.log(`Server is running on port 4000`);
// });

// DEPENDENCIES
const express = require('express');
const cors = require('cors');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');



// MIDDLEWARE
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CONTROLLERS
const usersController = require('./controllers/users_controller.js');
app.use('/api/users', usersController);

// LISTEN
app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});

console.log("hello world")