const express = require('express');
const users = express.Router();
const db = require('../models');
const jwt = require('json-web-token');
const bcrypt = require('bcrypt');
const { User } = db;


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

// POST route for user login
users.post('/login', async (req, res) => {
    try {
    const { username, password } = req.body;
    // retrieve user from database
    const user = await User.findOne({ where: { username: username } });
    
    // if no user found, send error response (user not found)
    if (!user) {
        return res.status(401).json({error: 'Invalid username'});
    }

    // if user found, check password against hashed password
    const matchedPassword = await bcrypt.compare(password, user.password);

    // if password is not a match, send error response (invalid password)
    if (!matchedPassword) {
        return res.status(401).json({ error: 'Incorrect password'});
    }

    // if password is correct, create token with user id as payload
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

    // return token to client
    res.status(200).json({ token: token });
} catch (err) {
    res.status(500).json({ error: 'Error logging in' });
}
});

// route for user signup
// app.post('/api/signup', async (req, res) => {
//     const { username, password, email } = req.body;

//     try {
//         // hash password
//         const matchedPassword = await bcrypt.hash(password, 10);
// POST route for user signup
users.post('/signup', async (req, res) => {
    const { username, password, email } = req.body;

    try {
        // hash password
        const matchedPassword = await bcrypt.hash(password, 10);

        // insert user in supabase table
            const {data, error} = await supabase
            .from('users')
            .insert([
                { username: username, password: password, email: email }
            ]);
            if (error) throw error;

            // create user in local database
            const user = await User.create({
                username: username,
                password: matchedPassword,
                email: email
            });

            // create token with user id as payload
            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

            // return token to client
            res.status(200).json({ token: token });
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