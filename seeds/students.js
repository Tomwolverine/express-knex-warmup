
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
        firstName: 'Tom', 
        lastName: 'Clukies', 
        previousOccupation: 'Fortune Teller',
        hometown: 'Imaginationland'
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
        },
        {
        firstName: 'Mark', 
        lastName: 'Newcomb', 
        previousOccupation: 'Already was a web developer yo', 
        hometown: 'Hays, KS'
        },
        {
        firstName: 'Kim', 
        lastName: 'Hermosillo', 
        previousOccupation: 'Server', 
        hometown: 'Denver'
        },
        {
        firstName: 'Tom', 
        lastName: 'Lee', 
        previousOccupation: 'Sales Manager', 
        hometown: 'Colorado Springs'
        },
        {
        firstName:'Ben',
        lastName:'Austin',
        previousOccupation:'Social Work',
        hometown: 'Denver'
        },
        {
        firstName:'Josh',
        lastName:'Rob',
        previousOccupation:'professional alligator wrangler',
        hometown:'Poquoson'
        },
        {
        firstName:'Matt',
        lastName:'Riach',
        previousOccupation:'Map Seller',
        hometown:'Liverpool'
        },
        {
        firstName:'Michael',
        lastName:'Coons',
        previousOccupation:'Dirctor of IT',
        hometown:'Bloomington, IN'
        },
        {
        firstName:'Natile',
        lastName:'Todd',
        previousOccupation:'Recruiter',
        hometown:'Anchorage'  
        },
        {
        firstName:'Danny',
        lastName:'Pifer',
        previousOccupation:'QA Tester',
        hometown:'San Franciso'
        },
        {
        firstName:'Ryan',
        lastName:'McCrory',
        previousOccupation:'U.S.Army',
        hometown:'Denver'
        },
        {
        firstName:'Matt',
        lastName:'Huston',
        previousOccupation:'Valet',
        hometown:'Littleton, CO'
        },
        {
        firstName:'Levi',
        lastName:'Loveless',
        previousOccupation:'Navy',
        hometown:'Long Beach'
        }
        ]);
    });
};
