import { useEffect, useState } from "react";
import CourseCard from "../courseCard";

const LargestCollection = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('Design');
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('/api/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch(`/api/category/${selectedCategory}`)
            .then(res => res.json())
            .then(data => setCourses(data))

    }, [selectedCategory])

    return (
        <>
            <div className="bg-gradient-to-b from-[#222021] to-white h-[25vh]"></div>
            <div className="max-w-7xl mx-auto flex justify-center -mt-[5vh] mb-[25vh]">
                <div className="px-3">
                    <h2 className="text-2xl text-center sm:text-4xl font-semibold pb-12">The World's Largest Collection of Courses</h2>
                    <ul className="flex items-center justify-center flex-wrap gap-5 text-xl font-semibold">
                        {
                            categories.map((category, i) => <li
                                className={`hover:text-primary cursor-pointer ${selectedCategory === category && 'text-primary border-b-4 border-primary'}`}
                                key={i} onClick={() => setSelectedCategory(category)}>
                                {category}
                            </li>)
                        }
                    </ul>
                    <div className="flex justify-center items-stretch flex-wrap gap-3 sm:gap-8 py-12">
                        {
                            courses.map(course => <CourseCard key={course.id} course={course} />)
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default LargestCollection;