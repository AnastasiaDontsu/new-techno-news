import React, { useEffect, useState } from "react";
import Published from "../Pages/Published";
import { Grid, Container, Typography } from "@mui/material";

interface NewPublishedProps {
  title: string;
  urlToImage: string;
  url: string;
}

function NewPublished() {
  const [news, setNews] = useState<NewPublishedProps[]>([]);

  const getNews = () => {
    fetch(
      `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=9acbff4c96d64f10981243ce862345b3`
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
          All articles published by TechCrunch and The Next Web
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
              <Published data={data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default NewPublished;
