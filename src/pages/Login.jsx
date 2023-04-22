import { Box, Typography, Link, TextField, Button } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm } from "../hooks/useForm";

export default function () {
  const{ formValues, registerField } = useForm({
    email: "",
    password: "",
  })

  function onSubmit(event){
    console.log(formValues);

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
          {...registerField("Password")}
          label="Password" 
          fullWidth 
          margin="normal" 
          type="password"
          required
        />

        <Button type="submit" variant="contained"> 
          Sign in 
        </Button>
        <br/>
      
        <Link component={NavLink} to="/register" c>
          Don't have an account? Sign up
        </Link>

      </Box>
    </Box>
  );
}

