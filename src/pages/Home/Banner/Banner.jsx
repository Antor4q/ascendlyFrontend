import da from "../../../../public/slider-main-image.png"; 
import ico1 from "../../../../public/icon-shape-one.png"; 
import ico2 from "../../../../public/icon-shape-two.png"; 
import ico3 from "../../../../public/icon-shape-three.png"; 
import ico4 from "../../../../public/icon-shape-four.png"; 

const Banner = () => {

    
    return (
        <div className=" px-10 mx-auto container relative  ">
        

            <div className="h-full  relative flex justify-center items-center">
                <div className="my-24">
                    <h3 className="text-7xl text-center font-bold text-white">Examine the Potential of<br/>
                    <span className="text-purple-500">AI Chating</span> AI Hack</h3>
                    <p className="text-2xl text-center font-medium text-white my-9">Unleash Brainwave`s AI potential. Use the open AI<br/> conversation app Ascendly Ai</p>
                    <div className="flex gap-6 justify-center">
                    <button className="bg-purple-500 px-6 text-xl font-semibold rounded-xl py-3 text-white">Get Started</button>
                    <button className="bg-purple-500 px-6 text-xl font-semibold rounded-xl py-3 text-white">Watch Demo</button>
                    </div>

                 
                </div>
                <img className="absolute top-24 animate-pulse  left-28" src={ico1} alt="" />
                <img className="absolute top-24 animate-pulse right-28" src={ico2} alt="" />
                <img className="absolute top-80 animate-pulse  left-48" src={ico3} alt="" />
                <img className="absolute top-80 animate-pulse  right-48" src={ico4} alt="" />
                
            </div>
            <div className="flex justify-center">
                <div className="w-[1200px] h-[900px] flex items-center justify-center mt-16 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-xl">
                <img className="w-[1100px] h-[800px]  mx-auto" src={da} alt="" />
                </div>
            </div>

        </div>

    );
};

export default Banner;