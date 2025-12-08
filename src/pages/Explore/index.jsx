import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const trends = [
    { category: "Trending in Nigeria", topic: "React 19", tweets: "25.4K" },
    { category: "Technology", topic: "Next.js 15", tweets: "10.8K" },
    { category: "Music · Trending", topic: "Asake", tweets: "56.2K" },
    { category: "Sports · Trending", topic: "Chelsea", tweets: "34.1K" },
    { category: "Entertainment", topic: "Afrobeats", tweets: "21.5K" },
    { category: "Politics", topic: "Naira", tweets: "18.3K" },
  ];

  return (
    <div className="flex-1 border-x border-gray-800 min-h-screen bg-black text-white">
      {/* Search Bar */}
      <div className="sticky top-0 bg-black/80 backdrop-blur-md p-4 border-b border-gray-800 z-10">
        <div className="flex items-center bg-[#202327] px-4 py-2 rounded-full">
          <CiSearch className="text-gray-500 text-xl mr-3" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-transparent outline-none text-white flex-1 placeholder-gray-500"
          />
        </div>
      </div>

      {/* Trends Section */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Trends for you</h2>
        {trends.map((trend, index) => (
          <div
            key={index}
            className="py-3 hover:bg-[#16181c] transition cursor-pointer rounded-xl px-3"
          >
            <p className="text-gray-500 text-sm">{trend.category}</p>
            <h3 className="font-bold text-[1rem] mt-1">{trend.topic}</h3>
            <p className="text-gray-500 text-sm">{trend.tweets} posts</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
