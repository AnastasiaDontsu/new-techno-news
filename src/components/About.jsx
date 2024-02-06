import React from "react";
import {
  Button,
  Container,
  Typography,
  Grid,
  TextField,
  Box,
  Card,
  CardContent,
} from "@mui/material";
import Lottie from "lottie-react";
import animationData from "../Image/Animation - 1707250465026 (1).json";
export default function About() {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#f5f5f5", height: "100vh" }}>
      <Box display="flex" flexDirection="column" height="100%">
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
              <Card sx={{ height: "40vh" }}>
                <CardContent>
                  <Lottie animationData={animationData} />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
