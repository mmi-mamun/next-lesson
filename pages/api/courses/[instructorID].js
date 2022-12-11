import courses from '/public/courses.json';

export default function handler(req, res) {
    const coursesByInstructor = courses.filter(({ teachers }) => teachers.includes(req.query.instructorID));
    res.send(coursesByInstructor);
}