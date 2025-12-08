import React from "react";

const RightSidebar = () => {
  return (
    <aside className="hidden lg:block w-[350px] border-l border-gray-800 bg-black text-white p-4">
      <input
        type="text"
        placeholder="Search X"
        className="w-full bg-[#16181C] text-white rounded-full px-4 py-2 outline-none mb-6"
      />

      <div className="bg-[#16181C] rounded-xl p-4">
        <h2 className="font-bold text-xl mb-3">What’s happening</h2>
        <ul className="space-y-3">
          <li className="text-gray-300 text-sm hover:underline cursor-pointer">
            React 19 released 🎉
          </li>
          <li className="text-gray-300 text-sm hover:underline cursor-pointer">
            Frontend devs love Tailwind 💙
          </li>
          <li className="text-gray-300 text-sm hover:underline cursor-pointer">
            Big Falaji trending in Lagos 🔥
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default RightSidebar;
