import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";
import { MdCalendarToday } from "react-icons/md";
import { useNavigate } from "react-router";
import Button from "../../shared";
import Post from "../Posts";
import Replies from "../Replies";
import Media from "../Media";
import Likes from "../Likes";

const tweets = [
  {
    id: 1,
    text: "Just launched my X clone UI — it’s looking 🔥🔥🔥",
    time: "2h",
  },
  {
    id: 2,
    text: "Learning React hooks deeply changed how I build UIs ⚛️",
    time: "1d",
  },
  {
    id: 3,
    text: "Frontend + creativity = limitless possibilities ✨",
    time: "3d",
  },
];

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");

  const renderTab = () => {
    switch (activeTab) {
      case "posts":
        return <Post />;
      case "replies":
        return <Replies />;
      case "media":
        return <Media />;
      case "likes":
        return <Likes />;

      default:
        return <Post />;
    }
  };

  const navigate = useNavigate();
  return (
    <main className=" max-w-2xl w-full border-r border-gray-800 text-white min-h-screen bg-black">
      {/* Header */}
      <header className="sticky top-0 bg-black/70 backdrop-blur-md border-b border-gray-800 p-4 flex items-center gap-4 z-10">
        <Button
          onClick={() => navigate(-1)}
          className="flex items-center justify-center p-2 hover:bg-gray-900 rounded-full"
        >
          <IoArrowBack className="text-xl text-white" />
        </Button>
        <div>
          <h1 className="text-xl font-bold">Big Falaji</h1>
          <p className="text-gray-500 text-sm">{tweets.length} posts</p>
        </div>
      </header>

      {/* Banner */}
      <div className="w-full h-40 bg-gray-700 relative">
        {/* Avatar */}
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Falaji"
          alt="Profile avatar"
          className="w-28 h-28 rounded-full border-4 border-black absolute -bottom-14 left-4"
        />
      </div>

      {/* Profile info */}
      <div className="mt-16 px-4">
        <div className="flex justify-end">
          <button className="border border-gray-600 rounded-full px-4 py-1 font-semibold hover:bg-gray-900 transition">
            Edit profile
          </button>
        </div>

        <h2 className="font-bold text-lg mt-2">Big Falaji</h2>
        <p className="text-gray-500 text-sm">@falaji</p>

        <p className="mt-3 text-sm text-gray-300">
          Building cool stuff with React ⚛️ / Next js 🚀 | Frontend dev |
          Learner forever 🌍
        </p>

        <div className="flex items-center gap-2 text-gray-500 text-sm mt-3">
          <MdCalendarToday />
          <p>Joined March 2025</p>
        </div>

        <div className="flex gap-4 text-sm mt-3">
          <p>
            <span className="font-semibold text-white">250</span>{" "}
            <span className="text-gray-500">Following</span>
          </p>
          <p>
            <span className="font-semibold text-white">800</span>{" "}
            <span className="text-gray-500">Followers</span>
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex justify-around border-b border-gray-800 mt-4 text-gray-500 text-sm">
        <button
          onClick={() => setActiveTab("posts")}
          className={`py-3 px-5 font-semibold ${
            activeTab === "posts"
              ? "border-b-4 border-blue-500 text-blue-500"
              : ""
          }`}
        >
          Posts
        </button>
        <button
          onClick={() => setActiveTab("replies")}
          className={`py-3 px-5 font-semibold ${
            activeTab === "replies"
              ? "border-b-4 border-blue-500 text-blue-500"
              : ""
          }`}
        >
          Replies
        </button>
        <button
          onClick={() => setActiveTab("media")}
          className={`py-3 px-5 font-semibold ${
            activeTab === "media"
              ? "border-b-4 border-blue-500 text-blue-500"
              : ""
          }`}
        >
          Media
        </button>
        <button
          onClick={() => setActiveTab("likes")}
          className={`py-3 px-5 font-semibold ${
            activeTab === "likes"
              ? "border-b-4 border-blue-500 text-blue-500"
              : ""
          }`}
        >
          Likes
        </button>
      </div>
      <div className="p-5">{renderTab()}</div>
    </main>
  );
};

export default Profile;
