
import logo from "../../../assets/logo.png"

const Navbar = () => {
    return (
        <div className="container flex items-center justify-between mx-auto p-10">
            <div>
                <a href="/">
                <img className="w-[300px] h-full" src={logo} alt="" />
                </a>
                
               
            </div>
            <div className="text-white flex gap-8">
            


                <h3 className="text-xl">Welcome</h3>
                <h3 className="text-xl">Features</h3>
                <h3 className="text-xl">FAQs</h3>
            </div>
            <button className="bg-purple-500 px-6 text-xl font-semibold rounded-xl py-3 text-white">Join Now</button>
        </div>
    );
};

export default Navbar;