import MainLayout from "../../layouts/mainLayout";

const Contact = () => {
  return (
    <MainLayout>
      <div className="md:flex justify-between mx-5 md:mx-20 gap-20 my-16">
        <div className=" w-full md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl font-semibold">Leave us a message</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
            distinctio ratione corrupti vitae repudiandae? Ut explicabo ab nemo
            molestias deserunt!
          </p>
          <div className="form-control mt-10 mb-3">
            <label htmlFor="" className="font-semibold">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Type your full name"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control mb-3">
            <label htmlFor="" className="font-semibold">
              Subject
            </label>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </div>
          <div className="form-control">
            <label htmlFor="" className="font-semibold">
              Your Message
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button
            className="btn mt-5 border-0"
            style={{ backgroundColor: "#F7782A" }}
          >
            Send Message
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXsskKI9BKi7OZV4FE8XdzKNi69jVLaLV49g&usqp=CAU"
            alt=""
          />
          <h2 className="text-3xl font-semibold mt-5">Our Location</h2>
          <p>
            4.1 (113) · Shopping mall House No -17,1st Floor, Rd No. 7 Open ⋅
            Closes 8PM · 01974-262626 In-store shopping
          </p>
          <h2 className="text-3xl font-semibold mt-5">Our Numbers</h2>
          <p>+8801478457845</p>
          <p>+8801578456823</p>
        </div>
      </div>
    </MainLayout>
  );
};
export default Contact;
