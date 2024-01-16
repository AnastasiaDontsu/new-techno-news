import React, { useState, useRef } from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Button from "@mui/material/Button";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Box from "@mui/material/Box";
import "../styles/Login.scss";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const inputRef = useRef(null);
  const [image, setImage] = useState("");
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      console.log(file);
      setImage(file);
    }
  };

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: "#e0e0e0",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            maxWidth: 450,
            margin: "0 auto",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            padding: "20px 5px",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 20, textAlign: "center", padding: "30px" }}
            >
              Registration
            </Typography>
            <form>
              <Grid container spacing={4}>
                <Grid xs={12} md={6} item>
                  <TextField
                    label="Name"
                    variant="outlined"
                    id="input-with-icon-adornment"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <AccountCircleIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid xs={12} md={6} item>
                  <TextField
                    label="Last name"
                    variant="outlined"
                    id="outlined-basic"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <AccountBoxIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid xs={12} md={6} item>
                  <TextField
                    label="Email"
                    variant="outlined"
                    id="outlined-basic"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid xs={12} md={6} item>
                  <TextField
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid xs={12} md={6} item>
                  <TextField
                    label="Phone"
                    variant="outlined"
                    id="outlined-basic"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <PhoneEnabledIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Box
                  onClick={handleImageClick}
                  sx={{
                    borderRadius: "5%", // Необязательно: если вы хотите сделать изображение круглым
                    cursor: "pointer",
                    overflow: "hidden",
                  }}
                >
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Remy"
                      style={{
                        width: "200px",
                        height: "112.5px",
                        objectFit: "contain",
                        objectPosition: "center top",
                      }}
                    />
                  ) : (
                    <img
                      src="https://img.freepik.com/premium-vector/female-user-profile-avatar-is-a-woman-a-character-for-a-screen-saver-with-emotions_505620-617.jpg"
                      alt="Remy"
                      style={{
                        width: "200px",
                        height: "112.5px",
                        objectFit: "contain",
                        objectPosition: "center top",
                      }}
                    />
                  )}
                  <input
                    type="file"
                    ref={inputRef}
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                  ></input>
                </Box>

                <Grid xs={12} item sx={{ textAlign: "center" }}>
                  <Button variant="contained" color="success">
                    Success
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Login;
