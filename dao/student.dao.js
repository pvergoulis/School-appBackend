const studentService = require('../services/student.service');

class StudentDAO {
    async getAllStudents() {
        try {
            return await studentService.getAllStudents();
        } catch (error) {
            throw new Error(`Failed to get all students: ${error.message}`);
        }
    }

    async getStudentByFirstname(firstname) {
        try {
            return await studentService.getStudentByFirstname(firstname);
        } catch (error) {
            throw new Error(`Failed to get student by firstname: ${error.message}`);
        }
    }

    async createStudent(studentData) {
        try {
            return await studentService.createStudent(studentData);
        } catch (error) {
            throw new Error(`Failed to create student: ${error.message}`);
        }
    }

    async updateStudent(email, studentData) {
        try {
            return await studentService.updateStudent(email, studentData);
        } catch (error) {
            throw new Error(`Failed to update student: ${error.message}`);
        }
    }

    async deleteStudent(email) {
        try {
            return await studentService.deleteStudent(email);
        } catch (error) {
            throw new Error(`Failed to delete student: ${error.message}`);
        }
    }
}

module.exports = new StudentDAO();