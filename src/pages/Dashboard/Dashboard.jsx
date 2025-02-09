import logo from "/src/assets/logo.png"; 

const Dashboard = () => {
    return (
        <div className="bg-black">
            <div className="flex py-20 gap-10">
                {/* side nav */}
                <div className="w-[200px] pl-10 h-screen">
                                   <div>
                                    <a href="/">
                                    <img className="w-[300px] h-full" src={logo} alt="" />
                                    </a>
                                    
                                   
                                </div>
                    this is side nav
                </div>
                {/* children */}
                <div className="w-[800px] h-screen">
                   <h3 className="text-3xl text-white">This is dashboard children component</h3>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;