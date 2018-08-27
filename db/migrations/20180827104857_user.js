
exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', (table) => {
    table.increments();
    table.string('name')
    table.integer('age')
    table.string('gender')
    table.integer('weight')
    table.integer('height')
    table.integer('goalWt')
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
