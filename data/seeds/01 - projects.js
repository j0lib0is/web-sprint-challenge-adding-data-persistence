exports.seed = function(knex, Promise) {
  return knex('projects').insert([
    { project_name: 'Build house', project_description: 'Lorem ipsum sit dolor', project_completed: false },
    { project_name: 'Build bridge', project_description: 'Lorem ipsum sit dolor', project_completed: false },
    { project_name: 'Build road', project_description: 'Lorem ipsum sit dolor', project_completed: false }
  ]);
};
