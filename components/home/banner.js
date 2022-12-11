import { useState } from "react";
import RegistrationModal from "./registrationModal";

const Banner = () => {
    const [modal, setModal] = useState(null);

    return (
        <>
            <div className="min-h-[80vh] flex justify-center items-start" style={{
                backgroundImage: `url('https://i.ibb.co/0G2w9pp/illustration-university-graduates-53876-28466.webp')`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'bottom'
            }}>
                <div className="py-8 px-5 sm:px-8 text-center rounded-xl shadow-xl my-12 mx-3 backdrop-blur-xl">
                    <h2 className="text-2xl sm:text-4xl font-semibold">Explore Your Creativity</h2>
                    <p className="my-2 max-w-xl">What are you waiting for? Just enroll and get skilled, you idiot.</p>
                    <label htmlFor="registrationModal" className="btn" onClick={() => setModal({ close: setModal })}>Register Now</label>
                </div>
            </div>
            {
                modal && <RegistrationModal data={modal} />
            }
        </>
    );
}

export default Banner;