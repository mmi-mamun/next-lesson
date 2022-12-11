import MainLayout from "../../layouts/mainLayout";
import Banner from "./banner";
import Discover from "./discover";
import LargestCollection from "./largestCollection";

const Home = () => {
    return (
        <MainLayout>
            <Banner />
            <LargestCollection />
            <Discover />
        </MainLayout>
    );
}

export default Home;