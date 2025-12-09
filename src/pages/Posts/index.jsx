const Posts = () => {
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
  return (
    <div>
      {tweets.map((tweet) => (
        <div
          key={tweet.id}
          className="px-4 py-4 border-b border-gray-800 hover:bg-gray-900 cursor-pointer transition"
        >
          <div className="flex items-start gap-3">
            <img
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=Falaji"
              alt="avatar"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold">Big Falaji</span>
                <span className="text-gray-500 text-sm">@falaji</span>
                <span className="text-gray-500 text-sm">· {tweet.time}</span>
              </div>
              <p className="mt-1 text-gray-200 text-[0.95rem]">{tweet.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
