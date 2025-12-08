import React from "react";
import { FaHeart, FaRegComment, FaRetweet } from "react-icons/fa";

const Likes = () => {
  const likedPosts = [
    {
      id: 1,
      username: "DevFalaji",
      handle: "@bigfalaji",
      time: "2h",
      content:
        "Frontend isn’t just about code, it’s about making experiences smooth and beautiful. ✨",
      likes: 200,
      comments: 45,
      reposts: 15,
    },
    {
      id: 2,
      username: "CodeVerse",
      handle: "@codeverse",
      time: "5h",
      content:
        "React + Tailwind = 💣 combo for clean UI. Nothing beats that speed of design iteration!",
      likes: 350,
      comments: 80,
      reposts: 25,
    },
    {
      id: 3,
      username: "SkyWeather",
      handle: "@skyapp",
      time: "1d",
      content:
        "We just launched dark mode support 🌙☀️ Try it and tell us what you think!",
      likes: 490,
      comments: 120,
      reposts: 60,
    },
  ];

  return (
    <div className="w-full md:w-[90%] mx-auto mt-5 pb-20 px-5 text-white">
      <div className="flex flex-col gap-5">
        {likedPosts.map((post) => (
          <div
            key={post.id}
            className="rounded-2xl p-5 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-800 bg-[#1A1A1A] hover:scale-[1.01]"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                <p className="font-semibold text-[15px] md:text-[16px]">
                  {post.username}
                </p>
                <p className="text-sm opacity-70">
                  {post.handle} • {post.time}
                </p>
              </div>
            </div>

            {/* Content */}
            <p className="text-[15px] md:text-[16px] leading-relaxed">
              {post.content}
            </p>

            {/* Action Bar */}
            <div className="flex justify-around mt-4 text-gray-400 text-sm md:text-base">
              <button className="flex items-center gap-2 hover:text-blue-400 transition">
                <FaRegComment /> {post.comments}
              </button>
              <button className="flex items-center gap-2 hover:text-green-400 transition">
                <FaRetweet /> {post.reposts}
              </button>
              <button className="flex items-center gap-2 hover:text-red-500 transition">
                <FaHeart className="text-red-500" /> {post.likes}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Likes;
