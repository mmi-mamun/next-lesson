import teachers from '/public/teachers.json';

export default function run(req, res) {
    const teacher = teachers.find(({ instructorID }) => instructorID === req.query.id);
    res.send(teacher);
}