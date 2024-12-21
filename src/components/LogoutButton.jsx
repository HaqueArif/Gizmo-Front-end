import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear token and user data
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Optionally show a success message
    toast.success("Logged out successfully!");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <button onClick={handleLogout} className="btn btn-danger">
      Logout
    </button>
  );
};

export default LogoutButton;
