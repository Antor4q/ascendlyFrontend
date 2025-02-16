import oop from "../../../../public/split-2.png"
import logo from "../../../../public/logo2.png"
const Optoins = () => {
    return (
        <div className="container px-10 mx-auto mb-10 pb-20">
            <h3 className="text-5xl font-bold mb-8 text-white text-center">AI Chat app for seamless<br/>
            collaboration</h3>
           <div className="flex justify-center">
           <p className="text-xl  w-1/2 text-white mb-16 text-center">Dentify the platform or interface through which you can access the chatbot. This could be a website, a messaging app, or a dedicated application.</p>
           
           </div>
           <div className="flex relative justify-center">
              <img src={oop} alt="" />
              <img src={logo} className="absolute top-[30%] w-[200px]" alt="" />
           </div>
        </div>
    );
};

export default Optoins;