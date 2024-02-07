import React, { useState, useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Singup = () => {
  const [name, namechange] = useState("");
  const [lastname, lastnamechange] = useState("");
  const [email, emailchange] = useState("");
  const [password, passwordchange] = useState("");
  const [phone, phonechange] = useState("");
  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "The following values are mandatory for registering : ";

    if (name === null || name === "") {
      isproceed = false;
      errormessage += "name ";
    }
    if (lastname === null || lastname === "") {
      isproceed = false;
      errormessage += "lastname ";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += "email";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += " password";
    }
    if (phone === null || phone === "") {
      isproceed = false;
      errormessage += " phone";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    } else {
      if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
      } else {
        isproceed = false;
        toast.warning("Please enter the valid email");
      }
    }
    return isproceed;
  };

  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    const showobj = { name, lastname, email, password, phone };
    console.log(showobj);
    if (IsValidate()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Handle successful sign-up here
          console.log(userCredential);
          toast.success("Registration successful");
          navigate("/Home");
        })
        .catch((error) => {
          // Handle sign-up errors here
          console.log(error);
          toast.error("Failed to register: " + error.message);
        });
    }
  };
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
          bgcolor: "#f5f5f5",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          sx={{
            maxWidth: 450,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 20, textAlign: "center", padding: "30px" }}
            >
              Registration
            </Typography>
            <form onSubmit={handlesubmit}>
              <Grid container spacing={4}>
                <Grid xs={12} md={6} item>
                  <TextField
                    value={name}
                    onChange={(e) => namechange(e.target.value)}
                    label="Name"
                    variant="outlined"
                    id="name"
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
                    value={lastname}
                    onChange={(e) => lastnamechange(e.target.value)}
                    label="Last name"
                    variant="outlined"
                    id="lastname"
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
                    value={email}
                    onChange={(e) => emailchange(e.target.value)}
                    label="Email"
                    variant="outlined"
                    id="email"
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
                    value={password}
                    onChange={(e) => passwordchange(e.target.value)}
                    id="password"
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
                    value={phone}
                    onChange={(e) => phonechange(e.target.value)}
                    label="Phone"
                    variant="outlined"
                    id="phone"
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
                    borderRadius: "5%",
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

                <Grid
                  xs={12}
                  item
                  sx={{ textAlign: "center", marginTop: "-30px" }}
                >
                  <Button
                    sx={{ backgroundColor: "success.main" }}
                    type="submit"
                    variant="contained"
                  >
                    Sign-up
                  </Button>
                </Grid>
              </Grid>
              <Grid sx={{ textAlign: "center", padding: "15px" }} item>
                <Link href="Sing-in" variant="body2">
                  {"Don't have an account? Sing in"}
                </Link>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default Singup;
