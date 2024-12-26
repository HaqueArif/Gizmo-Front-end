/* eslint-disable react/prop-types */
import { useState } from "react";

const DeleteUser = ({ user, onClose, refetch }) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true); // Indicate that the delete operation is in progress
    try {
      const response = await fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("User deleted successfully!");
        refetch(); // Refetch the users after deletion
        onClose(); // Close the modal
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete the user. Please try again.");
    } finally {
      setIsDeleting(false); // Stop loading state
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Delete User</h2>
      <p className="mb-4">
        Are you sure you want to delete the user {user.name}?
      </p>
      <div className="flex space-x-2">
        <button
          className="btn btn-danger"
          onClick={handleDelete}
          disabled={isDeleting} // Disable the button while deleting
        >
          {isDeleting ? "Deleting..." : "Delete User"}
        </button>
        <button
          className="btn btn-secondary"
          onClick={onClose}
          disabled={isDeleting} // Disable the button while deleting
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteUser;
