// Imports
const express = require('express');
const resources = require('./model');
const router = express.Router();

// Endpoints
router.post('/', (req, res, next) => {
	resources.addNew(req.body)
		.then(resource => {
			res.status(201).json(resource);
		})
		.catch(next);
})

router.get('/', (req, res, next) => {
	resources.getAll()
		.then(resources => {
			res.json(resources);
		})
		.catch(next);
})

// Exports
module.exports = router;