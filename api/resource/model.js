const db = require('../../data/dbConfig');

// Models
async function addNew(resource) {
	const sent = await db('resources').insert(resource);
	
	const newResource = await db('resources').where('resource_id', sent[0]);
	console.log(newResource);
	return newResource;
}

function getAll() {
	return db('resources');
}

// Exports
module.exports = {
	addNew,
	getAll
};
