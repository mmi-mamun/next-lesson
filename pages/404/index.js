import Link from "next/link";
import MainLayout from "../../layouts/mainLayout";

const NotFound = () => {
    return (

        <MainLayout>
            <div className="card w-full bg-base-100 shadow-xl image-full text-center">
                {/* <figure></figure> */}
                <img className="w-full" src="https://i.ibb.co/pKcf4qd/404.jpg" alt="Shoes" />
                <div className="card-body py-12">
                    <h1 className="text-6xl mt-3">Ooops...</h1>
                    <h2>That page can not be found</h2>
                    <p className="my-6">Go back to the <Link href="/home"><strong>HOMEPAGE</strong></Link></p>
                </div>
            </div>
        </MainLayout>
    );
}

export default NotFound;