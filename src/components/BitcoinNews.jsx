import React, { useEffect, useState } from "react";
import BitcoinCard from "../utils/BitcoinCard";
import { Grid, Container, Typography } from "@mui/material";

function BitcoinNews() {
  const [news, setNews] = useState([]);

  const getNews = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=d663e9163be646dca11260deb7743314`
    )
      .then((res) => res.json())
      .then((json) => setNews(json.articles.slice(0, 12)));
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: "#e0e0e0",
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
          Сurrent news about Bitcoin
        </Typography>
        <Grid
          container
          spacing={2}
          style={{ padding: "10px", marginBottom: "20px" }}
        >
          {news.map((data) => (
            <Grid item xs={12} sm={4} md={4} lg={4} key={data.url}>
              <BitcoinCard data={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default BitcoinNews;
