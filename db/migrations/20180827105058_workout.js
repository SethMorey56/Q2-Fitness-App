
exports.up = function(knex, Promise) {
  return knex.schema.createTable('workout', (table) => {
    table.increments();
    table.string('bodyPart')
    table.string('workout')
    table.text('desc')
    table.integer('user_id')
      .references('id')
      .inTable('user')
      .onDelete('cascade')
      .index();
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('workout');
};
