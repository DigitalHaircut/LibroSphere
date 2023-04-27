import { Box, Typography, Link, TextField, Button, Alert } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../contexts/auth/AuthContext";
import { useAuth } from "../hooks/useAuth";
import { useForm } from "../hooks/useForm";
import { myBooks } from "../services/book";
import { headers } from "../services/utils";

export default function () {
  const { formValues, registerField } = useForm({
    email: "",
    password: "",
  });

  const [serverError, setServerError] = useState("");

  function onSubmit(event) {
    event.preventDefault();
    
    console.log(formValues);
    setServerError("");

    myBooks().then((books) => {
      console.log("Sunt logat, cartile sunt umratoarele:");
      console.log(books);
    }).catch((error) => {
      console.log("Nu sunt logat, eroarea este urmatoarea");
      console.log(error);
    });

    login(formValues).catch((error) => {
      setServerError(error);
    });
  }

  return (
    <Box className="flexCenter" sx={{ mt: 11 }}>
      <Typography variant="h4"> Sign in </Typography>
      
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

        {serverError && (
          <Alert severity="error">{serverErrorx}</Alert>
        )}

        <Button sx={{ my: 2 }} type="submit" variant="contained" fullWidth>
          Sign In
        </Button>

        <Link component={NavLink} to="/register" variant="body1">
          Don't have an account? Sign Up
        </Link>

      </Box>
    </Box>
  );
}

