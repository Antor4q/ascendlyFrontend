
const Features = () => {
    return (
        <div className="mt-10 py-20 ">
           <div className="container mx-auto">
              {/* cards container */}
                 <div className="grid grid-cols-4 gap-5">
                      {/* CARD1 */}
                      <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-white/10 p-5 rounded-xl w-[330px] h-[200px] shadow-xl shadow-fuchsia-700">
    <h3 className="text-2xl font-semibold mb-3 text-center text-white">Smart Resume Builder</h3>
    <p className="text-center text-gray-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laborum culpa laboriosam alias commodi in ratione mollitia cumque iusto odio!
    </p>
</div>


            {/* CARD2 */}
            <div className="bg-gradient-to-br text-white from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-white/10 p-5 rounded-xl w-[330px] h-[200px] shadow-xl shadow-fuchsia-700">
                <h3 className="text-2xl font-semibold mb-3 text-center">Interview Preparation</h3>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laborum culpa laboriosam alias commodi in ratione mollitia cumque iusto odio!</p>
            </div>
            {/* CARD3 */}
            <div className="bg-gradient-to-br text-white from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-white/10 p-5 rounded-xl w-[330px] h-[200px] shadow-xl shadow-fuchsia-700">
                <h3 className="text-2xl font-semibold mb-3 text-center">Ai Powered Carear Guidence</h3>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laborum culpa laboriosam alias commodi in ratione mollitia cumque iusto odio!</p>
            </div>
            {/* CARD4 */}
            <div className="bg-gradient-to-br text-white from-gray-900/50 to-gray-800/50 backdrop-blur-lg border border-white/10 p-5 rounded-xl w-[330px] h-[200px] shadow-xl shadow-fuchsia-700">
                <h3 className="text-2xl font-semibold mb-3 text-center">Industry Insights</h3>
                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut laborum culpa laboriosam alias commodi in ratione mollitia cumque iusto odio!</p>
            </div>
                 </div>
           </div>
        </div>
    );
};

export default Features;