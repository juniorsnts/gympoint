import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const student = await Student.create(req.body);

    return res.json(student);
  }

  async update(req, res) {
    const { email } = req.body;
    const student = await Student.findOne({ where: { email } });
    if (!student) {
      return res.status(400).json({ error: 'Student not found' });
    }
    const { id, age, weight, height, name } = await student.update(req.body);
    return res.json({
      id,
      name,
      age,
      weight,
      height,
    });
  }
}
export default new StudentController();
