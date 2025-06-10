const teacherRepository = require('../repository/teacher.repository');
const { TeacherDTO, CreateTeacherDTO, UpdateTeacherDTO } = require('../dto/teacher.dto');

class TeacherService {
    async getAllTeachers() {
        const teachers = await teacherRepository.findAll();
        return teachers.map(teacher => new TeacherDTO(teacher));
    }

    async getTeacherByVat(vat) {
        const teacher = await teacherRepository.findByVat(vat);
        return teacher ? new TeacherDTO(teacher) : null;
    }

    async getTeacherByFirstname(firstname) {
        const teacher = await teacherRepository.findByFirstname(firstname);
        return teacher ? new TeacherDTO(teacher) : null;
    }

    async getTeacherByEmail(email) {
        const teacher = await teacherRepository.findByEmail(email);
        return teacher ? new TeacherDTO(teacher) : null;
    }

    async createTeacher(teacherData) {
        const createTeacherDTO = new CreateTeacherDTO(teacherData);
        const teacher = await teacherRepository.create(createTeacherDTO);
        return new TeacherDTO(teacher);
    }

    async updateTeacher(vat, teacherData) {
        const updateTeacherDTO = new UpdateTeacherDTO(teacherData);
        const teacher = await teacherRepository.update(vat, updateTeacherDTO);
        return teacher ? new TeacherDTO(teacher) : null;
    }

    async deleteTeacherByVat(vat) {
        const teacher = await teacherRepository.deleteByVat(vat);
        return teacher ? new TeacherDTO(teacher) : null;
    }

    async deleteTeacherByEmail(email) {
        const teacher = await teacherRepository.deleteByEmail(email);
        return teacher ? new TeacherDTO(teacher) : null;
    }
}

module.exports = new TeacherService();