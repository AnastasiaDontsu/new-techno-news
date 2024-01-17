import { Container, Box, Stack, display } from "@mui/system";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import React from "react";

export default function Feeds() {
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: "#e0e0e0",
          height: "100vh",
        }}
      >
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Box sx={{ display: "flex" }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={3}>
                  <Card sx={{ maxWidth: 40 + "%", height: 200 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                  <Card sx={{ maxWidth: 40 + "%", height: 200 }}>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Lizard
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles,
                        with over 6,000 species, ranging across all continents
                        except Antarctica
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Share</Button>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <Card sx={{ height: 60 + "vh" }}>
                    <CardContent></CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
