import { useRouter } from "next/router";

const Course = () => {
    const { query: { courseId } } = useRouter();
    console.log(courseId)
    return (
        <div>
            this is course
        </div>
    );
}

export default Course;