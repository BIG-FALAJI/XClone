import React, { useState } from "react";
import { IoArrowBack } from "react-icons/io5";

const Media = () => {
  const [mediaPosts] = useState([
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
      caption: "My first React UI build 🔥",
      time: "2h",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=60",
      caption: "Dark mode looking clean 😎",
      time: "1d",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60",
      caption: "Frontend setup complete ⚛️",
      time: "3d",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1522205408450-add114ad53fe?auto=format&fit=crop&w=800&q=60",
      caption: "Workstation upgrade 💻",
      time: "5d",
    },
  ]);

  return (
    <main className="max-w-2xl mx-auto min-h-screen bg-black text-white">
      {/* Media Section */}
      {mediaPosts.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">
          You haven’t posted any media yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 p-2">
          {mediaPosts.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-xl cursor-pointer"
            >
              <img
                src={item.image}
                alt="media"
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3">
                <p className="text-sm font-semibold">{item.caption}</p>
                <span className="text-gray-400 text-xs">{item.time} ago</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Media;
