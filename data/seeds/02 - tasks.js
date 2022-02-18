exports.seed = function(knex, Promise) {
  return knex('tasks').insert([
    { task_description: 'Lay foundation', task_notes: 'Lorem ipsum sit dolor', task_completed: false, project_id: 1 },
    { task_description: 'Build structure', task_notes: 'Lorem ipsum sit dolor', task_completed: false, project_id: 1 },
    { task_description: 'Add roof', task_notes: 'Lorem ipsum sit dolor', task_completed: false, project_id: 1 },
    { task_description: 'Stabalize', task_notes: 'Lorem ipsum sit dolor', task_completed: false, project_id: 2 },
    { task_description: 'Build', task_notes: 'Lorem ipsum sit dolor', task_completed: false, project_id: 2 },
    { task_description: 'Test structural durability', task_notes: 'Lorem ipsum sit dolor', task_completed: false, project_id: 2 },
    { task_description: 'Level ground', task_notes: 'Lorem ipsum sit dolor', task_completed: false, project_id: 3 },
    { task_description: 'Pour asphalt', task_notes: 'Lorem ipsum sit dolor', task_completed: false, project_id: 3 },
    { task_description: 'Let dry', task_notes: 'Lorem ipsum sit dolor', task_completed: false, project_id: 3 }
  ]);
};
