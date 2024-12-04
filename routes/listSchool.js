const express = require('express');
const router = express.Router();
const db = require('../config/dbConnection');

router.get('/', (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).send('User latitude and longitude are required.');
    }

    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    const query = 'SELECT * FROM schools';
    db.query(query, (err, results) => {
        if (err) return res.status(500).send('Error fetching data.');

        const sortedSchools = results.map(school => {
            const distance = Math.sqrt(
                Math.pow(school.latitude - userLat, 2) +
                Math.pow(school.longitude - userLon, 2)
            );
            return { ...school, distance };
        }).sort((a, b) => a.distance - b.distance);

        res.json(sortedSchools);
    });
});

module.exports = router;
