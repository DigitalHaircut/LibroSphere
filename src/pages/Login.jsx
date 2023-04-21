
import { Box, Typography, Link, TextField } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function SignIn() {
  return (
    <Box className="flexCenter" sx={{ mt: 4 }}>
      <Typography variant="h5"> Sign in </Typography>
      <Typography variant="body1">
        or{" "}
        <Link component={NavLink} to="/">
          explore the app
        </Link>
      </Typography>
      <Box component="form" sx={{ mt: 2 }}>
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Password" fullWidth margin="normal" />
      </Box>
    </Box>
  );
}
