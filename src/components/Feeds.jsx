import {
  Container,
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import Chart from "Pages/Chart";

export default function Feeds() {
  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Chart />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
