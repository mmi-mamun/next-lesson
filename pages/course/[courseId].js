import { useState, useEffect } from 'react'
import { useRouter } from "next/router";
import MainLayout from '../../layouts/mainLayout';
import courses from '/public/courses.json';
import { FaStar, FaCheck } from 'react-icons/fa';

const Course = () => {
    const { query: { courseId } } = useRouter();
    const [toggle, setToggle] = useState(true);
    console.log(courseId)
    const [course, setCourse] = useState({});
    const [isLoading, setLoading] = useState(true)

    console.log(course);

    useEffect(() => {
        if (courseId) {
            fetch(`/api/course/${courseId}`)
                .then((res) => res.json())
                .then((course) => {
                    setCourse(course)
                    setLoading(false)
                })
        }
    }, [courseId])

    console.log(course);
    const { title, img, description, level, duration, categories, prerequisite, fee } = course;

    if (isLoading) return <MainLayout><p>Loading...</p></MainLayout>
    if (!course) return <MainLayout><p>No profile data</p></MainLayout>
    
    return (
        <MainLayout>
            <div>
                <div className="hero my-10">
                    <div className="hero-content flex-col lg:flex-row">
                        <img src={img} className="w-full md:w-2/5 rounded-lg shadow-lg" />
                        <div className='w-full md:w-3/5 px-10'>
                            <div className='flex items-center justify-between'>
                                {categories[0] && <span style={{ color: "#f7782a" }}>{categories[0]}</span>}
                                <div className='flex'>
                                    <FaStar style={{ color: "#f7782a" }} />
                                    <FaStar style={{ color: "#f7782a" }} />
                                    <FaStar style={{ color: "#f7782a" }} />
                                    <FaStar style={{ color: "#f7782a" }} />
                                    <FaStar style={{ color: "#f7782a" }} />
                                </div>
                            </div>
                            <h1 className="text-5xl font-bold mb-10 mt-20">{title}</h1>
                            <div className='flex items-center justify-between my-6'>
                                <div>
                                    <p className='text-muted font-semibold'>Course Level</p>
                                    <p className='text-gray-600 font-bold text-lg'>{level}</p>
                                </div>
                                <div>
                                    <p className='text-muted font-semibold'>Pre-requisite</p>
                                    <p className='text-gray-600 font-bold text-lg'>{prerequisite}</p>
                                </div>
                                <div>
                                    <p className='text-muted font-semibold'>Duration</p>
                                    <p className='text-gray-600 font-bold text-lg'>{duration}</p>
                                </div>
                            </div>
                            <div className='flex items-center mt-20'>
                                <span className="text-5xl font-bold mr-6">${fee}</span>
                                <button className='btn mr-2' style={{
                                    backgroundColor: "#f7782a",
                                    border: "0",
                                    color: "#ffffff"
                                }}>
                                    Add to Cart
                                </button>
                                <button className='btn' style={{
                                    borderColor: "#f7782a",
                                    color: "#f7782a",
                                    backgroundColor: "#ffffff",
                                }}>
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle section */}

            <div className='block md:flex mb-20'>
                <div className='w-full md:w-3/5 pl-16'>
                    <div className='flex mb-3'>
                        <h2
                            onClick={() => setToggle(!toggle)}
                            className={`text-3xl font-semibold my-2 mr-10 ${toggle && "text-orange-500"}`}
                            style={{ cursor: `pointer` }}
                        >Overview</h2>

                        <h2
                            onClick={() => setToggle(!toggle)}
                            className={`text-3xl font-semibold my-2 ${(!toggle) && "text-orange-500"}`}
                            style={{ cursor: `pointer` }}
                        >Reviews</h2>
                    </div>
                    <hr />

                    {/* Conditional Rendering */}

                    {
                        toggle &&
                        <div className='mt-3'>
                            <p className='my-3'>{description}</p>
                            <p className='mt-5 mb-3 text-xl font-semibold'>What you will learn</p>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div>
                                    <FaCheck className='inline mr-4' style={{ color: "#f7782a" }} /><span>Basics of Programming and Problem Solving</span>
                                </div>
                                <div>
                                    <FaCheck className='inline mr-4' style={{ color: "#f7782a" }} /><span>Basics of Programming and Problem Solving</span>
                                </div>
                                <div>
                                    <FaCheck className='inline mr-4' style={{ color: "#f7782a" }} /><span>Basics of Programming and Problem Solving</span>
                                </div>
                                <div>
                                    <FaCheck className='inline mr-4' style={{ color: "#f7782a" }} /><span>Basics of Programming and Problem Solving</span>
                                </div>
                                <div>
                                    <FaCheck className='inline mr-4' style={{ color: "#f7782a" }} /><span>Basics of Programming and Problem Solving</span>
                                </div>
                                <div>
                                    <FaCheck className='inline mr-4' style={{ color: "#f7782a" }} /><span>Basics of Programming and Problem Solving</span>
                                </div>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-5'>
                                <img src="https://i.ibb.co/34jyQFJ/Service-Edu.png" className='p-5' alt="" />
                                <p>Today there is such an easy way to get an education that we do not need to go anywhere to get an education. To take education, we can get education from the teacher just sitting at home from the online mood. <br /><br /> In todays time, facilities like the internet are available in all the homes. Online education is proving to be very effective in the time of Corona. Nowadays online education is becoming very prevalent everywhere whether it is village or city. <br /><br /> Online education is being achieved through computers in a way with the facility of the internet. Computers and many types of gadgets are used.</p>
                            </div>
                            <p className='mt-4'>In the changing environment, there have been many changes in technology and its use is also big. Many changes have also been seen in the way of taking education due to technology. Today, the teaching-related material used in online education can be sent from one place to another through technology online. No matter where we are in the world, we can get the learning material delivered to another place in no time. Like any link, any video related to education, any file. All these types make online education even more creative.</p>
                            <p className='mt-4'>One of the benefits of online education is that we have options. In online education, we get the option of which teacher or which subject we want to study. We can decide it according to we. Along with choosing the topic, you can discuss that topic with your teacher by selecting the topic.</p>
                        </div>}
                    {
                        (!toggle) &&
                        <div className='mt-5 border'>
                            <div className='flex justify-around p-5'>
                                <div>
                                    <h1 className='text-center text-5xl mb-2'>5.0</h1>
                                    <div className='flex justify-center'>
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                    </div>
                                    <p className='text-center text-muted mt-2'>Total 10 Ratings</p>
                                </div>
                                <div className='flex flex-col justify-around'>
                                    <progress className="progress progress-warning w-96" value="100" max="100"></progress>
                                    <progress className="progress progress-warning w-96" value="90" max="100"></progress>
                                    <progress className="progress progress-warning w-96" value="0" max="100"></progress>
                                    <progress className="progress progress-warning w-96" value="0" max="100"></progress>
                                    <progress className="progress progress-warning w-96" value="0" max="100"></progress>
                                </div>
                                <div className='flex'>
                                    <div className='flex flex-col justify-around mr-2'>
                                        <p>5</p>
                                        <p>4</p>
                                        <p>3</p>
                                        <p>2</p>
                                        <p>1</p>
                                    </div>
                                    <div className='flex flex-col justify-around'>
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                    </div>
                                </div>

                            </div>
                            <hr />
                            <div className='flex p-5'>
                                <div className='w-1/4 flex flex-col items-center justify-around'>
                                    <img className='w-24 rounded-lg' src="https://i.ibb.co/vDJSV6B/tom.jpg" alt='' />
                                    <h1 className='text-center font-semibold text-xl mb-1'>Tom Cruise</h1>
                                    <p className='text-center text-muted mb-1'>Web Developer</p>
                                    <div className='flex justify-center'>
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                    </div>
                                </div>
                                <p className='w-3/4 pt-5'>
                                    "I've never completed a course like this before (remote instruction) and I cannot express how great the instructor was and the overall content of the material. I would defintely recommend this to my co-workers as well as friends. I will be looking into taking more of these classes through ONLC in the near future. Thank you!"
                                </p>
                            </div>
                            <hr />
                            <div className='flex p-5'>
                                <div className='w-1/4 flex flex-col items-center justify-around'>
                                    <img className='w-24 rounded-lg' src="https://i.ibb.co/WDn1pLg/hulk.png" alt='' />
                                    <h1 className='text-center font-semibold text-xl mb-1'>Cave Man</h1>
                                    <p className='text-center text-muted mb-1'>Web Developer</p>
                                    <div className='flex justify-center'>
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                    </div>
                                </div>
                                <p className='w-3/4 pt-5'>
                                    "I've never completed a course like this before (remote instruction) and I cannot express how great the instructor was and the overall content of the material. I would defintely recommend this to my co-workers as well as friends. I will be looking into taking more of these classes through ONLC in the near future. Thank you!"
                                </p>
                            </div>
                            <hr />
                            <div className='flex p-5'>
                                <div className='w-1/4 flex flex-col items-center justify-around'>
                                    <img className='w-24 rounded-lg' src="https://i.ibb.co/SKLs6NJ/wiz.jpg" alt='' />
                                    <h1 className='text-center font-semibold text-xl mb-1'>Mr. Wizard</h1>
                                    <p className='text-center text-muted mb-1'>Web Developer</p>
                                    <div className='flex justify-center'>
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                    </div>
                                </div>
                                <p className='w-3/4 pt-5'>
                                    "I've never completed a course like this before (remote instruction) and I cannot express how great the instructor was and the overall content of the material. I would defintely recommend this to my co-workers as well as friends. I will be looking into taking more of these classes through ONLC in the near future. Thank you!"
                                </p>
                            </div>
                            <hr />
                            <div className='flex p-5'>
                                <div className='w-1/4 flex flex-col items-center justify-around'>
                                    <img className='w-24 rounded-lg' src="https://i.ibb.co/VQhz6Nt/profile.jpg" alt='' />
                                    <h1 className='text-center font-semibold text-xl mb-1'>Master Oogway</h1>
                                    <p className='text-center text-muted mb-1'>Web Developer</p>
                                    <div className='flex justify-center'>
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                        <FaStar style={{ color: "#f7782a" }} />
                                    </div>
                                </div>
                                <p className='w-3/4 pt-5'>
                                    "I've never completed a course like this before (remote instruction) and I cannot express how great the instructor was and the overall content of the material. I would defintely recommend this to my co-workers as well as friends. I will be looking into taking more of these classes through ONLC in the near future. Thank you!"
                                </p>
                            </div>
                        </div>
                    }
                </div>
                <div className='w-full md:w-2/5 pr-16 ml-5'>
                    <div className='p-3'>
                        <h1 className='p-4 text-xl font-semibold text-white' style={{ backgroundColor: "#f7782a" }}>Lesson List</h1>
                        <div tabIndex={0} className="collapse group border">
                            <div className="collapse-title group-focus:border-2 font-bold">
                                Chapter 01: Introduction
                            </div>
                            <div className="collapse-content">
                                <p>Task 1</p>
                            </div>
                        </div>
                        <div tabIndex={1} className="collapse group border">
                            <div className="collapse-title group-focus:border-2 font-bold">
                                Chapter 02: Basic Concept
                            </div>
                            <div className="collapse-content">
                                <p>Task 2</p>
                            </div>
                        </div>
                        <div tabIndex={2} className="collapse group border">
                            <div className="collapse-title group-focus:border-2 font-bold">
                                Chapter 03: Moderate Concept
                            </div>
                            <div className="collapse-content">
                                <p>Task 3</p>
                            </div>
                        </div>
                        <div tabIndex={3} className="collapse group border">
                            <div className="collapse-title group-focus:border-2 font-bold">
                                Chapter 04: Advanced Concept
                            </div>
                            <div className="collapse-content">
                                <p>Task 4</p>
                            </div>
                        </div>
                    </div>
                    <div className='m-3 p-5 border-2 rounded-lg'>
                        <div className='flex'>
                            <img className='w-40 rounded-lg mr-5' src="https://i.ibb.co/WHmHz5Q/john.jpg" alt="" />
                            <div className='mt-10'>
                                <h2 className='text-xl font-semibold py-1'>John Wick</h2>
                                <p className='text-xl text-muted py-1'>Web Developer</p>
                                <div className='flex'>
                                    <FaStar style={{ color: "#f7782a" }} />
                                    <FaStar style={{ color: "#f7782a" }} />
                                    <FaStar style={{ color: "#f7782a" }} />
                                    <FaStar style={{ color: "#f7782a" }} />
                                    <FaStar style={{ color: "#f7782a" }} />
                                </div>
                            </div>
                        </div>
                        <p className='text-muted my-2'>This is the first time I have attended a class in this format and wondered how effective it would be. The instructor was very knowlegeable and provided a wealth of information about the current version, especially since the last version I used was several releases ago.</p>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}

export default Course;