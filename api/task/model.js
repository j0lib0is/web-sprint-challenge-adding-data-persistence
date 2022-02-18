const db = require('../../data/dbConfig');

// Models
async function addNew(task) {
	const newTask = await db('tasks').insert(task);
	return db('tasks').where('task_id', task.task_id);
}

function getAll() {
	return db('tasks');
}

// Exports
module.exports = {
	addNew,
	getAll
};