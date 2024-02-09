import React from "react";
import { Box, CardMedia, CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

export default function BitcoinCard({ data }) {
  console.log(data);

  return (
    <>
      <Box>
        <Card>
          <CardMedia height="300" component="img" image={data.urlToImage} />
          <CardContent>
            <Typography sx={{ fontWeight: "bold" }}>{data.title}</Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
