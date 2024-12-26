/* eslint-disable react/prop-types */
import { useState } from "react";

const UpdateUser = ({ user, onClose, refetch }) => {
  const [role, setRole] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:5000/users/${user._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ role }),
      });

      if (response.ok) {
        alert("User role updated successfully!");
        refetch();
        onClose(); // Close the modal
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error updating user role:", error);
      alert("Failed to update the user role. Please try again.");
    }
  };

  // Available roles excluding the current role
  const roles = ["buyer", "seller", "admin"].filter((r) => r !== user.role);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Update User Role</h2>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="select select-bordered w-full"
            required
          >
            <option value="" disabled>
              Select a new role
            </option>
            {roles.map((roleOption) => (
              <option key={roleOption} value={roleOption}>
                {roleOption.charAt(0).toUpperCase() + roleOption.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">
          Update Role
        </button>
        <button
          type="button"
          onClick={onClose}
          className="btn btn-secondary ml-2"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
