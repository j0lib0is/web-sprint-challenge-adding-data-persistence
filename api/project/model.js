const db = require('../../data/dbConfig');

// Models
async function addNew(project) {
	const newProj = await db('projects').insert(project);
	return db('projects').where('project_id', project.project_id);
}

function getAll() {
	return db('projects');
}

// Exports
module.exports = {
	addNew,
	getAll
};