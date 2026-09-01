import { useEffect, useState } from "react";

import api from "../api/axios";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function UserList() {
const [users, setUsers] = useState([]);

const fetchUsers = async () => {
try {
const res = await api.get("/users");

  console.log("Users:", res.data);

  setUsers(res.data);
} catch (error) {
  console.log("Error:", error);
}

};

useEffect(() => {
fetchUsers();
}, []);

return (
<div>
<h1>Users CRUD</h1>

  <DataTable
    value={users}
    showGridlines
    stripedRows
    paginator
    rows={5}
    size="small"
  >
    <Column
      header="Name"
      body={(rowData) => rowData.name}
    />

    <Column
      field="username"
      header="UserName"
    />

    <Column
      field="email"
      header="Email"
    />

    <Column
      field="age"
      header="Age"
    />
  </DataTable>
</div>

);
}