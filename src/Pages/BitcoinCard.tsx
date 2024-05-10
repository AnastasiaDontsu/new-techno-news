import React from "react";
import { Box, CardMedia, CardContent, Link, Typography } from "@mui/material";
import Card from "@mui/material/Card";

interface BitcoinCardProps {
  data: {
    title: string;
    urlToImage: string;
    url: string;
  };
}

const BitcoinCard: React.FC<BitcoinCardProps> = ({ data }) => {
  return (
    <Box>
      <CardMedia component="img" height="250" image={data.urlToImage} />
      <CardContent>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {data.title}
        </Typography>
        <Typography>
          <Link href={data.url} target="_blank" rel="noopener noreferrer">
            Read more
          </Link>
        </Typography>
      </CardContent>
    </Box>
  );
};

export default BitcoinCard;
