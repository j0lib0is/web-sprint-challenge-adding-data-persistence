// Imports
const express = require('express');
const tasks = require('./model');
const router = express.Router();

// Endpoints
router.post('/', (req, res, next) => {
	tasks.addNew(req.body)
		.then(task => {
			res.status(201).json(task);
		})
		.catch(next);
})

router.get('/', (req, res, next) => {
	tasks.getAll()
		.then(tasks => {
			res.json(tasks);
		})
		.catch(next);
})

// Exports
module.exports = router;