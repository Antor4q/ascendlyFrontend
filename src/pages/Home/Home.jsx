
import Banner from "./Banner/Banner";
import Features from "./Fetures/Features";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";


const Home = () => {
    return (
        <div className="bg-[#0D0B13]  h-full">
             <Navbar/>
            <Banner/>
            <Features/>
            <Footer/>
           
        </div>
    );
};

export default Home;