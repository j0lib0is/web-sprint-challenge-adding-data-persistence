exports.seed = function(knex, Promise) {
  return knex('project_resources').insert([
    { project_id: 1, resource_id: 1, quantity: '1' },
    { project_id: 1, resource_id: 2, quantity: '2' },
    { project_id: 1, resource_id: 3, quantity: '3' },
    { project_id: 2, resource_id: 4, quantity: '4' },
    { project_id: 2, resource_id: 5, quantity: '5' },
    { project_id: 2, resource_id: 6, quantity: '6' },
    { project_id: 3, resource_id: 7, quantity: '7' },
    { project_id: 3, resource_id: 8, quantity: '8' },
    { project_id: 3, resource_id: 9, quantity: '9' },
  ]);
};
