import MainLayout from "../../layouts/mainLayout";
import Banner from "./banner";
import Discover from "./discover";
import LargestCollection from "./largestCollection";
import LatestTips from "./latestTips";

const Home = () => {
    return (
        <MainLayout>
            <Banner />
            <LargestCollection />
            <Discover />
            <LatestTips />
        </MainLayout>
    );
}

export default Home;