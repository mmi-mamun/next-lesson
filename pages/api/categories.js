import courses from '/public/courses.json';

export default function handler(req, res) {
    let categories = [];
    courses.forEach(course => {
        categories.push(...(course.categories));
    })
    res.send(categories.filter((c, i) => categories.indexOf(c) === i));
}