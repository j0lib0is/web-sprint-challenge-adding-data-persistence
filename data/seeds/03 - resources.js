exports.seed = function(knex, Promise) {
  return knex('resources').insert([
    { resource_name: 'Wood', resource_description: 'Lorem ipsum sit dolor' },
    { resource_name: 'Brick', resource_description: 'Lorem ipsum sit dolor' },
    { resource_name: 'Concrete', resource_description: 'Lorem ipsum sit dolor' },
    { resource_name: 'Steel', resource_description: 'Lorem ipsum sit dolor' },
    { resource_name: 'Bolts', resource_description: 'Lorem ipsum sit dolor' },
    { resource_name: 'Nails', resource_description: 'Lorem ipsum sit dolor' },
    { resource_name: 'Screws', resource_description: 'Lorem ipsum sit dolor' },
    { resource_name: 'Asphalt', resource_description: 'Lorem ipsum sit dolor' },
    { resource_name: 'Paint', resource_description: 'Lorem ipsum sit dolor' },
  ]);
};
