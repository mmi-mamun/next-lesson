import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainLayout from "../../layouts/mainLayout";
import CourseCard from '../../components/courseCard';

const Teacher = () => {
    const { query: { teacherId } } = useRouter();
    const [teacherProfile, setTeacherProfile] = useState([])
    const [teacherCourses, setTeacherCourses] = useState([])

    useEffect(() => {
        if (teacherId) {
            fetch(`/api/teacher/${teacherId}`)
                .then(res => res.json())
                .then(data => setTeacherProfile(data))
        }
    }, [teacherId])

    useEffect(() => {
        if (teacherId) {
            fetch(`/api/courses/${teacherId}`)
                .then(res => res.json())
                .then(data => setTeacherCourses(data))
        }
    }, [teacherId])
    console.log(teacherCourses)

    return (
        <div>
            <MainLayout>

                <div className="lg:mx-12 mt-12">
                    <div className="card lg:w-4/5 lg:card-side border-2 bg-base-100 shadow-xl">
                        <figure><img className="lg:h-56 lg:w-80" src={teacherProfile.img} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="text-2xl font-bold text-black">{teacherProfile.name}</h2>
                            <h1 className="text-xl font-bold text-black">About Me</h1>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero corporis, dicta eius, ratione aliquid nisi, perferendis esse est quo quam reprehenderit sit laboriosam architecto.
                            </p>

                        </div>
                    </div>
                </div>
                <div className="lg:mx-12">
                    <div className="mt-12">
                        <h1 className="text-2xl font-bold text-black">My Courses({teacherCourses.length})</h1>
                    </div>
                    <div className="mt-12">
                        <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 lg:mx-12 mt-12">
                            {
                                teacherCourses.map((course, i) => <CourseCard course={course} key={i} />)
                            }
                        </div>
                    </div>
                </div>

                <div className="lg:mx-12 mt-12">
                    <div className="text-center">
                        <div className="btn-group gap-4">
                            <button className="btn bg-orange-600 text-white">1</button>
                            <button className="btn bg-white text-black">2</button>
                            <button className="btn bg-white text-black">3</button>
                            <button className="btn bg-white text-black">4</button>
                            <button className="btn bg-orange-600 text-white">Next</button>
                        </div>
                    </div>
                </div>

            </MainLayout>

        </div>
    );
}

export default Teacher;