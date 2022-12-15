import Link from "next/link";
import { useState } from "react";
import { gsap } from "gsap";

const CourseCard = ({ course: { id, title, img, description, fee } }) => {
    const [fullTxt, setFullTxt] = useState(false);

    const onEnter = ({ currentTarget }) => {
        gsap.to(currentTarget, {
            rotation: 360, x: 100, duration: 1
        })
    }

    return (
        <div onMouseEnter={onEnter} className="relative w-full sm:max-w-sm bg-slate-100 rounded-xl overflow-hidden shadow-md">
            <img className="w-full" src={img} alt={title} />
            <div  className="p-5 flex flex-col gap-3 pb-14">
                <h3 className="text-xl font-semibold text-center">{title}</h3>
                <p>{description.length > 100 ? fullTxt ? <> {description}<button className="text-blue-600 hover:text-black ml-1" onClick={() => setFullTxt(false)}> (See Less)</button> </> :
                    <>{description.slice(0, 100)}<button className="text-blue-600 hover:text-black" onClick={() => setFullTxt(true)}>...See More</button></> : description}</p>
                <Link href={`/course/${id}`}>
                    <div className="absolute bottom-3 right-5 left-5 flex justify-between items-center">
                        <h4 className="text-lg font-semibold">${fee}</h4>
                        <button className="btn btn-primary">See Details</button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;