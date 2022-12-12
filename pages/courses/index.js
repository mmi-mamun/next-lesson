import MainLayout from "../../layouts/mainLayout";
import Link from "next/link";

const Courses = () => {
    
    return (
        <MainLayout>
            <div>
                this is Courses
                <Link href="/courses/CRS02" className='btn' >course</Link>
            </div>
        </MainLayout>
    );
}

export default Courses;