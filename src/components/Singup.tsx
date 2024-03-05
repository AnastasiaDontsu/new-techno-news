import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  Link,
  Paper,
  Container,
  Stack,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useNavigate } from "react-router-dom";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
interface ImageFile extends File {
  readonly preview: string;
}

const Singup = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState<ImageFile | null>(null);

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "The following values are mandatory for registering : ";

    if (!name) {
      isproceed = false;
      errormessage += "name ";
    }
    if (!lastname) {
      isproceed = false;
      errormessage += "lastname ";
    }
    if (!email) {
      isproceed = false;
      errormessage += "email";
    }
    if (!password) {
      isproceed = false;
      errormessage += " password";
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
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const inputRef = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files && files.length > 0) {
      const file = files[0] as ImageFile;
      console.log(file);
      setImage(file);
    }
  };

  return (
    <>
      <Container
        component="main"
        maxWidth="xl"
        sx={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1496096265110-f83ad7f96608?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          display="flex"
          justifyContent={"senter"}
          flexDirection={"column"}
          maxWidth={500}
          alignItems="senter"
          borderRadius={5}
          padding={2}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            backgroundColor: "#ffffff",
            ":hover": {
              boxShadow: "10px 10px 10px #ccc",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: 20,
              textAlign: "center",
              padding: "10px",
              fontFamily: "'Playfair Display SC', serif",
            }}
          >
            Registration
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid xs={12} sm={6} item>
                <TextField
                  value={name}
                  onChange={(e) => setName(e.target.value)}
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
                  sx={{ display: "block" }}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
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
              <Grid xs={12} sm={6} item>
                <TextField
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
              <Grid xs={12} sm={6} item>
                <TextField
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  onChange={(e) => setPhone(e.target.value)}
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
                sx={{ textAlign: "center", marginTop: "-50px" }}
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
        </Box>
      </Container>
    </>
  );
};

export default Singup;
