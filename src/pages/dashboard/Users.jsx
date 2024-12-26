import { Edit, Trash } from "lucide-react";
import useGetAllUsers from "../../components/hooks/useGetAllUsers";
import Container from "../../components/Shared/Container";
import { useState } from "react";
import UpdateUser from "../../components/handler/updateUser";
import DeleteUser from "../../components/handler/deleteUser";

const Users = () => {
  const { users, loading, error, refetch } = useGetAllUsers();
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalAction, setModalAction] = useState(null);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setModalAction("update"); // Set action to "update" when edit button is clicked
  };

  const handleDelete = (user) => {
    setSelectedUser(user);
    setModalAction("delete"); // Set action to "delete" when delete button is clicked
  };

  const handleClose = () => {
    setSelectedUser(null);
    setModalAction(null); // Reset modal state when closing the modal
  };

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <Container>
      <div>
        <h1>Users</h1>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <div className="overflow-x-scroll ">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Name</th>
                  <th className="">Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {/* row 1 */}
                {users.map((user) => (
                  <tr key={user.id}>
                    <td className="px-0 sm:px-4">
                      <div className="flex items-center md:gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              alt="Tailwind CSS Navbar component"
                              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold text-[10px] md:text-sm">
                            {user.name}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-[10px] md:text-sm">{user.email}</td>
                    <td className="px-0 sm:px-4 text-[10px] md:text-sm flex justify-center items-center gap-2">
                      ${user.role}{" "}
                      <button
                        onClick={() => handleEdit(user)}
                        className="btn btn-sm"
                        title="Edit Role"
                      >
                        <Edit width={20} />
                      </button>{" "}
                    </td>
                    <td className="px-0 sm:px-4 text-[10px] md:text-sm">
                      <button
                        onClick={() => handleDelete(user)}
                        className="btn btn-sm"
                        title="Delete User"
                      >
                        <Trash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
            </table>
          </div>
        )}
        {selectedUser && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg">
              {modalAction === "update" && (
                <UpdateUser
                  user={selectedUser}
                  onClose={handleClose}
                  refetch={refetch}
                />
              )}
              {modalAction === "delete" && (
                <DeleteUser
                  user={selectedUser}
                  onClose={handleClose}
                  refetch={refetch}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Users;
