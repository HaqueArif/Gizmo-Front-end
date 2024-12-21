import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen overflow-hidden">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
