import MainLayout from "../../layouts/mainLayout";
import Banner from "./banner";
import Discover from "./discover";

const Home = () => {
    return (
        <MainLayout>
            <Banner />
            <Discover />
        </MainLayout>
    );
}

export default Home;