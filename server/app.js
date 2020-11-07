const express = require('express');
const bodyParser = require('body-parser');
const projectRoutes = require('./routes/project');

const app = express();

const db = require('./config/db.config.js');

// force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '4200'); // Peut-être a changer par localhost....
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Va rendre les informations exploitables
app.use(bodyParser.json());

// Routes de l'application
app.use('/api/project', projectRoutes);

module.exports = app;
