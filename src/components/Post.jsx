import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Post() {
  const data = [
    {
      name: "2018",
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: "2019",
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: "2020",
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: "2021",
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: "2022",
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: "2023",
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];

  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: "#e0e0e0",
          height: "100vh",
          position: "relative",
          "@media (max-width: 600px)": {
            padding: "10px",
            fontSize: "16px",
          },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textAlign: "center",
            marginTop: "5vh",
            position: "absolute",
            left: "22%",
            transform: "translateX(-50%)",
            fontFamily: "'Playfair Display SC', serif",
          }}
        >
          Global Electric Vehicle Sales
          <br /> and Electric Vehicle Statistics
        </Typography>
        <Box>
          <ResponsiveContainer width="100%" aspect={3}>
            <ComposedChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 200,
                right: 80,
                bottom: 20,
                left: 20,
              }}
            >
              <XAxis
                dataKey="name"
                label={{
                  position: "insideBottomRight",
                  offset: 0,
                }}
                scale="band"
              />
              <YAxis
                label={{ value: "Index", angle: -90, position: "insideLeft" }}
              />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey="amt"
                fill="#616161"
                stroke="#8884d8"
              />
              <Bar dataKey="pv" barSize={20} fill="#b71c1c" />
              <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
          </ResponsiveContainer>
        </Box>
      </Container>
    </React.Fragment>
  );
}
