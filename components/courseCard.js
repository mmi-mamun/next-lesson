import Link from "next/link";
import { useState } from "react";

const CourseCard = ({ course: { id, title, img, description, duration, fee } }) => {
    const [fullTxt, setFullTxt] = useState(false);

    return (
        <div className="relative w-Txt sm:max-w-sm bg-slate-100 rounded-xl overflow-hidden shadow-md">
            <img className="w-full" src={img} alt={title} />
            <div className="p-5 flex flex-col gap-5 pb-20">
                <small className="flex justify-between items-center">
                    <span>${fee}</span>
                    <span>{duration}</span>
                </small>
                <h3 className="text-xl font-semibold text-center">{title}</h3>
                <p>{description.length > 100 ? fullTxt ? <> {description}<button className="text-blue-600 hover:text-black" onClick={() => setFullTxt(false)}>...See Less</button> </> :
                    <>{description.slice(0, 100)}<button className="text-blue-600 hover:text-black" onClick={() => setFullTxt(true)}>...See More</button></> : description}</p>
                <Link href="/course/[id]" as={`/course/${id}`}>
                    <button className="btn btn-primary absolute bottom-3 right-3 left-3">See Details</button>
                </Link>
            </div>
        </div>
    );
};

export default CourseCard;