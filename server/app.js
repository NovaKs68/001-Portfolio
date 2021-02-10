const express = require('express');
const bodyParser = require('body-parser');
const projectRoutes = require('./routes/project');
const path = require('path')

const app = express();

// Va rendre les informations exploitables
app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200'); // A changer avec les variables d'environnement
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// Permet de donner l'accès aux images
app.use('/modules/pictures', express.static(path.join(__dirname, 'modules/pictures')));

// Routes de l'application
app.use('/project', projectRoutes);

module.exports = app;
