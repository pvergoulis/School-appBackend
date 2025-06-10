const studentRepository = require('../repository/student.repository');
const { StudentDTO, CreateStudentDTO, UpdateStudentDTO } = require('../dto/student.dto');

class StudentService {
    async getAllStudents() {
        const students = await studentRepository.findAll();
        return students.map(student => new StudentDTO(student));
    }

    async getStudentByFirstname(firstname) {
        const student = await studentRepository.findByFirstname(firstname);
        return student ? new StudentDTO(student) : null;
    }

    async createStudent(studentData) {
        const createStudentDTO = new CreateStudentDTO(studentData);
        const student = await studentRepository.create(createStudentDTO);
        return new StudentDTO(student);
    }

    async updateStudent(email, studentData) {
        const updateStudentDTO = new UpdateStudentDTO(studentData);
        const student = await studentRepository.update(email, updateStudentDTO);
        return student ? new StudentDTO(student) : null;
    }

    async deleteStudent(email) {
        const student = await studentRepository.delete(email);
        return student ? new StudentDTO(student) : null;
    }
}

module.exports = new StudentService();