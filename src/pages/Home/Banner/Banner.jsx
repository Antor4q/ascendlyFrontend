

const Banner = () => {

    
    return (
        <div className="h-[600px] relative  ">
        

            <div className="h-full flex justify-center items-center">
                <div>
                    <h3 className="text-6xl text-center font-bold text-white">Your Personal Assistant<br/> Happy To Work Overtime</h3>
                    <p className="text-xl text-center font-medium text-white my-5">Your personal assistant happy to work overtime</p>
                    <div className="flex gap-6 justify-center">
                    <button className="bg-purple-500 px-6 text-xl font-semibold rounded-xl py-3 text-white">Get Started</button>
                    <button className="bg-purple-500 px-6 text-xl font-semibold rounded-xl py-3 text-white">Watch Demo</button>
                    </div>
                </div>
            </div>
            {/* Grid background */}

<div className="absolute  -z-10 inset-0 h-full w-full 
bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
bg-[size:20px_20px]" />

        </div>

    );
};

export default Banner;