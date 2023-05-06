const users = require('express').Router();
const db = require('../models');
const { User } = db;

// GET user workouts
Workout.get('/', async (req, res) => {
    try {
        // code for retrieving workouts created by user
        // const found_workouts = await Workout.findAll();
        const found_workouts = await Workout.findAll({
            where: {
                userId: req.user.id
            }
        });
        res.status(200).json(found_workouts);
    } catch (err) {
        res.status(500).json({ error: 'Error retrieving workouts' })
        console.log(err)
    }
})


module.exports = WorkoutList;
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

// module.exports = users;