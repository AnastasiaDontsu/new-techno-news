import React, { useEffect, useState } from "react";
import AppleCard from "../Pages/AppleCard";
import { Grid, Container, Typography } from "@mui/material";

interface AppleNewsProps {
  title: string;
  urlToImage: string;
  url: string;
}

function AppleNews() {
  const [news, setNews] = useState<AppleNewsProps[]>([]);

  const getNews = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=apple&from=2024-03-01&to=2024-03-01&sortBy=popularity&apiKey=9acbff4c96d64f10981243ce862345b3`
    )
      .then((res) => res.json())
      .then((json) => setNews(json.articles.slice(3, 15)));
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h5"
          component="div"
          sx={{
            textAlign: "center",
            fontFamily: "'Playfair Display SC', serif",
            padding: "10px",
          }}
        >
          Current news about Apple
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            padding: { xs: 2, sm: 3 },
            marginBottom: "20px",
          }}
        >
          {news.map((data, i) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={i}>
              <AppleCard data={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default AppleNews;
