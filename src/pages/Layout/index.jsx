import Sidebar from "../../Shared/SideBar";
import RightSidebar from "../../Shared/RightSideBar";
import BottomBar from "../../Shared/BottomBar";
// import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import SignUp from "../SignUp";

const Layout = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.account);

  if (!isAuthenticated) {
    return <SignUp />;
  }

  return (
    <div className="bg-black text-white min-h-screen flex justify-center">
      {/* Sidebar (fixed) */}
      <div className="hidden sm:block fixed left-0 top-0 h-full border-r border-gray-800 bg-black">
        <Sidebar />
      </div>

      {/* Feed Section */}
      <div className="flex-1 max-w-[600px] border-x border-gray-800">
        {children}
      </div>

      {/* Right Sidebar */}
      <div className="hidden lg:block w-[250px] border-l border-gray-800">
        <RightSidebar />
      </div>

      {/* Bottom Bar */}
      <div className="sm:hidden fixed bottm-0 border-t border-gray-800 bg-black">
        <BottomBar />
      </div>
    </div>
  );
};

export default Layout;
