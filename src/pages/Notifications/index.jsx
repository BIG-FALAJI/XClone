import React from "react";
import { FaRegBell } from "react-icons/fa";
import { GoHeart, GoComment, GoSync } from "react-icons/go";

const notifications = [
  {
    id: 1,
    type: "like",
    user: "Sara Codes",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
    text: "liked your post",
    time: "2h",
    icon: <GoHeart className="text-pink-500" />,
  },
  {
    id: 2,
    type: "comment",
    user: "Tech Trends",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tech",
    text: "commented on your post",
    time: "5h",
    icon: <GoComment className="text-sky-500" />,
  },
  {
    id: 3,
    type: "follow",
    user: "Frontend Daily",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Frontend",
    text: "started following you",
    time: "10h",
    icon: <GoSync className="text-green-500" />,
  },
  {
    id: 4,
    type: "like",
    user: "Big Falaji",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Falaji",
    text: "liked your tweet",
    time: "1d",
    icon: <GoHeart className="text-pink-500" />,
  },
  {
    id: 5,
    type: "comment",
    user: "AI Digest",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AI",
    text: "replied: '🔥🔥🔥'",
    time: "1d",
    icon: <GoComment className="text-sky-500" />,
  },
];

const Notifications = () => {
  return (
    <main className=" max-w-2xl w-full border-r border-gray-800 text-white min-h-screen bg-black">
      {/* Header */}
      <div className="sticky top-0 bg-black/70 backdrop-blur-md border-b border-gray-800 p-4 flex items-center gap-3 z-10">
        <FaRegBell className="text-[1.4rem]" />
        <h1 className="text-xl font-bold">Notifications</h1>
      </div>

      {/* Notifications list */}
      <div>
        {notifications.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-900 cursor-pointer transition"
          >
            {/* Icon */}
            <div>{item.icon}</div>

            {/* Avatar */}
            <img
              src={item.avatar}
              alt={item.user}
              className="w-10 h-10 rounded-full"
            />

            {/* Text */}
            <div className="flex flex-col">
              <span className="text-sm">
                <span className="font-bold hover:underline cursor-pointer">
                  {item.user}
                </span>{" "}
                {item.text}
              </span>
              <span className="text-gray-500 text-xs">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Notifications;
