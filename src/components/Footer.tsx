import React, { FC } from "react";
import { Box, Grid, ListItemText, Typography } from "@mui/material";
import List from "@mui/material/List";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
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
          <Typography variant="h6" gutterBottom>
            About <b style={{ color: "red" }}>us</b>
          </Typography>
          <Typography variant="body2" gutterBottom>
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
          <Typography variant="h6" gutterBottom>
            Information
          </Typography>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="body2">
                About us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="body2">
                Privacy & Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="body2">
                Terms & Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
