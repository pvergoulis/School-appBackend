class TeacherDTO {
    constructor(teacher) {
        this.id = teacher._id;
        this.firstname = teacher.firstname;
        this.lastname = teacher.lastname;
        this.vat = teacher.vat;
        this.city = teacher.city;
        this.age = teacher.age;
        this.cv = teacher.cv;
        this.phone = teacher.phone;
        this.email = teacher.email;
        this.subjects = teacher.subjects;
        this.createdAt = teacher.createdAt;
        this.updatedAt = teacher.updatedAt;
    }
}

class CreateTeacherDTO {
    constructor(data) {
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.vat = data.vat;
        this.city = data.city;
        this.age = data.age;
        this.cv = data.cv;
        this.phone = data.phone;
        this.email = data.email;
        this.subjects = data.subjects || [];
    }
}

class UpdateTeacherDTO {
    constructor(data) {
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.city = data.city;
        this.age = data.age;
        this.cv = data.cv;
        this.phone = data.phone;
        this.email = data.email;
        this.subjects = data.subjects;
    }
}

module.exports = {
    TeacherDTO,
    CreateTeacherDTO,
    UpdateTeacherDTO
};