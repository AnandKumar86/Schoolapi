const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/dbConnection');
const addSchoolRoutes = require('./routes/addSchool');
const listSchoolsRoutes = require('./routes/listSchool');

const app = express();
app.use(bodyParser.json());


app.use('/addSchool', addSchoolRoutes);
app.use('/listSchools', listSchoolsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


