import React, { useState } from "react";
import { Link } from "react-router-dom";
//for form
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Card sx={{ maxWidth: 600 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }}>Word of the Day</Typography>
          <form>
            <Grid container spacing={3}>
              <Grid xs={8} sm={6} item>
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
              </Grid>
              <Grid xs={8} sm={6} item>
                <TextField
                  id="outlined-basic"
                  label="Last name"
                  variant="outlined"
                />
              </Grid>
              <Grid xs={8} sm={6} item>
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
              </Grid>
              <Grid xs={8} sm={6} item>
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
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default Login;
