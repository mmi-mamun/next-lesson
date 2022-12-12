import { useRouter } from "next/router";
import { useEffect } from "react";
import MainLayout from "../../layouts/mainLayout";

const Teacher = () => {
    const { query: { teacherId } } = useRouter();
    console.log(teacherId)
    useEffect(()=>{
        if(teacherId){
            fetch(`/api/teacher/${teacherId}`)
        .then(res => res.json())
        .then(data => console.log(data))
        }
    },[teacherId])

    return (
        <div>
            <MainLayout>
            this is Teacher {teacherId}
            <h1>I am ready to programming</h1>

            </MainLayout>
           
        </div>
    );
}

export default Teacher;