import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

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
      {news.map((data) => {
        return <NewsCard data={data} />;
      })}
    </div>
  );
}

export default Post;
