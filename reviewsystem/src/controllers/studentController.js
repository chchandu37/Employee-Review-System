// controllers/studentController.js
const Student = require('../models/Student');

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.render('students', { students });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.addStudent = async (req, res) => {
  try {
    const { name, college, status, dsaFinalScore, webDFinalScore, reactFinalScore } = req.body;
    const newStudent = new Student({
      name,
      college,
      status,
      courseScores: { dsaFinalScore, webDFinalScore, reactFinalScore },
    });
    await newStudent.save();
    res.status(201).json({ message: 'Student added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
