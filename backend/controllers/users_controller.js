const users = require('express').Router();
const db = require('../models');
const { User } = db;

// GET user
users.get('/', async (req, res) => {
    try {
        // code for retrieving user
        const found_users = await User.findAll();
        res.status(200).json(found_users);
    } catch (err) {
        res.status(500).send("Error retrieving users")
        console.log(err)
    }
})

module.exports = users;