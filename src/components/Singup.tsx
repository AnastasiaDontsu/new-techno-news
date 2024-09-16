import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Button,
  Typography,
  Grid,
  TextField,
  IconButton,
  InputAdornment,
  Box,
  Link,
  Container,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { useNavigate } from "react-router-dom";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { auth } from "../firebase";

import { signOut } from "firebase/auth";

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
  const defaultTheme = createTheme();

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

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("Logout successful");
        navigate("/Sing-in"); // Redirect to login page or home page after logout
      })
      .catch((error) => {
        // An error happened.
        toast.error("Failed to logout: " + error.message);
      });
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
    <ThemeProvider theme={defaultTheme}>
      <Box>
        <Container
          component="main"
          maxWidth="sm"
          sx={{
            marginTop: 10,
            marginBottom: 30,
            paddingTop: 4,
            paddingBottom: 4,
          }}
        >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Sing up
            </Typography>
            <form onSubmit={handleSubmit}>
              <Box
                onClick={handleImageClick}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",

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
                      width: "250px",
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

              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12} sm={6}>
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
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: 3,
                      marginBottom: 2,
                    }}
                  >
                    <Button type="submit" variant="contained" sx={{ mr: 2 }}>
                      Sign up
                    </Button>
                    <Button
                      onClick={handleLogout}
                      variant="contained"
                      color="secondary"
                    >
                      Logout
                    </Button>
                  </Box>
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
      </Box>
    </ThemeProvider>
  );
};

export default Singup;
