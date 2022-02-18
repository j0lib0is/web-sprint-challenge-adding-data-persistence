const db = require('../../data/dbConfig');

// Models
async function addNew(resource) {
	const sentResource = await db('resources').insert(resource);
	
	const newResource = await db('resources').where('resource_id', sentResource[0]);
	
	return {
		resource_name: newResource[0].resource_name
	};
}

function getAll() {
	return db('resources');
}

// Exports
module.exports = {
	addNew,
	getAll
};
