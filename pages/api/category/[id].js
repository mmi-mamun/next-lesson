import courses from '/public/courses.json';

export default function handler(req, res) {
    const coursesByCategory = courses.filter(({ categories }) => categories.includes(req.query.id));
    res.send(coursesByCategory);
}