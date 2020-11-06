const express = require('express');
const router = express.Router();

const projectControllers = require('../controllers/project');

router.post('/', projectControllers.creatProject);
router.get('/', projectControllers.getAllProjects);
router.get('/:id', projectControllers.getOneProject);

module.exports = router
