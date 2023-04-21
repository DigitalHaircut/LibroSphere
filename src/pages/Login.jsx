import { Box, Typography, Link } from "@mui/material";
import { Navlink } from "react-router-dom";

export default function () {
  return (
    <Box class="flexCenter">
      <Typography variant="h5"> Sign in </Typography>
      <Typography variant="body1">
        or{" "}
        <Link component={Navlink} to="/">
          explore the app
        </Link>
      </Typography>
    </Box>
  );
}
