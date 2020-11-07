const express = require('express');
const router = express.Router();

const projectControllers = require('../controllers/project');

router.post('/', projectControllers.create);
router.get('/', projectControllers.getAll);
router.get('/:id', projectControllers.getOne);

module.exports = router
