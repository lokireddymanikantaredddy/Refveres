import {  FaGithub,  FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#232b39] text-gray-300 py-10 px-4">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
      {/* Top & Recent Cheatsheets */}
      <div className="flex-1 flex flex-col md:flex-row gap-12 w-full">
        <div>
          <h3 className="text-xl font-semibold mb-4">Top <span className="text-white">Cheatsheet</span></h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-[#1b2230] hover:scale-105 cursor-pointer hover:bg-gray-700 transition-colors duration-300 rounded-lg p-4">
              <a href="/python" ><span className="font-bold text-white">Python Cheatsheet</span></a>
              <div className="text-sm text-gray-400">Quick Reference</div>
            </div>
            <div className="bg-[#1b2230] hover:scale-105 cursor-pointer hover:bg-gray-700 transition-colors duration-300 rounded-lg p-4">
              <a href="/javascript" ><span className="font-bold text-white">JavaScript Cheatsheet</span></a>
              <div className="text-sm text-gray-400">Quick Reference</div>
            </div>
            <div className="bg-[#1b2230] hover:scale-105 cursor-pointer hover:bg-gray-700 transition-colors duration-300 rounded-lg p-4">
              <a href="/html5" ><span className="font-bold text-white">Html Cheatsheet</span></a>
              <div className="text-sm text-gray-400">Quick Reference</div>
            </div>
            <div className="bg-[#1b2230] hover:scale-105 cursor-pointer hover:bg-gray-700 transition-colors duration-300 rounded-lg p-4">
              <a href="/react" ><span className="font-bold text-white">React Cheatsheet</span></a>
              <div className="text-sm text-gray-400">Quick Reference</div>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Recent <span className="text-white">Cheatsheet</span></h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-[#1b2230] hover:scale-105 cursor-pointer hover:bg-gray-700 transition-colors duration-300 rounded-lg p-4">
              <a href="/css3" ><span className="font-bold text-white">Css Cheatsheet</span></a>
              <div className="text-sm text-gray-400">Quick Reference</div>
            </div>
            <div className="bg-[#1b2230] hover:scale-105 cursor-pointer hover:bg-gray-700 transition-colors duration-300 rounded-lg p-4">
              <a href="/tailwind" ><span className="font-bold text-white">Tailwind Cheatsheet</span></a>
              <div className="text-sm text-gray-400">Quick Reference</div>
            </div>
            <div className="bg-[#1b2230] hover:scale-105 cursor-pointer hover:bg-gray-700 transition-colors duration-300 rounded-lg p-4">
              <a href="/node-js" ><span className="font-bold text-white">Node Cheatsheet</span></a>
              <div className="text-sm text-gray-400">Quick Reference</div>
            </div>
            <div className="bg-[#1b2230] hover:scale-105 cursor-pointer hover:bg-gray-700 transition-colors duration-300 rounded-lg p-4">
             <a href="/graphql" ><span className="font-bold text-white">GraphQL Cheatsheet</span></a>
              <div className="text-sm text-gray-400">Quick Reference</div> 
            </div>
          </div>
        </div>
      </div>
      {/* Brand and Social */}
      <div className="flex flex-col items-center md:items-start">
        <div className="flex items-center mb-2">
          <span className=" rounded-full w-10 h-10 flex items-center justify-center mr-3">
            <img src="/logo2.png" alt="Refveres" className="w-10 h-10 rounded-md" />
          </span>
          <span className="text-2xl font-bold text-white">Ref<span className="text-blue-600">veres</span>.dev</span>
        </div>
        <p className="text-gray-400 mb-2 text-center md:text-left">Share quick reference and cheat sheet for developers.</p>
        <p className="text-gray-400 mb-4 text-center md:text-left">Made with ❤️ by <a href="https://github.com/lokireddymanikantaredddy/Refveres" className="text-green-400">Manikanta Reddy</a></p>
        <div className="flex space-x-4 text-xl">
          <a href="https://github.com/lokireddymanikantaredddy" className="hover:text-green-400"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/lokireddy-manikanta-reddy/" className="hover:text-green-400"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;