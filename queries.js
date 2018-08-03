const database = require('./database-connection.js')

module.exports = {
    allStudents() {
        return database('students')
    },
    studentsById(id){
        return database('students').where('id', id)
    },
    addStudent(student) {
        return database('students').insert(student).returning('*')
            .then((returnedArray) => returnedArray[0])
    },
    dropStudent(id){
        return database('students').where('id', id).delete()
    },
    updateName(id, students){
        return database('students').update(students).where('id', id).returning('*')
            .then(updatedUser => updatedUser[0])
    }
}