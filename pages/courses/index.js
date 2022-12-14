import MainLayout from "../../layouts/mainLayout";
import Link from "next/link";
import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import CourseCard from "../../components/courseCard";

const Courses = () => {
  const [courses, setCourses] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("/api/courses")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  console.log(courses);
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto my-12 sm:my-24">
        <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">All Courses</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 mx-5 md:mx-20 gap-10">
          {courses?.map((course) => (
            <CourseCard course={course} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Courses;
