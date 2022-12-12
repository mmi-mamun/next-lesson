import MainLayout from "../../layouts/mainLayout";
import StudentReview from "./../../components/studentReview";

const About = () => {
  return (
    <MainLayout>
      <div className="about">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("https://images.pexels.com/photos/3182801/pexels-photo-3182801.jpeg?auto=compress&cs=tinysrgb&w=600")`,
          }}
        >
          <div className="hero-overlay bg-opacity-80"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Who we are?</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
        {/* start section */}
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-10 lg:px-8 lg:py-20">
          <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
            <div className="text-center">
              <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                290M
              </h6>
              <p className="font-bold">Student Learning</p>
            </div>
            <div className="text-center">
              <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                32.1K
              </h6>
              <p className="font-bold">Instructor</p>
            </div>
            <div className="text-center">
              <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                50K
              </h6>
              <p className="font-bold">Courses</p>
            </div>
            <div className="text-center">
              <h6 className="text-3xl font-bold text-deep-purple-accent-400">
                60+
              </h6>
              <p className="font-bold">Language</p>
            </div>
          </div>
        </div>
        {/*  first about section */}
        <div className="md:flex justify-between items-center mx-10 md:mx-20 mb-20 ">
          {" "}
          <div className="md:mr-10 sm:mb-10 w-full md:w-1/2">
            <h1 className="text-3xl font-bold">A great place to grow</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.pturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.pturi exercitationem quasi. In dele
            </p>
            <button
              className="btn rounded-sm border-none mb-10 md:mb-0"
              style={{ backgroundColor: "#F7782A" }}
            >
              View Our Courses
            </button>
          </div>
          <div className="inline-block w-full md:w-1/2">
            <img
              src="https://images.pexels.com/photos/1181408/pexels-photo-1181408.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
        {/*  second about section */}
        <div className="md:flex justify-between items-center mx-10 md:mx-20 mb-20 ">
          {" "}
          <div className="inline-block w-full md:w-1/2">
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
          <div className="md:ml-10 sm:mb-10 w-full md:w-1/2">
            <h1 className="text-3xl font-bold">Who we are</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.pturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.pturi exercitationem quasi. In dele
            </p>
          </div>
        </div>
        {/*  third about section */}
        <div className="md:flex justify-between items-center mx-10 md:mx-20 mb-20 ">
          {" "}
          <div className="md:ml-10 sm:mb-10 w-full md:w-1/2">
            <h1 className="text-3xl font-bold">What we do</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.pturi exercitationem quasi. In deleniti eaque aut
              repudiandae et a id nisi.pturi exercitationem quasi. In dele
            </p>
          </div>
          <div className="inline-block w-full md:w-1/2">
            <img
              src="https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
            />
          </div>
        </div>
        {/* student reviews */}
        <StudentReview />
      </div>
    </MainLayout>
  );
};
export default About;
