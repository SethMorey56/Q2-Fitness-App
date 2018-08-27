
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {name: 'Albert', age: 29, gender: 'Male', weight: 145, height: 65, goalWt: 240}
      ]);
    });
};
