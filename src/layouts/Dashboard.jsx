import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar is open by default

  // Handler to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="h-screen">
      <div
        className={`relative ${
          isSidebarOpen ? "left-0" : "-left-[265px]"
        } transition-all duration-500`}
      >
        {/* Pass the sidebar state to the Sidebar component */}
        <Sidebar isOpen={isSidebarOpen} />
      </div>

      {/* Button to toggle sidebar visibility */}
      <button
        className={`p-1 rounded-lg bg-gray-500 absolute z-10 ${
          isSidebarOpen ? "top-3 left-52" : "top-3 left-4"
        } transition-all duration-500`}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Content area */}
      <div className=" h-full overflow-y-scroll pt-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
