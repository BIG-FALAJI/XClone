import React from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";

const messages = [
  {
    id: 1,
    name: "Sara Codes",
    username: "@saracodes",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
    lastMessage: "Hey! How’s the X clone coming along?",
    time: "2m",
  },
  {
    id: 2,
    name: "Tech Trends",
    username: "@techtalk",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tech",
    lastMessage: "React 19 is awesome 🔥🔥🔥",
    time: "1h",
  },
  {
    id: 3,
    name: "Frontend Daily",
    username: "@frontend",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Frontend",
    lastMessage: "Check out this new Tailwind trick 👀",
    time: "3h",
  },
  {
    id: 4,
    name: "AI Digest",
    username: "@aidigest",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AI",
    lastMessage: "AI tools are changing frontend dev fast!",
    time: "1d",
  },
  {
    id: 5,
    name: "Big Falaji",
    username: "@falaji",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Falaji",
    lastMessage: "Let’s ship the project today 🚀",
    time: "2d",
  },
];

const Messages = () => {
  return (
    <main className=" max-w-2xl w-full border-r border-gray-800 text-white min-h-screen bg-black">
      {/* Header */}
      <div className="sticky top-0 bg-black/70 backdrop-blur-md border-b border-gray-800 p-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <FaRegEnvelope className="text-[1.4rem]" />
          <h1 className="text-xl font-bold">Messages</h1>
        </div>
        <button className="p-2 hover:bg-gray-900 rounded-full">
          <FiEdit size={20} />
        </button>
      </div>

      {/* Message list */}
      <div>
        {messages.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 cursor-pointer transition"
          >
            {/* Avatar */}
            <img
              src={chat.avatar}
              alt={chat.name}
              className="w-12 h-12 rounded-full"
            />

            {/* Chat info */}
            <div className="flex flex-col w-full">
              <div className="flex justify-between">
                <span className="font-semibold">{chat.name}</span>
                <span className="text-gray-500 text-xs">{chat.time}</span>
              </div>
              <span className="text-gray-500 text-sm truncate">
                {chat.lastMessage}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Empty state (optional if no messages) */}
      {messages.length === 0 && (
        <div className="flex flex-col items-center justify-center h-[80vh] text-gray-500">
          <FaRegEnvelope size={40} className="mb-4" />
          <p>No messages yet</p>
        </div>
      )}
    </main>
  );
};

export default Messages;
