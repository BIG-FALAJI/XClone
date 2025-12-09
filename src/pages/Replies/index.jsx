import React, { useState } from "react";
// import { toast } from "react-toastify";

const Replies = () => {
  const [replies] = useState([
    {
      id: 1,
      user: "Big Falaji",
      username: "@falaji",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Falaji",
      replyTo: "FrontendWiz",
      text: "That’s so true! React hooks really change everything 🔥",
      time: "3h",
    },
    {
      id: 2,
      user: "Big Falaji",
      username: "@falaji",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Falaji",
      replyTo: "DevQueen",
      text: "Exactly! CSS Grid made my layout 10x easier 😅",
      time: "1d",
    },
  ]);

  return (
    <main className="max-w-2xl mx-auto min-h-screen bg-black">
      {/* Replies Feed */}
      <section className="flex flex-col">
        {replies.length === 0 ? (
          <p className="text-center text-white mt-10">
            You haven’t replied to any posts yet.
          </p>
        ) : (
          replies.map((reply) => (
            <div
              key={reply.id}
              className="p-4 hover:bg-gray-900 transition cursor-pointer"
            >
              <div className="flex gap-3">
                <img
                  src={reply.avatar}
                  alt={reply.user}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <p>
                      Replying to{" "}
                      <span className="text-blue-500">@{reply.replyTo}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <h2 className="font-bold ">{reply.user}</h2>
                    <span className="text-gray-500 text-sm">
                      {reply.username} • {reply.time}
                    </span>
                  </div>
                  <p className="text-white mt-1">{reply.text}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  );
};

export default Replies;
