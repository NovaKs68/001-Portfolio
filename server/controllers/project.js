const db = require('../config/db.config.js');
const Project = db.project;

exports.create = (req, res, next) => {
    Project.create({
        name: req.body.name,
        age: req.body.age
    })
        .then(project => {
            res.status(201).json(project);
        })
        .catch(error => res.status(400).send(error));
};

exports.getAll = (req, res, next) => {
    Project.findAll()
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => res.status(400).send(error));
};

exports.getOne = (req, res, next) => {
    Project.findAll()
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => res.status(400).send(error));
};
