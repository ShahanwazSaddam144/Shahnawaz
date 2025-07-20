"use client";

import Image from 'next/image';

const Home_ = () => {
  return (
    <section className=" mt-2 flex flex-col items-center justify-center bg-gray-200 text-center px-4 py-8">
      {/* Avatar */}
      <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-50 md:h-50 rounded-full border-4 border-blue-600 overflow-hidden shadow-lg">
        <Image
          src="/developer.jpg"
          alt="Developer"
          width={300}
          height={200}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Name */}
      <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
        Hello I am,{" "}
        <span className="text-blue-500 drop-shadow-md block sm:inline">
          Shahnawaz Saddam Butt
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg md:text-xl mt-3 text-gray-800 font-semibold">
        Full-Stack Developer 💻
      </p>

      {/* Description Line 1 */}
      <p className="text-sm sm:text-base md:text-lg mt-4 text-gray-800 max-w-xl">
        Fast, efficient, and always up for a challenge. I am a full-stack developer with a passion for web development.
      </p>

      {/* Description Line 2 */}
      <p className="text-sm sm:text-base md:text-lg mt-3 font-semibold text-gray-800 max-w-xl">
        Just a teen who is chasing his dreams through code 💻 ☁️
      </p>
    </section>
  );
};

export default Home_;
