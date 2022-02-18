
exports.up = function(knex, Promise) {
  return knex.schema
		.createTable('projects', tbl => {
			tbl.increments('project_id');
			tbl.string('project_name', 128).notNullable();
			tbl.string('project_description', 256);
			tbl.boolean('project_completed');
		})
		.createTable('tasks', tbl => {
			tbl.increments('task_id');
			tbl.string('task_description', 128).notNullable();
			tbl.string('task_notes', 256);
			tbl.boolean('task_completed');
			tbl.integer('project_id')
				.unsigned()
				.notNullable()
				.references('project_id')
				.inTable('projects');
		})
		.createTable('resources', tbl => {
			tbl.increments('resource_id');
			tbl.string('resource_name', 128).notNullable().unique();
			tbl.string('resource_description', 256);
		})
		.createTable('project_resources', tbl => {
			tbl.integer('project_id')
				.unsigned()
				.notNullable()
				.references('project_id')
				.inTable('projects');
			tbl.integer('resource_id')
				.unsigned()
				.notNullable()
				.references('resource_id')
				.inTable('resources');
			tbl.string('quantity', 128).notNullable();
			tbl.primary(['project_id', 'resource_id']);
		});
};

exports.down = function(knex, Promise) {
  return knex.schema
		.dropTableIfExists('project_resources')
		.dropTableIfExists('resources')
		.dropTableIfExists('tasks')
		.dropTableIfExists('projects');
};
