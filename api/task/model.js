const db = require('../../data/dbConfig');

// Models
async function addNew(task) {
	const constructedTask = {
		task_description: task.task_description,
		task_notes: task.task_notes,
		task_completed: task.task_completed == null ? false : task.task_completed,
		project_id: task.project_id
	}

	const sentTask = await db('tasks').insert(constructedTask);

	const newTask = await db('tasks')
		.join('projects', 'projects.project_id', 'tasks.project_id')
		.select('tasks.*', 'projects.*')
		.where('task_id', sentTask[0]);

	return {
		task_id: newTask[0].task_id,
		task_description: newTask[0].task_description,
		task_notes: newTask[0].task_notes,
		task_completed: newTask[0].task_completed == 0 ? false : true,
		project_id: newTask[0].project_id,
		project_name: newTask[0].project_name,
		project_description: newTask[0].project_description,
	}
}

async function getAll() {
	const result = await db('tasks')
		.join('projects', 'projects.project_id', 'tasks.project_id')
		.select('tasks.*', 'projects.*');

	const tasks = [];

	for (let task of result) {
		tasks.push({
			task_id: task.task_id,
			task_description: task.task_description,
			task_notes: task.task_notes,
			task_completed: task.task_completed == 0 ? false : true,
			project_id: task.project_id,
			project_name: task.project_name,
			project_description: task.project_description
		})
	}

	return tasks;
}

// Exports
module.exports = {
	addNew,
	getAll
};