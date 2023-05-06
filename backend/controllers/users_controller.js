const express = require('express');
const users = express.Router();
const db = require('../models');
const jwt = require('json-web-token');
const bcrypt = require('bcrypt');
const { User } = db;
// const authController = require('./auth_controller.js');


// POST user (create user in supabase table)
// users.post('/', async (req, res) => {
//     try {
//         // code for creating user
//         const { username, password, email } = req.body;
//         const user = await User.create({ username, password, email });

//         // insert user in supabase table
//         const { data, error } = await supabase
//             .from('users')
//             .insert([
//                 { username: username, password: password, email: email }
//             ])
//         if (error) throw error;
//         res.status(201).json(data);
//     } catch (err) {
//         res.status(500).send("Error creating user")
//         console.log(err)
//     }
// })

// // route for retrieving user
// users.get('/user', authController.authenticate, (req, res) => {
//     res.json(req.user);
// });

// POST route for user login
users.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        // retrieve user from database
        const user = await User.findOne({ where: { username: username } });
    
    // if no user found, send error response (user not found)
    if (!user) {
        console.log('no user found')
        return res.status(401).json({error: 'Invalid username'});
    }
console.log(password)
    // if user found, check password against hashed password
    const hashedPassword = await bcrypt.hash(password,10);
    console.log(hashedPassword)
    console.log(user.password)
    // if password is not a match, send error response (invalid password)
    if(!await bcrypt.compare(password, user.password)) {
        console.log('password not matched')
        console.log(username, password)
        return res.status(401).json({ error: 'Incorrect password'});
    }

    // if password is correct, create token with user id as payload
    const token = jwt.encode(process.env.JWT_SECRET, { userId: user.id });
console.log(token)
    // return token to client
    res.status(200).json({ user: user, token: token.value });
} catch (err) {
    res.status(500).json({ error: 'Error logging in' });
}
});


// POST route for user signup
users.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;
console.log(username, password, email)
    try {
        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

            // create user in local database
            await User.create({
                username: username,
                password: hashedPassword,
                email: email
            });

            // create token with user id as payload
            // const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

            // return token to client
            res.status(200).json({ message: 'User created' });
        }
        catch (err) {
            res.status(400).json({ error: 'Error creating user' })
        }
    });

//         // create user in supabase table
//         const user = await user.create({
//             username: username,
//             password: matchedPassword,
//             email: email
//         });

//         // create token with user id as payload
//         const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

//         // return token to client
//         res.status(200).json({ token: token });
//     }
//     catch (err) {
//         res.status(400).send('Error creating user');
//     }
// });



module.exports = users;

// GET user
// users.get('/', async (req, res) => {
//     try {
//         // code for retrieving user
//         const found_users = await User.findAll();
//         res.status(200).json(found_users);
//     } catch (err) {
//         res.status(500).send("Error retrieving users")
//         console.log(err)
//     }
// })