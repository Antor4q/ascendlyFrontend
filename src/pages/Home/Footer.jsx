import logo from "../../../public/logo.png"

const Footer = () => {
    return (
      <div className="bg-[#111217] text-gray-300 pt-20 pb-8">
        <div className="container mx-auto px-6 md:px-10 grid grid-cols-1 pb-20 md:grid-cols-4 gap-10">
          {/* Logo & Newsletter */}
          <div>
            <img src={logo} className="w-[200px]" alt="" />
            <p className="mt-2 text-gray-400">
              It has long been known that a reader`s attention will be diverted from.
            </p>
            <h3 className="text-white font-semibold mt-4">Join a Newsletter</h3>
            <div className="mt-2 flex items-center">
              <input
                type="email"
                placeholder="Enter Your Email Here"
                className="bg-[#1b1d23] text-gray-300 px-4 py-2 rounded-md outline-none w-full"
              />
              <button className="ml-2 bg-purple-500 hover:bg-purple-600 px-4 py-2 rounded-md text-white">
                →
              </button>
            </div>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-purple-500">Pages</a></li>
              <li><a href="#" className="hover:text-purple-500">Blog</a></li>
              <li><a href="#" className="hover:text-purple-500">Contact</a></li>
              <li><a href="#" className="hover:text-purple-500">How to use</a></li>
              <li><a href="#" className="hover:text-purple-500">Roadmap</a></li>
            </ul>
          </div>
  
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold">Services</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#" className="hover:text-purple-500">Image Generator</a></li>
              <li><a href="#" className="hover:text-purple-500">Video Generator</a></li>
              <li><a href="#" className="hover:text-purple-500">Text Generator</a></li>
              <li><a href="#" className="hover:text-purple-500">Code Generator</a></li>
              <li><a href="#" className="hover:text-purple-500">Education Feedback</a></li>
            </ul>
          </div>
  
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold">Contact</h3>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center gap-2">
                📍 <span>8819 Ohio St. South Gate, North America, USA</span>
              </li>
              <li className="flex items-center gap-2">
                ✉️ <span>example@domain.com</span>
              </li>
              <li className="flex items-center gap-2">
                📞 <span>+1 386-688-3295</span>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-400 text-sm">
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-purple-500">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-purple-500">Terms And Condition</a>
            <span>|</span>
            <a href="#" className="hover:text-purple-500">Contact Us</a>
          </div>
          <p className="mt-3">
            Copyright © 2024 <span className="text-purple-500">Rainbow-Themes.</span>
          </p>
        </div>
      </div>
    );
  };
  
  export default Footer;
  