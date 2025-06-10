// const Student = require('../models/student.model')


// exports.findAllStundents = async (req,res)=>{
//     console.log('finding all students')

//     try {
//         const result = await Student.find()
//         res.status(200).json({status:true, data:result})
//     } catch (error) {
//         console.log('problem with finding all students ', error)
//         res.status(400).json({status:false, data: result})
//     }
// }

// exports.findOneStudentByFirstname = async (req,res) =>{
//     let firstname = req.params.firstname
//     console.log('Finding student with email: ', firstname)

//     try {
//         const result = await Student.findOne({firstname : firstname})
//         res.status(200).json({status:true, data:result})
//     } catch (error) {
//         console.log('error in finding the student with name: '. firstname)
//         res.status(400).json({status:false, data: error})
//     }
// }

// exports.createStudent = async (req,res)=>{
//     let data = req.body
//     console.log('Creating a new Student')
//     const newStudent = new Student ({
//         firstname: data.firstname,
//         lastname: data.lastname,
//         email: data.email,
//         phone: data.phone,
//         age: data.age,
//         subjects: data.subjects
//     })

//     try {
//         const result = await newStudent.save()
//         res.status(200).json({status:true, data: result})
//     } catch (error) {
//         console.log('Error in creating a new student ', error)
//         res.status(400).json({status: false, data:error})
//     }
// }

// exports.updateStudent = async (req,res)=>{
//     let email = req.body.email
//     console.log('Updating a stundent with email: ', email)
//     let updatedStudent = req.body

//     try {
//         const result = await Student.findOneAndUpdate({email: email}, updatedStudent, {new:true})
//         res.status(200).json({status:true, data: result})
//     } catch (error) {
//         console.log('Error in updating a student ', error)
//         res.status(400).json({status: false, data:error})
//     }
// }

// exports.deleteStudentByEmail = async(req,res)=>{
//     let email = req.params.email

//     try {
//         const result = await Student.findOneAndDelete({email: email})
//         res.status(200).json({status:true, data: result})
//     } catch (error) {
//         console.log('Error in deleting a student ', error)
//         res.status(400).json({status: false, data:error})
//     }
// }

const studentDAO = require('../dao/student.dao');

exports.findAllStudents = async (req, res) => {
    console.log('Finding all students');
    try {
        const result = await studentDAO.getAllStudents();
        res.status(200).json({ status: true, data: result });
    } catch (error) {
        console.log('Problem with finding all students ', error);
        res.status(400).json({ status: false, data: error.message });
    }
};

exports.findOneStudentByFirstname = async (req, res) => {
    const firstname = req.params.firstname;
    console.log('Finding student with firstname: ', firstname);
    try {
        const result = await studentDAO.getStudentByFirstname(firstname);
        if (!result) {
            return res.status(404).json({ status: false, message: 'Student not found' });
        }
        res.status(200).json({ status: true, data: result });
    } catch (error) {
        console.log('Error in finding the student with name: ', firstname);
        res.status(400).json({ status: false, data: error.message });
    }
};

exports.createStudent = async (req, res) => {
    console.log('Creating a new Student');
    try {
        const result = await studentDAO.createStudent(req.body);
        res.status(201).json({ status: true, data: result });
    } catch (error) {
        console.log('Error in creating a new student ', error);
        res.status(400).json({ status: false, data: error.message });
    }
};

exports.updateStudent = async (req, res) => {
    const email = req.body.email;
    console.log('Updating a student with email: ', email);
    try {
        const result = await studentDAO.updateStudent(email, req.body);
        if (!result) {
            return res.status(404).json({ status: false, message: 'Student not found' });
        }
        res.status(200).json({ status: true, data: result });
    } catch (error) {
        console.log('Error in updating a student ', error);
        res.status(400).json({ status: false, data: error.message });
    }
};

exports.deleteStudentByEmail = async (req, res) => {
    const email = req.params.email;
    console.log('Deleting student with email: ', email);
    try {
        const result = await studentDAO.deleteStudent(email);
        if (!result) {
            return res.status(404).json({ status: false, message: 'Student not found' });
        }
        res.status(200).json({ status: true, data: result });
    } catch (error) {
        console.log('Error in deleting a student ', error);
        res.status(400).json({ status: false, data: error.message });
    }
};