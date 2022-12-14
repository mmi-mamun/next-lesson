import courses from '/public/courses.json';

export default function handler(req, res) {
    const course = courses.find(({ id }) => id === req.query.id);
    res.send(course)
}