import React from 'react';

const Facts = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="flex items-start gap:6px sm:gap-6">
        
        {/* Vertical Blue Line */}
        <div className="w-1 bg-blue-600 rounded-md h-55 xl:h-50"></div>

        {/* Content */}
        <div>
          <h1 className="text-[22px] sm:text-3xl font-bold text-blue-900 mb-4">
            ⚡ Facts
          </h1>

          <ul className="space-y-4 ml-3">
            <li className="font-extrabold text-blue-900 text-[18px]">
              Frontend:
              <span className="ml-3 text-gray-700 font-medium">
                Next.js, React.js, Tailwind
              </span>
            </li>
            <li className="font-extrabold text-blue-900 text-[18px]">
              Backend:
              <span className="ml-3 text-gray-700 font-medium">
                Node.js, Express.js, MongoDB, Mongoose
              </span>
            </li>
            <li className="font-extrabold text-blue-900 text-[18px]">
              Deployment:
              <span className="ml-3 text-gray-700 font-medium">
                Linux VPS (manual + CLI-based)
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Facts;


