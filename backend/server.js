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
// import { createClient } from '@supabase/supabase-js'
const usersRouter = require('./controllers/users_controller.js');
// const workoutsRouter = require('./controllers/workouts_controller.js');
// app.use('/api/workouts', workoutsRouter);
require('dotenv').config();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');
const cors = require('cors');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');
const { User } = require('./models');
const { Workout } = require('./models');




// MIDDLEWARE
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/users', usersRouter);

// CONTROLLERS
const usersController = require('./controllers/users_controller.js');
app.use('/api/users', usersController);

// const workoutsController = require('./controllers/workouts_controller.js');
// app.use('/api/workouts', workoutsController);





// LISTEN
app.listen(8080, () => {
    console.log(`Server is running on port 8080`);
});

