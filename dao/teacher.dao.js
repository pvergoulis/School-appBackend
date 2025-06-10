const teacherService = require('../services/teacher.service');

class TeacherDAO {
    async getAllTeachers() {
        try {
            return await teacherService.getAllTeachers();
        } catch (error) {
            throw new Error(`Failed to get all teachers: ${error.message}`);
        }
    }

    async getTeacherByVat(vat) {
        try {
            return await teacherService.getTeacherByVat(vat);
        } catch (error) {
            throw new Error(`Failed to get teacher by VAT: ${error.message}`);
        }
    }

    async getTeacherByFirstname(firstname) {
        try {
            return await teacherService.getTeacherByFirstname(firstname);
        } catch (error) {
            throw new Error(`Failed to get teacher by firstname: ${error.message}`);
        }
    }

    async getTeacherByEmail(email) {
        try {
            return await teacherService.getTeacherByEmail(email);
        } catch (error) {
            throw new Error(`Failed to get teacher by email: ${error.message}`);
        }
    }

    async createTeacher(teacherData) {
        try {
            return await teacherService.createTeacher(teacherData);
        } catch (error) {
            throw new Error(`Failed to create teacher: ${error.message}`);
        }
    }

    async updateTeacher(vat, teacherData) {
        try {
            return await teacherService.updateTeacher(vat, teacherData);
        } catch (error) {
            throw new Error(`Failed to update teacher: ${error.message}`);
        }
    }

    async deleteTeacherByVat(vat) {
        try {
            return await teacherService.deleteTeacherByVat(vat);
        } catch (error) {
            throw new Error(`Failed to delete teacher by VAT: ${error.message}`);
        }
    }

    async deleteTeacherByEmail(email) {
        try {
            return await teacherService.deleteTeacherByEmail(email);
        } catch (error) {
            throw new Error(`Failed to delete teacher by email: ${error.message}`);
        }
    }
}

module.exports = new TeacherDAO();