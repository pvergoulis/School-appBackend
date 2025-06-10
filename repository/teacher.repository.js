const Teacher = require('../models/teacher.model');

class TeacherRepository {
    async findAll() {
        return await Teacher.find();
    }

    async findByVat(vat) {
        return await Teacher.findOne({ vat });
    }

    async findByFirstname(firstname) {
        return await Teacher.findOne({ firstname });
    }

    async findByEmail(email) {
        return await Teacher.findOne({ email });
    }

    async create(teacherData) {
        const teacher = new Teacher(teacherData);
        return await teacher.save();
    }

    async update(vat, teacherData) {
        return await Teacher.findOneAndUpdate(
            { vat },
            teacherData,
            { new: true }
        );
    }

    async deleteByVat(vat) {
        return await Teacher.findOneAndDelete({ vat });
    }

    async deleteByEmail(email) {
        return await Teacher.findOneAndDelete({ email });
    }
}

module.exports = new TeacherRepository();