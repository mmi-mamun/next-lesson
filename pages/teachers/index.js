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
        <div>
            <MainLayout>
                <div className="">

                    <div className="mt-12 lg:mx-12">
                        <h1 className="text-2xl font-bold text-black">Popular Instructors</h1>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-4 grid-cols-1 lg:mx-12 mt-12 ">
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
                            <div class="max-w-sm bg-white border border-gray-200 rounded-lg  shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img class="rounded-t-lg lg:h-96" src={teacher.img} alt="" />
                                </a>
                                <div class="p-5">
                                  
                                    <h2 className="card-title">{teacher.rating} <FaStar className="text-yellow-500"></FaStar></h2>
                                    <p class="mb-3 font-normal text-black ">{teacher.name}</p>
                                    <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-orange-500 rounded-lg">
                                        View Profile
                                        
                                    </a>
                                </div>
                            </div>
                            )
                        }
                    </div>
                </div>
            </MainLayout>
        </div>
    );
};

export default allteachers;