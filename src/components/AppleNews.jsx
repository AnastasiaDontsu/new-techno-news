import React, { useEffect, useState } from "react";
import AppleCard from "Pages/AppleCard";
import { Grid, Container, Typography } from "@mui/material";

function AppleNews() {
  const [news, setNews] = useState([]);

  const getNews = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=apple&from=2024-01-18&to=2024-01-18&sortBy=popularity&apiKey=d663e9163be646dca11260deb7743314`
    )
      .then((res) => res.json())
      .then((json) => setNews(json.articles.slice(2, 14)));
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
          Сurrent news about Apple
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            padding: { xs: 2, sm: 3 },
            marginBottom: "20px",
          }}
        >
          {news.map((data) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={data.url}>
              <AppleCard data={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default AppleNews;
