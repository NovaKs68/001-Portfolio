const express = require('express');
const router = express.Router();

const projectControllers = require('../controllers/project');
const multer = require('../middleware/multer-config');

router.post('/', multer, projectControllers.create);
router.get('/', projectControllers.getAll);
router.get('/:id', projectControllers.getOne);

module.exports = router
