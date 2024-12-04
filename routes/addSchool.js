const express = require('express');
const router = express.Router();
const db = require('../config/dbConnection');

router.post('/', (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || typeof latitude !== 'number' || typeof longitude !== 'number') {
        return res.status(400).send('Invalid input: All fields are required and must be valid.');
    }

    const query = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    db.query(query, [name, address, latitude, longitude], (err) => {
        if (err) return res.status(500).send('Error saving to database.');
        res.status(201).send('School added successfully!');
    });
});

module.exports = router;
