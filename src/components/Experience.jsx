import React from "react";

import Javascript from "../assets/javascript.png";
import NextJs from "../assets/nextjs.png";
import expressjs from "../assets/expressjs.png";
import reactImage from "../assets/react.png";
import Laravel from "../assets/laravel.png";
import MySQL from "../assets/mysql.png";
import Firebase from "../assets/firebase.svg";
import tailwind from "../assets/tailwind.png";
import Mongodb from "../assets/mongodb.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: Javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 2,
      src: NextJs,
      title: "NextJs",
      style: "shadow-white",
    },
    {
      id: 3,
      src: Laravel,
      title: "Laravel",
      style: "shadow-red-600",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: expressjs,
      title: "ExpressJS",
      style: "shadow-white",
    },
    {
      id: 7,
      src: MySQL,
      title: "MySQL",
      style: "shadow-yellow-700",
    },
    {
      id: 8,
      src: Firebase,
      title: "Firebase",
      style: "shadow-yellow-500",
    },
    {
      id: 9,
      src: Mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;