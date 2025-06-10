class StudentDTO {
    constructor(student) {
        this.id = student._id;
        this.firstname = student.firstname;
        this.lastname = student.lastname;
        this.email = student.email;
        this.phone = student.phone;
        this.age = student.age;
        this.subjects = student.subjects;
        this.createdAt = student.createdAt;
        this.updatedAt = student.updatedAt;
    }
}

class CreateStudentDTO {
    constructor(data) {
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.email = data.email;
        this.phone = data.phone;
        this.age = data.age;
        this.subjects = data.subjects || [];
    }
}

class UpdateStudentDTO {
    constructor(data) {
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.phone = data.phone;
        this.age = data.age;
        this.subjects = data.subjects;
    }
}

module.exports = {
    StudentDTO,
    CreateStudentDTO,
    UpdateStudentDTO
};