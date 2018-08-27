
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workout').del()
    .then(function () {
      // Inserts seed entries
      return knex('workout').insert([
        {bodyPart: 'Chest', workout: 'Bench Press', desc: '**filler**', user_id: 1},
        {bodyPart: 'Back', workout: 'Lat Pulldowns', desc: '**filler**', user_id: 1},
        {bodyPart: 'Leg', workout: 'Squat', desc: '**filler**', user_id: 1}
      ]);
    });
};
