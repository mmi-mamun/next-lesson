import teachers from '/public/teachers.json';

export default function run(req, res) {
    res.send(teachers);
}