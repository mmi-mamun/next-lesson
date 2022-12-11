import Footer from "../components/footer";
import Navbar from "../components/navbar";

const MainLayout = ({ children }) => {
    return (
        <>
            <div>
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    );
}

export default MainLayout;