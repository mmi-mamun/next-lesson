import MainLayout from "../../layouts/mainLayout";
import StudentReview from "../studentReview";
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
            <StudentReview />
        </MainLayout>
    );
}

export default Home;