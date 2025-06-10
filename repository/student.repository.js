const Student = require('../models/student.model');

class StudentRepository {
    async findAll() {
        return await Student.find();
    }

    async findByEmail(email) {
        return await Student.findOne({ email });
    }

    async findByFirstname(firstname) {
        return await Student.findOne({ firstname });
    }

    async create(studentData) {
        const student = new Student(studentData);
        return await student.save();
    }

    async update(email, studentData) {
        return await Student.findOneAndUpdate(
            { email },
            studentData,
            { new: true }
        );
    }

    async delete(email) {
        return await Student.findOneAndDelete({ email });
    }
}

module.exports = new StudentRepository();