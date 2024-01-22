import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import DataTable from "utils/DataTable";

export default function User() {
  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);

  return (
    <Box>
      <DataTable rows={rows} columns={columns} />
    </Box>
  );
}
