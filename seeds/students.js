
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {
        firstName: 'Will',
        lastName: 'Kirkhope',
        previousOccupation: 'Personal Trainer',
        hometown: 'San Diego'
        },
        {
        firstName: 'Will', 
        lastName: 'Kirkhope', 
        previousOccupation: 'Personal Trainer',
        hometown: 'San Diego'
        },
        {
        firstName: 'Josh', 
        lastName: 'Lovely', 
        previousOccupation: 'Fortune Teller', 
        hometown: 'Imaginationland'
        },
        {
        firstName: 'R.J.', 
        lastName: 'Kirkhope', 
        previousOccupation: 'Stuntman', 
        hometown: 'San Diego'
        }
        ]);
    });
};
