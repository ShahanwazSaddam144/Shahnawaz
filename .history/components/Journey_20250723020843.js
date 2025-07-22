import React from 'react';

const Journey = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex items-start gap-4 sm:gap-6">
        
        {/* Vertical Blue Line (stays tall on all screen sizes) */}
        <div className="w-1 bg-blue-600 rounded-md h-100 xl:h-70"></div>
        
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-blue-900 mb-4">
            🚀 Skills Timeline
          </h1>

          <ul className="space-y-4">
            <li className="font-extrabold text-blue-900 text-[18px]">
              March 2025:
              <span className="ml-3 text-gray-700 font-medium">
                Started my journey with HTML & CSS basics
              </span>
            </li>
            <li className="font-extrabold text-blue-900 text-[18px]">
              April 2025:
              <span className="ml-3 text-gray-700 font-medium">
                Learned JavaScript and built some mini projects
              </span>
            </li>
            <li className="font-extrabold text-blue-900 text-[18px]">
              May 2025:
              <span className="ml-3 text-gray-700 font-medium">
                Exploring React, Tailwind & Next.js
              </span>
            </li>
            <li className="font-extrabold text-blue-900 text-[18px]">
              June 2025:
              <span className="ml-3 text-gray-700 font-medium">
                Completed 4 Full Stack Projects
              </span>
            </li>
            <li className="font-extrabold text-blue-900 text-[18px]">
              Now 2025:
              <span className="ml-3 text-gray-700 font-medium">
                Exploring more backend concepts and making new projects
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Journey;
