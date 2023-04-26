import { Box, Typography, Link, TextField, Button } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "../hooks/useForm";

export default function () {
  const{ formValues, registerField } = useForm({
    email: "",
    password: "",
  })

  function onSubmit(event) {
    event.preventDefault();

    console.log(formValues);

    login(formValues).then{() => }
  }

  return (
    <Box className="flexCenter" sx={{ mt: 12 }}>
      <Typography variant="h5"> Sign in </Typography>
      <Typography variant="body1">
        or{" "}
        <Link component={NavLink} to="/">
          explore the app
        </Link>

      </Typography>      
      <Box component="form" onSubmit={onSubmit} sx={{ mt: 2 }}>

        <TextField 
          {...registerField("email")} 
          label="Email" 
          fullWidth 
          margin="normal" 
          type="email"
          required
        />

        <TextField 
          {...registerField("password")}
          label="Password" 
          fullWidth 
          margin="normal" 
          type="password"
          required
        />

        <Button sx={{ my: 2 }} type="submit" variant="contained" fullWidth> 
          Sign in 
        </Button>
      
        <Link component={NavLink} to="/register" variant="body1">
          Don't have an account? Sign up
        </Link>

      </Box>
    </Box>
  );
}

