import React from "react";
import { Box, Grid, ListItemText, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { FooterCard } from "Pages/FooterCard";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "black",
        color: "white",
        p: { xs: 4, md: 7 },
        pt: 8,
        pb: 8,
        fontSize: { xs: "12px", md: "15px" },
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8} sm={9}>
          <FooterCard variant="body1">
            About<b style={{ color: "red" }}>us</b>
          </FooterCard>
          <Typography variant="caption2">
            Technology future interesting new products
          </Typography>
          <Box
            sx={{
              mt: 2,
              color: "gray",
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <InstagramIcon sx={{ mr: 1 }} />
            <WhatsAppIcon sx={{ mr: 1 }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={2}>
          {" "}
          {/* Adjusted grid sizing for smaller screens */}
          <FooterCard variant="body1">Information</FooterCard>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy & Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms & Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
