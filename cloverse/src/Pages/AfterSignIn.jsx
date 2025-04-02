import React from "react";
import { FaUserCircle, FaBell, FaComments, FaVideo, FaClipboard, FaBriefcase, FaBrain, FaUser, FaUpload, FaFolder, FaHourglass } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const icons = [FaUserCircle, FaBell, FaComments, FaVideo, FaClipboard, FaBriefcase, FaBrain];
  const navigate = useNavigate();

  return (
    <div className="h-screen w-20 bg-gray-800 text-white flex flex-col items-center py-5 space-y-6">
      {icons.map((Icon, index) => (
        <div 
          key={index} 
          className="p-4 bg-gray-700 rounded-xl cursor-pointer hover:bg-green-500"
          onClick={() => index === 2 && navigate('/chats')} // Navigate to chats page on clicking chat icon
        >
          <Icon size={24} />
        </div>
      ))}
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Dashboard */}
      <div className="flex-1 p-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8 text-green-400 border-b border-green-400 pb-2">Welcome to CLOVERSE, KS</h1>

        <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
          {/* Top Row */}
          <div className="flex justify-center">
            <div 
              className="bg-gradient-to-b from-green-300 to-blue-500 p-6 rounded-2xl shadow-lg text-center w-64 cursor-pointer"
              onClick={() => navigate('/chats')} // Navigate on click
            >
              <FaUser size={30} className="mb-2 text-gray-900" />
              <p className="text-lg font-semibold text-gray-900">Search by Username</p>
              <p className="text-sm text-gray-800">Send an invite link</p>
            </div>
          </div>

          {/* Animated Element */}
          <motion.div 
            className="flex justify-center items-center"
            animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0], scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <span className="text-5xl">🌟</span>
          </motion.div>

          <div className="flex justify-center">
            <div className="bg-gradient-to-b from-green-300 to-blue-500 p-6 rounded-2xl shadow-lg text-center w-64">
              <FaUpload size={30} className="mb-2 text-gray-900" />
              <p className="text-lg font-semibold text-gray-900">Upload a new doc</p>
              <p className="text-sm text-gray-800">Open my documents</p>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-3 gap-6 w-full max-w-4xl mt-6">
          <div className="flex justify-center">
            <div className="bg-gradient-to-b from-green-300 to-blue-500 p-6 rounded-2xl shadow-lg text-center w-64">
              <FaVideo size={30} className="mb-2 text-gray-900" />
              <p className="text-lg font-semibold text-gray-900">Create Instant Meet</p>
              <p className="text-sm text-gray-800">Join with meet code</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gradient-to-b from-green-300 to-blue-500 p-6 rounded-2xl shadow-lg text-center w-64">
              <FaFolder size={30} className="mb-2 text-gray-900" />
              <p className="text-lg font-semibold text-gray-900">Create New Workspace</p>
              <p className="text-sm text-gray-800">Join a workspace</p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="bg-gradient-to-b from-green-300 to-blue-500 p-6 rounded-2xl shadow-lg text-center w-64">
              <FaHourglass size={30} className="mb-2 text-gray-900" />
              <p className="text-lg font-semibold text-gray-900">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;