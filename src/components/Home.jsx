import React from "react";
import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "./Slider";
export default function Home() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "beach",
    },
    {
      url: "https://images.unsplash.com/photo-1525540810550-5032f5d191b1?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "boat",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1661727547850-3d7c020a64a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "forest",
    },
    {
      url: "https://images.unsplash.com/photo-1581087725018-45eb42ace6eb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "city",
    },
    {
      url: "https://images.unsplash.com/photo-1581090016743-0791caf50d31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "italy",
    },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        height: "100vh",
      }}
    >
      <Box>
        <Typography align="center" variant="h2" sx={{ fontWeight: 900 }}>
          Techno<b style={{ color: "red" }}>blog</b>
        </Typography>
        <Box
          sx={{
            backgroundImage: `url("https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=2157&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "black",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: 650,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "50%", md: "40%" },
              padding: { xs: 3, sm: 2, md: 20 },
            }}
          >
            <Box sx={{ background: "white", opacity: 0.4 }}>
              <Typography variant={"h6"} color="tomato" align="center" pt={8}>
                Trending Styles
              </Typography>
              <Typography variant="h4" align="center">
                Life is Boring without Fashion!
              </Typography>
              <Typography variant="body1" align="center" pb={8}>
                we love to change your style lorme ipsum
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box></Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={4} justifyContent="end">
            <Grid item xs={12} sm={8} md={4}>
              <Card sx={{ height: "35vh" }}>
                <CardContent>
                  <div style={containerStyles}>
                    <Slider slides={slides} />
                  </div>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
