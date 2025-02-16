import { Link } from "react-router-dom";

const Features = () => {
    return (
        <div className="my-10 py-20 ">
           <div className="container px-10 mx-auto">
            <h3 className="text-5xl font-bold mb-8 text-white">Generative AI Made For Heros.</h3>
            <p className="text-xl w-1/2 text-white mb-16 ">Dentify the platform or interface through which you can access the chatbot. This could be a website, a messaging app, or a dedicated application.</p>
              {/* cards container */}
                 <div className="grid grid-cols-4 gap-5">
                      {/* CARD1 */}
                      <Link to={"/dashboard"} className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-white/10 p-5 rounded-xl w-[330px] h-[200px] shadow-xl shadow-fuchsia-700">
    <h3 className="text-2xl font-semibold mb-3 text-center text-white">Smart Resume Builder</h3>
    <p className="text-center text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laborum culpa laboriosam alias commodi in ratione mollitia cumque iusto odio!
    </p>
</Link>


            {/* CARD2 */}
            <Link to={"/dashboard"} className="bg-gradient-to-br text-white from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-white/10 p-5 rounded-xl w-[330px] h-[200px] shadow-xl shadow-fuchsia-700">
                <h3 className="text-2xl font-semibold mb-3 text-center">Interview Preparation</h3>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laborum culpa laboriosam alias commodi in ratione mollitia cumque iusto odio!</p>
            </Link>
            {/* CARD3 */}
            <Link to={"/dashboard"} className="bg-gradient-to-br text-white from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-white/10 p-5 rounded-xl w-[330px] h-[200px] shadow-xl shadow-fuchsia-700">
                <h3 className="text-2xl font-semibold mb-3 text-center">Ai Carear Guidence</h3>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laborum culpa laboriosam alias commodi in ratione mollitia cumque iusto odio!</p>
            </Link>
            {/* CARD4 */}
            <Link to={"/dashboard"} className="bg-gradient-to-br text-white from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-white/10 p-5 rounded-xl w-[330px] h-[200px] shadow-xl shadow-fuchsia-700">
                <h3 className="text-2xl font-semibold mb-3 text-center">Industry Insights</h3>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laborum culpa laboriosam alias commodi in ratione mollitia cumque iusto odio!</p>
            </Link>
                 </div>
           </div>
        </div>
    );
};

export default Features;