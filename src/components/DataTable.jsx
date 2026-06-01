import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { deleteUser } from "../features/tableSlice";

function DataTable() {
  const users = useSelector((state) => state.table.data);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.city.toLowerCase().includes(search.toLowerCase())
  );  
console.log("Users from Redux:", users);
  return (
    <div>
      <h2>User List</h2>
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
            <th>Phone</th>
            <th>Action</th>

            
          </tr>
        </thead>

        <tbody>
           {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.city}</td>
              <td>{user.phone}</td>
              <td>
                <button
                         onClick={() => dispatch(deleteUser(user.id))}
                >
                    Delete
                </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;