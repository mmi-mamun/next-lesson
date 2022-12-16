import { useRouter } from "next/router";

const Teacher = () => {
    const { query: { teacherId } } = useRouter();
    console.log(teacherId)
    return (
        <div>
            this is Teacher {teacherId}
        </div>
    );
}

export default Teacher;