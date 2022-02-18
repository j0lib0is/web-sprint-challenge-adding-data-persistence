const db = require('../../data/dbConfig');

// Models
async function addNew(project) {
	const constructedProject = {
		project_name: project.project_name,
		project_description: project.project_description,
		project_completed: project.project_completed == null ? false : project.project_completed
	};

	const sentProject = await db('projects').insert(constructedProject);

	const newProject = await db('projects').where('project_id', sentProject[0]);

	return {
		project_id: newProject[0].project_id,
		project_name: newProject[0].project_name,
		project_description: newProject[0].project_description,
		project_completed: newProject[0].project_completed == 0 ? false : true
	}
}

async function getAll() {
	const result = await db('projects');

	const projects = [];

	for (let project of result) {
		projects.push({
        project_id: project.project_id,
        project_name: project.project_name,
        project_description: project.project_description,
        project_completed: project.project_completed == 0 ? false : true
    });
	}

	return projects;
}

// Exports
module.exports = {
	addNew,
	getAll
};