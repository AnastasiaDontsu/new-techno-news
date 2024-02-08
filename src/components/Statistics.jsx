import { Box, Grid, Card, CardContent, Typography } from "@mui/material";

import React from "react";
import Chart from "utils/Chart";
import PieChart from "utils/PieChart";
import Gauge from "utils/Gauge";
import CustomAccordion from "utils/CustomAccordion";
import { Container, Stack } from "@mui/system";
import { Link } from "react-router-dom";
export default function Statistics() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        bgcolor: "#f5f5f5",
        height: "100vh",
      }}
    >
      <Box display={"flex"}>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Card sx={{ height: "40vh" }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      textAlign: "center",
                      fontFamily: "'Playfair Display SC', serif",
                    }}
                  >
                    Global Electric Vehicle Sales
                    <br /> and Electric Vehicle Statistics
                  </Typography>
                  <Chart />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ height: "40vh" }}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <PieChart />
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={8}>
              <Stack spacing={2}>
                <Card sx={{ minWidth: "58%", height: 400 }}>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      textAlign: "center",
                      fontFamily: "'Playfair Display SC', serif",
                      padding: "10",
                    }}
                  >
                    Global gasoline consumption in different countries
                  </Typography>
                  <CardContent>
                    <Gauge />
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ minWidth: "58%", height: 400 }}>
                  <CardContent>
                    <CustomAccordion />
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
