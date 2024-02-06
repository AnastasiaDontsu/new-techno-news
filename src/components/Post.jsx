import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import { Grid } from "@mui/material";
function Post() {
  const [news, setNews] = useState([]);

  const getNews = () => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=d663e9163be646dca11260deb7743314"
    )
      .then((res) => res.json())
      .then((json) => setNews(json.articles));
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div>
      <Grid container spacing={2}>
        {news.map((data, index) => (
          <Grid item xs={3} key={index}>
            <NewsCard data={data} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Post;
