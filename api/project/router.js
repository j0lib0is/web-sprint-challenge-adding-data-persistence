// Imports
const express = require('express');
const projects = require('./model');
const router = express.Router();

// Endpoints
router.post('/', (req, res, next) => {
	projects.addNew(req.body)
		.then(project => {
			res.status(201).json(project);
		})
		.catch(next);
})

router.get('/', (req, res, next) => {
	projects.getAll()
		.then(projects => {
			res.json(projects);
		})
		.catch(next);
})

// Exports
module.exports = router;