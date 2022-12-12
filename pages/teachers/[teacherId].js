import { useRouter } from "next/router";

const Teacher = () => {
    const { query: { teacherId } } = useRouter();
    console.log(teacherId)
    return (
        <div>
            this is Teacher {teacherId}
            <h1>I am ready to programming</h1>
        </div>
    );
}

export default Teacher;