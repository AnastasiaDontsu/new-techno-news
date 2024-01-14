import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box } from "@mui/material";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

const Data = [
  {
    id: 1,
    title: "Shrimp and Chorizo Paella",
    subheader: "September 14, 2016",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    img: "https://res.55opt.org/webp/d/i05re20dlqzdy0a_300.webp",
  },
  {
    id: 2,
    title: "Shrimp and Chorizo Paella",
    subheader: "September 14, 2016",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    img: "https://res.55opt.org/webp/d/i05re20dlqzdy0a_300.webp",
  },
  {
    id: 3,
    title: "Shrimp and Chorizo Paella",
    subheader: "September 14, 2016",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    img: "https://res.55opt.org/webp/d/i05re20dlqzdy0a_300.webp",
  },
  {
    id: 4,
    title: "Shrimp and Chorizo Paella",
    subheader: "September 14, 2016",
    description:
      "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    img: "https://res.55opt.org/webp/d/i05re20dlqzdy0a_300.webp",
  },
];

export default function RecipeReviewCard() {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#e0e0e0" }}>
      <Box
        p={3}
        flex={3}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Grid container spacing={4}>
          {Data.map((result, index) => (
            <Grid key={index} item>
              <Box p={7} flex={8}>
                <Card sx={{ borderRadius: 1, maxWidth: 800, maxHeight: 900 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                      </Avatar>
                    }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon />
                      </IconButton>
                    }
                    title={result.title}
                    subheader={result.subheader}
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={result.img}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography variant="body2" color="text.secondary">
                      {result.description}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
