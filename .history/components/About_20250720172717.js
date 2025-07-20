"use client"

import React, { useEffect, useState } from "react";


const getLiveTime = () => {
  const now = new Date();
  return now.toLocaleTimeString();
};


const getLearningDays = () => {
  const startDate = new Date("2025-03-23"); 
  const now = new Date();
  const diffTime = Math.abs(now - startDate);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
};

const About = () => {
  const [currentTime, setCurrentTime] = useState(getLiveTime());
  const [learningDays, setLearningDays] = useState(getLearningDays());
  const deployedProjects = 4;


  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(getLiveTime());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);


  useEffect(() => {
    const daysInterval = setInterval(() => {
      setLearningDays(getLearningDays());
    }, 1000 * 60 * 60); 
    return () => clearInterval(daysInterval);
  }, []);

  return (
    <section
      className="bg-gray-200 py-12 px-4 sm:px-6 lg:px-8 cursor-pointer"
      id="about"
    >
      <div className="max-w-5xl mx-auto">
        {/* 🔹 Heading */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-blue-900 mb-4">
          👨‍💻 About Shahnawaz Saddam Butt
        </h1>

        {/* 🔹 Intro Paragraph */}
        <p className="text-center text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto mb-12">
          Shahnawaz Saddam Butt is a 15-year-old full-stack developer from Lahore. He creates modern, responsive websites using 
          HTML, CSS, Tailwind, JavaScript, React, Node.js, Next.js, and MongoDB.
        </p>

        {/* 🔹 Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* ⏰ Live Timer */}
          <div className="bg-blue-50 rounded-2xl shadow-xl p-6 text-center 
            transition-transform duration-300 ease-in-out 
            hover:-translate-y-1 hover:scale-105 active:scale-105 active:-translate-y-1">
            <h2 className="text-xl font-bold text-blue-800 mb-2">⏰ Live Coding Timer</h2>
            <p className="text-3xl font-extrabold text-blue-900">{currentTime}</p>
            <p className="text-sm text-gray-500 mt-2">Current time ticking live</p>
          </div>

          {/* 📘 Days of Learning */}
          <div className="bg-blue-50 rounded-2xl shadow-xl p-6 text-center 
            transition-transform duration-300 ease-in-out 
            hover:-translate-y-1 hover:scale-105 active:scale-105 active:-translate-y-1">
            <h2 className="text-xl font-bold text-blue-500 mb-2">📘 Days of Learning</h2>
            <p className="text-5xl font-extrabold text-blue-900">{learningDays}</p>
            <p className="text-sm text-gray-500 mt-2">Days since starting coding journey</p>
          </div>

          {/* 🚀 Projects Deployed */}
          <div className="bg-blue-50 rounded-2xl shadow-xl p-6 text-center md:col-span-2 
            transition-transform duration-300 ease-in-out 
            hover:-translate-y-1 hover:scale-105 active:scale-105 active:-translate-y-1">
            <h2 className="text-xl font-bold text-blue-600 mb-2">🚀 Projects Deployed</h2>
            <p className="text-5xl font-extrabold text-blue-900">{deployedProjects}</p>
            <p className="text-sm text-gray-500 mt-2">Live & running projects on the web</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
