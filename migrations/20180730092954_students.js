
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', student => {
      student.increments('id');
      student.string('firstName');
      student.string('lastName');
      student.string('previousOccupation');
      student.string('hometown');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students');
};
