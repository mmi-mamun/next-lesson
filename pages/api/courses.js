import courses from '/public/courses.json';

export default function handler(req, res) {
  res.send(courses)
}