import { FaRegImage, FaRegSmile } from "react-icons/fa";
import { MdOutlineGifBox } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import Button from "../../Shared/Button";

const Feeds = () => {
  const tweets = [
    {
      id: 1,
      name: "Big Falaji",
      username: "@falaji",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Falaji",
      text: "Just started working on my X clone — this is fun! 🚀",
      time: "2h",
    },
    {
      id: 2,
      name: "Tech Trends",
      username: "@techtalk",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tech",
      text: "React 19 just dropped — time to explore new hooks! ⚛️",
      time: "5h",
    },
    {
      id: 3,
      name: "Frontend Daily",
      username: "@frontend_daily",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Frontend",
      text: "Tailwind CSS makes styling a joy. Utility-first just hits different 💅",
      time: "8h",
    },
    {
      id: 4,
      name: "Sara Codes",
      username: "@saracodes",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara",
      text: "I just deployed my portfolio with smooth animations using Framer Motion ✨",
      time: "10h",
    },
    {
      id: 5,
      name: "Dev Community",
      username: "@thedevs",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DevCommunity",
      text: "Remember: consistency beats perfection. Keep coding daily 💻🔥",
      time: "1d",
    },
    {
      id: 6,
      name: "AI Digest",
      username: "@ai_digest",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AI",
      text: "ChatGPT, Claude, and Gemini are redefining productivity in 2025 🤖",
      time: "1d",
    },
    {
      id: 7,
      name: "Design Inspo",
      username: "@uiuxinspo",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Design",
      text: "Pro tip: Always add subtle shadows and rounded corners for a friendly UI 🪶",
      time: "2d",
    },
    {
      id: 8,
      name: "Next Level Dev",
      username: "@nextleveldev",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=NextDev",
      text: "Learning Next.js + TypeScript combo — best decision ever! 🚀",
      time: "2d",
    },
  ];

  return (
    <div className="flex-1 w-full border-x border-gray-800 min-h-screen text-white bg-black">
      {/* Feed Header */}
      <div className="sticky top-0 bg-black bg-opacity-90 backdrop-blur-sm border-b border-gray-800 p-4 text-xl font-extrabold">
        Home
      </div>

      {/* Post Input */}
      <div className="flex gap-4 p-4 border-b border-gray-800">
        <img
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Falaji"
          alt="User avatar"
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <textarea
            className="w-full bg-transparent border-none outline-none resize-none text-lg placeholder-gray-500"
            placeholder="What is happening?"
          ></textarea>

          {/* Post actions */}
          <div className="flex justify-between items-center mt-3">
            <div className="flex gap-3 text-blue-400">
              <FaRegImage />
              <MdOutlineGifBox />
              <FaRegSmile />
              <IoLocationOutline />
            </div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
              Post
            </Button>
          </div>
        </div>
      </div>

      {/* Tweets */}
      {tweets.map((tweet) => (
        <div
          key={tweet.id}
          className="p-4 border-b border-gray-800 hover:bg-[#16181C] transition"
        >
          <div className="flex gap-4">
            <img
              src={tweet.avatar}
              alt={tweet.name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <div className="flex gap-2 items-center">
                <h3 className="font-semibold">{tweet.name}</h3>
                <p className="text-gray-500 text-sm">{tweet.username}</p>
                <span className="text-gray-500 text-sm">· {tweet.time}</span>
              </div>
              <p className="text-gray-200 mt-1">{tweet.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feeds;
