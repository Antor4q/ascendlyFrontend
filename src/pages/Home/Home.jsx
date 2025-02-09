
import Banner from "./Banner/Banner";
import Features from "./Fetures/Features";
import Navbar from "./Navbar/Navbar";


const Home = () => {
    return (
        <div className="bg-black  h-screen">
             <Navbar/>
            <Banner/>
            <Features/>
            
           
        </div>
    );
};

export default Home;