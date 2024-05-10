import React from "react";
import {
  Typography,
  Box,
  Container,
  styled,
  Stack,
  CardContent,
} from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Coments from "../components/Coments";
import { motion } from "framer-motion";

const StyledLink = styled(Link)({
  color: "black", // Set color to black
  textDecoration: "none", // Remove underlining
  "&:hover": {
    textDecoration: "none", // Remove underlining on hover
  },
});
const StyledBox = styled(Box)({
  height: 300,
  width: "100%",
  cursor: "pointer",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover",
});

const StyledTypography = styled(Typography)({
  margin: "25% 50px 25% 50px",
  background: "white",
  opacity: "0.8",
});

export default function Home() {
  return (
    <Container maxWidth="xl">
      <Box>
        <Typography
          align="center"
          variant="h3"
          sx={{ padding: "4%", marginTop: "5%" }}
        >
          Techno<span style={{ color: "red" }}>blog</span>
        </Typography>
        <Box
          sx={{
            backgroundImage: `url("https://images.unsplash.com/photo-1535378620166-273708d44e4c?q=80&w=2157&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundRepeat: "no-repeat",
            backgroundColor: "black",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: 650,
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "50%", md: "40%" },
              padding: { xs: 3, sm: 2, md: 20 },
            }}
          >
            <Box sx={{ background: "white", opacity: 0.4 }}>
              <Typography variant={"h6"} color="tomato" align="center" pt={8}>
                The future is in your hands
              </Typography>
              <Typography variant="h4" align="center">
                The most popular technology news!
              </Typography>
              <Typography variant="body1" align="center" pb={8}>
                Popular and interesting
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 2, md: 4 }}
              mt={6}
            >
              <StyledBox
                sx={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1641580529558-a96cf6efbc72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                }}
              >
                <StyledTypography align="center" variant="h3">
                  <StyledLink to="/BitcoinNews">Bitcoin</StyledLink>
                </StyledTypography>
              </StyledBox>

              <StyledBox
                sx={{
                  backgroundImage: `url("https://images.unsplash.com/photo-1459550146610-232100af5511?q=80&w=2135&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
                }}
              >
                <StyledTypography align="center" variant="h3">
                  <StyledLink to="/AppleNews">Apple</StyledLink>
                </StyledTypography>
              </StyledBox>
              <StyledBox
                sx={{
                  backgroundImage: `url("https://headerbidding.co/wp-content/uploads/2019/10/Becoming-TechCrunch.webp")`,
                }}
              >
                <StyledTypography align="center" variant="h3">
                  <StyledLink to="/New published">New article</StyledLink>
                </StyledTypography>
              </StyledBox>
            </Stack>
          </Box>
        </Box>
        <Box>
          <motion.div
            className="animatable"
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3, ease: "easeInOut" }, // Add transition property
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Typography
              align="center"
              variant="h2"
              sx={{ fontWeight: 900 }}
              m={2}
            >
              comments for <b style={{ color: "red" }}>you</b>
            </Typography>
          </motion.div>
        </Box>
        <Box>
          <Stack spacing={2}>
            <CardContent>
              <Coments />
            </CardContent>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
