import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container, Card, Box, Typography } from "@mui/material";

const DataTable = ({ rows, columns }) => {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#e0e0e0", minHeight: "100vh" }}>
      <Box
        sx={{
          p: 2,
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            pb: 2,
            textAlign: "center",
            fontFamily: "'Playfair Display SC', serif",
          }}
        >
          Users table
        </Typography>
        <Card sx={{ width: "70%", height: "90%", p: 2 }}>
          <DataGrid rows={rows} columns={columns} />
        </Card>
      </Box>
    </Container>
  );
};

export default DataTable;
