const db = require('../../data/dbConfig');

// Models
async function addNew(resource) {
	const newResource = await db('resources').insert(resource);
	return db('resources').where('resource_id', resource.resource_id);
}

function getAll() {
	return db('resources');
}

// Exports
module.exports = {
	addNew,
	getAll
};