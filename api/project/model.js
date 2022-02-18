const db = require('../../data/dbConfig');

// Models
async function addNew(project) {
	const newProj = await db('projects').insert(project);
	return db('projects').where('project_id', project.project_id);
}

async function getAll() {
	const result = await db('projects');

	
}

// Exports
module.exports = {
	addNew,
	getAll
};