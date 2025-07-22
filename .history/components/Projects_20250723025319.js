import React from "react";
import Image from "next/image";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-br from-gray-200 to-gray-300 py-10 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-[25px] sm:text-[32px] lg:text-[40px] font-bold text-center mb-10">
          🚀 My Projects
        </h1>

        <div
          className="bg-gray-200 cursor-pointer rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] 
          w-full sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto 
          hover:bounce-up transition duration-500"
        >
          <div className="flex justify-center">
            <Image
              src="/logo.png"
              alt="Developer"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>

          <p className="text-center mt-4 mb-1 text-[16px] font-semibold text-gray-900">
            Next.js  •  • Tailwind • MongoDB
          </p>

          <p className="text-center text-[15px] text-gray-800 leading-relaxed">
            A fully functional business website for a web development company
            that builds the best websites for every purpose.
          </p>

          <a
            href="https://buttnetworks.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-6 mx-auto px-4 py-2 bg-blue-600 text-white text-center rounded-lg max-w-[150px] hover:bg-blue-700 transition"
          >
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
