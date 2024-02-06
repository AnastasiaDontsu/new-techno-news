import React, { useState, useEffect } from "react";

import DataTable from "../utils/DataTable";

export default function User() {
  const [user, setUser] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "username", headerName: "Username", width: 200 },
    { field: "email", headerName: "Email", width: 200 },
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  return <DataTable rows={user} columns={columns} loading={!user.length} />;
}
