import React, { FC } from "react";
import { Box, CardMedia, CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

interface NewsData {
  title: string;
  urlToImage: string;
}

interface NewsCardProps {
  data: NewsData;
}

const NewsCard: FC<NewsCardProps> = ({ data }) => {
  console.log(data);

  return (
    <Box>
      <Card>
        <CardMedia height="200" component="img" image={data.urlToImage} />
        <CardContent>
          <Typography sx={{ fontWeight: "bold" }}>{data.title}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default NewsCard;
