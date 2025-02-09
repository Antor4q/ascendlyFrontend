
import { Link } from "react-router-dom";
import logo from "/public/logo.png"; 
import { UserButton, useUser } from "@clerk/clerk-react";
import { MdSpaceDashboard } from "react-icons/md";


const Navbar = () => {
    const {isSignedIn} = useUser()

    return (
        <div className="container flex items-center justify-between mx-auto p-10">
            <div>
              <Link>
              <img className="w-[300px] h-full" src={logo} alt="" />
              </Link>
                
               
            </div>
            <div className="text-white flex gap-8">
            


                <h3 className="text-xl">Welcome</h3>
                <h3 className="text-xl">Features</h3>
                <h3 className="text-xl">FAQs</h3>
            </div>
            {
              isSignedIn ? <>
              <div className="w-[100px] flex gap-4 items-center px-4 py-2 rounded-full bg-white shadow-2xl shadow-fuchsia-600">
              <UserButton />
             <Link to={"/dashboard"}>
             <MdSpaceDashboard className="text-pink-600 text-3xl font-semibold" />
             </Link>

              </div>
              </> :
                     <Link to={"/dashboard"} className="bg-purple-500 px-6 text-xl font-semibold rounded-xl py-3 text-white">Start Now</Link>
            }
            
           
        </div>
    );
};

export default Navbar;