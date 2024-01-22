import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import DataTable from "../utils/DataTable";

export default function User() {
  const [user, setUser] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "username", headerName: "Username", width: 150 },
    { field: "email", headerName: "Email", width: 150 },
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUser(json));
  }, []);

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataTable rows={user} columns={columns} loading={!user.length} />
    </Box>
  );
}
