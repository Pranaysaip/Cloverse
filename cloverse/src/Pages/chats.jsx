import React, { useState } from "react";
import { FaUserPlus, FaSearch, FaComments } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import cloverseLogo from "/src/assets/cloverse-logo.png";
import "./Chats.css";

const Chats = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [chatList, setChatList] = useState([
    "Alice", "Bob", "Charlie", "David", "Eve"
  ]);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar Navigation */}
      <Sidebar />
      
      {/* Chat Section */}
      <div className="flex-1 flex flex-col p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          {/* Title with Icon */}
          <div className="flex items-center space-x-2">
            <FaComments size={30} className="text-green-400" />
            <h2 className="text-2xl font-bold">Chats</h2>
          </div>
          
          {/* CLOVERSE Logo Button */}
          <button onClick={() => navigate("/signin")}>
            <img src={cloverseLogo} alt="Cloverse Logo" className="h-10 cursor-pointer" />
          </button>
        </div>
        
        <div className="flex flex-1">
          {/* Chat List Section */}
          <div className="w-1/4 bg-gray-800 p-4 rounded-lg overflow-y-auto">
            {/* Search Bar */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            {/* Chat List */}
            <div className="space-y-3">
              {chatList.filter(name => name.toLowerCase().includes(searchTerm.toLowerCase())).map((name, index) => (
                <div 
                  key={index} 
                  className="p-3 bg-gray-700 hover:bg-green-500 rounded-lg cursor-pointer flex items-center justify-between transition duration-300"
                  onClick={() => navigate(`/chat/${name}`)}
                >
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Centered Search and Invite Buttons */}
          <div className="flex-1 flex justify-center items-center space-x-6">
            <button className="p-4 bg-green-600 hover:bg-green-500 rounded-lg flex items-center space-x-2">
              <FaUserPlus size={20} />
              <span>Invite New Friend</span>
            </button>
            <button className="p-4 bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center space-x-2">
              <FaSearch size={20} />
              <span>Search by UserID</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
