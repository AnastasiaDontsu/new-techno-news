import React, { useEffect, useState } from "react";
import BitcoinCard from "../Pages/BitcoinCard";
import { Grid, Container, Typography } from "@mui/material";

interface BitcoinNewsProps {
  title: string;
  urlToImage: string;
  url: string;
}

function BitcoinNews() {
  const [news, setNews] = useState<BitcoinNewsProps[]>([]);

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
          Current news about Bitcoin
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{
            padding: { xs: 2, sm: 3 }, // Adjust padding for different screen sizes
            marginBottom: "20px",
          }}
        >
          {news.map((data, i) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={i}>
              <BitcoinCard data={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default BitcoinNews;
