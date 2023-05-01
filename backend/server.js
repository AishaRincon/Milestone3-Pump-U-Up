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
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
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

const workoutsController = require('./controllers/workouts_controller.js');
app.use('/api/workouts', workoutsController);

// POST route for user login
app.post('/api/login', async (req, res) => {
    const { username, password } = req.body;
    // retrieve user from database
    const user = await User.findOne({ where: { username: username } });
    
    // if no user found, send error response (user not found)
    if (!user) {
        return res.status(401).send('User not found');
    }

    // if user found, check password against hashed password
    const matchedPassword = await bcrypt.compare(password, user.password);

    // if password is not a match, send error response (invalid password)
    if (!matchedPassword) {
        return res.status(401).send('Invalid password');
    }

    // if password is correct, create token with user id as payload
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

    // return token to client
    res.status(200).json({ token: token });
});

// LISTEN
app.listen(4000, () => {
    console.log(`Server is running on port 4000`);
});

console.log("hello world")