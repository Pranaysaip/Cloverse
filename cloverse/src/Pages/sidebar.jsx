import { FaUserCircle, FaBell, FaComments, FaVideo, FaClipboard, FaBriefcase, FaBrain } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { icon: FaBell, path: "/notifications" },
    { icon: FaComments, path: "/chats" },
    { icon: FaVideo, path: "/meet" },
    { icon: FaClipboard, path: "/documents" },
    { icon: FaBriefcase, path: "/workspace" },
    { icon: FaBrain, path: "/ai" },
  ];

  return (
    <div className="h-screen w-20 bg-gray-800 text-white flex flex-col items-center py-5 space-y-6">
      {/* Bigger Account Icon */}
      <FaUserCircle size={60} className="text-white mb-6 cursor-pointer hover:text-green-400" />

      {/* Sidebar Icons */}
      <div className="flex flex-col space-y-6 mt-4">
        {menuItems.map(({ icon: Icon, path }, index) => (
          <button
            key={index}
            className={`p-3 rounded-xl flex items-center justify-center transition duration-300 ${
    location.pathname === path ? "bg-green-500 shadow-lg" : "bg-gray-700 hover:bg-green-500"
  }`}
            onClick={() => navigate(path)}
          >
            <Icon size={24} className="text-white" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
