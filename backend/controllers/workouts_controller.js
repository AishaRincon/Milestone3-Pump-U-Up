const users = require('express').Router();
const db = require('../models');
const { User } = db;

// GET user workouts