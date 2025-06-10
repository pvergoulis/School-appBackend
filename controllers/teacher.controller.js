// const Teacher = require('../models/teacher.model')

// exports.findAllTeachers = async(req,res)=>{
//     console.log('Finds all teachers')

//     try {
//         const result = await Teacher.find()
//         res.status(200).json({status:true, data: result})
//     } catch (error) {
//         console.log("problem in finding all teacher", error)
//         res.status(400).json({status:false, data:error})
//     }
// }

// exports.findTeacherByVat = async(req,res)=>{
//     let vat = req.params.vat
//     console.log('finding a teacher with vat ', vat)
//     try {
//         const result = await Teacher.findOne({vat: vat})
//         res.status(200).json({status:true, data: result})
//     } catch (error) {
//         console.log("problem in finding the spesific teacher", error)
//         res.status(400).json({status:false, data:error})
//     }
// }

// exports.findTeacherByFirstname = async(req,res)=>{
//     let firstname = req.params.firstname
//     console.log('finding a teacher with firstname ', firstname)
//     try {
//         const result = await Teacher.findOne({firstname: firstname})
//         res.status(200).json({status:true, data: result})
//     } catch (error) {
//         console.log("problem in finding the spesific teacher", error)
//         res.status(400).json({status:false, data:error})
//     }
// }


// exports.findTeacherByEmail = async(req,res)=>{
//     let email = req.params.email
//     console.log('finding a teacher with email ', email)
//     try {
//         const result = await Teacher.findOne({email: email})
//         res.status(200).json({status:true, data: result})
//     } catch (error) {
//         console.log("problem in finding the spesific teacher", error)
//         res.status(400).json({status:false, data:error})
//     }
// }


// exports.createTeacher = async(req,res)=>{
//     let data = req.body

//     const newTeacher = new Teacher({
//         firstname : data.firstname,
//         lastname: data.lastname,
//         vat: data.vat,
//         city: data.city,
//         age: data.age,
//         cv: data.cv,
//         phone: data.phone,
//         email: data.email,
//         subjects : data.subjects
        
//     })

//     try {
//         const result = await newTeacher.save()
//         res.status(200).json({status:true, data: result})
//     } catch (error) {
//         console.log('error in creating new Teacher', error)
//         res.status(400).json({status: false, data: error})
//     }
// }

// exports.updateTeacher = async(req,res) =>{
//     console.log('Updating a teacher')

//     let vat = req.body.vat

//     const updatedTeacher = req.body

//     try {
//         const result = await Teacher.findOneAndUpdate({vat: vat}, updatedTeacher, {new:true})
//         res.status(200).json({status:true, data: result})
//     } catch (error) {
//         console.log('error in updating a Teacher', error)
//         res.status(400).json({status: false, data: error})
//     }
// }

// exports.deleteTeacherByVat = async (req,res)=>{
//     let vat = req.params.vat
//     console.log('Delete a teacher with vat ', vat)

//     try {
//         const result = await Teacher.findOneAndDelete({vat: vat})
//         res.status(200).json({status:true, data: result})
//     } catch (error) {
//         console.log('error in deleting a Teacher', error)
//         res.status(400).json({status: false, data: error})
//     }
// }


// exports.deleteTeacherByEmail = async (req,res)=>{
//     let email = req.params.email
//     console.log('Delete a teacher with email ', email)

//     try {
//         const result = await Teacher.findOneAndDelete({email: email})
//         res.status(200).json({status:true, data: result})
//     } catch (error) {
//         console.log('error in deleting a Teacher', error)
//         res.status(400).json({status: false, data: error})
//     }
// }

const teacherDAO = require('../dao/teacher.dao');

exports.findAllTeachers = async (req, res) => {
    console.log('Finding all teachers');
    try {
        const result = await teacherDAO.getAllTeachers();
        res.status(200).json({ status: true, data: result });
    } catch (error) {
        console.log("Problem in finding all teachers", error);
        res.status(400).json({ status: false, data: error.message });
    }
};

exports.findTeacherByVat = async (req, res) => {
    const vat = req.params.vat;
    console.log('Finding teacher with VAT: ', vat);
    try {
        const result = await teacherDAO.getTeacherByVat(vat);
        if (!result) {
            return res.status(404).json({ status: false, message: 'Teacher not found' });
        }
        res.status(200).json({ status: true, data: result });
    } catch (error) {
        console.log("Problem in finding the specific teacher", error);
        res.status(400).json({ status: false, data: error.message });
    }
};

exports.findTeacherByFirstname = async (req, res) => {
    const firstname = req.params.firstname;
    console.log('Finding teacher with firstname: ', firstname);
    try {
        const result = await teacherDAO.getTeacherByFirstname(firstname);
        if (!result) {
            return res.status(404).json({ status: false, message: 'Teacher not found' });
        }
        res.status(200).json({ status: true, data: result });
    } catch (error) {
        console.log("Problem in finding the specific teacher", error);
        res.status(400).json({ status: false, data: error.message });
    }
};

exports.findTeacherByEmail = async (req, res) => {
    const email = req.params.email;
    console.log('Finding teacher with email: ', email);
    try {
        const result = await teacherDAO.getTeacherByEmail(email);
        if (!result) {
            return res.status(404).json({ status: false, message: 'Teacher not found' });
        }
        res.status(200).json({ status: true, data: result });
    } catch (error) {
        console.log("Problem in finding the specific teacher", error);
        res.status(400).json({ status: false, data: error.message });
    }
};

exports.createTeacher = async (req, res) => {
    console.log('Creating a new Teacher');
    try {
        const result = await teacherDAO.createTeacher(req.body);
        res.status(201).json({ status: true, data: result });
    } catch (error) {
        console.log('Error in creating new Teacher', error);
        res.status(400).json({ status: false, data: error.message });
    }
};

exports.updateTeacher = async (req, res) => {
    const vat = req.body.vat;
    console.log('Updating teacher with VAT: ', vat);
    try {
        const result = await teacherDAO.updateTeacher(vat, req.body);
        if (!result) {
            return res.status(404).json({ status: false, message: 'Teacher not found' });
        }
        res.status(200).json({ status: true, data: result });
    } catch (error) {
        console.log('Error in updating teacher', error);
        res.status(400).json({ status: false, data: error.message });
    }
};

exports.deleteTeacherByVat = async (req, res) => {
    const vat = req.params.vat;
    console.log('Deleting teacher with VAT: ', vat);
    try {
        const result = await teacherDAO.deleteTeacherByVat(vat);
        if (!result) {
            return res.status(404).json({ status: false, message: 'Teacher not found' });
        }
        res.status(200).json({ status: true, data: result });
    } catch (error) {
        console.log('Error in deleting teacher', error);
        res.status(400).json({ status: false, data: error.message });
    }
};

exports.deleteTeacherByEmail = async (req, res) => {
    const email = req.params.email;
    console.log('Deleting teacher with email: ', email);
    try {
        const result = await teacherDAO.deleteTeacherByEmail(email);
        if (!result) {
            return res.status(404).json({ status: false, message: 'Teacher not found' });
        }
        res.status(200).json({ status: true, data: result });
    } catch (error) {
        console.log('Error in deleting teacher', error);
        res.status(400).json({ status: false, data: error.message });
    }
};
