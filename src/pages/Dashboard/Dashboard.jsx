import { Link, Outlet } from "react-router-dom";
import logo from "/src/assets/logo.png"; 
import { GrResume } from "react-icons/gr";

const Dashboard = () => {
    return (
        <div className="bg-black">
            <div className="flex justify-between  ">
                {/* side nav */}
                <div className="w-[450px] p-10 h-screen bg-[#1A1D1F]">
                                   <div>
                                    <a href="/">
                                    <img className="w-[200px] h-full" src={logo} alt="" />
                                    </a>
                                    
                                   
                                </div>
                                <div className="mt-16">
                                    <ul className="grid gap-8">
                                        <li className="text-xl font-semibold"><Link className="flex items-center gap-3 text-white"><GrResume className="text-pink-600 " /> Industry Insights </Link></li>
                                        <li className="text-xl font-semibold"><Link className="flex items-center gap-3 text-white"><GrResume className="text-pink-600 " />Interview Perperatoin</Link></li>
                                        <li className="text-xl font-semibold"><Link className="flex items-center gap-3 text-white"><GrResume className="text-pink-600 " /> Ai Carear Guidence </Link></li>
                                        <li className="text-xl font-semibold"><Link className="flex items-center gap-3 text-white"><GrResume className="text-pink-600 " /> Resume Builder </Link></li>
                                    </ul>
                                </div>
                   
                </div>
                {/* children */}
                <div className="w-full h-screen">
                   <div className=" h-[100px] bg-[#1A1D1F]">

                   </div>
                   <Outlet/>
                </div>

                {/* third number line */}
                <div className="w-[350px] p-10 h-screen bg-[#1A1D1F]">
                <h3 className="text-3xl text-white">This is dashboard children component</h3>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;