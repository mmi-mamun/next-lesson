import Link from "next/link";
import { useEffect, useState } from "react";
import MainLayout from "../../layouts/mainLayout";
import { FaStar } from "react-icons/fa";

const allteachers = () => {

    const [teacherAll, setTeacherAll] = useState([])
    useEffect(() => {
        fetch('/api/teachers')
            .then(res => res.json())
            .then(data => setTeacherAll(data))

    }, [])

    return (
        <MainLayout>
            <div className="max-w-7xl mx-auto">

                <div className="mt-12 lg:mx-12">
                    <h1 className="text-2xl font-bold text-black">Popular Instructors</h1>
                </div>
                <div className="flex justify-center items-center flex-wrap gap-8 mx-3 lg:mx-12 mt-12 ">
                    {/* {
                            teacherAll.map(teacher => <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img className="" src={teacher.img} />  </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{teacher.rating} <FaStar className="text-yellow-500"></FaStar></h2>
                                    <p>{teacher.name}</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-sm">View Profile</button>
                                    </div>
                                </div>
                            </div>)
                        } */}

                    {
                        teacherAll.map(teacher =>
                            <div class="max-w-sm bg-white border border-gray-200 rounded-lg  shadow-xl">
                                <a href="#">
                                    <img class="w-full rounded-t-lg lg:h-96" src={teacher.img} alt="" />
                                </a>
                                <div class="p-5">

                                    <h2 className="card-title">{teacher.rating} <FaStar className="text-yellow-500"></FaStar></h2>
                                    <p class="mb-3 font-normal">{teacher.name}</p>
                                    <Link href={`/teacher/${teacher.instructorID}`} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg">
                                        View Profile

                                    </Link>
                                </div>
                            </div>
                        )
                    }
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
            </div>
        </MainLayout>
    );
};

export default allteachers;